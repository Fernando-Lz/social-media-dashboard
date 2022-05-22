import accountStatus from '../data/overview';
import OverviewGridCard from './OverviewGridCard';

const OverviewGrid = () => (
  <div className="container-overview">

    {accountStatus.map((account) => {
      const {
        platform, likes, dailyGrowLikes, interactions, dailyGrowInteraction, title1, title2,
      } = account;

      return (
        <>
          <OverviewGridCard
            className="overview-card"
            title={title1}
            status={interactions}
            grow={dailyGrowInteraction}
            platform={platform.toLowerCase()}
          />
          <OverviewGridCard
            className="overview-card"
            title={title2}
            status={likes}
            grow={dailyGrowLikes}
            platform={platform.toLowerCase()}
          />
        </>
      );
    })}
  </div>
);

export default OverviewGrid;
