import React from "react";
import P1 from "../assets/NAMX-01.jpg";
import P3 from "../assets/NAMX-09.jpg";
import P4 from "../assets/NAMX-05.jpg";
import P5 from "../assets/NAMX-08.jpg";

const features = [
  {
    description:
      "Fruit of a collaboration between NAMX and PININFARINA, the design of the car reflects a firm attention to details and purity. The inventiveness of Thomas de Lussac, also designer of the NAMX, was reinforced by the unique know-how of Kevin Rice, Chief Creative Officer of PININFARINA, and his teams to design a prototype that is both resolutely futureoriented and inspired by multiple facets. Fascinated by science fiction, Thomas de Lussac chose to give the vehicle’s shape the cutting edge of the coming era. His taste for the American design of the 50s and 60s, his predilection for “Muscle Cars”, inspired him to create a car that goes against the current, smooth, conventional design of electric cars. The NAMX HUV is powerful and asserts a conquering stance.",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
];
const feature = [
  {
    description:
      'Expected at the 2022 Paris Motor Show, the NamX HUV will begin marketing in 2025. It can already be pre-ordered on the brand website.Without going into details, the manufacturer announces a price ranging from 65,000 to 95,000 € depending on the configuration chosen.',
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
];
const P = [
  {
    description:
      'Designed by the teams of the Italian Pininfarina, NamX hydrogen SUV sports unique lines. Larger than a Hyundai Nexo, it extends over 4.9 m in length and is distinguished by its large X-shaped light signature running through the grille assembly.',
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
];
const A = [
  {
    description:
      'On the hydrogen part, the NamX SUV sports a fairly unique configuration. Without giving any indication as to the characteristics of the fuel cell, the manufacturer indicates the presence of a double storage system based on a fixed tank supplemented by six removable capsules. Housed on the rear part, these can be replaced in just a few seconds. Without giving any indication as to the capacity of the hydrogen tanks, NamX announces a range of 800 km.',
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Developers = () => {
  return (
    <div className="bg-black">
      <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="max-w-7xlxl mx-auto text-center text-gray-200">
          <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            THE WAY
          </h2>
          <h3 className="mt-4 text-gray-200 font-mono">
            On-demand hydrogen enabling sustainable, limitless mobility
          </h3>
          <p className="text-start mt-5">
            NAMX’s HUV is part of a large-scale industrial and technological
            project whose ambition is to reconcile human mobility and
            environmental preservation thanks to green hydrogen. Faouzi Annajan
            and Thomas de Lussac, the cofounders of NAMX, intend to lead this
            project from end to end by federating key players in the industry,
            articulating the best of the existing technologies, and creating the
            solutions which are still missing.
          </p>
          <p className="text-start mt-5">
            The HUV and its technology, are the first products of this unique
            approach. By offering new ways to provide hydrogen to end customers
            and flexibility to recharge it helps greening mobility. The
            geopolitical context highlights the strategic importance of hydrogen
            which production objective has been tripled under Repower EU and
            which offers a clear path to decarbonize mobility in Europe and
            beyond, with nearly 1.5 billion private vehicles to be replaced by
            2050.
          </p>
          <p className="text-start mt-5">
            In addition, by allowing home deliveries and a tank change in
            seconds, NAMX changes the experience of clean mobility by providing
            the fluidity, flexibility, and accessibility. The HUV and its
            technology allow for the revival of the historical promise of
            freedom that is attached to the automobile and to place it into a
            sustainable future, where mobility takes place harmoniously within
            the environment.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
            >
              <div
                className={classNames(
                  featureIdx % 1 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4"
                )}
              >
                <h3 className="text-lg font-medium text-gray-200">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8"
                )}
              >
                <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                  <img src={P3} className="object-center object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 space-y-16">
          {P.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
            >
              <div
                className={classNames(
                  featureIdx % 1 === 0
                    ? "lg:col-end-1"
                    : "lg:col-end-8 xl:col-end-9",
                  "mt-6 lg:mt-0 lg:row-end-1 lg:col-span-5 xl:col-span-4"
                )}
              >
                <h3 className="text-lg font-medium text-gray-200">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-end-1 xl:col-end-9"
                    : "lg:col-end-1",
                  "flex-auto lg:row-end-1 lg:col-span-7 xl:col-span-8"
                )}
              >
                <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                  {/* <img src={P5} alt={feature.imageAlt} className="object-center object-cover" /> */}
                  <img
                    src={P5}
                    alt={feature.imageAlt}
                    className="object-center object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 space-y-16">
          {feature.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4"
                )}
              >
                <h3 className="text-lg font-medium text-gray-200">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </p>
              </div>
              <div
                className={classNames(
                  featureIdx % 1 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8"
                )}
              >
                <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                  {/* <img src={P5} alt={feature.imageAlt} className="object-center object-cover" /> */}
                  <img
                    src={P1}
                    alt={feature.imageAlt}
                    className="object-center object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 space-y-16">
          {A.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
            >
              <div
                className={classNames(
                  featureIdx % 1 === 0
                    ? "lg:col-end-1"
                    : "lg:col-end-8 xl:col-end-9",
                  "mt-6 lg:mt-0 lg:row-end-1 lg:col-span-5 xl:col-span-4"
                )}
              >
                <h3 className="text-lg font-medium text-gray-200">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-end-1 xl:col-end-9"
                    : "lg:col-end-1",
                  "flex-auto lg:row-end-1 lg:col-span-7 xl:col-span-8"
                )}
              >
                <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                  {/* <img src={P5} alt={feature.imageAlt} className="object-center object-cover" /> */}
                  <img
                    src={P4}
                    alt={feature.imageAlt}
                    className="object-center object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developers;
