
import React from 'react';
import img from './404.svg';
import Hero from './Hero';
class Page404 extends React.Component{
    

    render(){
        
        return(
            <>
                    <Hero text="404 Page Not Found"/>
            <div className="d-flex justify-content-center">
        
            <img src={img} className="d-block"style={{ width:"50%", height: "auto"}}></img>
            </div>
            </>
        )
    }
}
export default Page404;