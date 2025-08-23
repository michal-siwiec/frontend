import AvatarsGenerator from 'services/users/avatarsGenerator.ts';

describe('AvatarsGenerator', () => {
  it('should convert multiple files to base64 and mark the first one as main', async () => {
    const mockedFiles = {
      0: new File(['(⌐□_□)'], 'avatar1.png', { type: 'image/png' }),
      1: new File(['(•_•)'], 'avatar2.png', { type: 'image/png' })
    };

    const avatars = await new AvatarsGenerator(mockedFiles).call();

    expect(avatars).toHaveLength(2);

    expect(avatars[0]).toMatchObject({ fileName: 'avatar1.png', fileType: 'image/png', main: true });
    expect(avatars[0].base64).toContain('data:image/png');

    expect(avatars[1]).toMatchObject({ fileName: 'avatar2.png', fileType: 'image/png', main: false });
    expect(avatars[1].base64).toContain('data:image/png');
  });

  it('should return an empty array if no files are provided', async () => {
    const avatars = await new AvatarsGenerator({}).call();

    expect(avatars).toEqual([]);
  });
});
