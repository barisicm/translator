import { Component, OnInit } from '@angular/core';
import { SingleControlComponent } from '../single-control/single-control.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageFetchService } from '../../services/configurator/language-fetch/language-fetch.service';
import { LanguageModel } from '../../models/languageModel/language-model';

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss']
})
export class ConfigureComponent implements OnInit {

        dropdownList: LanguageModel[];
        selectedItems = [];
        dropdownSettings = {};
        placeholder = 'name';
        testList: Array<LanguageModel>;

        public appConfigForm: FormGroup;

        constructor(
            private formBuilder: FormBuilder,
            private languageFetch: LanguageFetchService,
            ) {
            this.appConfigForm = formBuilder.group({
                name: ['', Validators.required],
                surname: ['', Validators.required],
                company: ['', Validators.required],
                languages: [[], Validators.required]
            });
        }

        ngOnInit() {
            console.log( this.languageFetch.getLanguages());
            this.dropdownList = this.languageFetch.getLanguages();
            this.dropdownSettings = {
                idField: 'shortCode',
                textField: 'languageName',
                selectAllText: 'Označite sve',
                unSelectAllText: 'Odznačite sve'
            };
        }

        onSubmit(form) {
            console.warn(this.appConfigForm.value);
        }

}
