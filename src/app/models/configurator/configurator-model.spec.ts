import { ConfiguratorModel } from './configurator-model';
import { LanguageModel } from '../languageModel/language-model';

describe('ConfiguratorModel', () => {
  it('should create an instance', () => {
    expect(
      new ConfiguratorModel(
        'Stevo',
        'Stević',
        'Span',
        [new LanguageModel('en', 'Engleski')])
      ).toBeTruthy();
  });
});
