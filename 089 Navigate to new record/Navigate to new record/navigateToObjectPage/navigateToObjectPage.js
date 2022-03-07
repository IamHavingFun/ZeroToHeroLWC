import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {
    navigateToNewRecord(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__objectPage',
            attributes:{ 
                objectApiName:'Contact',
                actionName:'new'
            }
        })
    }
}