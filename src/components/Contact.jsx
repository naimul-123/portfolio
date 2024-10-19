
import { useRef } from 'react';
import { FaArrowRight, FaEnvelope, FaRocketchat } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaHeadphones } from 'react-icons/fa6';

const Contact = () => {
    const form = useRef();
    const serviceKey = import.meta.env.VITE_MAILJS_SERVICE_ID;
    const templateKey = import.meta.env.VITE_MAILJS_TEMPLATE_ID;
    const apiKey = import.meta.env.VITE_MAILJS_API_KEY;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(serviceKey, templateKey, form.current, {
                publicKey: apiKey,
            })
            .then(
                () => {
                    Swal.fire("Email send successfully!");
                    e.target.reset();
                },
                (error) => {
                    Swal.fire('Failed To send email...', error.text);

                },
            );
    };
    return (
        <div id="contact" className='px-8 sm:px-12 md:px-16 lg:px-24 xl:px-[128px] py-[64px] rounded-3xl'>
            <div className='text-center space-y-2'>
                <h3 className='text-[#4d4cff] capitalize font-semibold text-2xl'>Contact with me</h3>
                <h2 className='text-[#d5daf0] capitalize text-5xl font-bold'>Contact with me</h2>
                <p className="py-3 text-[#d5daf0] ">
                    Contact with me in frontend development and a keen eye for design, I <br />
                    specialize in creating interactive and responsive web.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
                <div className="bg-transparent lg:col-span-2 space-y-4 text-[#d5daf0]  card  border-2 border-[#301e68] p-7">
                    <h2 className='text-[#d5daf0] capitalize text-3xl font-bold'>Send Me a message</h2>
                    <form className='grid grid-cols-1 lg:grid-cols-2 justify-between gap-10' ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder="Your Name" className="input bg-inherit border-2  border-[#301e68]  w-full" required />
                        <input type="email" name='email' placeholder="Your Email" className="input bg-transparent border-2  border-[#301e68]  w-full" required />
                        <textarea name='message' className="textarea textarea-lg min-h-[280px] flex-grow col-span-full bg-inherit border-2  border-[#301e68]  w-full" placeholder="Your Message" required></textarea>
                        <button className="btn btn-outline text-[#94f1ff] rounded-full hover:bg-[#94f1ff] hover:text-[#070721]">Send Message <FaArrowRight /></button>
                    </form>

                </div>
                <div className="bg-transparent space-y-4 text-[#d5daf0]  card  border-2 border-[#301e68] p-7">
                    <div>
                        <button className='ml-5 text-[#94f1ff] bg-[#202a45] btn btn-circle btn-sm border-none hover:bg-[#202a45]'> <FaHeadphones /></button>
                        <h4 className='my-3 capitalize text-xl font-bold'>Get Support</h4>
                        <p className="">If you want to communicate with live please <a className='text-[#94f1ff]'>Skype online</a> contact me.</p>
                        <p className="">Phone Number: 01731408005</p>
                    </div>
                    <div>
                        <button className='ml-5 text-[#94f1ff] bg-[#202a45] btn btn-circle btn-sm border-none hover:bg-[#202a45]'> <FaEnvelope /></button>
                        <h4 className='my-3 capitalize text-xl font-bold'>Communication with mail</h4>
                        <p className="">Please submit your email in my email. I will reply you as soon as possible.</p>
                        <p className="">Email Address: naimuliu@gmail.com</p>
                    </div>
                    <div className='space-y-2'>
                        <button className='ml-5 text-[#94f1ff] bg-[#202a45] btn btn-circle btn-sm border-none hover:bg-[#202a45]'> <FaRocketchat /></button>
                        <h4 className='my-3 capitalize text-xl font-bold'>Want to chat now?</h4>
                        <p className="">If you want to chat with me on messenger please click the button.</p>
                        <button className="btn btn-outline text-[#94f1ff] rounded-full hover:bg-[#94f1ff] hover:text-[#070721]">Open Chat With Me <FaArrowRight /></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;