import PropTypes from 'prop-types';

const FollowerGridCard = ({
  accountName, followers, dailyNewFollowers, platform,
}) => {
  console.log(accountName, followers, dailyNewFollowers, platform);
  return (
    <div>
      FollowerGridCard
      <p>{accountName}</p>
      <p>{followers}</p>
      <p>{dailyNewFollowers}</p>
      <p>{platform}</p>
    </div>

  );
};

FollowerGridCard.propTypes = {
  accountName: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  dailyNewFollowers: PropTypes.number.isRequired,
  platform: PropTypes.string.isRequired,
};

export default FollowerGridCard;
