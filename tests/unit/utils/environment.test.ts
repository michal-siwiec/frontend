describe('env variables', () => {
  const reloadEnvs = (setupNewEnvs = () => {}) => {
    jest.resetModules();
    setupNewEnvs();
  };

  beforeEach(() => {
    process.env.API_URL = 'Fake API_URL';
    process.env.AWS_ACCESS_KEY_ID = 'Fake AWS_ACCESS_KEY_ID';
    process.env.AWS_SECRET_ACCESS_KEY = 'Fake AWS_SECRET_ACCESS_KEY';
    process.env.AWS_BUCKET = 'Fake AWS_BUCKET';
    process.env.BASIC_AUTH_USER = 'Fake BASIC_AUTH_USER';
    process.env.BASIC_AUTH_PASSWORD = 'Fake BASIC_AUTH_PASSWORD';
  });

  it('assigns env variables to consts', async () => {
    reloadEnvs();
    const { API_URL, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_BUCKET, BASIC_AUTH_USER, BASIC_AUTH_PASSWORD } = await import('utils/environment');

    expect(API_URL).toBe('Fake API_URL');
    expect(AWS_ACCESS_KEY_ID).toBe('Fake AWS_ACCESS_KEY_ID');
    expect(AWS_SECRET_ACCESS_KEY).toBe('Fake AWS_SECRET_ACCESS_KEY');
    expect(AWS_BUCKET).toBe('Fake AWS_BUCKET');
    expect(BASIC_AUTH_USER).toBe('Fake BASIC_AUTH_USER');
    expect(BASIC_AUTH_PASSWORD).toBe('Fake BASIC_AUTH_PASSWORD');
  });

  describe('raising error when var is not defined', () => {
    it('API_URL', async () => {
      reloadEnvs(() => { process.env.API_URL = ''; });

      expect(async () => { await import('utils/environment'); }).rejects.toThrow('Missing required environment variable: API_URL');
    });

    it('AWS_ACCESS_KEY_ID', async () => {
      reloadEnvs(() => { process.env.AWS_ACCESS_KEY_ID = ''; });

      expect(async () => { await import('utils/environment'); }).rejects.toThrow('Missing required environment variable: AWS_ACCESS_KEY_ID');
    });

    it('AWS_SECRET_ACCESS_KEY', async () => {
      reloadEnvs(() => { process.env.AWS_SECRET_ACCESS_KEY = ''; });

      expect(async () => { await import('utils/environment'); }).rejects.toThrow('Missing required environment variable: AWS_SECRET_ACCESS_KEY');
    });

    it('AWS_BUCKET', async () => {
      reloadEnvs(() => { process.env.AWS_BUCKET = ''; });

      expect(async () => { await import('utils/environment'); }).rejects.toThrow('Missing required environment variable: AWS_BUCKET');
    });
  });

  describe("doesn't raise an error when var is not defined but not required", () => {
    it('BASIC_AUTH_USER', async () => {
      reloadEnvs(() => { process.env.BASIC_AUTH_USER = ''; });

      expect(async () => { await import('utils/environment'); }).not.toThrow();
    });

    it('BASIC_AUTH_PASSWORD', async () => {
      reloadEnvs(() => { process.env.BASIC_AUTH_PASSWORD = ''; });

      expect(async () => { await import('utils/environment'); }).not.toThrow();
    });
  });
});
