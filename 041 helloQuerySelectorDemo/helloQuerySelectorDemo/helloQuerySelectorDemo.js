import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userNames =["John", "Smith", "Nik", "Mike"]
    fetchDetailHandler(){
        const elem = this.template.querySelector('h1')
        elem.style.border="1px solid red";
        console.log(elem.innerText)

        const userElements = this.template.querySelectorAll('.name')
        Array.from(userElements).forEach(item=>{
            console.log(item.innerText)
            item.setAttribute("title", item.innerText)
        })

        ///  lwc:dom="manual" demo
        const childElem = this.template.querySelector('.child')
        childElem.innerHTML = '<p>Hey i am a child element</p>'
    }
}