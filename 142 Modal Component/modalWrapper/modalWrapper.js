import { LightningElement } from 'lwc';

export default class ModalWrapper extends LightningElement {
    isOpen = false
    isOpenSecond = false
    openHandler(){
        console.log("Clicked!!")
        this.isOpen = true
    }
    openSecondHandler(){
        this.isOpenSecond = true
    }
    closeHandler(){
        this.isOpen = false
    }
    secondCloseHandler(){
        this.isOpenSecond = false
    }
}