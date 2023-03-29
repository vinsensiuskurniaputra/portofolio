import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Buttons";

const AboutMe = () => {
  return (
    <section id='tentang-saya' className={`${layout.sectionInfo} w-full`}>
      <h2 className={`${styles.heading2}`}>Tentang Saya</h2>
      <p className={`${styles.paragraph} mt-5`}>
        Seorang pelajar dari SMK N 8 Semarang dengan jurusan Rekayasa Perangkat
        Lunak. Saya telah menyelesaikan beberapa project, baik itu project dari
        sekolah maupun project individu. Saya memiliki minat di bidang IT
        khususnya di web developer.
      </p>
      <Button styles='mt-10' />
    </section>
  );
};

export default AboutMe;
