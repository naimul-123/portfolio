import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';

const Services = () => {
    return (
        <div id="service" className='mx-7  bg-blend-lighten bg-[#210e60] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-[128px] py-[64px] rounded-3xl'>
            <div className='text-center space-y-2'>
                <h3 className='text-[#92f2ff] capitalize font-semibold text-2xl'>My specialization service</h3>
                <h2 className='text-[#d5daf0] capitalize text-5xl font-bold'>What I Do</h2>
                <p className="py-3 text-[#d5daf0] ">
                    Develop comprehensive content strategies tailored to your unique goals <br /> and target audience, ensuring that every piece of content.
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-8'>
                <div className="bg-transparent space-y-4 text-[#d5daf0] text-center card items-center border-2 border-[#301e68] p-7 hover:scale-105 transform transition-transform duration-1000">
                    <div className="">
                        <FaReact className="rounded-full w-[140px] h-[140px] text-[#00ccff] bg-[#301e68] p-8" />
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h2 className='text-[#d5daf0] capitalize text-3xl font-bold'>React Development</h2>
                        <p className="py-3 text-[#d5daf0] text-lg">
                            I develop single-page applications with component-based UIs, manage state using React hooks, and create custom hooks for routing with React Router DOM. Additionally, I integrate various React npm packages to enhance functionality.
                        </p>
                    </div>
                </div>
                <div className="bg-transparent space-y-4 text-[#d5daf0] text-center card items-center border-2 border-[#301e68] p-7 hover:scale-105 transform transition-transform duration-1000">
                    <div className="">
                        <RiTailwindCssFill className="rounded-full w-[140px] h-[140px] text-[#38bdf8] bg-[#301e68] p-8" />
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h2 className='text-[#d5daf0] capitalize text-3xl font-bold'>Style with TailwindCSS</h2>
                        <p className="py-3 text-[#d5daf0] text-lg">
                            I use Tailwind CSS to build responsive, utility-first designs efficiently, creating modern UIs with customizable components and consistent theming across projects.</p>
                    </div>
                </div>
                <div className="bg-transparent space-y-4 text-[#d5daf0] text-center card items-center border-2 border-[#301e68] p-7 hover:scale-105 transform transition-transform duration-1000">
                    <div className="">
                        <img src='/src/assets/firebase.png' className="rounded-full w-[140px] h-[140px] text-[#38bdf8] bg-[#301e68] p-8" />
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h2 className='text-[#d5daf0] capitalize text-3xl font-bold'>Authentication with Firebase</h2>
                        <p className="py-3 text-[#d5daf0] text-lg">
                            I implement authentication with Firebase to enable secure user login, registration, and session management, leveraging Firebase&#39;s robust tools for real-time authentication and user data handling.
                        </p>
                    </div>
                </div>
                <div className="bg-transparent space-y-4 text-[#d5daf0] text-center card items-center border-2 border-[#301e68] p-7 hover:scale-105 transform transition-transform duration-1000">
                    <div className="">
                        <SiExpress className="rounded-full w-[140px] h-[140px] text-[#f7f7f7] bg-[#301e68] p-8" />
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h2 className='text-[#d5daf0] capitalize text-3xl font-bold'>RESTFul APIs with express.js</h2>
                        <p className="py-3 text-[#d5daf0] text-lg">
                            I build RESTful APIs with Express.js to handle HTTP requests, enabling smooth communication between the client and server for data retrieval, creation, updating, and deletion.</p>
                    </div>
                </div>
                <div className="bg-transparent space-y-4 text-[#d5daf0] text-center card items-center border-2 border-[#301e68] p-7 hover:scale-105 transform transition-transform duration-1000">
                    <div className="">
                        <SiMongodb className="rounded-full w-[140px] h-[140px] text-[#00E661] bg-[#301e68] p-8" />
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h2 className='text-[#d5daf0] capitalize text-3xl font-bold'>MongoDB For Database</h2>
                        <p className="py-3 text-[#d5daf0] text-lg">
                            I use MongoDB as my database solution for its flexible, document-oriented structure, allowing efficient data storage, retrieval, and management in applications with evolving data requirements.
                        </p>
                    </div>
                </div>
                <div className="bg-transparent space-y-4 text-[#d5daf0] text-center card items-center border-2 border-[#301e68] p-7 hover:scale-105 transform transition-transform duration-1000">
                    <div className="">
                        <img src='/src/assets/jwt.svg' className="rounded-full w-[140px] h-[140px] text-[#38bdf8] bg-[#301e68] p-8" />
                        {/* <RiTailwindCssFill className="rounded-full w-[140px] h-[140px] text-[#38bdf8] bg-[#301e68] p-8" /> */}
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h2 className='text-[#d5daf0] capitalize text-3xl font-bold'>JWT For More Security </h2>
                        <p className="py-3 text-[#d5daf0] text-lg">
                            I implement JSON Web Tokens (JWT) for enhanced security in my applications, enabling secure user authentication and authorization by securely transmitting information between the client and server.</p>
                    </div>
                </div>

            </div>

            <div className='text-center flex flex-wrap gap-4 justify-center align-middle border-2 border-[#301e68] p-7'>
                <div className="flex flex-col items-center">
                    <img src='/src/assets/javascript.png' className="rounded-full w-[40px] h-[40px] text-[#38bdf8] bg-[#301e68] p-2" />
                    <h2 className='text-[#d5daf0] capitalize text-lg font-bold'>Demo Install </h2>
                </div>
                <div className="flex flex-col items-center">
                    <img src='/src/assets/figma.jpg' className="rounded-full w-[40px] h-[40px] text-[#38bdf8] bg-[#301e68] p-2" />
                    <h2 className='text-[#d5daf0] capitalize text-lg font-bold'>Figma Design </h2>
                </div>
                <div className="flex flex-col items-center">
                    <img src='/src/assets/xd.png' className="rounded-full w-[40px] h-[40px] text-[#38bdf8] bg-[#301e68] p-2" />
                    <h2 className='text-[#d5daf0] capitalize text-lg font-bold'>XD Design </h2>
                </div>
                <div className="flex flex-col items-center">
                    <img src='/src/assets/github.jfif' className="rounded-full w-[40px] h-[40px] text-[#38bdf8] bg-[#301e68] p-2" />
                    <h2 className='text-[#d5daf0] capitalize text-lg font-bold'>Github Repository </h2>
                </div>
                <div className="flex flex-col items-center">
                    <img src='/src/assets/firebase.png' className="rounded-full w-[40px] h-[40px] text-[#38bdf8] bg-[#301e68] p-2" />
                    <h2 className='text-[#d5daf0] capitalize text-lg font-bold'>Firebase Deployment </h2>
                </div>
                <div className="flex flex-col items-center">
                    <img src='/src/assets/vercel.png' className="rounded-full w-[40px] h-[40px] text-[#38bdf8] bg-[#301e68] p-2" />
                    <h2 className='text-[#d5daf0] capitalize text-lg font-bold'>Vercel Deployment </h2>
                </div>
                <div className="flex flex-col items-center">
                    <img src='/src/assets/react.png' className="rounded-full w-[40px] h-[40px] text-[#38bdf8] bg-[#301e68] p-2" />
                    <h2 className='text-[#d5daf0] capitalize text-lg font-bold'>React Ready </h2>
                </div>
            </div>

        </div>
    );
};

export default Services;