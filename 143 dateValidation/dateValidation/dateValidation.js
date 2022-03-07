import { LightningElement } from 'lwc';

export default class DateValidation extends LightningElement {
    startDate
    endDate
    error
    dateHandler(event){
        const {name, value} = event.target
        this[name] = value 
    }

    submitHandler(){
        if(this.validateDate(this.startDate, this.endDate)){
            console.log("Data is Valid")
        } else{
            this.error = "End Date cannot be greater than Start Date"
        }
    }

    validateDate(startDate, endDate){
        return new Date(startDate).getTime() < new Date(endDate).getTime()
    }
}