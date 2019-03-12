import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LanguageModel } from '../../../models/languageModel/language-model';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LanguageFetchService {

  languagesData = 'https://restcountries.eu/rest/v2/all';
  languagesList: LanguageModel[] = [];

  constructor(private http: HttpClient) { }

  getLanguages(): LanguageModel[] {
    const result = this.http.get<any[]>(this.languagesData);
    let transformedData: LanguageModel[];

    result.subscribe((data) => {
      transformedData = this.transformFetchedData(data);
      console.log(transformedData);
    });

    return transformedData;
  }

  transformFetchedData(data): LanguageModel[] {
    data.forEach(element => {
      console.log(element);
      // const languageItem = new LanguageModel(
      //   element.languages[element.languages.length - 1].iso639_1,
      //   element.languages[element.languages.length - 1].name);

      // this.languagesList.push(languageItem);
    });
    return this.languagesList;
  }
}
