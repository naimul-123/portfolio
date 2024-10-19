import SocialLinks from './SocialLinks';
const Footer = () => {
    return (

        <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start justify-center bg-[#210e60] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-[128px] py-[64px] rounded-3xl text-[#d5daf0]">

            <div className='flex flex-col col-span-full lg:col-span-1 justify-center items-center text-center lg:text-left space-y-3'>
                <a href='#' className="text-5xl text-white font-extrabold">Naimul <span className='text-[#94f1ff]'>Islam</span></a>
                <h3 className="text-3xl text-white font-bold">Fronend web developer since 2023</h3>
                <SocialLinks />
            </div>
            <div className='flex flex-col justify-center items-center space-y-3'>
                <h6 className="footer-title">Services</h6>
                <a className="hover:text-[#94f1ff]">Single Page Application</a>
                <a className="hover:text-[#94f1ff]">E-Commerce website</a>
                <a className="hover:text-[#94f1ff]">Protfolio Website</a>
                <a className="hover:text-[#94f1ff]">Blog Website</a>
            </div>
            <div className='flex flex-col justify-center items-center space-y-3'>
                <h6 className="footer-title">Company</h6>
                <a href='#service' className="hover:text-[#94f1ff]">Service</a>
                <a href='#portfolio' className="hover:text-[#94f1ff]">Portfolio</a>
                <a href='#skills' className="hover:text-[#94f1ff]">My Skills</a>
                <a href='#contact' className="hover:text-[#94f1ff]">Contact</a>
            </div>
            <div className='flex flex-col justify-center items-center space-y-3'>
                <h6 className="footer-title">Legal</h6>
                <a className="hover:text-[#94f1ff]">Terms of use</a>
                <a className="hover:text-[#94f1ff]">Privacy policy</a>
                <a className="hover:text-[#94f1ff]">Cookie policy</a>
            </div >
            <div className='col-span-full text-center my-5 border-t-2 pt-3'>
                <p>© {new Date().getFullYear()} - All right reserved by <a href='/'>Naimul Islam</a></p>
            </div>
        </footer>

    );
};

export default Footer;