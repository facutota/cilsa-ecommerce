import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import useCartStore from '../../store/UseCartStore';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube'; 
import { Button } from '@mui/material';
import API_URL from '../../config/api';

const SliderGallery = () => {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const fetchRandomProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/products/random`); 
        const data = await response.json();
        setProducts(data); 
      } catch (error) {
        console.error('Error al obtener productos aleatorios:', error);
      }
    };

    fetchRandomProducts();
  }, []);

  return (
    <div className="w-full h-96 flex justify-center">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={2} 
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
              <Button variant="contained" onClick={() => addToCart(product)}>
                Comprar
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderGallery;