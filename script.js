function adicionarFilme(){
  var campo = document.querySelector('#filme')
  var filmeFavorito = campo.value;
  if(filmeFavorito.endsWith('.jpg')){
    listarTela(filmeFavorito); 
  }else{
    alert('Imagem inválida')
  }
  campo.value = ""
}



function listarTela(filme){
  var listaFilme = document.querySelector('#listaFilmes');
  var elementoFilme = "<img src=" + filme + ">";
  listaFilme.innerHTML = listaFilme.innerHTML + elementoFilme;

}