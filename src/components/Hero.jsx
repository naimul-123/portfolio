import profilePic from '../assets/naimul.png'
import { FaDownload } from 'react-icons/fa';
import SocialLinks from './SocialLinks';
const Hero = () => {
    return (
        <div id="home" className="hero min-h-[50vh] px-5 sm:px-[30px] md:px-[60px] lg:px-[100px] xl:px-[200px]  2xl:px-[300px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-full lg:w-1/2'>
                    <img
                        src={profilePic}
                        className="h-full rounded-lg shadow-2xl" />
                </div>

                <div className='w-full lg:w-1/2 space-y-3'>
                    <h3 className='text-[#94f1ff] capitalize font-semibold'>Welcome to my world</h3>
                    <h2 className='text-[#d5daf0] capitalize text-3xl font-bold'>Hi I am</h2>
                    <h1 className="text-5xl font-bold text-[#94f1ff]">Naimul Islam</h1>
                    <h2 className='text-[#d5daf0] capitalize text-5xl font-bold'>a Frontend Web Developer.</h2>
                    <p className="py-3 text-[#d5daf0] ">
                        I am a passionate and versatile in frontend web development. I make responsive, well design pixel perfect design of your fontend website wite latest technology like react and tailwindCSS. With a keen eye for details and a love for storytelling.
                    </p>
                    <div className='flex flex-col-reverse sm:flex-row justify-start gap-2 items-center'>
                        <a href='https://drive.google.com/file/d/1g8ITEBzF95w6FebfUGExuGFxFnxLJKJh/view?usp=sharing' target='_blank' className="btn btn-outline text-[#94f1ff] rounded-full hover:bg-[#94f1ff] hover:text-[#070721]">Download CV <FaDownload /></a>
                        <SocialLinks />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;