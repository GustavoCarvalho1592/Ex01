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
  const imagensAleatorias = ["/img/ansiedade1.jpg", "/img/ansiedade2.jpg", 
  "/img/ansiedade3.jpg", "/img/ansiedade4.jpg", "/img/ansiedade5.jpg"];

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
  const imagensAleatorias = ["/img/alegria1.jpg", "/img/alegria2.jpg", 
  "/img/alegria3.jpg", "/img/alegria4.jpg","/img/alegria5.jpg"];

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

  const imagensAleatorias = ["/img/medo1.jpg", "/img/medo2.jpg", 
  "/img/medo3.jpg", "/img/medo4.jpg", "/img/medo5.jpg"];

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
  const imagensAleatorias = ["/img/NaoSei1.jpg", "/img/NaoSei2.jpg", 
  "/img/NaoSei3.jpg", "/img/NaoSei4.jpg", "/img/NaoSei5.jpg"];

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
  const imagensAleatorias = ["/img/Raiva1.jpg", "/img/Raiva2.jpg", 
  "/img/Raiva3.jpg", "/img/Raiva4.jpg", "/img/Raiva5.jpg"];

  //Gerar um número aleatório de 0 a 4
  const numeroAleatorio = Math.floor(Math.random() * imagensAleatorias.length);
    
  //Selecionar aleatoriamente uma imagem da lista de imagens aleatórias
  const imagemAleatoria = imagensAleatorias[numeroAleatorio];

    //Exibir a imagem aleatória no elemento com ID "imagem"
    document.getElementById("raiva").querySelector('img').src = imagemAleatoria;

    
}}




