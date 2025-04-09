import { MdEdit } from 'react-icons/md';
import { IoCloudUploadSharp } from 'react-icons/io5';

import profilePicture from '../../assets/profile_pic.svg';
import coverImage from '../../assets/cover-image.svg';

const HeroCover = () => {
  return (
    <section className="w-full h-auto relative flex justify-center items-center">
      <img
        src={coverImage}
        alt="cover image"
        className="w-full h-full hidden md:block"
      />

      <div className="absolute w-full h-95 opacity-30 bg-white" />
      <div className="bg-secondary-bg w-fit px-6 py-4 rounded-lg absolute right-5 bottom-5 z-10 font-semibold text-sm hidden md:flex items-center gap-x-2">
        <IoCloudUploadSharp size={16} />
        Upload New Cover
      </div>

      <div className="flex flex-col items-center md:absolute z-10">
        <div className="w-35 h-35 lg:w-40 lg:h-40 rounded-full border-4 border-highlight mb-4 relative">
          <img
            src={profilePicture}
            alt="profile picture"
            className="w-full h-full rounded-full"
          />
          <div className="bg-highlight rounded-full w-12 h-12 flex justify-center items-center absolute bottom-0 right-0 border-3 border-secondary-bg">
            <MdEdit size={28} />
          </div>
        </div>

        <p className="text-lg font-semibold">John Doe.</p>
        <small className="text-base font-light">johndoe@gmail.com</small>
      </div>
    </section>
  );
};
export default HeroCover;
