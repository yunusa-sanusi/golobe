import { Outlet } from 'react-router';

import Navbar from '../components/nav/Navbar';
import Footer from '../components/footer/Footer';

const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
export default RootLayout;
