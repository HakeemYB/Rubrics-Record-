import akueblogo from './img/akueblogo.png';
import mainimga from './img/mainimga.png';
import '../App.css';

export const Header = () => {

return (
     
      <div className="App">
        <header className="App-header">
        <img className='responsive' src={akueblogo} alt='akueblogo'></img>
        <img className='responsive' src={mainimga} alt='mainimga'></img>
         
          </header>
          
          <div>
          
          
           <ul className='topnava'>Project Assessment Rubrics</ul>
           
          </div>
          </div>
                      
        
  )
}

export default Header;
