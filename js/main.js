// En esta parte ahun falta, desabilitar la funcio cuando nos encontramos en otra mediaScreen
    // Simplificar más el codigo
var menu = document.getElementById('menu');
document.getElementById('menu-btn').addEventListener('click', () =>{
    menu.classList.add('mostrar-nav');
});
document.getElementById('menu').addEventListener('click', () =>{
    menu.classList.remove('mostrar-nav');
});
// FIN NAVBAR - MENU - Slider 
// EJEMPLO
// var button = document.getElementById('button');  
// function toggle() {  
//     elem.classList.toggle('bg');  
// }  
// button.addEventListener('click', toggle, false); 

// var filtro = document.getElementById('filtros-section');
// document.getElementById('btn-m-f').addEventListener('click',()=>{
//     filtro.classList.replace('ocultar-filtro','mostrar-filtro');
// })
var filtro = document.getElementById('filtros-section');
document.getElementById('btn-m-f').addEventListener('click',()=>{
    // filtro.classList.replace('ocultar-filtro','mostrar-filtro' );
    filtro.classList.toggle('ocultar-filtro');
});
// document.getElementById('btn-m-f').addEventListener('click',()=>{
//     filtro.classList.replace('mostrar-filtro');
// });
document.getElementById('btn-m-f').addEventListener('click', e =>{
    // document.body.classList.toggle('animate');
    e.target.textContent== "Mostrar Filtros"
                          ? e.target.textContent = 'Ocultar Filtros'
                          : e.target.textContent = 'Mostrar Filtros';
})