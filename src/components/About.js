import React from 'react';
import Hero from './Hero';
import background from './movies.jpg'
class About extends React.Component {
    render() {
        return (
            <>
                <div>
                    <Hero text="About us" backdrop = {background}/>
                </div>
                <p className="lead w-75 m-auto pt-5">
                    This is a react project in which we are fetching movie information from an API and relaying that information back to you.
                </p>
            </>
        )
    }
}

export default About;