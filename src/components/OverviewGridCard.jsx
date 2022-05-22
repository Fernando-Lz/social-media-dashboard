import PropTypes from 'prop-types';
import SocialMediaIcon from './SocialMediaIcon';

const OverviewGridCard = ({
  title, status, grow, platform,
}) => {
  const statusIcon = (grow >= 0) ? '/src/assets/icon-up.svg' : '/src/assets/icon-down.svg';
  const statusClass = (grow >= 0) ? 'status-up' : 'status-down';
  return (
    <div className="overview-card">
      <div className="interaction-title">
        <h3>{title}</h3>
        <SocialMediaIcon platform={platform} />
      </div>
      <div className="interaction-stats">
        <p>{status}</p>
        <p className={statusClass}>
          <img src={statusIcon} alt="Status logo" />
          {`${grow}%`}
        </p>
      </div>
    </div>
  );
};

OverviewGridCard.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  grow: PropTypes.number.isRequired,
  platform: PropTypes.string.isRequired,
};

export default OverviewGridCard;
