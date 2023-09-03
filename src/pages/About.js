import React from "react";
import Loader from "../components/Loader";
const About = () => {
  return (
    <>
      <Loader  />
      <div className="w-full lg:h-[60vh] md:h-[50vh] h-[34vh]">
        <img
          src="./images/about1.jpg"
          className=" w-full lg:h-[60vh] md:h-[50vh] h-[34vh] object-cover"
          alt=""
          data-aos="zoom-in"
        />
      </div>
      <div className=" w-[80%] mx-auto text-justify py-10" data-aos="slide-up">
        <p className="text-center text-5xl font-semibold pb-5">Our Story</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam a
          temporibus dolor vero exercitationem voluptatum laudantium tempora.
          Aspernatur nesciunt temporibus, nostrum ex amet eum recusandae quos
          doloribus incidunt ab cupiditate explicabo est ratione fugiat odio
          maxime dignissimos soluta natus esse quasi. Temporibus dolores
          deleniti est vitae voluptatem, architecto, nam quis voluptatibus modi
          impedit nobis reiciendis, atque nisi? Sed possimus explicabo quae
          doloribus deserunt. Tempora laboriosam maxime dolorum accusantium
          libero maiores doloremque itaque quo, dicta molestias beatae accusamus
          mollitia veritatis neque hic odit quas obcaecati laudantium saepe!
          Facilis illum necessitatibus, porro neque deleniti magnam harum
          obcaecati minus dolores? Voluptatibus, deserunt ratione?
        </p>
        <p className="md:block hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum
          similique, a ut animi hic qui aspernatur quaerat suscipit odio
          quibusdam, eligendi pariatur architecto quidem possimus iure corporis
          commodi, delectus voluptatibus repellendus nihil. Beatae iure autem
          voluptate, hic corporis reprehenderit tempore ut maxime, incidunt
          quasi tempora libero quae esse! Perspiciatis esse et quidem tempora.
          Veniam sed accusantium est tenetur distinctio exercitationem
          consequatur quas? Reprehenderit dolore quos nobis blanditiis sed,
          doloremque neque id dolorem officia nostrum, cumque quas odit enim ex,
          quaerat porro itaque maxime. Temporibus natus magni, aspernatur
          dolorem laborum aut nobis fugiat pariatur corrupti, corporis maiores
          assumenda veniam iste.
        </p>
      </div>
      <img
        src="./images/about3.jpg"
        alt=""
        className="h-auto mx-auto px-4"
        data-aos="zoom-in"
      />
      <img
        src="./images/about2.jpg"
        alt=""
        className="h-auto mx-auto px-4 pb-10"
        data-aos="zoom-in"
      />
    </>
  );
};

export default About;
