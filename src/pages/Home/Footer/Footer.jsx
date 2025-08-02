import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-5 py-20">
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <div className=" md:w-1/2 flex flex-col justify-start items-start">
            <h1 className="text-3xl font-bold">
              Desh<span className="text-green-600">C</span>ourier
            </h1>

            <p className="text-[12px] pt-5 md:pr-50">
              At Northbound we specialize in aligning people strategies with
              business goals. Whether you're growing, restructuring, or adapting
              to new challenges, we help ensure your organization has the right
              talent, in the right place, at the right time.
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <h1 className="text-[20px] font-semibold pb-6">Services</h1>
              <ul className="text-[12px] space-y-2">
                <li>Oue Model</li>
                <li>Talent and Workforce Strategy</li>
                <li>Optimize your Talent processes</li>
                <li>Interim Consultants</li>
                <li>Advisory Servicer</li>
                <li>Recruitment and Executive Search</li>
              </ul>
            </div>
            <div className="flex flex-col items-start pr-20">
              <h1 className="text-[20px] font-semibold pb-6">Quick Links</h1>
              <a className="text-[12px]">Consulting Services</a>
              <a className="text-[12px] py-2">About Us</a>
              <a className="text-[12px]">Knowledge Bank</a>
              <div className="flex gap-2 py-5">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-9 h-9 rounded-full object-cover"
                    src="/linkedin.jpg"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-9 h-9 rounded-full object-cover"
                    src="/twitter.jpg"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-8 h-8 rounded-full object-cover"
                    src="/facebook.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-white w-full my-5" />
        <p className=" py-6 text-[14px]">
          2024 Copyright Bendertm I All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
