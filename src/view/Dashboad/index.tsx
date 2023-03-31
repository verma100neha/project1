// import * as React from react;
import one from '../../Assets/Images/one.jpg';
import heart from '../../Assets/Images/heart.jpg'
import './index.css'

const Dashboard=()=>{
    return(
        <>
        <div className='container'>
        <img src={one} alt='main image' className='main-image' />
        <div className='image-text'>
            <div>Navneet</div>
            <div>and</div>
            <div >Shilpa</div>
            <div className='textStyle1'>We are getting married</div>
            {/* <img src={heart}/> */}

        </div>
        </div>
        </>
        
    )
}
export default Dashboard