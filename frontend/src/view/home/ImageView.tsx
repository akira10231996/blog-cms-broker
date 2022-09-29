import { CardMedia } from '@mui/material';
import PropTypes from 'prop-types';

function ImageView({ value, sx }) {
  const url = value && value[0] && value[0].downloadUrl;
  const alt = value && value[0] && value[0].name;
  return (
    <CardMedia
      component="img"
      src={url}
      alt={alt}
      sx={{
        margin: 0,
        borderRadius: 0,
        maxWidth: '100%',
        ...sx,
      }}
    />
  );
}

ImageView.propTypes = {
  value: PropTypes.any.isRequired,
  sx: PropTypes.any,
};

export default ImageView;
