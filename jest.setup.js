import '@testing-library/jest-dom';

jest.mock('uuid', () => ({
  v4: jest.fn().mockImplementation(() => `mocked-uuid-${Math.random()}`),
}));
