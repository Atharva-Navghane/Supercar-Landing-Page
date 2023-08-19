import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './FoundersCSS.css'

function FoundersComp(props) {
  return (
    <Container className='FounderContainer'>
        <Image src={props.imageSrc} roundedCircle style={{ height: '10rem', width: '10rem' ,border: 'solid black'}}/>
        <div className="FounderDescription">
        <div className="FounderName">
            {props.name}
        </div>
        <div className="FounderBio">
            Hard Working and Super Talented
        </div>
        </div>
    </Container>
  );
}

export default FoundersComp;

/*
<div className="FounderDescription">
<div className="FounderName">
    Atharva Navghane
</div>
<div className="FounderBio">
    Hard Working and Super Talented
</div>
</div> */