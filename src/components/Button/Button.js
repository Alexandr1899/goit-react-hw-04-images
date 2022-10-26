
import { LoadMoreBTN } from "./Button.styled";
import PropTypes from 'prop-types';

export const Button = ({loadMore}) =>  {
        return (
            <LoadMoreBTN type="button" onClick={loadMore}>Load more</LoadMoreBTN>
        )
    }


Button.propTypes = {
    loadMore: PropTypes.func
}