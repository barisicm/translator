import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageModel, LanguageAdapter } from '../../../models/languageModel/language-model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageFetchService {

  languagesDataUrl = 'https://restcountries.eu/rest/v2/all';
  languagesList: LanguageModel[] = [];

  constructor(private http: HttpClient, private languageAdapter: LanguageAdapter) { }

  getLanguages(): Observable<LanguageModel[]> {
    return this.http.get(this.languagesDataUrl).pipe(
      map((data: any[]) => data.map(
          (item) => this.languageAdapter.adapt(item)
          )
        )
    );
  }
}

