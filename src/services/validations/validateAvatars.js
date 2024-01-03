const validateAvatars = ({ avatars }) => {
  const allowedFileFormats = ['image/png', 'image/svg+xml', 'image/jpeg'];
  let eachAvatarsHasValidFormat = true;

  avatars.forEach(({ fileType }) => {
    const hasAllowedFormat = allowedFileFormats.includes(fileType);

    if (!hasAllowedFormat) {
      eachAvatarsHasValidFormat = false;
    }
  });

  return eachAvatarsHasValidFormat;
};

export default validateAvatars;
