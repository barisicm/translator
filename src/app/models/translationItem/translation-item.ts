import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/interfaces/genericAdapter/adapter';

export class TranslationItem {
    public key: string;
    public value: string;
    constructor(
        key: string,
        value: string
    ) {
        this.key = key;
        this.value = value;
    }
}