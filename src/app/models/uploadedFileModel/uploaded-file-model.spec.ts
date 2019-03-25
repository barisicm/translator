import { UploadedFileModel } from './uploaded-file-model';
import { LanguageModel } from '../languageModel/language-model';
import { TranslationItem } from '../translationItem/translation-item';

describe('UploadedFileModel', () => {
  it('should create an instance', () => {
    expect(new UploadedFileModel(
      new LanguageModel('en', 'English'),
      [new TranslationItem('hello', 'Hello'),
    new TranslationItem('welcome', 'Welcome')]
    )).toBeTruthy();
  });
});
