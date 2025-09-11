// @ts-nocheck
import FileSaver from 'file-saver';
import * as S3Service from 'services/s3';
import fetchFileOnLocalFileSystem from 'services/fetchFileOnLocalFileSystem';

describe('fetchFileOnLocalFileSystem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls getObject with success response', () => {
    // Mocking method createObjectURL because it's not available by default and "FileSaver" needs it
    Object.defineProperty(global.URL, 'createObjectURL', {
      writable: true,
      value: jest.fn(() => 'mock-blob-url')
    });

    const getObjectSpy = jest.spyOn(S3Service, 'getObject').mockImplementation((_key, _bucket, responseHandler) => {
      const binaryData = Buffer.from('binary-fake-data', 'utf8');
      responseHandler(null, { Body: binaryData });
    });

    const saveAsSpy = jest.spyOn(FileSaver, 'saveAs');
    fetchFileOnLocalFileSystem('testKey', 'Polityka prywatnosci.pdf');

    const saveAsSpyBlobArg = saveAsSpy.mock.calls[0][0];

    expect(getObjectSpy).toHaveBeenCalledTimes(1);
    expect(getObjectSpy).toHaveBeenCalledWith('testKey', 'budoman-development', expect.any(Function));
    expect(saveAsSpy).toHaveBeenCalledTimes(1);
    expect(saveAsSpy).toHaveBeenCalledWith(saveAsSpyBlobArg, 'Polityka prywatnosci.pdf');
    expect(saveAsSpyBlobArg).toBeInstanceOf(Blob);
  });

  it('calls getObject with failed response', () => {
    const getObjectSpy = jest.spyOn(S3Service, 'getObject').mockImplementation((key, bucket, responseHandler) => {
      responseHandler(new Error('Some S3 error'), null);
    });

    const saveAsSpy = jest.spyOn(FileSaver, 'saveAs');
    fetchFileOnLocalFileSystem('testKey', 'Polityka prywatnosci.pdf', 'testBucket');

    expect(getObjectSpy).toHaveBeenCalledTimes(1);
    expect(getObjectSpy).toHaveBeenCalledWith('testKey', 'testBucket', expect.any(Function));
    expect(saveAsSpy).toHaveBeenCalledTimes(0);
  });
});
