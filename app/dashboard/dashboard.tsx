import React from 'react';
import Sidebar from './sidebar';
import TopNav from './topNav';
import CoveragePeriods from './coveragePeriods';

const Dashboard: React.FC = () => {
  return (
    <main className="wrapper flex content-center mx-auto overflow-hidden">
      <Sidebar />
      <section className="main box-border relative w-full bg-[#f1f1f3]">
        <TopNav />
        <div className="main-content box-border m-4">
          <CoveragePeriods />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
