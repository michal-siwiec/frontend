import { renderHook } from '@testing-library/react-hooks';
import useScrollIntoElement from 'hooks/useScrollIntoElement.jsx';
import * as helpers from 'utils/helpers.js';

describe('useScrollIntoElement', () => {
  const scrollIntoElementMock = jest.fn();

  beforeEach(() => {
    jest.spyOn(helpers, 'scrollIntoElement').mockImplementation(scrollIntoElementMock);
    jest.clearAllMocks();
  });

  it('calls scrollIntoElement', () => {
    renderHook(() => useScrollIntoElement({ scrollDependency: 'some-location', elementSelector: '#my-element' }));

    expect(scrollIntoElementMock).toHaveBeenCalledWith({ elementSelector: '#my-element' });
  });

  it('re-triggers scrollIntoElement when scrollDependency changes', () => {
    const { rerender } = renderHook(
      ({ scrollDependency }) => useScrollIntoElement({ scrollDependency, elementSelector: '#dynamic-element' }),
      { initialProps: { scrollDependency: 'key-1' } }
    );

    expect(scrollIntoElementMock).toHaveBeenCalledTimes(1);

    rerender({ scrollDependency: 'key-2' });

    expect(scrollIntoElementMock).toHaveBeenCalledTimes(2);
    expect(scrollIntoElementMock).toHaveBeenLastCalledWith({ elementSelector: '#dynamic-element' });
  });
});
