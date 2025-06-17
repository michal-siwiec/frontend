import FileSaver from 'file-saver';
import * as S3Service from 'services/s3.js';
import fetchFileOnLocalFileSystem from 'services/fetchFileOnLocalFileSystem.js';

describe('fetchFileOnLocalFileSystem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls getObject with success response', () => {
    // Mocking method createObjectURL because it's not available by default and "FileSaver" needs it
    global.URL = {};
    global.URL.createObjectURL = () => {};
    jest.spyOn(global.URL, 'createObjectURL').mockImplementation(() => 'mock-blob-url');

    const getObjectSpy = jest.spyOn(S3Service, 'getObject').mockImplementation(({ responseHandler }) => {
      const binaryData = Buffer.from('binary-fake-data', 'utf8');
      responseHandler(null, { Body: binaryData });
    });

    const saveAsSpy = jest.spyOn(FileSaver, 'saveAs');
    fetchFileOnLocalFileSystem({ key: 'testKey', fileName: 'Polityka prywatnosci.pdf' });

    const saveAsSpyBlobArg = saveAsSpy.mock.calls[0][0];

    expect(getObjectSpy).toHaveBeenCalledTimes(1);
    expect(getObjectSpy).toHaveBeenCalledWith({ bucket: 'budoman-development', key: 'testKey', responseHandler: expect.any(Function) });
    expect(saveAsSpy).toHaveBeenCalledTimes(1);
    expect(saveAsSpy).toHaveBeenCalledWith(saveAsSpyBlobArg, 'Polityka prywatnosci.pdf');
    expect(saveAsSpyBlobArg).toBeInstanceOf(Blob);
  });

  it('calls getObject with failed response', () => {
    const getObjectSpy = jest.spyOn(S3Service, 'getObject').mockImplementation(({ responseHandler }) => {
      responseHandler(new Error('Some S3 error'), null);
    });

    const saveAsSpy = jest.spyOn(FileSaver, 'saveAs');
    fetchFileOnLocalFileSystem({ bucket: 'testBucket', key: 'testKey', fileName: 'Polityka prywatnosci.pdf' });

    expect(getObjectSpy).toHaveBeenCalledTimes(1);
    expect(getObjectSpy).toHaveBeenCalledWith({ bucket: 'testBucket', key: 'testKey', responseHandler: expect.any(Function) });
    expect(saveAsSpy).toHaveBeenCalledTimes(0);
  });
});
