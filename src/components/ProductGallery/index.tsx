import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, EffectCube } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';  // Importante: importar los estilos del efecto

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Producto 1', image: '/images/avion.jpg' },
  { id: 2, name: 'Producto 2', image: '/images/moto.jpg' },
  { id: 3, name: 'Producto 3', image: '/images/tractor.jpeg' },
  // Añade más productos según sea necesario
];

const ProductGallery: React.FC = () => {
  return (
    <div className="w-full h-96 flex justify-center">
      <Swiper
        modules={[Navigation, Pagination, EffectCube]}  // Añadir EffectFade a los módulos
        slidesPerView={1}  // Para el efecto fade, debe ser 1
        effect={'fade'}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        navigation
        pagination={{ clickable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{ width: '100%' }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-slide flex flex-col items-center">
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductGallery;