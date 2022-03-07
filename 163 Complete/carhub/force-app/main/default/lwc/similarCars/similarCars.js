import { LightningElement, api, wire } from 'lwc';
import getSimilarCars from '@salesforce/apex/CarController.getSimilarCars'
import {getRecord} from 'lightning/uiRecordApi'
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c'

import {NavigationMixin} from 'lightning/navigation'
export default class SimilarCars extends NavigationMixin(LightningElement) {
    similarCars
  
    @api recordId;
    @api objectApiName

    @wire(getRecord,{recordId: '$recordId', fields:[MAKE_FIELD]})
    car


    fetchSimilarCars(){
        getSimilarCars({
            carId:this.recordId,
            makeType :this.car.data.fields.Make__c.value
        }).then(result=>{
            this.similarCars = result
            console.log(this.similarCars)
        }).catch(error=>{
            console.error(error)
        })
    }
    handleViewDetailsClick(event){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:event.target.dataset.id,
                objectApiName:this.objectApiName,
                actionName:'view'
            }
        })
    }
}