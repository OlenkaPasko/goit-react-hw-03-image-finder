import PropTypes from 'prop-types';

const Button = ({ OnLoadMore }) => {
  return (
    <>
      <button type="button" onClick={OnLoadMore} className="button">
        Load More
      </button>
    </>
  );
};

Button.propTypes = {
  OnLoadMore: PropTypes.func.isRequired,
};

export default Button;
