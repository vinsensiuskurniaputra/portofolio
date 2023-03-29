import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from "./FeedbackCard"
import { projectInstagram, projectPerpustakaan, projectPelanggaran } from '../assets';

const Testimonials = () => {
  return (
    <section
      id='projek'
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />
      <div className='w-full mb-6 sm:mb-16 relative z-[1]'>
        <h1 className={styles.heading2}>Projek Terbaik</h1>
      </div>
      <div
        className={`relative z-[1] grid grid-cols-1 sm:grid-cols-3 justify-items-center w-full feedback-container`}
      >
        <FeedbackCard
          img={projectPerpustakaan}
          content='Aplikasi tersebut berguna untuk memenage atau mengatur aktivitas peminjamaan di dalam perpustakaan. Sistem ini dibuat dengan laravel.'
        />
        <FeedbackCard
          img={projectPelanggaran}
          content='Aplikasi tersebut berguna untuk memenage atau mengatur aktivitas pelanggaran di dalam seolah. Sistem ini dibuat dengan laravel.'
        />
        <FeedbackCard
          img={projectInstagram}
          content='Aplikasi ini merupakan instagram yang disederhanakan. Sistem ini dibuat dengan NEXT JS.'
        />
      </div>
    </section>
  );
}

export default Testimonials