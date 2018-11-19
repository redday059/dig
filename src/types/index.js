import PropTypes from "prop-types";


export const imageType = PropTypes.shape({
  thumb: PropTypes.string.isRequired,
  original: PropTypes.string.isRequired
})

export const productType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  specification: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(imageType).isRequired,
  imgOriginals: PropTypes.arrayOf(PropTypes.string).isRequired,
  imgThumbs: PropTypes.arrayOf(PropTypes.string).isRequired
});

export const productShortType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  specification: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
});

export const commentType = PropTypes.string
