import React from 'react';
import ProductGallery from '../../src/components/ProductGallery'

const Home = () => {
    return (
        <div className='h-full'>
            <h2 id="destacados" className='text-red-500'>PRODUCTOS DESTACADOS</h2>

            <ProductGallery />

            {/* Cards */}
            <h2 id="todos">Todos los vehículos</h2>
            <div className="cards">
                <div className="container mt-4">
                    <div className="row justify-content-center" id="cards-container">

                    </div>
                </div>
            </div>

            {/* Aéreos */}
            <h2 id="aereos">Vehículos Aéreos</h2>
            <div className="cards">
                <div className="container mt-4">
                    <div className="row justify-content-center" id="cards-container-aereos">
                        {/* Aquí puedes agregar tus tarjetas */}
                    </div>
                </div>
            </div>

            {/* Acuáticos */}
            <h2 id="acuaticos">Vehículos Acuáticos</h2>
            <div className="cards">
                <div className="container mt-4">
                    <div className="row justify-content-center" id="cards-container-acuaticos">
                        {/* Aquí puedes agregar tus tarjetas */}
                    </div>
                </div>
            </div>

            {/* Terrestres */}
            <h2 id="terrestres">Vehículos Terrestres</h2>
            <div className="cards">
                <div className="container mt-4">
                    <div className="row justify-content-center" id="cards-container-terrestres">
                        {/* Aquí puedes agregar tus tarjetas */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;