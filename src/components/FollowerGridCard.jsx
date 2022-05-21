import PropTypes from 'prop-types';

const FollowerGridCard = ({
  accountName, followers, dailyNewFollowers, platform,
}) => {
  const logo = `/src/assets/icon-${platform.toLowerCase()}.svg`;
  const newFollowersIcon = (dailyNewFollowers >= 0) ? '/src/assets/icon-up.svg' : '/src/assets/icon-down.svg';
  return (
    <div className="account-card">
      <div className="account-name">
        <img src={logo} alt={`${platform} logo`} />
        <h2>{accountName}</h2>
      </div>
      <p className="account-followers">{followers}</p>
      <p>FOLLOWERS</p>
      <p className="account-followers-status">
        <img src={newFollowersIcon} alt="Status logo" />
        {' '}
        {dailyNewFollowers}
      </p>
      <hr />
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
