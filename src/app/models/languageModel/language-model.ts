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
