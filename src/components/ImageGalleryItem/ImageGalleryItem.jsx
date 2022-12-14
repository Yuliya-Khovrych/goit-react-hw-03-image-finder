import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItemImage } from './ImageGalleryItemImage.styled';

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  onSelect,
}) => {
  return (
    <div>
      <ImageGalleryItemImage
        src={webformatURL}
        alt={tags}
        onClick={() => onSelect(largeImageURL)}
      />
    </div>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
  }),
};

// Модальное окно на элементе

//import { Component } from 'react';
//import { Modal } from '../Modal/Modal';

// export class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { id, webformatURL, tags, largeImageURL } = this.props;
//     const { showModal } = this.state;

//     return (
//       <div key={id} onClick={this.toggleModal}>
//         <ImageGalleryItemImage src={webformatURL} alt={tags} width="300" />
//         {showModal && (
//           <Modal
//             largeImageURL={largeImageURL}
//             alt={tags}
//             onClose={this.toggleModal}
//           />
//         )}
//       </div>
//     );
//   }
// }
