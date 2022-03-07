import { LightningElement } from 'lwc';
import {deleteRecord} from 'lightning/uiRecordApi'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class DeleteRecordDemo extends LightningElement {
    recordId
    changeHandler(event){
       this.recordId = event.target.value
    }
    deleteHandler(){
        deleteRecord(this.recordId).then(()=>{
            this.showToast("Sucess!!", "Deleted Successfully!!", 'success')
        }).catch(error=>{
            console.error(error)
            this.showToast("Error!!", "Error Occurred!!", 'error')
        })
    }
    showToast(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant
        }))
    }
}