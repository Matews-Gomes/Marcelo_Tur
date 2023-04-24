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

  //Imagens da frota
  function adicionarImagens(imagens) 
  {
    var galeria = document.getElementById("galeria");

    for (var i = 0; i < imagens.length; i++) 
    {
      var a = document.createElement("a");
      a.setAttribute("href", imagens[i].src);
      a.setAttribute("target", "_blank");

      var img = document.createElement("img");
      img.setAttribute("src", imagens[i].src);
      img.setAttribute("alt", imagens[i].alt);
      img.setAttribute("width", imagens[i].width);
      img.setAttribute("height", imagens[i].height);
 
      a.appendChild(img);

      var div = document.createElement("div");
      div.classList.add("card", "shadow-sm");

      div.appendChild(a);

      galeria.appendChild(div);
    }

    galeria.style.display = "flex";
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

  //Imgens das viagens
  document.addEventListener("DOMContentLoaded", function() {
    const images = [
      {src: "/img/IMG-20230405-WA0058.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0059.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0060.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0076.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0078.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0079.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0083.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0084.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0086.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0088.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0099.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0103.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0104.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0107.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0111.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0113.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0114.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0120.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0123.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0122.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0119.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0124.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0125.jpg", alt: "fotos"},
      {src: "/img/IMG-20230405-WA0126.jpg", alt: "fotos"},      
    ];
  
    const itemsPerPage = window.innerWidth < 768 ? 1 : 6;
    const pageCount = Math.ceil(images.length / itemsPerPage);

    window.addEventListener('resize', function(event) {
      if (window.innerWidth < 768) { 
        itemsPerPage = 1; 
        createPagination(); 
        showPage(currentPage);
      } else {
        itemsPerPage = 6; 
        createPagination(); 
        showPage(currentPage); 
      }
    });
  
    let currentPage = 1;
    const container = document.querySelector(".row.image-link");
  
    function showPage(page) {
      container.innerHTML = "";
      for (let i = (page - 1) * itemsPerPage; i < page * itemsPerPage && i < images.length; i++) {
        const column = document.createElement("div");
        column.classList.add("col-lg-4", "mb-4", "mb-lg-0");
  
        const link = document.createElement("a");
        link.href = images[i].src;
        link.target = "_blank";
  
        const image = document.createElement("img");
        image.src = images[i].src;
        image.alt = images[i].alt;
        image.classList.add("w-100", "shadow-1-strong", "rounded", "mb-4");
  
        link.appendChild(image);
        column.appendChild(link);
        container.appendChild(column);
      }
    }
  
    function createPagination() {
      const pagination = document.querySelector(".pagination");
      pagination.innerHTML = "";
      
      const nav = document.createElement("nav");
      nav.setAttribute("aria-label", "Page navigation example");
      
      const ul = document.createElement("ul");
      ul.classList.add("pagination");
    
      const previousButton = document.createElement("li");
      previousButton.classList.add("page-item");
      const previousLink = document.createElement("a");
      previousLink.addEventListener("click", function() {
        if (currentPage > 1) {
            currentPage -= 1;
            showPage(currentPage);
            updatePagination();
        }
      });
    
      previousLink.classList.add("page-link", "text-dark", "fw-bold");
      previousLink.href = "#galery";
      previousLink.innerHTML = '<i class="fa-solid fa-backward"></i> Anterior';
      previousButton.appendChild(previousLink);
      ul.appendChild(previousButton);
    
      const nextButton = document.createElement("li");
      nextButton.classList.add("page-item");
      const nextLink = document.createElement("a");
      nextLink.addEventListener("click", function() {
        if (currentPage < pageCount) {
            currentPage += 1;
            showPage(currentPage);
            updatePagination();
        }
      });

      nextLink.classList.add("page-link", "text-dark","fw-bold");
      nextLink.href = "#galery";
      nextLink.innerHTML = 'Próxima <i class="fa-solid fa-forward"></i>';
      nextButton.appendChild(nextLink);
      ul.appendChild(nextButton);
    
      nav.appendChild(ul);
      pagination.appendChild(nav);
    
      updatePagination();
    }
    
    function updatePagination() {
      const pagination = document.querySelector(".pagination");
      const links = pagination.querySelectorAll("a");
    
      links.forEach(function(link) {
        const page = parseInt(link.innerHTML);
        const li = link.parentNode;
        if (page === currentPage) {
          li.classList.add("active");
        } else {
          li.classList.remove("active");
        }
      });
    }
      
        createPagination();
        showPage(currentPage);
  });
  