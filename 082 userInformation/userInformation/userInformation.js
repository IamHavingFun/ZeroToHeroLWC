import { LightningElement } from 'lwc';
import ID from '@salesforce/user/Id'
import IS_GUEST from '@salesforce/user/isGuest'
export default class UserInformation extends LightningElement {
    userId = ID
    isGuest = IS_GUEST
}