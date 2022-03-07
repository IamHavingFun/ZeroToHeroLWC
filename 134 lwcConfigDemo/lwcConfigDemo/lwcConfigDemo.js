import { LightningElement, api } from 'lwc';

export default class LwcConfigDemo extends LightningElement {
    @api heading
    @api recordId
    @api age
    @api levels

}