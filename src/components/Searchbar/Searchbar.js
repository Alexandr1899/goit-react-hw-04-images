
import { Header } from "./Searchbar.styled";
import PropTypes from 'prop-types';

export const Searchbar = ({children}) => {
        return (
            <Header>
                {children}
            </Header>
        )
    }

Searchbar.propTypes = {
    children: PropTypes.element
}