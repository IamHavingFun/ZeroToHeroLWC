import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues} from 'lightning/uiObjectInfoApi'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import TYPE_FIELD  from '@salesforce/schema/Account.Type'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetPIcklistValuesDemo extends LightningElement {
    selectedIndustry = '';
    selectedType=''
    industryOptions=[]
    typeOptions=[]
    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfo

    @wire(getPicklistValues, { recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName:INDUSTRY_FIELD})
    industryPicklist({data, error}){
        if(data){
            console.log(data)
            this.industryOptions = [...this.generatePicklist(data)]
        }
        if(error){
            console.error(error)
        }
    }
    generatePicklist(data){
        return data.values.map(item=>({ label: item.label, value: item.value }))
    }
    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }
    /***second picklist for type */
    @wire(getPicklistValues, { recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName:TYPE_FIELD})
    typePicklist({data, error}){
        if(data){
            console.log(data)
            this.typeOptions = [...this.generatePicklist(data)]
        }
        if(error){
            console.error(error)
        }
    }
    handleTypeChange(event) {
        this.selectedType = event.detail.value;
    }
}