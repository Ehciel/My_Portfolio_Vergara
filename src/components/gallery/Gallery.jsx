import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './gallery.css';

// Import local images
import image1 from '../../assets/fam1.jpg';
import image2 from '../../assets/fam2.jpg';
import image3 from '../../assets/ojt.jpeg';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: image1,
      title: 'Family Picture',
      description: 'New Year\'s Eve family picture with my girlfriend.',
    },
    {
      id: 2,
      image: image2,
      title: 'Siblings',
      description: 'This is my younger brother and sister.',
    },
    {
      id: 3,
      image: image3,
      title: 'During OJT',
      description: 'The last day of our On-the-Job Training at Caraga State University.',
    },
  ];

  return (
    <section id="gallery">
      <h5>Check out my gallery</h5>
      <h2>Gallery</h2>
      <Swiper
        className="container gallery__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {galleryItems.map((item) => (
          <SwiperSlide className="gallery__item" key={item.id}>
            <div className="gallery__image-container">
              <img src={item.image} alt={item.title} className="gallery__image" />
            </div>
            <h5 className="gallery__title">{item.title}</h5>
            <small className="gallery__description">{item.description}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
