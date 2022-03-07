import LightningElementWithBootstrap from '../../lib/lightningElementWithBootstrap'
const BASE_URL = 'https://jobs.github.com/positions.json'
export default class App extends LightningElementWithBootstrap {
    description=''
    location=''
    full_time=false
    selectedJob = null
    jobs = []
    connectedCallback(){
        this.fetchJobs()
    }

    fetchJobs(){
        const url = `${BASE_URL}?page=1&description=${this.description}&location=${this.location}&full_time=${this.full_time}`
        fetch(url).then(response=>response.json())
        .then(result=>{
            console.log(result)
            this.jobs=[...result]
        }).catch(error=>{
            console.error(error)
        })
    }
    selectedHandler(event){
      this.selectedJob = event.detail
    }

    goBackHandler(){
      this.selectedJob = null
    }
    searchHandler(event){
      console.log(event.detail)
      this.description = event.detail.description
      this.location = event.detail.location
      this.full_time = event.detail.full_time
      this.fetchJobs()
    }
}
