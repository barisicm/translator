import { LanguageModel } from './language-model';

describe('LanguageModel', () => {
  it('should create an instance', () => {
    expect(
      new LanguageModel(
        'en',
        'English')
      ).toBeTruthy();
  });
});
