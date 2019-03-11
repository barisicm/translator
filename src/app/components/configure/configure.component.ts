import { Component, OnInit } from '@angular/core';
import { SingleControlComponent } from '../single-control/single-control.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss']
})
export class ConfigureComponent implements OnInit {

        dropdownList = [];
        selectedItems = [];
        dropdownSettings = {};
        placeholder = 'name';

        public appConfigForm: FormGroup;

        constructor(private formBuilder: FormBuilder) {
            this.appConfigForm = formBuilder.group({
                name: ['', Validators.required],
                surname: ['', Validators.required],
                company: ['', Validators.required],
                languages: [[], Validators.required]
            });
        }

        ngOnInit() {
            this.dropdownList = [{ shortcode: 'en', language_name: 'Engleski' }]; // GET Languages
            this.dropdownSettings = {
                idField: 'shortcode',
                textField: 'language_name',
                selectAllText: 'Označite sve',
                unSelectAllText: 'Odznačite sve'
            };
        }

        onSubmit(form) {
            console.warn(this.appConfigForm.value);
        }
}
