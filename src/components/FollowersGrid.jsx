import accounts from '../data/followers';
import FollowerGridCard from './FollowerGridCard';

const FollowersGrid = () => {
  console.log(accounts);
  return (
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
            platform={platform}
          />
        );
      })}
    </div>
  );
};

export default FollowersGrid;
