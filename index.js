const vehiculos = {
  auto: {
    nombre: "Mercedes Benz ABC",
    año: 2024,
    precio: 25000000,
    imagen: "./assets/images/auto.jpg",
    destacado: false,
    tipoVehiculo: "terrestre"
  },
  moto: {
    nombre: "Motocicleta",
    año: 2024,
    precio: 10000000,
    imagen: "./assets/images/moto.jpg",
    destacado: false,
    tipoVehiculo: "terrestre"
  },
  barco: {
    nombre: "Crucero",
    año: 2020,
    precio: 50000000,
    imagen: "./assets/images/crucero.jpg",
    destacado: true,
    tipoVehiculo: "acuatico"
  },
  avion: {
    nombre: "Avión",
    año: 2020,
    precio: 50000000,
    imagen: "./assets/images/avion.jpg",
    destacado: false,
    tipoVehiculo: "aereo"
  },
  bicicleta: {
    nombre: "Bicicleta de Montaña",
    año: 2023,
    precio: 50000,
    imagen: "./assets/images/bicicleta.jpg",
    destacado: false,
    tipoVehiculo: "terrestre"
  },
  camion: {
    nombre: "Camión Volvo",
    año: 2021,
    precio: 15000000,
    imagen: "./assets/images/camionVolvo.jpg",
    destacado: true,
    tipoVehiculo: "terrestre"
  },
  furgoneta: {
    nombre: "Furgoneta Ford Transit",
    año: 2022,
    precio: 3000000,
    imagen: "./assets/images/fordTransit.jpeg",
    destacado: false,
    tipoVehiculo: "terrestre"
  },
  camioneta: {
    nombre: "Camioneta Toyota",
    año: 2023,
    precio: 8000000,
    imagen: "./assets/images/camionetaToyota.jpeg",
    destacado: false,
    tipoVehiculo: "terrestre"
  },
  quad: {
    nombre: "Cuatrimoto",
    año: 2022,
    precio: 1500000,
    imagen: "./assets/images/cuatrimoto.jpeg",
    destacado: false,
    tipoVehiculo: "terrestre"
  },
  scooter: {
    nombre: "Scooter Eléctrico",
    año: 2024,
    precio: 25000,
    imagen: "./assets/images/scooterElectrico.jpg",
    destacado: false,
    tipoVehiculo: "terrestre"
  },
  camioneta_chica: {
    nombre: "Camioneta Compacta",
    año: 2022,
    precio: 1200000,
    imagen: "./assets/images/camionetaCompacta.jpg",
    destacado: false,
    tipoVehiculo: "terrestre"
  },
  tren: {
    nombre: "Tren de Carga",
    año: 2018,
    precio: 20000000,
    imagen: "./assets/images/trenCarga.jpeg",
    destacado: false,
    tipoVehiculo: "terrestre"
  },
  globo: {
    nombre: "Globo Aerostático",
    año: 2021,
    precio: 1000000,
    imagen: "./assets/images/globo.jpeg",
    destacado: true,
    tipoVehiculo: "aereo"
  },
  autobus: {
    nombre: "Autobús Escolar",
    año: 2019,
    precio: 4000000,
    imagen: "./assets/images/autobus.jpg",
    destacado: false,
    tipoVehiculo: "terrestre"
  },
  tractor: {
    nombre: "Tractor John Deere",
    año: 2020,
    precio: 6000000,
    imagen: "./assets/images/tractor.jpeg",
    destacado: false,
    tipoVehiculo: "terrestre"
  },
  motoAgua: {
    nombre: "Jet Ski Sea Doo",
    año: 2020,
    precio: 2000000,
    imagen: "./assets/images/motoAgua.jpg",
    destacado: false,
    tipoVehiculo: "acuatico"
  }
};

