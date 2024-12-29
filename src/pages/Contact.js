import React from "react";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
const Contact = () => {
  const { loading } = useSelector((state) => state.products);
  return (
    <>
      <Loader loading={loading} />
      <div
        className="w-full lg:h-[40vh] h-[30vh] bg-[url('./images/contact.jpg')] bg-cover mb-10"
        data-aos="zoom-in"
      >
        <div className="w-full lg:h-[40vh] h-[30vh] bg-black/40">
          <p className="text-white text-5xl font-semibold text-center pt-32">
            Contact Us
            <span className="block text-sm mx-auto w-4/5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            </span>
          </p>
        </div>
      </div>
      <div
        className="max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 place-items-center gap-16 items-start  
      "
      >
        <p className="w-[70%] whitespace-normal" data-aos="slide-up">
          <p className="font-semibold pb-2">Customer Support</p>
          Toll Free No: 1660-01-5-8888 (Toll Free)
          <br />
          Viber : Ecommerce.com/viber <br />
          Whatsapp : 9801165561 <br />
          Email: support@Ecommerce.com Phone: 01-5970017 <br />
          (For general queries and assistance)
        </p>
        <p className="w-[70%] whitespace-normal" data-aos="slide-up">
          <p className="font-semibold pb-2">Ecommerce Pasal/Agent Inquiry</p>
          Email: pasal@Ecommerce.com <br />
          Contact Number: 01-5970017 <br />
          Viber: 8080808080 <br />
          (To become a Ecommerce Pasal and sell Ecommerce services)
        </p>
        <p className="w-[70%] whitespace-normal" data-aos="slide-up">
          <p className="font-semibold pb-2">
            Flight Ticketing Query and Support
          </p>
          Contact Number: 9801856364 ( 7 Am to 8 PM ) <br />
          Email: traveldesk@Ecommerce.com
        </p>
        <p className="w-[70%] whitespace-normal" data-aos="slide-up">
          <p className="font-semibold pb-2">Event Ticket Partnership Queries</p>
          Email: marketing@Ecommerce.com <br />
          Contact Number: 9801888108 <br />
          (To partner for an event or sell tickets online from Ecommerce's
          platform)
        </p>
        <p className="w-[70%] whitespace-normal" data-aos="slide-up">
          <p className="font-semibold pb-2">Bank Partnership</p>
          Contact Number: 9801165586 <br />
          Email: bfi@Ecommerce.com <br />
          (To partner with Ecommerce for fund transfer option)
        </p>
        <p className="w-[70%] whitespace-normal" data-aos="slide-up">
          <p className="font-semibold pb-2">
            Ecommerce Payment Gateway Inquiry
          </p>
          Contact Number: 9801856394 or 9801301162 <br />
          Email: merchant@Ecommerce.com
        </p>
        <p className="w-[70%] whitespace-normal" data-aos="slide-up">
          <p className="font-semibold pb-2">
            Ecommerce Bazaar Business Inquiry
          </p>
          Contact Number: 9801856369 <br />
          Email: bazaar@Ecommerce.com
        </p>
        <p className="w-[70%] whitespace-normal" data-aos="slide-up">
          <p className="font-semibold pb-2">
            Ecommerce Education/School Business Inquiry
          </p>
          Contact Number: 9801856422 or 9801856475 <br />
          Email: education@Ecommerce.com
        </p>
        <p className="w-[70%] whitespace-normal" data-aos="slide-up">
          <p className="font-semibold pb-2">Merchant Support Inquiry</p>
          Contact Number: 9801165565 9801856451 <br />
          Email: merchantcare@Ecommerce.com <br />
          (To integrate Ecommerce to your business and other online platforms)
        </p>
      </div>
      <p className="text-2xl font-semibold text-center mt-20">Our Location</p>
      <div
        className="max-w-7xl sm:h-[30rem] h-auto  bg-blue-200 mx-auto mb-20 rounded-md overflow-auto"
        data-aos="zoom-in"
      >
        <iframe
          width="100%"
          height="480"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=480&amp;hl=en&amp;q=kathmandu,Nepal+(Our%20Store)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">
            Calculate population in area
          </a>
        </iframe>
      </div>
    </>
  );
};

export default Contact;
