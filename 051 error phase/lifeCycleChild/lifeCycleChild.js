import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){ 
        super()
        console.log("Child constructor called")
    }
    connectedCallback(){ 
        console.log("Child connectedCallback called")
        throw new Error('Loading of child component failed')
    }
    renderedCallback(){ 
        console.log("Child renderedCallback called")
    }
    disconnectedCallback(){
       alert('Child disconnectedCallback called !!') 
    }

}