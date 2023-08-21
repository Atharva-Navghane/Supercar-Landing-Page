import './Home.css';
import CardComp from '../components/CardComp';
import FooterComp from '../components/FooterComp';
import FoundersComp from '../components/FoundersComp';
import InfoComp from '../components/InfoComp';
import NavbarComp from '../components/NavbarComp';

function Home() {
  return (
    <div>
      <NavbarComp />
      <InfoComp />
      <div className="CarCollection">
        <div className="CarCollectionText">
          Our Excuisite SuperCar Collection
        </div>
        <div className="CarCollectionCards">
          <CardComp
           title="Ferrari 812"
           text="The Ferrari 812 Superfast is a V12-powered grand tourer, embodying breathtaking speed, sleek design, and exhilarating performance, defining automotive excellence." 
           imgSrc="../Ferrari_812.jpeg"
          />
          <CardComp
           title="Ferrari LaFerrari"
           text="The LaFerrari is a hybrid hypercar masterpiece, blending a V12 engine with electric power for extraordinary speed, innovation, and limited-production exclusivity." 
           imgSrc="../Ferrari_LaFerrari.jpeg"
          />
          <CardComp
           title="Ferrari 812"
           text="The Ferrari 812 Superfast is a V12-powered grand tourer, embodying breathtaking speed, sleek design, and exhilarating performance, defining automotive excellence." 
           imgSrc="../Ferrari_812.jpeg"
          />
          <CardComp
           title="Ferrari LaFerrari"
           text="The LaFerrari is a hybrid hypercar masterpiece, blending a V12 engine with electric power for extraordinary speed, innovation, and limited-production exclusivity." 
           imgSrc="../Ferrari_LaFerrari.jpeg"
          />
        </div> 
      </div>
      <div className="FoundersCollection">
        <div className="FoundersCollectionText">
          <p>Our Founders</p>
          <p className='FoundersSpecialText'>These are the people who laid the foundation of the company and are one of the main reasons of Ferrari's Huge Success.</p>
        </div>
        <div className="FoundersCollectionCards">
          <FoundersComp 
            imageSrc = "../Founder_1.jpeg"
            name = 'Atharva Navghane'
          />
          <FoundersComp 
            imageSrc = "../Founder_2.jpeg"
            name = 'Akshat Chaube'
          />
          <FoundersComp 
            imageSrc = "../Founder_3.jpeg"
            name = 'Mrudul Patil'
          />
          <FoundersComp 
            imageSrc = "../Founder_4.jpeg"
            name = 'Onkar Hule'
          />
        </div>
      </div>
      <div className="Footer">
        <FooterComp />
      </div>
    </div>
  );
}

export default Home;


