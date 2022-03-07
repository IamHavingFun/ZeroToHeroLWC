import LightningElementWithBootstrap from '../../lib/lightningElementWithBootstrap.js';
import {dateFormatter} from '../../utils/utils'
import {api} from 'lwc'
export default class JobDescription extends LightningElementWithBootstrap  {
    isLoaded = false
    _selectedjob={}
    
    @api get selectedjob(){
        return  this._selectedjob
    }

    set selectedjob(value){
        this._selectedjob={...value}
    }

      get formattedDate(){
        return dateFormatter(this.selectedjob.created_at)
    }
    renderedCallback(){
        if(this.isLoaded){
            return
        } 
        let jobdescription = this.template.querySelector('.jobdescription')
        if(this.selectedjob.description){
            jobdescription.innerHTML = this.selectedjob.description
            this.isLoaded = true
        }
    }
}