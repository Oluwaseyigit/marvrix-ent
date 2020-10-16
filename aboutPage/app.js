const nextArrow = document.querySelector('.fa-angle-right')
const backArrow = document.querySelector('.back-arrow')
backArrow.addEventListener('click', previousMembers)
nextArrow.addEventListener('click', nextMembers)

//Create an array for the images

//Identify that the elements in the array are images



function nextMembers(e){
    //Get the image from html
    const event = document.querySelector('.event')
    const imageNo = event.images.length

    console.log(imageNo)

    console.log('next')
    
    e.preventDefault()
}









function previousMembers(e){

    console.log('previous')
    e.preventDefault()
}