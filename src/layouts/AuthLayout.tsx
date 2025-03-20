import { Outlet } from 'react-router';

import AuthPageCarousel from '../components/AuthPageCarousel';
import logo from '../assets/logo.svg';

const AuthLayout = () => {
  return (
    <>
      <main className="flex flex-column justify-center items-center my-auto w-full md:h-[100vh] py-10">
        <section className="flex justify-center items-center gap-x-20 w-[95%] h-[90%] mx-auto">
          <AuthPageCarousel />
          <div className="self-start w-full md:w-[600px]">
            <img
              src={logo}
              alt="logo"
              className="w-28 h-8 mb-12 hidden md:block"
            />
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
};

export default AuthLayout;
