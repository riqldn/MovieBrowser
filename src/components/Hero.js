const Hero = ({ text, backdrop, under}) => {
    return (
        <header className="bg-dark d-flex text-light flex-column hero-container align-items-center justify-content-center" style={{ height: '300px' }}>
            <h1 className="fs-1 hero-text text-center">
                {text}
            </h1>
            <br>
            </br>
             <div className="text-light" style={{zIndex:"4"}}>
                {under}
            </div>
            <div className="hero-backdrop" style={{ backgroundImage: `url(${backdrop})` }}>
           
            </div>
        </header>
    )
}

export default Hero;