import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/interfaces/genericAdapter/adapter';

export class LanguageModel {
    public shortCode: string;
    public languageName: string;
    constructor(
        shortCode: string,
        languageName: string
    ) {
        this.languageName = languageName;
        this.shortCode = shortCode;
    }
}


@Injectable({
    providedIn: 'root'
})
export class LanguageAdapter implements Adapter<LanguageModel> {

  adapt(item: any): LanguageModel {
    return new LanguageModel(
        item.languages[item.languages.length - 1].iso639_1,
        item.languages[item.languages.length - 1].name
    );
  }

  removeDuplicates() {

  }
}
