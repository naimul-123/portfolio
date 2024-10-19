import NavLinks from './NavLinks';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const routes = [
        {
            id: 1,
            name: "Home",
            path: '#home'
        },
        {
            id: 2,
            name: "Service",
            path: '#service'
        },
        {
            id: 3,
            name: "Portfolio",
            path: '#portfolio'
        },
        {
            id: 4,
            name: "My Skills",
            path: '#skills'
        },
        {
            id: 7,
            name: "Contact",
            path: '#contact'
        },
    ]
    return (
        <div className="navbar px-5 sm:px-[30px] md:px-[60px] lg:px-[100px] xl:px-[200px]  2xl:px-[300px] sticky top-0 bg-inherit z-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-transparent hover:bg-[#64f1ff] text-[#d5daf0] md:hidden">
                        <FaBars />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box bg-[#64f1ff] z-[1] mt-3 w-[80vw] p-2 shadow">
                        {routes.map((route) => <NavLinks key={route.id} route={route} textColor="#070721" />)}
                    </ul>
                </div>
                <h2 className="text-2xl hidden md:block  text-white font-extrabold">Naimul <span className='text-[#94f1ff]'>Islam</span></h2>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {routes.map((route) => <NavLinks key={route.id} route={route} />)}
                </ul>
            </div>
            <div className="navbar-end  gap-2">
                <a className="btn btn-sm hidden lg:flex  btn-outline text-[#94f1ff] rounded-full hover:bg-[#94f1ff] hover:text-[#070721]">Let&#39;s Talk</a>
                <a className="btn btn-sm hidden md:flex btn-outline text-[#94f1ff] rounded-full hover:bg-[#94f1ff] hover:text-[#070721]">Buy Now</a>
                <h2 className="text-2xl md:hidden   text-white font-extrabold">Naimul <span className='text-[#94f1ff]'>Islam</span></h2>

            </div>
        </div>
    )
}

export default Navbar