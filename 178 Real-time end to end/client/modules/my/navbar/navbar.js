import LightningElementWithBootstrap from '../../lib/lightningElementWithBootstrap'
import {api} from 'lwc'

export default class Navbar extends LightningElementWithBootstrap {
    @api showBtn = false
    goBack(){
        this.dispatchEvent(new CustomEvent('back'))
    }
}
