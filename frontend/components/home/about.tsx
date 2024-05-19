const About: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-dark-blue text-white">
      <div className="wave top-0 left-0 z-10 "></div>
      <div className="wave top-10 left-0 z-20 opacity-40"></div>

      <div className="pt-64 pb-24 lg:pt-96 lg:pb-36">
        <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>
        <div className="border border-white p-10 md:p-20 md:px-28 rounded-xl shadow-custom text-center max-w-xs md:max-w-2xl lg:max-w-3xl mx-5 md:mx-10 relative">
          <span className="large-qoutation left-0 -top-24">“</span>
          <span className="small-qoutation hidden md:inline left-12 top-10">
            “
          </span>
          <p className="font-semibold mb-4 text-xl md:text-2xl">
            GeeseHacks at the University of Waterloo 👏🚀
          </p>
          <p className="text-gray-300 text-left text-md md:text-lg">
            Geese Hacks is an innovative hackathon that encapsulates the spirit
            of Waterloo's rigorous tech environment. Organized by students and
            for students, it's an arena where coding, creativity, and technology
            collide to transform ideas into reality. This event challenges
            participants to push the boundaries of technology and develop
            solutions that address real-world problems.
          </p>
          <span className="small-qoutation hidden md:inline right-12 -bottom-2">
            ”
          </span>
          <span className="large-qoutation -right-1 -bottom-64">”</span>
        </div>
      </div>
    </div>
  );
};

export default About;
