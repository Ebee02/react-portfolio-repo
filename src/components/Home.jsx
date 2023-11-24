function Home() {
  return (
    <div className="mt-4 flex flex-col md:flex-row-reverse md:items-center md:justify-center h-[dvh]">
      <div className="image flex-1 h-screen w-screen flex items-center justify-center my-4 md:my-0">
        <div className="w-72 h-72 rounded-full shadow-gray-500 shadow-md border-none">
          <img
            src="../images/pexels-alexander-jay.jpg"
            className="w-full h-full rounded-full"
            alt=""
          />
        </div>
      </div>
      <div className="content flex-1 px-6">
        <h3 className=" text-[#1C7C54] text-lg tracking-wide md:text-xl font-medium  mb-4">
          Hey, I am John
        </h3>
        <h1 className="heading text-2xl md:text-3xl tracking-wider font-semibold mb-6">
          I AM A CREATIVE AND INNOVATIVE{" "}
          <span className="text-[#1C7C54]">SOFTWARE DEVELOPER</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem neque dol Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ex molestiae cupiditate, incidunt deserunt, in
          commodi vitae dolore tenetur, dolorem adipisci atque quibusdam.
          Laboriosam doloremque nesciunt molestias tempore veritatis quaerat at.
        </p>
        <div className="md:flex md:items-center gap-x-6">
          <a
            href="#"
            className="font-normal text-lg text-white bg-[#1C7C54] p-2 rounded first-letter:border-none flex items-center justify-center gap-x-2 mb-4"
          >
            Contact Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="font-semibold text-lg text-black border border-[#1C7C54]  p-2 rounded flex items-center justify-center gap-x-2 mb-4 shadow-md"
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
