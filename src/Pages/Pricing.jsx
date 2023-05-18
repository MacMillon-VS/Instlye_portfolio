import Calc from '../Components/Calc/calc';
import DetailCards from '../Components/Cards/detailCards';
import PCards from '../Components/Cards/price';
import priceCards from '../Components/Cards/pricingCardData';
import dets from '../Components/Cards/detailsCardData';


const Pricing = () => {
  return (
    <>
      
      <div className='w-full py-8 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 text-white'>
      {priceCards.map((pCard)=>(
        <PCards priceC={pCard} key={pCard.id} />
      ))}
      {/* {priceCards.map((card) => (
        <div key={card.id}>
          <h2>{card.title}</h2>
          <p>{card.msg}</p>
          <p>{card.duplicatPrice}</p>
          <p>{card.price}</p>
          {card.details && (
            <ul>
              {card.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      ))} */}
      </div>
      </div>
      <div className='text-white  bg-[#02140f] mt-8'>
      <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 text-white text-center'>Specifications</h1>
      <div className='pb-4'>
        
      {dets.map((ard,index)=>(
        <DetailCards detC={ard} key={index} />
      ))}
      </div>
      </div>


      <div className="w-full px-4 py-12 text-white  text-left mt-12">
        <Calc/>
        </div>
        {/* <div className='my-24 bg-red-500 text-white'>
        <DetailCards
  title="Card Title"
  col1Heading="Column 1 Heading"
  col1Features={[
    "Feature 1",
    "Feature"    ]}
  col2Heading="Column 2 Heading"
  col2Features={[
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]}
  col3Heading="Column 3 Heading"
  col3Features={[
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4"
  ]}/>
        </div> */}
      
    </>
  );
};

export default Pricing;
