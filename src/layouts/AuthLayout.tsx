import { Outlet } from 'react-router';

import AuthPageCarousel from '../components/AuthPageCarousel';
import logo from '../assets/logo.svg';

const AuthLayout = () => {
  return (
    <>
      <main className="flex flex-column justify-center items-center my-auto w-full h-[100vh]">
        <section className="flex justify-center items-center gap-x-20 w-[80%] h-[80%]">
          <AuthPageCarousel />
          <div className="self-start">
            <img src={logo} alt="logo" className="w-28 h-8 mb-12" />
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
};

export default AuthLayout;
