import PropTypes from 'prop-types';

const SocialMediaIcon = ({ platform }) => {
  const logo = `/src/assets/icon-${platform}.svg`;
  return (
    <img src={logo} alt={`${platform} logo`} />
  );
};

SocialMediaIcon.propTypes = {
  platform: PropTypes.string.isRequired,
};

export default SocialMediaIcon;
