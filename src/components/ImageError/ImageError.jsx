
import PropTypes from 'prop-types';

const  ImageError = ({ message }) => {
  return (
    <div role="alert">
      <img src="" width="240" alt="" />
      <p>{message}</p>
    </div>
  );
}

ImageError.propTypes = {
  message: PropTypes.string,
};
export default ImageError;