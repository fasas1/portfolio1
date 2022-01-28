let nav= document.querySelector('nav')

  window.addEventListener('scroll', function (){
       if(window.pageYOffset > 0) {
           nav.classList.add('bg-dark', 'shrink');
       } else {
           nav.classList.remove('bg-dark', 'shrink')
       }
  })