import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";

const Footer = () => (
  <section className={`${styles.flexCenter} flex-col ${styles.marginY}`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <h1 className='text-gradient font-bold text-[40px]'>
          Vinsensius Kurnia Putra
        </h1>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          Kegagalan adalah kesuksesan yang tertunda!
        </p>
      </div>
      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className='flex flex-col ss:my-0 my-4 min-w-[150px]'
          >
            <h4 className='font-poppins font-semibold text-[16px] leading-[24px] text-white'>
              {footerLink.title}
            </h4>
            <ul className='list-none mt-4'>
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerLink.links.length - 1 && "mb-4"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className='w-full flex flex-col md:flex-row justify-between items-center pt-6 border-t-[1px] border-t-[#3f3e45]'>
      <p className='font-poppins font-normal text-center text-[16px] leading-[24px] text-white'>
        2023 Vinsensius Kurnia Putra. All Rights Reserved.
      </p>
      <div className='flex flex-row md:mt-0 mt-6 gap-6'>
        {socialMedia.map((social) => (
          <img key={social.id} src={social.icon} alt={social.id} className='' />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
