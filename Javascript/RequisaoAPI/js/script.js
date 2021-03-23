const requisao = document.querySelector('#btn-requisitar');

requisao.addEventListener('click', function(){
  
    const xhr = new XMLHttpRequest();
    console.log(xhr.open("GET","https://pokeapi.co/api/v2/pokemon/1"));
})  
