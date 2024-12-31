import React, { useState } from 'react';
import Sidebar from './sidebar';
import TopNav from './topNav';
import CoveragePeriods from './coveragePeriods';

const Dashboard: React.FC = () => {
  const navStructure = [
    { category: '', links: [{ name: 'Inbox', href: '#' }] },
    { category: 'Perspective Groups', links: [{ name: 'Perspective Groups', href: '#' }] },
    {
      category: 'Enrollment',
      links: [
        { name: 'Pre Coverage Periods', href: '#' },
        { name: 'Coverage Periods', href: '#' },
        { name: 'Enrollment Tasks', href: '#' },
        { name: 'Customer Tickets', href: '#' },
      ],
    },
    { category: 'Discrepancies', links: [{ name: 'Enrollment Discrepancies', href: '#' }] },
    {
      category: 'Reports',
      links: [
        { name: 'Member Counts', href: '#' },
        { name: 'SLA Performance', href: '#' },
        { name: 'Time to Production', href: '#' },
      ],
    },
    {
      category: 'Admin',
      links: [
        { name: 'Users', href: '#' },
        { name: 'Account Settings', href: '#' },
      ],
    },
  ];

  const topNavLeft = ['Dashboard', 'Profile'];
  const topNavRight = ['Login', 'Sign Up'];

  return (
    // sm:max-w-screen-xl
    <div className="wrapper flex content-center mx-auto">
      <Sidebar navStructure={navStructure} />
      <section className="main box-border relative w-full bg-[#f1f1f3]">
        <TopNav topNavLeft={topNavLeft} topNavRight={topNavRight} />
        <div className="main-content box-border m-4">
          <CoveragePeriods />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
