import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    closeHandler(){ 
        const myEvent = new CustomEvent('close', { 
            detail: { 
                msg:"Modal Closed Successfully!!"
            }
        })
        this.dispatchEvent(myEvent)
    }
}