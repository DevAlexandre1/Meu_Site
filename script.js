function mostrarImagem(img){
   const imagemGrande =document.getElementById("imagemgrande");
   imagemGrande.src=img.src;
   imagemGrande.parentElement.style.display="block";
   
}