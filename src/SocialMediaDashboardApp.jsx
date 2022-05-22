import React from 'react';
import FollowersGrid from './components/FollowersGrid';
import OverviewGrid from './components/OverviewGrid';
import SectionTitle from './components/SectionTitle';
import TopBar from './components/TopBar';

const SocialMediaDashboardApp = () => {
  const sectionOverviewTitle = 'Overview - Today';
  return (
    <>
      <TopBar />
      <FollowersGrid />
      <SectionTitle title={sectionOverviewTitle} />
      <OverviewGrid />
    </>
  );
};

export default SocialMediaDashboardApp;
