import pic from "../../assets/dp1.jpg";
function About() {
  return (
    <section className="section" id="about">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-16 ">
      <div className="justify-center p-6 text-white my-auto">
            <p className="font-Rokkitt text-2xl md:text-4xl font-medium">   Hello, It's Me</p> 
            <p className="text-white font-arizonia text-4xl md:text-6xl text-shadow">Imran Khan </p>
            <p className="font-Rokkitt text-2xl md:text-4xl ">and I am an <span className="text-[#00df9a] font-medium">Architect Designer</span></p> 
            <p>and Construction professional with a passion for creating functional and aesthetically pleasing spaces. With my expertise in design and construction, I bring a unique perspective to each project and strive to provide innovative and sustainable solutions.
            </p>
      </div>
      <div className="flex justify-center p-6 items-center">
            <img className="h-48 md:h-72 opacity-80" src={pic} alt="ProfileImran"/>
      </div>
    </div>
    
    </section>
  );
}

export default About;
