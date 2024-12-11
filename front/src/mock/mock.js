const vehiculos = {
    auto: {
      nombre: "Mercedes Benz ABC",
      año: 2024,
      precio: 25000000,
      imagen: "./assets/images/auto.jpg",
      destacado: false,
      tipoVehiculo: "terrestre",
      descripcion: "El ABC, Active Body Control, es el sistema de suspensión hidroneumática controlada electrónicamente que emplea Mercedes-Benz para eliminar el balanceo de la carrocería durante las maniobras de conducción, como las mencionadas anteriormente."
    },
    moto: {
      nombre: "Motocicleta",
      año: 2024,
      precio: 10000000,
      imagen: "./assets/images/moto.jpg",
      destacado: false,
      tipoVehiculo: "terrestre",
      descripcion: "Vehículo automóvil de dos ruedas impulsado por un motor, de cilindrada superior a 50 cc., si es de combustión interna, y con una velocidad máxima por construcción superior a 45 Km/h."
    },
    barco: {
      nombre: "Crucero",
      año: 2020,
      precio: 50000000,
      imagen: "./assets/images/crucero.jpg",
      destacado: true,
      tipoVehiculo: "acuatico",
      descripcion: "Un crucero es un tipo de barco de pasajeros para realizar viajes de placer."
    },
    avion: {
      nombre: "Avión",
      año: 2020,
      precio: 50000000,
      imagen: "./assets/images/avion.jpg",
      destacado: false,
      tipoVehiculo: "aereo",
      descripcion: "Es un vehículo, provisto de alas y uno o varios motores, capaz de desplazarse por el aire."
    },
    bicicleta: {
      nombre: "Bicicleta de Montaña",
      año: 2023,
      precio: 50000,
      imagen: "./assets/images/bicicleta.jpg",
      destacado: false,
      tipoVehiculo: "terrestre",
      descripcion: "Los cuadros de estas bicicletas pueden ser de aluminio, fibra de carbono o titanio y suelen tener un tubo superior inclinado que permite a los ciclistas un mayor control sobre el terreno accidentado con su capacidad de doblar las rodillas al saltar los obstáculos en su camino."
    },
    camion: {
      nombre: "Camión Volvo",
      año: 2021,
      precio: 15000000,
      imagen: "./assets/images/camionVolvo.jpg",
      destacado: true,
      tipoVehiculo: "terrestre",
      descripcion: "Puede elegir entre camiones que funcionan con electricidad, gas o diésel. "
    },
    furgoneta: {
      nombre: "Furgoneta Ford Transit",
      año: 2022,
      precio: 3000000,
      imagen: "./assets/images/fordTransit.jpeg",
      destacado: false,
      tipoVehiculo: "terrestre",
      descripcion: "El motor Panther con caja automática de 10 velocidades y los distintos modos de conducción, Eco, Normal, resbaladizo son algunos de los equipamientos pensados para facilitar el trabajo diario."
    },
    camioneta: {
      nombre: "Camioneta Toyota",
      año: 2023,
      precio: 8000000,
      imagen: "./assets/images/camionetaToyota.jpeg",
      destacado: false,
      tipoVehiculo: "terrestre",
      descripcion: "La nueva Toyota Hilux presenta un nuevo diseño que le da una mayor robustez, dándole un carácter fuerte, además de incorporar más potencia a su motor. Los cambios en la suspensión le brindan un mayor confort de marcha, haciendo de la Hilux un aliado ideal para el trabajo pero también para su rol como pick-up recreativa. Además, suma tecnología de última generación gracias al paquete de seguridad Toyota Safety Sense, y un multimedia JBL con Android Auto y Car Play."
    },
    quad: {
      nombre: "Cuatrimoto",
      año: 2022,
      precio: 1500000,
      imagen: "./assets/images/cuatrimoto.jpeg",
      destacado: false,
      tipoVehiculo: "terrestre",
      descripcion: "Vehículo de cuatro ruedas parecido a una motocicleta, con neumáticos de baja presión, con un asiento en el que el conductor maneja a horcajadas sobre él, disponiendo de manubrios para el control de la dirección."
    },
    scooter: {
      nombre: "Scooter Eléctrico",
      año: 2024,
      precio: 25000,
      imagen: "./assets/images/scooterElectrico.jpg",
      destacado: false,
      tipoVehiculo: "terrestre",
      descripcion: "Los e-scooters suelen tener un diseño compacto y ligero, con un manillar para dirigir y un sistema de frenos. El motor eléctrico se encuentra ubicado en la base de la plataforma y es alimentado por una batería recargable. Los usuarios pueden acelerar y frenar mediante un gatillo o palanca en el manillar."
    },
    camioneta_chica: {
      nombre: "Camioneta Compacta",
      año: 2022,
      precio: 1200000,
      imagen: "./assets/images/camionetaCompacta.jpg",
      destacado: false,
      tipoVehiculo: "terrestre",
      descripcion: "Un vehículo utilitario deportivo compacto o SUV compacto es una clase de vehículo utilitario deportivo pequeño, que es más grande que un vehículo utilitario deportivo, pero más pequeño que un vehículo utilitario deportivo."
    },
    tren: {
      nombre: "Tren de Carga",
      año: 2018,
      precio: 20000000,
      imagen: "./assets/images/trenCarga.jpeg",
      destacado: false,
      tipoVehiculo: "terrestre",
      descripcion: "También denominado tren de mercancías o tren mercante) es una composición formada por una o más locomotoras de gran potencia y una serie de vagones preparados para el transporte de carga sobre una vía férrea."
    },
    globo: {
      nombre: "Globo Aerostático",
      año: 2021,
      precio: 1000000,
      imagen: "./assets/images/globo.jpeg",
      destacado: true,
      tipoVehiculo: "aereo",
      descripcion: "Es una aeronave aerostática no propulsada que se sirve del principio de los fluidos de Arquímedes para volar, entendiendo el aire como un fluido."
    },
    autobus: {
      nombre: "Autobús Escolar",
      año: 2019,
      precio: 4000000,
      imagen: "./assets/images/autobus.jpg",
      destacado: false,
      tipoVehiculo: "terrestre",
      descripcion: "Autobús de servicio de transporte para los alumnos de escuelas primarias. Se trata por lo general de autobuses pequeños o medianos, por lo general de color amarillo o naranja."
    },
    tractor: {
      nombre: "Tractor John Deere",
      año: 2020,
      precio: 6000000,
      imagen: "./assets/images/tractor.jpeg",
      destacado: false,
      tipoVehiculo: "terrestre",
      descripcion: "Pueden realizar trabajos industriales o agrícolas. Tienen una alta capacidad de tracción Estructura fuerte y rígida. Baja velocidad."
    },
    motoAgua: {
      nombre: "Jet Ski Sea Doo",
      año: 2020,
      precio: 2000000,
      imagen: "./assets/images/motoAgua.jpg",
      destacado: false,
      tipoVehiculo: "acuatico",
      descripcion: "Obtiene su asombrosa potencia de su motor interno Rotax , y el último motor de moto acuática personal de 325 HP brinda la potencia que necesita para perseguir puestas de sol Y un rendimiento en alta mar sin concesiones."
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
            <a href="#" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal${vehicle.nombre.replaceAll(" ","")}">Ver más</a>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal${vehicle.nombre.replaceAll(" ","")}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${vehicle.nombre}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img src="${vehicle.imagen}" class="card-img-top mb-4" alt="${vehicle.nombre}">
            <ul class="list-group-item list-group-flush">
              <li class="list-group-item"><u><b>Año</b></u>: ${vehicle.año}</li>
              <li class="list-group-item"><u><b>Precio</b></u>: $${vehicle.precio.toLocaleString()}</li>
              <li class="list-group-item"><u><b>Descripción</b></u>: ${vehicle.descripcion}</li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
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