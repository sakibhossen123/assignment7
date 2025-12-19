import React from 'react';

const Footer = () => {
    return (
        <div className="max-w-[1280px] mx-auto bg-black px-7  py-5 text-white">
        <div className="md:flex justify-between gap-4  text-left ">
      <div>
        <h3 className="font-bold">CS — Ticket System</h3>
        <p className="text-gray-400">
          Lorem Ipsum is simply dummy text of the <br /> printing and typesetting
          industry. Lorem <br /> Ipsum has been the industry's standard <br /> dummy text ever
          since the 1500s, when an <br /> unknown printer took a galley of type and <br />
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div>
        <h3 className="font-bold">Company</h3>
        <p className="text-gray-400 py-1">About Us</p>
        <p className="text-gray-400 py-1">Our Mission</p>
        <p className="text-gray-400 py-1">Contact Saled</p>
      </div>
      <div>
        <h3 className="font-bold">Services</h3>
        <p className="text-gray-400 py-1">Products & Services</p>
        <p className="text-gray-400 py-1">Customer Stories</p>
        <p className="text-gray-400 py-1">Download Apps</p>
      </div>
      <div>
        <h3 className="font-bold">Information</h3>
        <p className="text-gray-400 py-1">Privacy Policy</p>
        <p className="text-gray-400 py-1">Terms & Conditions</p>
        <p className="text-gray-400 py-1">Join Us</p>
      </div>
      <div>
        <h3 className="font-bold">Social Links</h3>
        <p className="text-gray-400 py-1"><span className='text-white'><i className="fa-brands fa-x-twitter"></i></span> @CS — Ticket System</p>
        <p className="text-gray-400 py-1"><span className='text-white'><i className="fa-brands fa-linkedin-in"></i></span> @CS — Ticket System</p>
        <p className="text-gray-400 py-1"><span className='text-white'><i className="fa-brands fa-facebook"></i></span> @CS — Ticket System</p>
        <p className="text-gray-400 py-1"><span className='text-white'><i className="fa-solid fa-envelope"></i></span>support@cst.com</p>
      </div>
    </div>
    <hr className="mt-11 text-gray-400" />
    <h4 className="py-4 text-center "> © 2025 CS — Ticket System. All rights reserved.</h4>
      </div>
    );
};

export default Footer;