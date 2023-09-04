let contadorCliques = 0;

function trizteza() {  
  if (contadorCliques === 0) {
    contadorCliques++; 
  // Array de nomes de imagens aleatórias
  const imagensAleatorias = ["img/tristeza2.jpg", "img/tristeza3.jpg",
   "img/tristeza4.jpg", "img/tristeza5.jpg", "img/tristeza6.jpg"];
   

  // Gerar um número aleatório de 0 a 4
  const numeroAleatorio = Math.floor(Math.random() * imagensAleatorias.length);

  // Selecionar aleatoriamente uma imagem da lista de imagens aleatórias
  const imagemAleatoria = imagensAleatorias[numeroAleatorio];

  // Exibir a imagem aleatória no elemento com ID "tristeza"
  document.getElementById("trizteza").querySelector('img').src = imagemAleatoria;
  }
}


function ansiedade() {
  if (contadorCliques === 0) {
    contadorCliques++;
  //Array de nomes de imagens aleatórias
  const imagensAleatorias = ["/img/ansiedade-1.jpg", "/img/ansiedade-2.jpg", 
  "/img/ansiedade-3.jpg", "/img/ansiedade-4.jpg", "/img/ansiedade-5.jpg"];

  //Gerar um número aleatório de 0 a 4
  const numeroAleatorio = Math.floor(Math.random() * imagensAleatorias.length);
    
  //Selecionar aleatoriamente uma imagem da lista de imagens aleatórias
  const imagemAleatoria = imagensAleatorias[numeroAleatorio];

  //Exibir a imagem aleatória no elemento com ID "imagem"
  document.getElementById("ansiedade").querySelector('img').src = imagemAleatoria;
    

}
}

function alegria() {
 
  if (contadorCliques === 0) {
    contadorCliques++;
  const imagensAleatorias = ["/img/alegria-1.jpg", "/img/alegria-2.png", 
  "/img/alegria-3.png", "/img/alegria-4.png", "/img/alegria-5.png"];

  //Gerar um número aleatório de 0 a 4
  const numeroAleatorio = Math.floor(Math.random() * imagensAleatorias.length);
    
  //Selecionar aleatoriamente uma imagem da lista de imagens aleatórias
  const imagemAleatoria = imagensAleatorias[numeroAleatorio];

    //Exibir a imagem aleatória no elemento com ID "imagem"
    document.getElementById("alegria").querySelector('img').src = imagemAleatoria;

  }
}


function medo() {
  if (contadorCliques === 0) {
    contadorCliques++;

  const imagensAleatorias = ["/img/medo-1.png", "/img/medo-2.png", 
  "/img/medo-3.png", "/img/medo-4.png", "/img/medo-5.png"];

  //Gerar um número aleatório de 0 a 4
  const numeroAleatorio = Math.floor(Math.random() * imagensAleatorias.length);
    
  //Selecionar aleatoriamente uma imagem da lista de imagens aleatórias
  const imagemAleatoria = imagensAleatorias[numeroAleatorio];

    //Exibir a imagem aleatória no elemento com ID "imagem"
    document.getElementById("medo").querySelector('img').src = imagemAleatoria;
  }

}


function naosei() {
  
  if (contadorCliques === 0) {
    contadorCliques++;
  const imagensAleatorias = ["/img/Nao-Sei-1.png", "/img/Nao-Sei-2.png", 
  "/img/Nao-Sei-3.png", "/img/Nao-Sei-4.png", "/img/Nao-Sei-5.png"];

  //Gerar um número aleatório de 0 a 4
  const numeroAleatorio = Math.floor(Math.random() * imagensAleatorias.length);
    
  //Selecionar aleatoriamente uma imagem da lista de imagens aleatórias
  const imagemAleatoria = imagensAleatorias[numeroAleatorio];

    //Exibir a imagem aleatória no elemento com ID "imagem"
    document.getElementById("naosei").querySelector('img').src = imagemAleatoria;
   
}}

function raiva() {
  
  if (contadorCliques === 0) {
    contadorCliques++;
  const imagensAleatorias = ["/img/Raiva-1.png", "/img/Raiva-2.png", 
  "/img/Raiva-3.png", "/img/Raiva-4.png", "/img/Raiva-5.png"];

  //Gerar um número aleatório de 0 a 4
  const numeroAleatorio = Math.floor(Math.random() * imagensAleatorias.length);
    
  //Selecionar aleatoriamente uma imagem da lista de imagens aleatórias
  const imagemAleatoria = imagensAleatorias[numeroAleatorio];

    //Exibir a imagem aleatória no elemento com ID "imagem"
    document.getElementById("raiva").querySelector('img').src = imagemAleatoria;

    
}}




