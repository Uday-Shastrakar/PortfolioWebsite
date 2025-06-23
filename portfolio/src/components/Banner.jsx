import bannerImage from '../assets/uday.jpeg';
import bannerBackground from '../assets/banner_wallpaper.svg';

const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bannerBackground})`,
                backgroundSize: 'cover',
                
            }}
            className="main-container flex items-center justify-center px-4 md:px-10 py-10 text-white"
        >
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Section */}
                <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-semibold">Hi, I am</h3>
                    <h1 className="text-4xl md:text-5xl font-bold">Uday Shastrakar</h1>
                    <h2 className="text-2xl md:text-3xl">I am a Frontend Developer</h2>
                    <p className="text-sm md:text-base leading-relaxed">
                        I have hands-on experience in building responsive web applications using <strong>React</strong>, <strong>Vue.js</strong>, <strong>JavaScript</strong>, and <strong>Tailwind CSS</strong>. I also develop scalable backend services with <strong>Java</strong>, <strong>Kotlin</strong>, <strong>Spring Boot</strong>, and <strong>REST APIs</strong>. Skilled in <strong>Docker</strong>, <strong>Kafka</strong>, <strong>Jenkins</strong>, and <strong>MySQL</strong> optimization, I’ve contributed to impactful projects at <strong>Atlas Primary</strong> and <strong>Velotech Solutions</strong>. I hold a <strong>BCA</strong> from <strong>Gondwana University</strong> and certifications in <strong>Full Stack Development</strong> and <strong>Microservices</strong>.
                    </p>

                    {/* Social Icons */}
                    <div className="icons-container flex space-x-4 mt-4">
                        <a
                            href="#"
                            className="hover:bg-orange-500 cursor-pointer rounded-full w-12 h-12 flex justify-center items-center bg-gray-700"
                        >
                            <i className="fa-brands fa-linkedin text-2xl"></i>
                        </a>
                        <a
                            href="#"
                            className="hover:bg-orange-500 cursor-pointer rounded-full w-12 h-12 flex justify-center items-center bg-gray-700"
                        >
                            <i className="fa-brands fa-github text-2xl"></i>
                        </a>
                        <a
                            href="#"
                            className="hover:bg-orange-500 cursor-pointer rounded-full w-12 h-12 flex justify-center items-center bg-gray-700"
                        >
                            <i className="fa-brands fa-instagram text-2xl"></i>
                        </a>
                    </div>

                    {/* Contact Button */}
                    <a
                        href="/contact"
                        className="inline-block mt-6 text-xl px-5 py-2 bg-orange-500 rounded-full shadow-lg"
                    >
                        Contact Me
                    </a>
                </div>

                {/* Right Section - Profile Image */}
                <div className="flex justify-center">
                    <img
                        src={bannerImage}
                        alt="Uday Shastrakar"
                        className="rounded-full w-60 h-60 md:w-80 md:h-80 shadow-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
