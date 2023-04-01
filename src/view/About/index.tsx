// import * as React from react;
import three from '../../Assets/Images/three.jpg';
import two from '../../Assets/Images/two.jpg'
import navneet from '../../Assets/Images/navneet.jpg'
import shilpa from '../../Assets/Images/shilpa.jpg'
import four from '../../Assets/Images/four.jpg'
import five from '../../Assets/Images/five.jpg'
import sagai from '../../Assets/Images/sagai.jpg'
import thanku from '../../Assets/Images/thanku.png'
import venue1 from '../../Assets/Images/venue1.webp'
import venue2 from '../../Assets/Images/venue2.webp'
import './index.css'

const About=()=>{
    return(
        <>
        <div className='container2'>
            <h1 className='title'>Happy Couple</h1>
            <div>Soul-mates.... two halves of the same soul joining together in life's journey.</div>
            <div style={{marginTop: '10px' }}>
                <img src={navneet} alt="" className='image'/>
                <div> 
                    <h3>GROOM and the BRIDE</h3>
                </div>
                <img src={shilpa} alt="" className='image'/>
            </div>
        </div>
        <div style={{position: 'relative', marginTop: '30px'}}>
            <img src={four} alt="" style={{ width: '100%',  opacity: '0.6'}}/>
            <div className='image-text'>Let the Adventure begin</div>
        </div>
        <div className='container2'>
            <div>
                <h2 >21 Feb- Sagai</h2>
                <img src={sagai} alt="ring" className='func-image'/>
            </div>
            <div>
                <h2>16 April- Tilakotsav</h2>
                {/* <img src={lagan} alt='lagan' className='func-image'/> */}
            </div>
            <div>
                <img src={venue1} alt='lagan' className='func-image' style={{opacity: '0.6', position: 'relative', marginTop: '30px'}}/>
                <div className='venue'>
                    <h2>Venue</h2>
                    <h3>Sai Banquet Hall</h3>
                    <div>Gajraula Road, Near Global School</div>
                    <div>Mandi Dhanaura, Distt. Amroha</div>
                </div>
            </div>
        </div>
        <div style={{position: 'relative', marginTop: '30px'}}>
            <img src={five} alt="" style={{ width: '100%',  opacity: '0.6'}}/>
            <div className='image-text'>
                <div style={{color: 'white', textShadow: '5px 5px 5px black' }}>Save the Date</div>
                <div>22 April 2023</div>
                <div style={{color: 'white', textShadow: '5px 5px 5px black', fontSize: '30px' }}>YOU ARE INVITED!!</div>
            </div>  
        </div> 
        <div className='container2'>
                <img src={venue2} alt='lagan' className='func-image' style={{opacity: '0.6', position: 'relative', marginTop: '30px'}}/>
                <div className='venue2'>
                    <h2>Venue</h2>
                    <h3>Green View Resort</h3>
                    <div>Sehora Road, Thakurdwara, Distt.  Moradabad</div>
                </div>
        </div>
        <div>
            <img src={thanku} alt="Thank You" style={{width: '100%', margin: '30px 0'}}/>
        </div>
        </>
    )
}
export default About