function insertarCarrusel() {

  const carouselIndicators = document.querySelector('.carousel-indicators');
  const carouselInner = document.querySelector('.carousel-inner');

  let index = 0;

  const vehiculosDestacados = Object.entries(vehiculos).filter(([key, vehicle]) => vehicle.destacado);


  vehiculosDestacados.forEach(([key, vehicle]) => {
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
      <div class="carousel-caption d-none d-md-block custom-caption">
      <h5>${vehicle.nombre}</h5>
      <p>Año: ${vehicle.año}</p>
      <p>Precio: $${vehicle.precio.toLocaleString()}</p>
      </div>
    `;

    carouselInner.appendChild(carouselItem);

    index++;
  });

}
insertarCarrusel()


function insertarCards() {

  const vehiculosArray = Object.entries(vehiculos);


  const cardsContainer = document.getElementById('cards-container');

  vehiculosArray.forEach(([key, vehicle]) => {
    const cardHTML = `
    <div class="col-md-5 col-sm-12 col-lg-2">
      <div class="card mb-4 bg-dark text-light alto-card">
        <img src="${vehicle.imagen}" class="card-img-top" alt="${vehicle.nombre}">
        <div class="card-body">
          <h5 class="card-title">${vehicle.nombre}</h5>
          <ul class="list-group-item list-group-flush">
            <li class="list-group-item">Año: ${vehicle.año}</li>
            <li class="list-group-item">Precio: $${vehicle.precio.toLocaleString()}</li>
          </ul>
          <a href="#" class="btn btn-secondary">Ver más</a>
        </div>
      </div>
    </div>
    `;

    cardsContainer.innerHTML += cardHTML;
  });
}
insertarCards()
function insertarCardsAereos() {
  const vehiculosArray = Object.entries(vehiculos);

  const cardsContainer = document.getElementById('cards-container-aereos');

  cardsContainer.innerHTML = '';

  vehiculosArray.forEach(([key, vehicle]) => {
    if (vehicle.tipoVehiculo === 'aereo') {
      const cardHTML = `
      <div class="col-md-4">
        <div class="card mb-4 bg-dark text-light">
          <img src="${vehicle.imagen}" class="card-img-top" alt="${vehicle.nombre}">
          <div class="card-body">
            <h5 class="card-title">${vehicle.nombre}</h5>
            <ul class="list-group-item list-group-flush">
              <li class="list-group-item">Año: ${vehicle.año}</li>
              <li class="list-group-item">Precio: $${vehicle.precio.toLocaleString()}</li>
            </ul>
          <a href="#" class="btn btn-secondary">Ver más</a>
          </div>
        </div>
      </div>
      `;

      cardsContainer.innerHTML += cardHTML;
    }
  });
}
insertarCardsAereos();

function insertarCardsAcuaticos() {
  const vehiculosArray = Object.entries(vehiculos);

  const cardsContainer = document.getElementById('cards-container-acuaticos');

  cardsContainer.innerHTML = '';

  vehiculosArray.forEach(([key, vehicle]) => {
    if (vehicle.tipoVehiculo === 'acuatico') {
      const cardHTML = `
      <div class="col-md-4">
        <div class="card mb-4 bg-dark text-light">
          <img src="${vehicle.imagen}" class="card-img-top" alt="${vehicle.nombre}">
          <div class="card-body">
            <h5 class="card-title">${vehicle.nombre}</h5>
            <ul class="list-group-item list-group-flush">
              <li class="list-group-item">Año: ${vehicle.año}</li>
              <li class="list-group-item">Precio: $${vehicle.precio.toLocaleString()}</li>
            </ul><a href="#" class="btn btn-secondary">Ver más</a>
          </div>
        </div>
      </div>
      `;

      cardsContainer.innerHTML += cardHTML;
    }
  });
}
insertarCardsAcuaticos();

function insertarCardsTerrestres() {
  const vehiculosArray = Object.entries(vehiculos);

  const cardsContainer = document.getElementById('cards-container-terrestres');

  cardsContainer.innerHTML = '';

  vehiculosArray.forEach(([key, vehicle]) => {
    if (vehicle.tipoVehiculo === 'terrestre') {
      const cardHTML = `
      <div class="col-md-4">
        <div class="card mb-4 bg-dark text-light">
          <img src="${vehicle.imagen}" class="card-img-top" alt="${vehicle.nombre}">
          <div class="card-body">
            <h5 class="card-title">${vehicle.nombre}</h5>
            <ul class="list-group-item list-group-flush">
              <li class="list-group-item">Año: ${vehicle.año}</li>
              <li class="list-group-item">Precio: $${vehicle.precio.toLocaleString()}</li>
            </ul>
            <a href="#" class="btn btn-secondary">Ver más</a>
          </div>
        </div>
      </div>
      `;

      cardsContainer.innerHTML += cardHTML;
    }
  });
}
insertarCardsTerrestres();