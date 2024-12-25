import { Award, Icon, Target, Users } from "lucide-react";
import React from "react";
import Scroller from "../components/ui/Scroller";

function About() {
  const stats = [
    { Icon: Users, label: "Happy Clients", value: "500+" },
    { Icon: Target, label: "Projects Completed", value: "1000+" },
    { Icon: Award, label: "Awards Won", value: "25+" },
  ];

  const imageData = [
    {
      url: "https://plus.unsplash.com/premium_photo-1682144919707-938f3d798ca0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Facility",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682144919707-938f3d798ca0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Facility",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682144919707-938f3d798ca0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Facility",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682144919707-938f3d798ca0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Facility",
    },
  ];

  const StatCard = ({ Icon, label, value }) => (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <Icon className="w-8 h-8 text-orange-500 mb-3" />
      <h3 className="text-3xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );

  return (
    <>
      <div className="md:p-20 py-10 px-4 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="font-bold text-3xl lg:text-5xl mt-5 text-center lg:text-left">
          About Us
        </div>
        <div className="mt-10 lg:mt-16 flex gap-10 flex-col-reverse lg:flex-row items-center lg:items-start">
          <img
            src={
              "https://plus.unsplash.com/premium_photo-1682144919707-938f3d798ca0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjdG9yeXxlbnwwfHwwfHx8MA%3D%3D"
            }
            alt="img"
            className="lg:min-w-[400px] lg:min-h-[600px] lg:max-w-[400px] lg:max-h-[600px] min-w-full px-4 lg:p-0  rounded-3xl object-cover object-center overflow-hidden hover:scale-105 transition-all duration-300 lg:hover:shadow-[5px_5px_0px_0px_rgba(194,65,12)] "
          />
          <div className="max-w-5xl lg:mt-4">
            <div className="text-4xl text-center lg:text-left font-bold bg-gradient-to-l from-orange-700 to-orange-500 lg:w-fit bg-clip-text text-transparent	">
              Pavan Foam Industries
            </div>
            <div className="mt-7 lg:mt-5 text-lg font-normal text-center lg:text-left">
              Established in 2024 in the vibrant city of Surat, Pavan Foam
              Industries is committed to delivering high-quality foam solutions
              tailored to meet diverse industrial and commercial needs.
              <br />
              <br />
              With a vision rooted in innovation and customer satisfaction, we
              specialize in manufacturing premium foam sheets designed for
              durability, versatility, and superior performance. Our dedication
              to quality, paired with cutting-edge technology, ensures that our
              products consistently meet the highest industry standards.
              <br />
              <br />
              At Pavan Foam Industries, we believe in fostering long-term
              relationships with our clients by offering exceptional service and
              customized solutions. Whether you're in need of foam for
              packaging, construction, or any other application, our expert team
              is here to assist you every step of the way.
              <br />
              <br />
              Join us on our journey as we continue to redefine excellence in
              foam manufacturing.
            </div>
          </div>
        </div>
        <div className="hidden lg:flex mt-20 text-4xl font-bold text-center lg:text-left">
          Our Gallery
        </div>
        <div className="hidden mt-20 lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageData.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 aspect-[7/10] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
