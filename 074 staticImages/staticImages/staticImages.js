import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/user_image'
import USER_WALKING_IMG from '@salesforce/resourceUrl/user_walking'
export default class StaticImages extends LightningElement {
    userImage = USER_IMAGE

    userWalking = USER_WALKING_IMG
}