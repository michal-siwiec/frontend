import {
  countTotalPrice,
  formatPhoneNumber,
  cutAfterNChars,
  formatPrice,
  isTextLonger,
  formatTimestamp,
  validateByRegexp,
  areTheSame
} from 'utils/helpers.ts';

import { EMAIL_REGEX } from 'data/regexps.ts';

describe('countTotalPrice', () => {
  test('should return 0.0 for non products', () => {
    const products = [];
    const total = countTotalPrice(products);

    expect(total).toBe('0.00');
  });

  test('should return proper value for multiple products', () => {
    const products = [{ quantity: 12, attributes: { price: 23.99 } }];
    const total = countTotalPrice(products);

    expect(total).toBe('287.88');
  });
});

describe('formatPhoneNumber', () => {
  test('should make clear spaces inside phone number', () => {
    const phoneNumber = formatPhoneNumber('724131140');

    expect(phoneNumber).toBe('724 131 140');
  });
});

describe('cutAfterNChars', () => {
  test('should split string correctly when charsQuantity is valid', () => {
    const result = cutAfterNChars('Hello, World!', 5);

    expect(result).toEqual({ narrowContent: 'Hello', restOfContent: ', World!' });
  });

  test('should split correctly when charsQuantity equals string length', () => {
    const result = cutAfterNChars('Exact', 5);

    expect(result).toEqual({ narrowContent: 'Exact', restOfContent: '' });
  });

  test('should return full string in narrowContent if charsQuantity exceeds length', () => {
    const result = cutAfterNChars('Short', 10);

    expect(result).toEqual({ narrowContent: 'Short', restOfContent: '' });
  });

  test('should return empty narrowContent if charsQuantity is 0', () => {
    const result = cutAfterNChars('Test', 0);

    expect(result).toEqual({ narrowContent: '', restOfContent: 'Test' });
  });
});

describe('formatPrice', () => {
  test('should format price correctly', () => {
    const formattedPrice = formatPrice(123.99);

    expect(formattedPrice).toBe('123,99');
  });
});

describe('isTextLonger', () => {
  test('should return true if text is longer', () => {
    const isLonger = isTextLonger('Hello world!', 2);

    expect(isLonger).toBe(true);
  });

  test('should return false if text is shorter', () => {
    const isLonger = isTextLonger('Hello world!', 25);

    expect(isLonger).toBe(false);
  });
});

describe('formatTimestamp', () => {
  test('should format timestamp properly', () => {
    // Replace if needed because problem with interprating whitespaces on various envs
    const formattedTimestamp = formatTimestamp('2022-06-16 22:16:04').replace(/\s/g, '');
    const expectedTimestamp = '6/16/2022, 10:16:04 PM'.replace(/\s/g, '');

    expect(formattedTimestamp).toEqual(expectedTimestamp);
  });
});

describe('validateByRegexp', () => {
  test('should match correctly', () => {
    const isValid = validateByRegexp(EMAIL_REGEX, 'siwiec.michal724@gmail.com');

    expect(isValid).toBe(true);
  });

  test("shouldn't match correctly", () => {
    const isValid = validateByRegexp(EMAIL_REGEX, 'siwiec.michal724gmail.com');

    expect(isValid).toBe(false);
  });
});

describe('areTheSame', () => {
  test('should be the same', () => {
    const same = areTheSame('Hello world!', 'Hello world!');

    expect(same).toBe(true);
  });

  test("shouldn't be the same", () => {
    const same = areTheSame('Hello world!', 'Hello world');

    expect(same).toBe(false);
  });
});
