import LightningElementWithBootstrap from '../../lib/lightningElementWithBootstrap'
export default class SearchBox extends LightningElementWithBootstrap {
    searchFields={
        description:'',
        location:'',
        full_time:false
    }
    changeHandler(event){
        const {name, value, checked} = event.target
        // console.log(name)
        // console.log(value)
        // console.log(checked)
        if(name === 'full_time'){
            this.searchFields[name] = checked
        } else {
            this.searchFields[name] = value
        }

       

    }

    searchHandler(){
        console.log(this.searchFields)
    }
}
