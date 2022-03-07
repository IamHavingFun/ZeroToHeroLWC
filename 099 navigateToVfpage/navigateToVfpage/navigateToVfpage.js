import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToVfpage extends NavigationMixin(LightningElement) {
    navigateToVFPage(){ 
        this[NavigationMixin.Navigate]({ 
            type:"standard__webPage",
            attributes:{ 
                url:"/apex/navigateVfpage"
            }
        }).then(generatedUrl=>{ 
            console.log(generatedUrl)
            window.open(generatedUrl)
        })
    }
}