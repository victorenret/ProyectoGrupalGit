let nav = document.getElementById('menSoc');


function menus(){

    let Desplazamiento_actual = window.pageYOffset;

    if(Desplazamiento_actual >= 40){
       nav.classList.remove('bg-dark');
       nav.className = ('bg-dark1');
       nav.style.transition = '1s';

    }else{
     nav.classList.remove('bg-dark1');
     nav.className = ('bg-dark'); 
     nav.style.transition = '1s';
    }

}

window.addEventListener('load', function(){
    menus();    
  
});


window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    menus();
    
});

