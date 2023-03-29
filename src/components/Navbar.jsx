import { useState } from "react";
import { close, logo, menu } from "../assets";

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);
  return (
    <nav className='w-full py-6 flex justify-between item-center'>
      <h1 className='text-gradient font-semibold text-lg'>
        Vinsensius Kurnia Putra
      </h1>
      <ul className='hidden list-none sm:flex justify-end items-center flex-1 gap-10'>
          <li
            className={`font-poppins font-normal text-[16px] text-white`}
          >
            <a href="#home">Beranda</a>
          </li>
          <li
            className={`font-poppins font-normal text-[16px] text-white`}
          >
            <a href="#tentang-saya">Tentang Saya</a>
          </li>
          <li
            className={`font-poppins font-normal text-[16px] text-white`}
          >
            <a href="#skill">Skill</a>
          </li>
          <li
            className={`font-poppins font-normal text-[16px] text-white`}
          >
            <a href="#projek">Projek</a>
          </li>
      </ul>
      <div className='sm:hidden flex flex-1 justify-end item-center'>
        <img
          src={Toggle ? close : menu}
          alt='menu'
          className='w-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            Toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
              <li
                className={`font-poppins font-normal text-[16px] text-white`}
              >
                <a href={`#home`}>Beranda</a>
              </li>
              <li
                className={`font-poppins font-normal text-[16px] text-white`}
              >
                <a href={`#tentang-saya`}>Tentang Saya</a>
              </li>
              <li
                className={`font-poppins font-normal text-[16px] text-white`}
              >
                <a href={`#skill`}>Skill</a>
              </li>
              <li
                className={`font-poppins font-normal text-[16px] text-white`}
              >
                <a href={`#projek`}>Projek</a>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
