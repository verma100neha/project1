// import * as React from react;
import three from '../../Assets/Images/three.jpg';
import two from '../../Assets/Images/two.jpg'
import four from '../../Assets/Images/four.jpg'
import './index.css'

const About=()=>{
    return(
        <>
        <div className='container2'>
            <h1 className='title'>Happy Couple</h1>
            <div>Soul-mates.... two halves of the same soul joining together in life's journey.</div>
            <div style={{marginTop: '10px' }}>
                <img src={two} alt="" className='image'/>
                <div> 
                    <h3>GROOM and the BRIDE</h3>
                </div>
                <img src={three} alt="" className='image'/>
            </div>
        </div>
        <div style={{position: 'relative'}}>
            <img src={four} alt="" style={{ width: '100%',  opacity: '0.6'}}/>
            <div className='image-text'>Let the Adventure begin</div>
        </div>
        <div className='container2'>
            <div>
                <h2>21 Feb- Ring Ceremony</h2>
                <img src={two} alt="ring" className='func-image'/>
            </div>
            <div>
                <h2>16 April- Lagan</h2>
                <img src={two} alt='lagan' className='func-image'/>
            </div>
        </div>
        </>
    )
}
export default About