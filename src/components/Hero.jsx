/**
 * @copyright 2024 Dainius Genutis
 * @license Apache-2.0
 */



const Hero = () => {
  return (
    <section 
    id="home" 
    className="pt-28 lg:pt-36"
    >

      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/2.jpg"
                width={40}
                height={40}
                alt="Dainius Genutis portrait"
                className="img-cover"
              />
            </figure>

            <div className="">
              <span className="">
                <span className=""></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="">Building Scalable Modern Websites for the Future</h2>
          <div className="">
              ButtonPrimary

              ButtonOutline

          </div>
        </div>

        <div className="">
          <figure className="">
            <img 
            src="/2.jpg"
            width={656}
            height={800} 
            alt="Dainius Genutis"
            className="w-full"
            
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
