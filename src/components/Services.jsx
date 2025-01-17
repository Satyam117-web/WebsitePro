import Section from "./Section";
import Heading from "./Heading";
import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container ">
        <Heading
          title="Generative Ai made for Creators"
          text="Brainwave unlocks potential of Ai powered applications"
        />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto ">
              <h4 className="h4 mb-4">Smartest Ai</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlocks the potential of Ai powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start p-4 border-t border-n-6"
                  >
                    <img src={check} width={24} height={24} />

                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border border-n-1/10 lg:left-1/2 lg:right-auto lg:bottom-8  lg:translate-x-1/2" />
          </div>
          <div className="relative grid z-1 gap-5 lg:grid-cols-2">
            <div className="relative rounded-3xl border border-n-1/10 overflow-hidden min-h-[39rem]  ">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover "
                  width={630}
                  height={750}
                  alt="robo"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15 ">
                <h4 className="h4 mb-4"> Photo Editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  {" "}
                  Automatically enhances your pictures using this Ai feature.
                  Try it now!
                </p>
              </div>
              <PhotoChatMessage />
            </div>
            <div
              className="p-4 bg-n-7 rounded-3xl overflow-hidden 
            lg:min-h-[46rem]"
            >
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4 ">Video Generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The worlds most powerful Ai photo and video art generation
                  engine.What will you create?{" "}
                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative bg-n-8 rounded-xl overflow-hidden h-[20rem] md:h-[25rem]">
                <img src={service3} className="w-full h-full object-cover " width={520} height={400} alt="GreenRobo"/>
                <VideoChatMessage/>
                <VideoBar/> 
              </div>
            </div>
          </div>
          <Gradient/> 
        </div>
      </div>
    </Section>
  );
};

export default Services;
