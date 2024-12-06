import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow } from 'swiper/modules';

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

const SliderGallery: React.FC<{ addToCart: (product: Product) => void }> = ({ addToCart }) => {
  return (
    <div className="w-full h-96 flex justify-center">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-slide flex flex-col items-center justify-center">
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '500px', objectFit: 'contain' }} />
              <button className=" button-comprar" onClick={() => addToCart(product)}>
                Comprar
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderGallery;