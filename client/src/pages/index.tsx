import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import DiscountSection from './components/DiscountOffer';
import SpecialistsSection from './components/SpecialistsSection';

const text = {
  row1: "Full-Service Animal Hospital",
  row2: "We have been caring for pets for more than 40 years!",
  row3: ""
}

export default function Home() {
  return (
    <>
      <Header headerBg="gray-kitty-with-monochrome-wall-her.jpg" text={text}/>

      <ServicesSection />
      <DiscountSection />
      <SpecialistsSection />
    </>
  )
}
