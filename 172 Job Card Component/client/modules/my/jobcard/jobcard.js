import LightningElementWithBootstrap from '../../lib/lightningElementWithBootstrap.js';
import {api} from 'lwc'
export default class Jobcard extends LightningElementWithBootstrap  {
    @api job={}

    viewDetailhandler(){
        console.log("view detail clicked!!")
    }
}