import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { GalleryList } from "./ImageGallery.styled";
import PropTypes from 'prop-types';

export const ImageGallery = ({imagesArray, openModalImage, query}) => {
        return (
            <GalleryList>
                {imagesArray.map(image => {
                    const {id, webformatURL, largeImageURL} = image
                    return (
                        <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} openModalImage={openModalImage} query={query} />
                    )
                })}
            </GalleryList>
        )
    }

ImageGallery.propTypes = {
    imagesArray: PropTypes.arrayOf(PropTypes.object)
}