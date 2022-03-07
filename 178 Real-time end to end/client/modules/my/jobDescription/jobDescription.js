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
        const applyUrl = this.getApplyUrl(value.how_to_apply)
        this._selectedjob={...value, applyUrl}
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

    getApplyUrl(str){
        let url = ''
        str.split('href="').forEach(item=>{
            if(item.startsWith("https") || item.startsWith("mailto")){
                url=item.split(`">`)[0]
            }
        })
        return url
    }
}