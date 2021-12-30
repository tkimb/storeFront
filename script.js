const options = document.querySelectorAll('.option')
  
// for each option, in options
options.forEach((option)=>{
// event triggered by click
option.addEventListener('click',()=>{
    options.forEach((option) => {
        option.classList.remove('active')
    })
    option.classList.add('active')
})})



