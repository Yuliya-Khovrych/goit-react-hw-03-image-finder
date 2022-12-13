import { Component } from 'react';
import { fetchImages } from 'api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    isLoading: false,
    selectedImage: '',
    showModal: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { searchQuery } = this.state;
    try {
      this.setState({ isLoading: true, error: null });
      const { hits } = await fetchImages(searchQuery);
      console.log(hits);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
      }));
    } catch {
      this.setState({
        error: 'We`re sorry, something went wrong',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleFormSubmit = searchQuery => {
    this.setState({
      images: [],
      page: 1,
      searchQuery: searchQuery,
      error: null,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  selectImage = largeImageURL => {
    this.setState({
      selectedImage: largeImageURL,
      showModal: true,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      selectedImage: '',
    }));
  };

  render() {
    const { images, error, isLoading, showModal, selectedImage } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />;
        <ImageGallery images={images} onSelect={this.selectImage} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {isLoading && <Loader />};
        {images.length >= 12 && (
          <Button onClick={this.loadMore} />
        )}
        {showModal && (
          <Modal
            largeImageURL={selectedImage}
            onClose={this.toggleModal}
          ></Modal>
        )}
      </>
    );
  }
}
