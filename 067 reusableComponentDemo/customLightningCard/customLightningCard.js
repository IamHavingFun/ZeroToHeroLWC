import { LightningElement } from 'lwc';

export default class CustomLightningCard extends LightningElement {
    handleSlotFooterChange(){
        const footerElem = this.template.querySelector('footer')
        if(footerElem){
            footerElem.classList.remove('slds-hide')
        }
    }
}