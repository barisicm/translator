import { TranslationItem } from './translation-item';

describe('TranslationItem', () => {
  it('should create an instance', () => {
    expect(
      new TranslationItem(
      'helloWorld',
      'Hello World')
      ).toBeTruthy();
  });
});
