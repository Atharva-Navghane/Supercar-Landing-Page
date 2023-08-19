import './App.css';
import CardComp from './components/CardComp';
import InfoComp from './components/InfoComp';
import NavbarComp from './components/NavbarComp';

function App() {
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
      
    </div>
  );
}

export default App;
