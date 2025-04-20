import { renderHook } from '@testing-library/react-hooks';
import useScrollIntoElement from 'hooks/useScrollIntoElement';
import * as helpers from 'utils/helpers.js';

describe('useScrollIntoElement', () => {
  const scrollIntoElementMock = jest.fn();

  beforeEach(() => {
    jest.spyOn(helpers, 'scrollIntoElement').mockImplementation(scrollIntoElementMock);
    jest.clearAllMocks();
  });

  it('calls scrollIntoElement when data is defined', () => {
    renderHook(() =>
      useScrollIntoElement({
        data: { foo: 'bar' },
        locationKey: 'some-location',
        elementSelector: '#my-element',
      })
    );

    expect(scrollIntoElementMock).toHaveBeenCalledWith({ elementSelector: '#my-element' });
  });

  it('does not call scrollIntoElement when data is undefined', () => {
    renderHook(() =>
      useScrollIntoElement({
        data: undefined,
        locationKey: 'some-location',
        elementSelector: '#my-element',
      })
    );

    expect(scrollIntoElementMock).not.toHaveBeenCalled();
  });

  it('re-triggers scrollIntoElement when locationKey or data changes', () => {
    const { rerender } = renderHook(
      ({ data, locationKey }) =>
        useScrollIntoElement({
          data,
          locationKey,
          elementSelector: '#dynamic-element',
        }),
      {
        initialProps: {
          data: { foo: 'bar' },
          locationKey: 'key-1',
        },
      }
    );

    expect(scrollIntoElementMock).toHaveBeenCalledTimes(1);

    rerender({
      data: { foo: 'baz' },
      locationKey: 'key-2',
    });

    expect(scrollIntoElementMock).toHaveBeenCalledTimes(2);
    expect(scrollIntoElementMock).toHaveBeenLastCalledWith({ elementSelector: '#dynamic-element' });
  });
});
