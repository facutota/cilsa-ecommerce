const vehiculos = {
    auto: {
      nombre: "Mercedes Benz ABC",
      año: 2024,
      precio: 25000000,
      imagen: "/cilsa-ecommerce/assets/images/auto.jpg"
    },
    moto: {
      nombre: "Motocicleta",
      año: 2024,
      precio: 10000000,
      imagen: "/cilsa-ecommerce/assets/images/moto.jpg"
    },
    barco: {
      nombre: "Crucero",
      año: 2020,
      precio: 50000000,
      imagen: "/cilsa-ecommerce/assets/images/crucero.jpg"
    },
    avion: {
        nombre: "Avion",
        año: 2020,
        precio: 50000000,
        imagen: "/cilsa-ecommerce/assets/images/avion.jpg"
      }

  };
  
  // Obtener los contenedores del carrusel
  const carouselIndicators = document.querySelector('.carousel-indicators');
  const carouselInner = document.querySelector('.carousel-inner');
  
  // Inicializar índice para los indicadores
  let index = 0;
  
  // Recorrer el objeto vehiculos
  for (let key in vehiculos) {
    // Crear elementos del carrusel
    const vehicle = vehiculos[key];
  
    // Crear el indicador de cada slide
    const indicator = document.createElement('button');
    indicator.type = 'button';
    indicator.setAttribute('data-bs-target', '#carouselExampleCaptions');
    indicator.setAttribute('data-bs-slide-to', index);
    indicator.setAttribute('aria-label', `Slide ${index + 1}`);
    if (index === 0) {
      indicator.classList.add('active');
      indicator.setAttribute('aria-current', 'true');
    }
    carouselIndicators.appendChild(indicator);
  
    // Crear el slide de cada vehículo
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
      carouselItem.classList.add('active');
    }
  
    // Crear imagen y contenido de la card
    carouselItem.innerHTML = `
      <img src="${vehicle.imagen}" class="d-block w-100 img-slider" alt="${vehicle.nombre}">
      <div class="carousel-caption d-none d-md-block">
        <h5>${vehicle.nombre}</h5>
        <p>Año: ${vehicle.año}</p>
        <p>Precio: $${vehicle.precio.toLocaleString()}</p>
      </div>
    `;
  
    // Añadir el slide al carrusel
    carouselInner.appendChild(carouselItem);
  
    // Incrementar índice para el siguiente slide
    index++;
  }
  

  // Seleccionar el contenedor donde se añadirán las tarjetas
const cardsContainer = document.getElementById('cards-container');

// Recorrer el objeto vehiculos
for (let key in vehiculos) {
  const vehicle = vehiculos[key];

  // Crear la estructura de la tarjeta
  const cardHTML = `
    <div class="col-md-4">
      <div class="card mb-4">
        <img src="${vehicle.imagen}" class="card-img-top" alt="${vehicle.nombre}">
        <div class="card-body">
          <h5 class="card-title">${vehicle.nombre}</h5>
          <p class="card-text">Año: ${vehicle.año}</p>
          <p class="card-text">Precio: $${vehicle.precio.toLocaleString()}</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
  `;

  // Insertar la tarjeta en el contenedor
  cardsContainer.innerHTML += cardHTML;
}