function About() {
  return (
    <div className="w-screen h-[dvh] flex flex-col md:flex-row items-center justify-center px-6 gap-x-5">
      <div className="flex-1 w-full h-full">
        <img
          src="../images/pexels-andrea-piacquadio-3799124.jpg"
          className="w-full h-full"
          alt=""
        />
      </div>
      <div className="flex-1 w-full h-full p-4">
        <div className="flex justify-start md:gap-x-4 ">
          <a
            href="#"
            className="font-semibold text-lg text-black border border-[#1C7C54]  py-2 px-6 rounded flex items-center justify-center gap-x-2 mb-4 shadow-md"
          >
            About
          </a>
          <a
            href="#"
            className="font-semibold text-lg text-black border border-[#1C7C54]  py-2 px-6 rounded flex items-center justify-center gap-x-2 mb-4 shadow-md"
          >
            Education
          </a>
          <a
            href="#"
            className="font-semibold text-lg text-black border border-[#1C7C54]  py-2 px-6 rounded flex items-center justify-center gap-x-2 mb-4 shadow-md"
          >
            Experience
          </a>
        </div>
        <h2 className="mb-4 font-medium text-[#1C7C54] text-lg tracking-wide md:text-xl">
          About me
        </h2>
        <h1 className="text-4xl font-semibold tracking-wide mb-4">
          Lorem ipsum dolor kdjkfdj
        </h1>
        <h1 className="text-lg font-medium mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          perferendis suscipit natus odit ipsum accusamus inventore libero
          provident vero fuga? Libero, minima repudiandae? Magnam non reiciendis
          eveniet sequi, maxime impedit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Obcaecati quis magni rerum et! Cupiditate alias sed
        </h1>
        <div className="border-2 border-blue-500 flex items-center font-medium py-2">
          <h2 className="text-2xl text-[#1C7C54] mr-6">My Skills</h2>
          <div className="w-14 h-14 bg-[#1C7C54] rounded-full flex items-center justify-center">
            <h3>React</h3>
          </div>
          <div>
            <h3>Tailwind</h3>
          </div>
          <div>
            <h3>Html</h3>
          </div>
          <div>
            <h3>Css</h3>
          </div>
          <div>
            <h3>Javascript</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
