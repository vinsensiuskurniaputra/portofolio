import styles from "../style";
import { photoProfile, discount } from "../assets";
import { Buttons } from "./";

const Hero = () => (
  <div>
    <section
      id='home'
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
      >
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>Hello,</span> my name
          </p>
        </div>
        <div className='w-full'>
          <h1 className='font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            Vinsensius <span className='text-gradient'>Kurnia</span> Putra{" "}
          </h1>
          <h1 className='text-gradient text-[40px] font-thin'>Programmer</h1>

        </div>
      </div>
      <div
        className={`flex flex-1 my-10 md:my-0 ${styles.flexCenter} relative`}
      >
        <img
          src={photoProfile}
          className='w-full h-full object-cover rounded-full relative z-[5]'
        />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full buttom-40 white__gradient'></div>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
      </div>

    </section>
  </div>
);

export default Hero;
