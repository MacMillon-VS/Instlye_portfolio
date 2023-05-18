import React from "react";
import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";

import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mx-auto py-6 px-12 bottom-0 mt-12 text-center gap-8 text-gray-300 border-t-[1px] border-cyan-700 grid md:grid-cols-3">
      <div className="my-auto">
        <h6 className="font-bold text-lg text-gray-400">Business Hours</h6>
        <ul>
          <li className="md:py-2 text-sm">24/7</li>
        </ul>
      </div>

      <div>
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">INSTYLE</h1>
          <p className="py-4">Architect / Interior / Construction</p>
        </div>
        <div className="flex gap-8 md:my-2 justify-center">
          <a
            target="_blank"
            href="https://instagram.com/instyle_architect?igshid=ZDdkNTZiNTM="
          >
            <FaInstagram size={30} className="hover:animate-bounce" />
          </a>
          <a target="_blank" href="https://wa.me/+918144001528">
            <FaWhatsapp size={30} className="hover:animate-bounce" />
          </a>
          <a target="_blank" href="mailto:teamimran96@gmail.com">
            <AiFillMail size={30} className="hover:animate-bounce" />
          </a>
          <a href="tel:+918144001528">
            <FaPhone size={30} className="hover:animate-bounce" />
          </a>
        </div>
      </div>
      <div className="my-auto">
        <h6 className="font-bold text-lg text-gray-400">Contact</h6>
        <ul>
          <li className="py-2 text-sm">Mobile: +91 8144001528</li>
          <li className="pb-2 text-sm">Email: teamimran96@gmail.com </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
