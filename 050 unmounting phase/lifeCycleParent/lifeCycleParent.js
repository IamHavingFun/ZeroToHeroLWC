import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isChildVisible = false
    constructor(){ 
        super()
        console.log("parent constructor called")
    }
    connectedCallback(){ 
        console.log("parent connectedCallback called")
    }
    renderedCallback(){ 
        console.log("parent renderedCallback called")
    }

    handleClick(){ 
        this.isChildVisible = !this.isChildVisible
    }
}