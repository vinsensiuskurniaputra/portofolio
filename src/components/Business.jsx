import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Buttons";
import { laravel, android, mySql, tailwind, react } from '../assets';



const FeatureCard = ({ title, icon, index }) => (
  <div
    className={`flex items-center flex-row rounded-[20px] p-6 feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain ' />
    </div>
    <div className='flex flex-1 flex-col ml-3'>
      <h1 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h1>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id='skill' className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Skill</h2>
        <div className={`flex flex-wrap`}>
          <FeatureCard key='1' title='Laravel' icon={laravel} content='sabdsaj' index='1' />
          <FeatureCard key='1' title='MySQL' icon={mySql} content='' index='2' />
          <FeatureCard key='1' title='Tailwind CSS' icon={tailwind} content='jbdsajbj' index='3' />
          <FeatureCard key='1' title='Android Studio' icon={android} content='' index='4' />
          <FeatureCard key='1' title='React JS' icon={react} content='' index='5' />
        </div>
      </div>
    </section>
  );
};

export default Business;
