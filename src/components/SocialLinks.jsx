import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialLinks = () => {
    return (
        <div className='space-x-2'>
            <a href="https://www.facebook.com/naimuliu/" target='_black' className='btn btn-circle rounded-full border-4 border-[#151f3a] text-2xl text-[#94f1ff] bg-transparent hover:bg-[#151f3a] hover:border-[#151f3a]'><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/frontend-developer-naimul-islam" target='_black' className='btn btn-circle rounded-full border-4 border-[#151f3a] text-2xl text-[#94f1ff] bg-transparent hover:bg-[#151f3a] hover:border-[#151f3a]'><FaLinkedinIn /></a>
            <a href="https://x.com/naimulislamiu" target='_black' className='btn btn-circle rounded-full border-4 border-[#151f3a] text-2xl text-[#94f1ff] bg-transparent hover:bg-[#151f3a] hover:border-[#151f3a]'><FaXTwitter /></a>
            <a href="https://github.com/naimul-123" target='_black' className='btn btn-circle rounded-full border-4 border-[#151f3a] text-2xl text-[#94f1ff] bg-transparent hover:bg-[#151f3a] hover:border-[#151f3a]'><FaGithub /></a>
        </div>
    );
};

export default SocialLinks;