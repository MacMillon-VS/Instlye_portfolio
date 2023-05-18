import pic from "../../assets/profileT.png";
function About() {
  return (
    <section className="section" id="about">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-24">
      <div className="flex justify-center p-6 text-white">
            <p className="font-Rokkitt text-2xl md:text-4xl">   Hi, I'm <span className="text-white font-arizonia text-4xl md:text-6xl text-shadow">Imran Khan </span>
            and I am an Architect Designer and Construction professional with a passion for creating functional and aesthetically pleasing spaces. With my expertise in design and construction, I bring a unique perspective to each project and strive to provide innovative and sustainable solutions.
            </p>
      </div>
      <div className="flex justify-center p-6 text-6xl text-white items-center">
            <img className="h-48 md:h-96 opacity-80  shadow-lg" src={pic}/>
      </div>
    </div>
    
      <div className="cointainer mx-auto">
        <div>
          <div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
