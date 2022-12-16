import React from "react";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="w-full bg-black text-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16 ">
        <div>
          <h1 className="py-4 text-start text-4xl">THE PROJECT</h1>
          <p className="py-4 text-md text-start ">
            A hydrogen-powered SUV partially fueled by removable capsules,
            paving the way a semless and carbon-free experience of mobility
          </p>
          <h6 className="text-start mb-8">
            NAMX presented the prototype of its HUV, the world’s first car
            partially powered by a patented removable tank system that promises
            to change the experience paradigm of clean mobility and make
            hydrogen fuel widely available.
          </h6>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AboutCard
              icon={<SiHiveBlockchain size={40} />}
              heading="Reliable, tamper-proof network"
              text="Use decentralization, trusted nodes, premium data, and
        cryptographic proofs to connect highly accurate and available
        data/APIs to any smart contract."
            />

            <AboutCard
              icon={<SiFsecure size={40} />}
              heading="Seamless connection to any API"
              text="Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain."
            />
            <AboutCard
              icon={<SiStrapi size={40} />}
              heading="Proven, ready-made solutions"
              text="Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications."
            />
            <AboutCard
              icon={<VscServerProcess size={40} />}
              heading="Secure off-chain computation"
              text="Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
