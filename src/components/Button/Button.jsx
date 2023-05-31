import PropTypes from 'prop-types';
import { Btn } from './Button.styled';
const Button = ({ OnLoadMore }) => {
  return (
    <>
      <Btn type="button" onClick={OnLoadMore} className="button">
        Load More
      </Btn>
    </>
  );
};

Button.propTypes = {
  OnLoadMore: PropTypes.func.isRequired,
};

export default Button;
