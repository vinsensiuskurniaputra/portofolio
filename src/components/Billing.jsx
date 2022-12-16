import {apple, google, bill} from "../assets"
import styles, {layout} from '../style'

const Billing = () => {
  return (
    <section className={`${layout.sectionReverse} `}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt='Billing'
          className='w-full h-full relative z-[5]'
        />
        <div className='z-[3] absolute top-0 -left-1/2 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='z-[0] absolute buttom-0 -left-1/2 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className='hidden sm:block' /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className={`flex flex-wrap flex-row sm:mt-10 mt-6`}>
          <img src={apple} alt="apple_store" className="w-[128px] h-[42px] cursor-pointer object-contain mr-5" />
          <img src={google} alt="google_play" className="w-[128px] h-[42px] cursor-pointer object-contain " />
        </div>
      </div>
    </section>
  );
}

export default Billing