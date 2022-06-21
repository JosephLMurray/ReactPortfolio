import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <p
        className="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left px-12 leading-8 mx-4 text-xl max-w-prose"
      >
        Thank you for taking the time to visit my portfolio. My name is Joseph
        Murray, Jr and I'm a product of the UCF Coding Bootcamp . Prior to that,
        I spent 15+ years in I.T. doing everything from onsite training to
        forensic accounting for Point of Sale software.
        <br />
        <br />I believe that learning never stops, and that it is a life long
        and worthy pursuit. I enjoy logic puzzles, am an avid boardgame player,
        and in my spare time I coach little league baseball for my 2 sons when
        I'm not in the gym lifting heavy objects and putting them back down
        again.
      </p>
    </div>
  )
}
export default About
