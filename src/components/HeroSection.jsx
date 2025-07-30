import video1 from "../Assets/video1.mp4"
import video2 from "../Assets/video2.mp4"

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20 px-4">
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-bold">
            VirtualR build tools
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}for developers
            </span>
        </h1>

        {/* Subtext */}
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Empower your creativity and bring your VR app ideas to life with our intuitive development tools.
            Get started today and turn your imagination into reality!
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-5 mx-2 rounded-md text-white">
            Start for free
            </a>
            <a href="#" className="py-3 px-5 mx-2 rounded-md border border-neutral-500 text-neutral-700">
            Documentation
            </a>
        </div>

        {/* Videos */}
        <div className="flex flex-col lg:flex-row mt-10 justify-center gap-6 w-full max-w-6xl">
            <video autoPlay loop muted className="rounded-lg w-full lg:w-1/2 border border-orange-700 shadow-lg">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag
            </video>
            <video autoPlay loop muted className="rounded-lg w-full lg:w-1/2 border border-orange-700 shadow-lg">
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag
            </video>
        </div>
        </div>
    )
}

export default HeroSection
