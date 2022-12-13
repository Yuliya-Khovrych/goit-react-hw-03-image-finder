import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery, GalleryItem } from './ImageGallery.styled';

export const ImageGallery = ({ images, onSelect }) => {
  return (
    <Gallery>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <GalleryItem key={id}>
          <ImageGalleryItem
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            alt={tags}
            onSelect={onSelect}
          />
        </GalleryItem>
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  onSelect: PropTypes.func.isRequired,
};
