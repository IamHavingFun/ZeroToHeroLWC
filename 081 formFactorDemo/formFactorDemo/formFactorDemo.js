import { LightningElement } from 'lwc';
import FORM_FACTOR from '@salesforce/client/formFactor'
export default class FormFactorDemo extends LightningElement {
    formFactor = FORM_FACTOR
}