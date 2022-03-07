import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c'
import {APPLICATION_SCOPE, MessageContext, subscribe, unsubscribe} from 'lightning/messageService'
export default class ComponentXforLMS extends LightningElement {
    @wire(MessageContext)
    context
    subscription 
    recievedMessage
    connectedCallback(){
        this.subscribeMessage()
    }
    subscribeMessage(){
        // subscribe(messageContext, messageChannel, listener, subscriberOptions)
       this.subscription= subscribe(this.context, SAMPLEMC, (message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
        //this.context is the context of the current lightning web component with LMS
        //SAMPLEMC is the reference of the Message Channel
        //To receive messages on a message channel from anywhere in the application, pass the subscriberOptions parameter as {scope: APPLICATION_SCOPE}
    }
    handleMessage(message){
        //write logic for message
        this.recievedMessage = message && message.lmsData && message.lmsData.value ? message.lmsData.value:'No Message'
    }

    unsubscribeMessage(){
        unsubscribe(this.subscription)
        this.subscription = null
    }
}