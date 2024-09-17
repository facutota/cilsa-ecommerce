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
  
  const carouselIndicators = document.querySelector('.carousel-indicators');
  const carouselInner = document.querySelector('.carousel-inner');
  
  let index = 0;
  
  const vehiculosArray = Object.entries(vehiculos);
  
  vehiculosArray.forEach(([key, vehicle]) => {
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
  
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
      carouselItem.classList.add('active');
    }
  
    carouselItem.innerHTML = `
      <img src="${vehicle.imagen}" class="d-block w-100 img-slider" alt="${vehicle.nombre}">
      <div class="carousel-caption d-none d-md-block">
        <h5>${vehicle.nombre}</h5>
        <p>Año: ${vehicle.año}</p>
        <p>Precio: $${vehicle.precio.toLocaleString()}</p>
      </div>
    `;
  
    carouselInner.appendChild(carouselItem);
  
    index++;
  });
  
  const cardsContainer = document.getElementById('cards-container');
  
  vehiculosArray.forEach(([key, vehicle]) => {
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
  
    cardsContainer.innerHTML += cardHTML;
  });
  