//Valaidação dos dados do formulario
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  function adicionarImagens(imagens) {
    // selecionando o elemento que receberá as imagens
    var galeria = document.getElementById("galeria");
    
    // adicionando as imagens dinamicamente
    for (var i = 0; i < imagens.length; i++) {
      // criando o elemento 'a'
      var a = document.createElement("a");
      a.setAttribute("href", imagens[i].src);
      a.setAttribute("target", "_blank");
    
      // criando o elemento 'img'
      var img = document.createElement("img");
      img.setAttribute("src", imagens[i].src);
      img.setAttribute("alt", imagens[i].alt);
      img.setAttribute("width", imagens[i].width);
      img.setAttribute("height", imagens[i].height);
    
      // adicionando 'img' como filho de 'a'
      a.appendChild(img);
    
      // criando o elemento 'div'
      var div = document.createElement("div");
      div.classList.add("card", "shadow-sm");
    
      // adicionando 'a' como filho de 'div'
      div.appendChild(a);
    
      // adicionando 'div' como filho de 'galeria'
      galeria.appendChild(div);
    }

    galeria.style.display = "flex";
  
    // definindo a largura inicial das divs filhas de galeria
    var larguraDivFilha = "600px";
    var divsFilhas = galeria.querySelectorAll(".card");
    for (var i = 0; i < divsFilhas.length; i++) {
      divsFilhas[i].style.flexBasis = larguraDivFilha;
  }

  new Glider(galeria, {
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    dots: "#dots",
    arrows: {
      prev: "#prev",
      next: "#next"
    },
    responsive: [
      {       
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
          scrollLock: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: false,
          scrollLock: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          dots: false,
          arrows: false,
          scrollLock: true
        }
      }
    ]
  });
}  

  var imagens = [ 
    {src: "/img/IMG-20230405-WA0006.jpg", alt: "imagem", width:"100%", height: "300"},   
    {src: "/img/IMG-20230405-WA0002.jpg", alt: "imagem", width:"100%", height: "300"},   
    {src: "/img/IMG-20230405-WA0038.jpg", alt: "imagem", width:"100%", height: "300"},
    {src: "/img/IMG-20230405-WA0004.jpg", alt: "imagem", width:"100%", height: "300"},
    {src: "/img/IMG-20230405-WA0039.jpg", alt: "imagem", width:"100%", height: "300"},
    {src: "/img/IMG-20230405-WA0009.jpg", alt: "imagem", width:"100%", height: "300"},
    {src: "/img/IMG-20230405-WA0016.jpg", alt: "imagem", width:"100%", height: "300"},
    {src: "/img/IMG-20230405-WA0040.jpg", alt: "imagem", width:"100%", height: "300"},
    {src: "/img/IMG-20230405-WA0018.jpg", alt: "imagem", width:"100%", height: "300"},
    {src: "/img/IMG-20230405-WA0054.jpg", alt: "imagem", width:"100%", height: "300"},
    {src: "/img/IMG-20230405-WA0049.jpg", alt: "imagem", width:"100%", height: "300"},
    {src: "/img/IMG-20230405-WA0051.jpg", alt: "imagem", width:"100%", height: "300"},
    {src: "/img/IMG-20230405-WA0042.jpg", alt: "imagem", width:"100%", height: "300"},
    {src: "/img/IMG-20230405-WA0066.jpg", alt: "imagem", width:"100%", height: "300"}
  ];
  
  adicionarImagens(imagens);