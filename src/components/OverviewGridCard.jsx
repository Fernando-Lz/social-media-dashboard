import PropTypes from 'prop-types';
import SocialMediaIcon from './SocialMediaIcon';

const OverviewGridCard = ({
  title, status, grow, platform,
}) => (
  <div className="overview-card">
    <div className="interaction-title">
      <h3>{title}</h3>
      <SocialMediaIcon platform={platform} />
    </div>
    <div className="interaction-stats">
      <p>{status}</p>
      <p>{grow}</p>
    </div>
  </div>
);

OverviewGridCard.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  grow: PropTypes.number.isRequired,
  platform: PropTypes.string.isRequired,
};

export default OverviewGridCard;
