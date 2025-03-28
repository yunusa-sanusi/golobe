import { Outlet } from 'react-router';

import Navbar from '../components/nav/Navbar';

const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <footer>Footer</footer>
    </main>
  );
};
export default RootLayout;
