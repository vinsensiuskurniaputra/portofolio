import styles from "./style";
import {
  Navbar,
  AboutMe,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";

const App = () => (
  <div className='w-full bg-primary overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-black fixed w-full z-50 bg-opacity-50`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <AboutMe />
        <Business />
        <Testimonials />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
