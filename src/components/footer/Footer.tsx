import { MdOutlineFacebook } from 'react-icons/md';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';

import FooterItemsGroup from './FooterItemsGroup';
import logo from '../../assets/logo1.svg';

const Footer = () => {
  return (
    <footer className="bg-secondary-bg py-10">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-y-10 lg:gap-y-0">
        <div className="flex flex-col gap-y-5">
          <div className="w-30 h-10">
            <img src={logo} alt="logo" className="w-full h-full" />
          </div>
          <div className="flex gap-x-3">
            <MdOutlineFacebook size={20} className="text-primary-text" />
            <FaSquareXTwitter size={20} className="text-primary-text" />
            <IoLogoYoutube size={20} className="text-primary-text" />
            <RiInstagramFill size={20} className="text-primary-text" />
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:items-start gap-y-8 lg:gap-x-14">
          <FooterItemsGroup
            groupHeader="Destination"
            groupItems={[
              { text: 'Canada', url: '/' },
              { text: 'Alaska', url: '/' },
              { text: 'France', url: '/' },
              { text: 'Iceland', url: '/' },
            ]}
          />
          <FooterItemsGroup
            groupHeader="Our Activities"
            groupItems={[
              { text: 'Northern Lights', url: '/' },
              { text: 'Cruising & Sailing', url: '/' },
              { text: 'Multi-activities', url: '/' },
              { text: 'Kayaking', url: '/' },
            ]}
          />
          <FooterItemsGroup
            groupHeader="Travel Blogs"
            groupItems={[
              { text: 'Bali Travel Guide', url: '/' },
              { text: 'Sri Lanks Travel Guide', url: '/' },
              { text: 'Peru Travel Guide', url: '/' },
              { text: 'Egypt Travel Guide', url: '/' },
            ]}
          />
          <FooterItemsGroup
            groupHeader="About Us"
            groupItems={[
              { text: 'Our Story', url: '/' },
              { text: 'Work with us', url: '/' },
            ]}
          />
          <FooterItemsGroup
            groupHeader="Contact Us"
            groupItems={[
              { text: 'Our Story', url: '/' },
              { text: 'Work with us', url: '/' },
            ]}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
