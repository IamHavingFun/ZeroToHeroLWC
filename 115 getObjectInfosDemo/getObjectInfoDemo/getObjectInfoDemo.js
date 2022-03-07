import { LightningElement, wire } from 'lwc';
import {getObjectInfo, getObjectInfos} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
export default class GetObjectInfoDemo extends LightningElement {

    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfo

    objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT]

    objectInfos
    @wire(getObjectInfos, { objectApiNames: '$objectApiNames' })
    objectInfosHandler({data}){
        if(data){
            console.log(data)
            this.objectInfos = data
        }
    }
}