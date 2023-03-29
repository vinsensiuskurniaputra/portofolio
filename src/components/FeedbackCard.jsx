import { quotes } from "../assets";

const FeedBackCard = ({ content, img }) => (
  <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 m-0 my-5 feedback-card'>
    <img src={img} alt='double_quotes' className='w-full object-cover' />
    <img src={quotes} alt='double_quotes' className='w-[20px] object-cover mt-10 mb-5' />
    <p className='font-poppins font-normal text-[18px] leading-[32px] text-white '>
      {content}
    </p>
  </div>
);

export default FeedBackCard;
