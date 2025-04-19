import { Outlet } from 'react-router';

import HeroCover from '../../components/dashboard/HeroCover';
import DashboardNav from '../../components/dashboard/DashboardNav';

const Dashboard = () => {
  return (
    <section>
      <HeroCover />
      <DashboardNav />
      <Outlet />
    </section>
  );
};

export default Dashboard;
