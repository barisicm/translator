import { LanguageModel } from '../languageModel/language-model';

export class ConfiguratorModel {
    constructor(
        public name: string,
        public surname: string,
        public companyName: string,
        public languages: [LanguageModel]
    ) {
    }
}
