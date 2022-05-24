import PropTypes from 'prop-types';
import SocialMediaIcon from './SocialMediaIcon';

const FollowerGridCard = ({
  accountName, followers, dailyNewFollowers, platform,
}) => {
  const newFollowersIcon = (dailyNewFollowers >= 0) ? '/src/assets/icon-up.svg' : '/src/assets/icon-down.svg';
  const statusClass = (dailyNewFollowers >= 0) ? 'status-up' : 'status-down';
  const followersText = (platform === 'youtube') ? 'SUBSCRIBERS' : 'FOLLOWERS';
  return (
    <div className={`account-card ${platform}`}>
      <div className="account-name">
        <SocialMediaIcon platform={platform} />
        <h3>{accountName}</h3>
      </div>
      <div className="account-followers">
        {followers}
        <p>{followersText}</p>
      </div>
      <p className={`account-followers-status ${statusClass}`}>
        <img src={newFollowersIcon} alt="Status logo" />
        {` ${dailyNewFollowers} Today`}
      </p>
    </div>

  );
};

FollowerGridCard.propTypes = {
  accountName: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  dailyNewFollowers: PropTypes.number.isRequired,
  platform: PropTypes.string.isRequired,
};

export default FollowerGridCard;
