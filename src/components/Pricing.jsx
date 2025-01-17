import React from "react";
import Section from "./Section";
import Heading from "./Heading"
import PricingList from "./PricingList"
import {LeftLine,RightLine} from "./design/Pricing"
import { smallSphere, stars } from "../assets";

const Pricing = () => {
  return ( 
    <Section id="pricing" className="overflow-hidden">
      <div className="relative container z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="z-1 "
            width={255}
            height={255}
            alt="sphere"
          />
          <div
            className="absolute top-1/2 left-1/2 w-[60rem]
        -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <img src={stars} className="w-full" width={950} height={400} />
          </div>
        </div>
        <Heading  
        tag='Get started with brainwave'
        title="Pay once, use forever"/>
        <div className="relative">
           <PricingList/>
           <LeftLine/>      
           <RightLine/>
        </div>
        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
