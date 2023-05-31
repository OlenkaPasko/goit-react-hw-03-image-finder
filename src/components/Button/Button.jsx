import PropTypes from 'prop-types';

export const Button = ({ OnLoadMore }) => {
  return (
    <>
      <Button type="button" onClick={OnLoadMore}>
        Load More
      </Button>
    </>
  );
};

Button.propTypes = {
  OnLoadMore: PropTypes.func.isRequired,
};


