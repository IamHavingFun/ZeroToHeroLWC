import { LightningElement } from "lwc";
export default class LightningElementWithBootstrap extends LightningElement {
    constructor(){
        super()
        const path = '/resources/css/bootstrap.min.css'
        const styles = document.createElement('link')
        styles.href=path
        styles.rel="stylesheet"
        this.template.appendChild(styles)
    }
}