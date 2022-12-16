import React from "react";
import Navbar from "../components/Navbar";
import Photo from "../assets/NAMX-04.jpg";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import { Popover } from "@headlessui/react";

function Contact() {
  return (
    //   <>
    //     <Navbar/>
    //     <div className="w-full h-screen">
    //     <img
    //       className="object-cover h-full w-full absolute -z-10"
    //       src={Photo}

    //     />
    //     <div className="w-full h-1/2 flex justify-center items-center text-white px-4 text-center">
    //       <h1 className="text-6xl font-mono">CONTACT</h1>
    //     </div>
    //   </div>
    //   <div className="relative bg-white">
    //     <div className="absolute inset-0">
    //       <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
    //     </div>
    //     <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
    //       <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
    //         <div className="max-w-lg mx-auto">
    //           <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
    //           <p className="mt-3 text-lg leading-6 text-gray-500">
    //             Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
    //             arcu.
    //           </p>
    //           <dl className="mt-8 text-base text-gray-500">
    //             <div>
    //               <dt className="sr-only">Postal address</dt>
    //               <dd>
    //                 <p>742 Evergreen Terrace</p>
    //                 <p>Springfield, OR 12345</p>
    //               </dd>
    //             </div>
    //             <div className="mt-6">
    //               <dt className="sr-only">Phone number</dt>
    //               <dd className="flex">
    //                 <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
    //                 <span className="ml-3">+1 (555) 123-4567</span>
    //               </dd>
    //             </div>
    //             <div className="mt-3">
    //               <dt className="sr-only">Email</dt>
    //               <dd className="flex">
    //                 <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
    //                 <span className="ml-3">support@example.com</span>
    //               </dd>
    //             </div>
    //           </dl>
    //           <p className="mt-6 text-base text-gray-500">
    //             Looking for careers?{' '}
    //             <a href="#" className="font-medium text-gray-700 underline">
    //               View all job openings
    //             </a>
    //             .
    //           </p>
    //         </div>
    //       </div>
    //       <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
    //         <div className="max-w-lg mx-auto lg:max-w-none">
    //           <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
    //             <div>
    //               <label htmlFor="full-name" className="sr-only">
    //                 Full name
    //               </label>
    //               <input
    //                 type="text"
    //                 name="full-name"
    //                 id="full-name"
    //                 autoComplete="name"
    //                 className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
    //                 placeholder="Full name"
    //               />
    //             </div>
    //             <div>
    //               <label htmlFor="email" className="sr-only">
    //                 Email
    //               </label>
    //               <input
    //                 id="email"
    //                 name="email"
    //                 type="email"
    //                 autoComplete="email"
    //                 className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
    //                 placeholder="Email"
    //               />
    //             </div>
    //             <div>
    //               <label htmlFor="phone" className="sr-only">
    //                 Phone
    //               </label>
    //               <input
    //                 type="text"
    //                 name="phone"
    //                 id="phone"
    //                 autoComplete="tel"
    //                 className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
    //                 placeholder="Phone"
    //               />
    //             </div>
    //             <div>
    //               <label htmlFor="message" className="sr-only">
    //                 Message
    //               </label>
    //               <textarea
    //                 id="message"
    //                 name="message"
    //                 rows={4}
    //                 className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
    //                 placeholder="Message"
    //                 defaultValue={''}
    //               />
    //             </div>
    //             <div>
    //               <button
    //                 type="submit"
    //                 className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //               >
    //                 Submit
    //               </button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
   <>
      <div className="bg-black h-screen">
        <header className="relative pb-24 bg-sky-800 sm:pb-32">
          <div className="absolute inset-0">
            <img className="w-full h-full object-cover" src={Photo} alt="" />
            <div
              className="absolute inset-0  mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relativ flex items-center justify-center pt-7 pb-2 px-4 sm:px-6 lg:px-8">
            <Navbar />
          </div>
          <div className="relative mt-24 max-w-md mx-auto px-4 sm:max-w-3xl sm:mt-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl flex justify-center">
              CONTACT
            </h1>
          </div>
        </header>

        
          <div className="relative bg-black  ">
            <div className="absolute inset-0">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-black" />
            </div>
            <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
              <div className="bg-black py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                <div className="max-w-lg mx-auto">
                  <h2 className="text-2xl font-extrabold tracking-tight text-gray-300 sm:text-3xl">
                    Get in touch
                  </h2>
                  <p className="mt-3 text-lg leading-6 text-gray-300">
                    Première voiture à hydrogène du jeune constructeur, le NamX
                    HUV est un grand SUV à pile à combustible. Annonçant jusqu’à
                    800 km d’autonomie, il entamera sa commercialisation à
                    horizon 2025.
                  </p>
                  <dl className="mt-8 text-base text-gray-300">
                    <div>
                      <dt className="sr-only">Postal address</dt>
                      <dd>
                        <p>14 Av. Zerktouni</p>
                        <p>Safi, MA 46000</p>
                      </dd>
                    </div>
                    <div className="mt-6">
                      <dt className="sr-only">Phone number</dt>
                      <dd className="flex">
                        <PhoneIcon
                          className="flex-shrink-0 h-6 w-6 text-gray-300"
                          aria-hidden="true"
                        />
                        <span className="ml-3">+212 613 872 479</span>
                      </dd>
                    </div>
                    <div className="mt-3">
                      <dt className="sr-only">Email</dt>
                      <dd className="flex">
                        <MailIcon
                          className="flex-shrink-0 h-6 w-6 text-gray-300"
                          aria-hidden="true"
                        />
                        <span className="ml-3">ma.elazzab@gmail.com</span>
                      </dd>
                    </div>
                  </dl>
               
                </div>
              </div>
              <div className="bg-black py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                <div className="max-w-lg mx-auto lg:max-w-none">
                  <form
                    action="#"
                    method="POST"
                    className="grid grid-cols-1 gap-y-6"
                  >
                    <div>
                      <label htmlFor="full-name" className="sr-only">
                        Full name
                      </label>
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        autoComplete="name"
                        className="bg-gray-900 block w-full shadow-sm py-3 px-4 placeholder-gray-300 focus:ring-gray-800 focus:border-gray-800 border-gray-600 rounded-md"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="bg-gray-900 block w-full shadow-sm py-3 px-4 placeholder-gray-300 focus:ring-gray-800 focus:border-gray-800 border-gray-600 rounded-md"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="sr-only">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="bg-gray-900 block w-full shadow-sm py-3 px-4 placeholder-gray-300 focus:ring-gray-800 focus:border-gray-800 border-gray-600 rounded-md"
                        placeholder="Phone"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="sr-only">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="bg-gray-900 block w-full shadow-sm py-3 px-4 text-gray-300 placeholder-gray-300 focus:ring-gray-800 focus:border-gray-800 border-gray-600 rounded-md"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        
      </div>
  </>
  );
}

export default Contact;
