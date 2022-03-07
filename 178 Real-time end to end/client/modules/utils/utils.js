export const dateFormatter = (date) =>{
    if(!date) return null
    let splittedDate = date.split(' ')
    return `${splittedDate[0]} ${splittedDate[2]}-${splittedDate[1]}-${splittedDate[splittedDate.length-1]}`
}