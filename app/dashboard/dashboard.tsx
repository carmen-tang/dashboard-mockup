import React from 'react';
import Sidebar from './sidebar';
import TopNav from './topNav';
import CoveragePeriods from './coveragePeriods';

const Dashboard: React.FC = () => {
  return (
    // sm:max-w-screen-xl
    <div className="wrapper flex content-center mx-auto">
      <Sidebar />
      <section className="main box-border relative w-full bg-[#f1f1f3]">
        <TopNav />
        <div className="main-content box-border m-4">
          <CoveragePeriods />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
