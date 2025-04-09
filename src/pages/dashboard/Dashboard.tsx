import { Outlet } from 'react-router';

import HeroCover from '../../components/dashboard/HeroCover';

const Dashboard = () => {
  return (
    <section>
      <HeroCover />
      <h1>Dashboard Navigation</h1>
      <Outlet />
    </section>
  );
};

export default Dashboard;
