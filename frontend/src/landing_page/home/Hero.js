import React from 'react';


function Hero() {
    return ( 
        <div className='Conatiner p-5 mb-5'>
            <div className='row text-center'>
                    <img src='media/images/homeHero.png' alt='Hero Images' className='mb-5'/>
                    <h1 className='mt-5'>Invest In Everything</h1>
                    <p>Online Platform to invest in stocks, mutual funds, and more</p>
                    <button className='p-2 btn btn-primary fs-5' style={{width:"25%", margin:"0 auto"}}>SignUp</button>
            </div>

        </div>
     );
}

export default Hero;