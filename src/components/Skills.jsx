import { FaArrowRight } from 'react-icons/fa';
import SocialLinks from './SocialLinks';


const Skills = () => {
    return (
        <div id="skills" className='mx-7  bg-[#210e60] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-[128px] py-[64px] rounded-3xl'>
            <div className='text-center space-y-2'>
                <h3 className='text-[#92f2ff] capitalize font-semibold text-2xl'>2 years experience</h3>
                <h2 className='text-[#d5daf0] capitalize text-5xl font-bold'>My Resume</h2>
                <p className="py-3 text-[#d5daf0] ">
                    As a frontend specialist, I excel in building captivating user interfaces that <br />
                    not only look great but also provide seamless navigation.
                </p>
            </div>
            <div className='grid  grid-cols-1  lg:grid-cols-3 gap-4 my-8'>
                <div className="bg-transparent lg:col-span-2 space-y-4 text-[#d5daf0]  card  border-2 border-[#301e68] p-7">
                    <h2 className='text-[#d5daf0] capitalize text-3xl font-bold'>Education</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-10'>
                        <div className='flex flex-col '>
                            <div className='flex items-center justify-between'>
                                <p className='text-[#d5daf0]' >2009-2013</p>
                                <p className='text-[#92f2ff]' >3.28/4</p>
                            </div>
                            <h3 className='text-[#d5daf0] capitalize text-2xl font-bold'>Bachelor of Arts in Bangla</h3>
                        </div>
                        <div className='flex flex-col '>
                            <div className='flex items-center justify-between'>
                                <p className='text-[#d5daf0]' >2013-2014</p>
                                <p className='text-[#92f2ff]' >3.25/4</p>
                            </div>
                            <h3 className='text-[#d5daf0] capitalize text-2xl font-bold'>Masters of Arts in Bangla</h3>
                        </div>
                        <div className='flex flex-col max-w-xs'>
                            <div className='flex items-center justify-between'>
                                <p className='text-[#d5daf0]' >2019-2023</p>
                                <p className='text-[#92f2ff]' >----</p>
                            </div>
                            <h3 className='text-[#d5daf0] capitalize text-2xl font-bold'>Basic HTML, CSS, and JS</h3>
                        </div>
                        <div className='flex flex-col max-w-xs'>
                            <div className='flex items-center justify-between'>
                                <p className='text-[#d5daf0]' >2023-2024</p>
                                <p className='text-[#92f2ff]' >----</p>
                            </div>
                            <h3 className='text-[#d5daf0] capitalize text-2xl font-bold'>Frontend Development Course By Programming Hero</h3>
                        </div>
                    </div>

                </div>
                <div className="bg-transparent space-y-4 text-[#d5daf0]  card sm:flex-row col-span-full lg:col-span-1 lg:flex-col  justify-between  border-2 border-[#301e68] p-7">
                    <div className='space-y-3'>
                        <h2 className='text-[#d5daf0] capitalize text-3xl font-bold'>Stay with Me</h2>
                        <SocialLinks />
                    </div>
                    <div className='flex flex-col items-baseline gap-2'>
                        <a className="btn btn-outline text-[#94f1ff] rounded-full hover:bg-[#94f1ff] hover:text-[#070721]">View My Profile <FaArrowRight /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills