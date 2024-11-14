import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
const Home=()=>{
    return(
        <>
        <div id="home-head">
            <button>Know More</button>
        </div>
        <Container> 
        <div id='handcrafted-cont'>
            <h3>Handcrafted Curations</h3>
            <div id='home-img-container'>
          <div> <Link to="/order" style={{textDecoration:"none",color:'black',fontWeight:"600"}}> <Image id='home-img' src="src/assets/images/Bestseller.jpg" roundedCircle /><br />     <p >Bestseller</p> </Link> </div>
          <div> <Link to="/order" style={{textDecoration:"none",color:'black',fontWeight:"600"}}> <Image id='home-img' src="src/assets/images/CoffeeAtHome.jpg" roundedCircle /><br /> <p >CoffeeAtHome</p> </Link> </div>
          <div> <Link to="/order" style={{textDecoration:"none",color:'black',fontWeight:"600"}}> <Image id='home-img' src="src/assets/images/Drinks.jpg" roundedCircle /><br /> <p >Drinks</p> </Link> </div>
          <div> <Link to="/order" style={{textDecoration:"none",color:'black',fontWeight:"600"}}> <Image id='home-img' src="src/assets/images/Food.jpg" roundedCircle /><br /> <p >Food</p> </Link> </div>
          <div> <Link to="/order" style={{textDecoration:"none",color:'black',fontWeight:"600"}}> <Image id='home-img' src="src/assets/images/Merchandise.jpg" roundedCircle /><br /> <p >Merchandise</p> </Link> </div>
          <div> <Link to="/order" style={{textDecoration:"none",color:'black',fontWeight:"600"}}> <Image id='home-img' src="src/assets/images/ReadyToEat.jpg" roundedCircle /><br /> <p >Ready To Eat</p> </Link> </div>
            </div>
        </div>
        </Container>
        <div id='barista'>
            <Container>
            <h3>Barista Recommends</h3>
            <div id='barista-img'>
            <div id='i1'><img src="src/assets/images/i1.png"/> <Link to="/order"> <button>Add Item</button> </Link></div>
            <div id='i1'><img src="src/assets/images/i2.png"/> <Link to="/order"> <button>Add Item</button> </Link></div>
            <div id='i1'><img src="src/assets/images/i3.png"/> <Link to="/order"> <button>Add Item</button> </Link></div>
            </div>
            
            </Container>
        </div>
        
        </>
    )
}
export default Home;