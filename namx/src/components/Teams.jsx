import React from "react";

const people = [
  {
    name: "Mohammed Amine Elazzab",
    role: "FullStack Developer",
    imageUrl: "https://github.com/AmineElazzab.png",
    githubUrl: "https://github.com/AmineElazzab",
    linkedinUrl: "https://www.linkedin.com/in/mohammed-amine-elazzab/",
  },
  {
    name: "Imane Moultamiss",
    role: "FullStack Developer",
    imageUrl: "https://github.com/moultamissimane.png",
    githubUrl: "https://github.com/moultamissimane",
    linkedinUrl: "https://www.linkedin.com/in/imane-moultamiss-07a307231/#",
  },
  {
    name: "Fahd Roussafi",
    role: "FullStack Developer",
    imageUrl: "https://github.com/Fahdroussafi.png",
    githubUrl: "https://github.com/Fahdroussafi",
    linkedinUrl: "https://www.linkedin.com/in/fahd-roussafi/",
  },
];

function Teams() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-200">
              {" "}
              Meet our great team{" "}
            </h2>
            <p className="text-xl text-gray-200">
              <span>&#10075;</span>
              <span>&#10075;</span>
              <span>&#9996;</span>
              So Far So Good<span>&#10084;</span>
              <span>&#10076;</span>
              <span>&#10076;</span>
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-6">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1 text-gray-200">
                      <h4>{person.name}</h4>
                      <p className="text-gray-200">{person.role}</p>
                    </div>
                    <ul role="list" className="flex justify-center space-x-5">
                      <li>
                        <a
                          href={person.githubUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Github</span>
                          <svg
                            width="24"
                            height="24"
                            aria-hidden="true"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={person.linkedinUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Teams;
