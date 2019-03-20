import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../../services/language/language.service';
import { LanguageModel } from '../../models/languageModel/language-model';
import { Router } from '@angular/router';
import { ConfiguratorService } from 'src/app/services/configurator/configurator.service';

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss']
})
export class ConfigureComponent implements OnInit {

        dropdownListDataSource: LanguageModel[] = [];
        dropdownSettings = {};
        public appConfigForm: FormGroup;

        constructor(
            private router: Router,
            private formBuilder: FormBuilder,
            private languageFetch: LanguageService,
            private config: ConfiguratorService,
            ) {
            this.appConfigForm = formBuilder.group({
                name: ['', Validators.required],
                surname: ['', Validators.required],
                company: ['', Validators.required],
                languages: [[], Validators.required]
            });
        }

        ngOnInit() {
            this.languageFetch.getLanguages().subscribe((data) => {
                const set = new Set();
                const uniqueLanguages = data.filter(({languageName}) => !set.has(languageName) && set.add(languageName));

                this.dropdownListDataSource = Array.from(uniqueLanguages);
            }),
            this.dropdownSettings = {
                idField: 'shortCode',
                textField: 'languageName',
                selectAllText: 'Označite sve',
                unSelectAllText: 'Odznačite sve'
            };
        }

        onSubmit() {
            this.config.setToLocalStorage(this.appConfigForm.value);
            this.router.navigate(['/', 'projectPicker']);
        }

}
