AOS.init();
const ham = document.querySelector('.ham')
const ham1 = document.querySelector('.ham1')
const ham2 = document.querySelector('.ham2')
const ham3 = document.querySelector('.ham3')
const ham4 = document.querySelector('.ham4')
const close = document.querySelector('#close')
const premenu = document.querySelector('.premenu')
const postmenu = document.querySelector('#inner')

ham.addEventListener('click', (e) => {
   console.log('clicked')
  postmenu.style.display='block'
  premenu.style.display='none'
  postmenu.style.transition='0.5s ease;'

})
ham1.addEventListener('click', (e) => {
   console.log('clicked')
  postmenu.style.display='block'
  premenu.style.display='none'
  postmenu.style.transition='0.5s ease;'
})
ham2.addEventListener('click', (e) => {
   console.log('clicked')
  postmenu.style.display='block'
  premenu.style.display='none'
  postmenu.style.transition='0.5s ease;'
})
ham3.addEventListener('click', (e) => {
   console.log('clicked')
  postmenu.style.display='block'
  premenu.style.display='none'
    postmenu.style.transition='0.5s ease;'
})
ham4.addEventListener('click', (e) => {
   console.log('clicked')
  postmenu.style.display='block'
  premenu.style.display='none'
   postmenu.style.transition='0.5s ease;'
})

close.addEventListener('click', (e) => {
     console.log('clicked')
 postmenu.style.display='none'
 premenu.style.display='block'
  premenu.style.transition='0.5s ease;'
})
