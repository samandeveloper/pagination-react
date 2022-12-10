//paging each homepage
const paginate = (people) => {  //people=100 array of object
    const itemsPerPage = 10
    const numberOfPages = Math.ceil (people.length/itemsPerPage)   //10 pages
    //we want to create new array from 1 to 10 like [1,2,3,4,5,6,7,8,9,10]--in ES6 we use Array.from for this purpose
    const newArray = Array.from({length:numberOfPages},(_,i)=>{
    // console.log(newArray)
    const start = i*itemsPerPage
    const eachPage = people.slice(start,start+itemsPerPage)
    return eachPage
    })
    return newArray
}

export default paginate
