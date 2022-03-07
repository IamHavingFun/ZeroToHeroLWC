import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList'
export default class FilteringAndSortingDemo extends LightningElement {
    headings=["Id", "Name", "Title", "Email"]
    fullTableData=[]
    filteredData=[]
    timer
    filterBy="Name"
    @wire(getContactList)
    contactHandler({data, error}){
        if(data){
            console.log(data)
            this.fullTableData = data
            this.filteredData= data
        }
        if(error){
            console.log(error)
        }
    }

    get FilterByOptions(){
        return [
            {label:"All", value:'All'},
            {label:"Id", value:'Id'},
            {label:'Name', value:'Name'},
            {label:'Title', value:'Title'},
            {label:'Email', value:'Email'}
        ]
    }

    filterbyHandler(event){
        this.filterBy = event.target.value
    }

    filterHandler(event){
        const {value} = event.target
        window.clearTimeout(this.timer)
        if(value){
            this.timer = window.setTimeout(()=>{
                console.log(value)
                this.filteredData = this.fullTableData.filter(eachObj=>{
                    if(this.filterBy === 'All'){
                        /**Below logic will filter each and every property of object */
                        return Object.keys(eachObj).some(key=>{
                            return eachObj[key].toLowerCase().includes(value)
                        })
                    } else {
                         /**Below logic will filter only selected fields */
                        const val = eachObj[this.filterBy] ? eachObj[this.filterBy]:''
                        return val.toLowerCase().includes(value)
                    }
                })
            }, 500)
            
        } else {
            this.filteredData = [...this.fullTableData]
        }
        
    }
}