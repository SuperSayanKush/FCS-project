import React from 'react';
import './Wallpaper.css';


function Wallpaper() {
    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/image3.jpg" className="d-block w-100" alt="Wallpaper 1" />
                </div>
                <div className="carousel-item">
                    <img src="/image2.jpg" className="d-block w-100" alt="Wallpaper 2" />
                </div>
                <div className="carousel-item">
                    <img src="/image4.jpeg" className="d-block w-100" alt="Wallpaper 3" />
                </div>
                <div className="carousel-item">
                    <img src="/image5.jpeg" className="d-block w-100" alt="Wallpaper 4" />
                </div>
                <div className="carousel-item">
                    <img src="/image6.jpeg" className="d-block w-100" alt="Wallpaper 5" />
                </div>
                <div className="carousel-item">
                    <img src="/image1.jpg" className="d-block w-100" alt="Wallpaper 6" />
                </div>
                {/* Add more carousel items with relative image paths */}
            </div>
            <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
    );
  }

export default Wallpaper;
