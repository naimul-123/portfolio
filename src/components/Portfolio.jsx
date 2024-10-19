import { FaCheckCircle } from 'react-icons/fa';


const Portfolio = () => {
    return (
        <div id="portfolio" className=' px-8 sm:px-12 md:px-16 lg:px-24 xl:px-[128px] py-[64px] rounded-3xl'>
            <div className='text-center space-y-2'>
                <h3 className='text-[#92f2ff] capitalize font-semibold text-2xl'>My Awesome works</h3>
                <h2 className='text-[#d5daf0] capitalize text-5xl font-bold'>My Portfolio</h2>
                <p className="py-3 text-[#d5daf0] ">
                    With a strong foundation in frontend development and a keen eye for <br /> design, I specialize in creating interactive and responsive web.
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-8'>
                <div className="bg-transparent space-y-4 text-[#d5daf0]  card justify-between border-2 border-[#301e68] p-7">

                    <div className="flex flex-col text-[#d5daf0] flex-grow ">
                        <h2 className=' capitalize text-3xl font-bold'>Residential Real Estate Management</h2>
                        <h3 className='text-2xl my-3 font-semibold'>Features of the project</h3>
                        <ul className=''>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Authentication with Firebase</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />User Registration/Login System</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Only logged in user can get access some private pages.</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Fully responsive  for all devices</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Apply animation</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Dynamic page route</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Shown location map for each apartment in apartment details page.</li>

                        </ul>
                    </div>
                    <div className="card-actions">
                        <a href="https://assignment-9-2ac58.web.app/" target='_blank' className="btn btn-outline text-[#94f1ff] rounded-full hover:bg-[#94f1ff] hover:text-[#070721] transition-colors duration-[1000ms]">Live Link </a>
                        <a href="https://github.com/programming-hero-web-course-4/b9a9-real-estate-naimul-123.git" target='_blank' className="btn btn-outline text-[#94f1ff] rounded-full hover:bg-[#94f1ff] hover:text-[#070721] transition-colors duration-[1000ms]">Github Link </a>
                    </div>
                </div>
                <div className="bg-transparent space-y-4 text-[#d5daf0]  card justify-between border-2 border-[#301e68] p-7">

                    <div className="flex flex-col text-[#d5daf0] flex-grow ">
                        <h2 className=' capitalize text-3xl font-bold'>Painting and Drawing website</h2>
                        <h3 className='text-2xl my-3 font-semibold'>Features of the project</h3>
                        <ul className=''>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Authentication with Firebase</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />User Registration/Login System</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Only logged in user can get access some private pages.</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Logged in user can add, modify or delete his/her own arts and crafts.</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Logged in user can see details of other users arts and crafts</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Fully responsive  for all devices</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Apply animation</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Dynamic page route</li>
                        </ul>
                    </div>
                    <div className="card-actions">
                        <a href="https://assignment-10-a9d06.web.app" target='_blank' className="btn btn-outline text-[#94f1ff] rounded-full hover:bg-[#94f1ff] hover:text-[#070721] transition-colors duration-[1000ms]">Live Link </a>
                        <a href="https://github.com/naimul-123/my-art-and-craft-client.git" target='_blank' className="btn btn-outline text-[#94f1ff] rounded-full hover:bg-[#94f1ff] hover:text-[#070721] transition-colors duration-[1000ms]">Github Client Link</a>
                        <a href="https://github.com/naimul-123/my-arts-and-craft-server.git" target='_blank' className="btn btn-outline text-[#94f1ff] rounded-full hover:bg-[#94f1ff] hover:text-[#070721] transition-colors duration-[1000ms]">Github Server Link</a>
                    </div>
                </div>
                <div className="bg-transparent space-y-4 text-[#d5daf0]  card justify-between border-2 border-[#301e68] p-7">

                    <div className="flex flex-col text-[#d5daf0] flex-grow ">
                        <h2 className=' capitalize text-3xl font-bold'>WorldVoyage- A blog website</h2>
                        <h3 className='text-2xl my-3 font-semibold'>Features of the project</h3>
                        <ul className=''>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Authentication with Firebase</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />User Registration/Login System</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Private route</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Dynamic page route</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Logged in user can add, modify or delete his/her own blogs, see details of other users blogs.</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />API with express.js</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />MongoDB Database intigration</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />JWT implementation for more security</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Fully responsive  for all devices</li>
                        </ul>
                    </div>
                    <div className="card-actions">
                        <a href="https://assignment-10-a9d06.web.app" target='_blank' className="btn btn-outline text-[#94f1ff] rounded-full hover:bg-[#94f1ff] hover:text-[#070721] transition-colors duration-[1000ms]">Live Link </a>
                        <a href="https://github.com/naimul-123/my-art-and-craft-client.git" target='_blank' className="btn btn-outline text-[#94f1ff] rounded-full hover:bg-[#94f1ff] hover:text-[#070721] transition-colors duration-[1000ms]">Github Client Link</a>
                        <a href="https://github.com/naimul-123/my-arts-and-craft-server.git" target='_blank' className="btn btn-outline text-[#94f1ff] rounded-full hover:bg-[#94f1ff] hover:text-[#070721] transition-colors duration-[1000ms]">Github Server Link</a>
                    </div>
                </div>
                <div className="bg-transparent space-y-4 text-[#d5daf0]  card justify-between border-2 border-[#301e68] p-7">

                    <div className="flex flex-col text-[#d5daf0] flex-grow ">
                        <h2 className=' capitalize text-3xl font-bold'>UrbanNest BMS- an apartment management system</h2>
                        <h3 className='text-2xl my-3 font-semibold'>Features of the project</h3>
                        <ul className=''>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Full stack web application</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Authentication with Firebase </li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Different dashboard and role for admin, member and normal user.</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Private route</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Dynamic page route</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />API with express.js</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />MongoDB Database integration</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />JWT implementation.</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Payment system intigration</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Fully responsive  for all devices</li>
                            <li className='flex items-baseline gap-3'><FaCheckCircle className='text-[#92f2ff]' />Apply animation</li>
                        </ul>
                    </div>
                    <div className="card-actions">
                        <a href="https://assignment-12-429b0.web.app" target='_blank' className="btn btn-outline text-[#94f1ff] rounded-full hover:bg-[#94f1ff] hover:text-[#070721] transition-colors duration-[1000ms]">Live Link </a>
                        <a href="https://github.com/naimul-123/assignment-12-client.git" target='_blank' className="btn btn-outline text-[#94f1ff] rounded-full hover:bg-[#94f1ff] hover:text-[#070721] transition-colors duration-[1000ms]">Github Client Link</a>
                        <a href="https://github.com/naimul-123/assignment-12-server.git" target='_blank' className="btn btn-outline text-[#94f1ff] rounded-full hover:bg-[#94f1ff] hover:text-[#070721] transition-colors duration-[1000ms]">Github Server Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;