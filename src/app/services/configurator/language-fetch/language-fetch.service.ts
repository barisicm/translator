import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LanguageModel, LanguageAdapter } from '../../../models/languageModel/language-model';
import { promise } from 'protractor';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageFetchService {

  languagesData = 'https://restcountries.eu/rest/v2/all';
  languagesList: LanguageModel[] = [];

  constructor(private http: HttpClient, private adapter: LanguageAdapter) { }

  getLanguages(): Observable<LanguageModel[]> {
    return this.http.get(this.languagesData).pipe(
      map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
    );
  }
}

