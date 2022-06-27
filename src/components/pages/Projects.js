import React from 'react'
import jate from '../../assets/images/JATE.png'
import houser from '../../assets/images/housertrans.png'

const Projects = () => {
  return (
    <div className="w-full justify-center items-center flex flex-col mb-6 ">
      <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-xl font-mono text-white p-6">
        Projects:
      </h1>
      <div class="flex justify-around items-center gap-6 flex-wrap w-full ">
        <div class="flex flex-col mx-10 md:mx-0 w-full md:flex-row md:w-2/5 rounded-lg bg-primary shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none  md:rounded-l-lg"
            src={jate}
            alt="JATE"
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2 text-mono">
              J.A.T.E. (Just Another Text Editor)
            </h5>
            <p class="text-gray-700 text-mono mb-4 text-mono">
              A PWA text editor that utilizes IndexedDB to save input
            </p>
            <div className="py-2 text-mono">
              <a
                className="text-info  inline-flex"
                href="https://desolate-citadel-71887.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live Link
              </a>
              <p className="inline-flex ml-2 text-mono"> / </p>
              <a
                className="text-info ml-2 inline-flex text-mono"
                href="https://github.com/JosephLMurray/text-editor"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repository
              </a>
            </div>
            <p class="text-gray-600 text-xs pt-2 text-mono">
              React / JavaScript / HTML / CSS
            </p>
          </div>
        </div>
        <div class="flex flex-col mx-10 w-full md:mx-0 md:flex-row md:w-2/5 rounded-lg bg-primary shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-contain bg-info md:w-48 rounded-t-lg md:rounded-none  md:rounded-l-lg"
            src={houser}
            alt="Houser"
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-mono mb-2">Houser</h5>
            <p class="text-gray-700 text-mono mb-4">
              A MERN stack application for property management which also allows
              for payment from tenants.
            </p>
            <div className="py-2">
              <a
                className="text-info  inline-flex"
                href="https://warm-garden-96441.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live Link
              </a>
              <p className="inline-flex ml-2"> / </p>
              <a
                className="text-info ml-2 inline-flex"
                href="https://github.com/JosephLMurray/Houser"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repository
              </a>
            </div>
            <p class="text-gray-600 text-xs pt-2">
              React / JavaScript / HTML / CSS / Mongo / GraphQL / Apollo /
              Bootstrap
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects
