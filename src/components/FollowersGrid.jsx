import accounts from '../data/followers';
import FollowerGridCard from './FollowerGridCard';

const FollowersGrid = () => (
  <div className="container-followers">
    {accounts.map((account) => {
      const {
        accountName, followers, dailyNewFollowers, platform,
      } = account;
      return (
        <FollowerGridCard
          key={platform}
          accountName={accountName}
          followers={followers}
          dailyNewFollowers={dailyNewFollowers}
          platform={platform.toLowerCase()}
        />
      );
    })}
  </div>
);

export default FollowersGrid;
