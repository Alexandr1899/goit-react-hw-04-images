
import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({webformatURL, query, openModalImage, largeImageURL}) => {
        return (
            <GalleryItem>
                <GalleryImage src={webformatURL} alt={query} onClick={openModalImage} data-src={largeImageURL} />
            </GalleryItem>
        )
    }

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    query: PropTypes.string,
    openModalImage: PropTypes.func,
    largeImageURL: PropTypes.string
}