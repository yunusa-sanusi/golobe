import { Outlet } from 'react-router';

import Navbar from '../components/nav/Navbar';
import Footer from '../components/footer/Footer';

const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <main className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto pt-10 pb-14">
        <Outlet />
      </main>
      <Footer />
    </main>
  );
};
export default RootLayout;
