import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from 'components/Avatar.jsx';
import useFetchUrl from 'hooks/useFetchUrl';

jest.mock('hooks/useFetchUrl');

describe('Avatar Component', () => {
  const mockedUseFetchUrl = jest.mocked(useFetchUrl); 

  it('renders default avatar image when avatars is empty', () => {
    mockedUseFetchUrl.mockReturnValue('default-avatar-url.jpg');
    render(<Avatar avatars={[]} />);

    const img = screen.getByAltText('avatar');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'default-avatar-url.jpg');
    expect(useFetchUrl).toHaveBeenCalledWith({ key: 'images/empty-avatar.jpeg' });
  });

  it('renders main avatar image from avatars prop', () => {
    const avatars = [{ main: false, key: 'secondary.jpg', bucket: 'development' }, { main: true, key: 'main.jpg', bucket: 'development' }];

    mockedUseFetchUrl.mockReturnValue('main-avatar-url.jpg');
    render(<Avatar avatars={avatars} />);

    const img = screen.getByAltText('avatar');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'main-avatar-url.jpg');
    expect(useFetchUrl).toHaveBeenCalledWith({ bucket: 'development', key: 'main.jpg' });
  });
});
