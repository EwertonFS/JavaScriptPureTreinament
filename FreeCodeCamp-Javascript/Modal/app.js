const modalBtn= document.querySelector('.modal-btn')

const modal= document.querySelector('.modal-overlay')

const closeBtn= document.querySelector('.close-btn')

const removeBanner = document.querySelector('.modal-container')
//
modalBtn.addEventListener('click',function(){
 /*   console.log('clickou') */
     modal.classList.add("open-modal") 
})

// parte azul
modal.addEventListener('click',function(){
   /*  console.log('fechou')  */
   modal.classList.remove("modal-overlay" ) 
   removeBanner.classList.remove("modal-container") 
})

//
closeBtn.addEventListener('click',function(){
  removeBanner.classList.remove("modal-container") 
})