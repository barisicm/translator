import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/interfaces/genericAdapter/adapter';
import { LanguageModel } from '../languageModel/language-model';
import { TranslationItem } from '../translationItem/translation-item';

export class UploadedFileModel {
    public language: LanguageModel;
    public wordsList: TranslationItem[];
    constructor(
        language: LanguageModel,
        wordsList: TranslationItem[]
    ) {
        this.language = language;
        this.wordsList = wordsList;
    }
}
