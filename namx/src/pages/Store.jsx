import React from "react";
import Navbar from "../components/Navbar";
import Photo from "../assets/NAMX-01.jpg";

const products = [
  {
    id: 1,
    name: "Machined Pen",
    color: "Black",
    price: "$35",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
    imageAlt:
      "Black machined steel pen with hexagonal grip and small white logo at top.",
    availableColors: [
      { name: "Black", colorBg: "#111827" },
      { name: "Brass", colorBg: "#FDE68A" },
      { name: "Chrome", colorBg: "#E5E7EB" },
    ],
  },
  // More products...
];

function Store() {
  return (
    <>
      <div className="bg-black h-1/2">
        <div className="relative pb-24 bg-sky-800 sm:pb-32">
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
          <div className="relative mt-24 max-w-md mx-auto px-4 sm:max-w-3xl sm:mt-32 sm:px-6 lg:max-w-7xl lg:px-8 flex justify-end w-screen shadow-white">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl  ">
              STORE
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">
          <div className="mt-8 relative">
            <div className="relative w-full pb-6 -mb-6 overflow-x-auto">
              <ul
                role="list"
                className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8"
              >
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="w-64 inline-flex flex-col text-center lg:w-auto"
                  >
                    <div className="group relative">
                      <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="w-full h-full object-center object-cover group-hover:opacity-75"
                        />
                      </div>
                      <div className="mt-6">
                        <p className="text-sm text-gray-500">{product.color}</p>
                        <h3 className="mt-1 font-semibold text-gray-900">
                          <a href={product.href}>
                            <span className="absolute inset-0" />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-gray-900">{product.price}</p>
                      </div>
                    </div>

                    <h4 className="sr-only">Available colors</h4>
                    <ul
                      role="list"
                      className="mt-auto pt-6 flex items-center justify-center space-x-3"
                    >
                      {product.availableColors.map((color) => (
                        <li
                          key={color.name}
                          className="w-4 h-4 rounded-full border border-black border-opacity-10"
                          style={{ backgroundColor: color.colorBg }}
                        >
                          <span className="sr-only">{color.name}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex px-4 sm:hidden">
            <a
              href="#"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              See everything<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
