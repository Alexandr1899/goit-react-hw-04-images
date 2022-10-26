
import { ModalImage } from "./Modal.styled";
import PropTypes from 'prop-types';

export const ModalChild = ({modalSrc, query}) =>  {
        return (
            <ModalImage src={modalSrc} alt={query}/>
        )
    }

ModalChild.propTypes = {
    modalSrc: PropTypes.string,
    query: PropTypes.string
}