import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const sendEmail = (event) => {
    event.preventDefault()

    emailjs
      .sendForm(
        'service_rzsey8a',
        'template_oml956a',
        form.current,
        'ek-04JeVeV648oXgd'
      )
      .then(
        (result) => {
          setFormData({
            user_name: '',
            user_email: '',
            subject: '',
            message: '',
          })
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <div className="flex flex-col md:w-1/2 w-full justify-center items-center">
        <h2
          className="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left p-8 leading-8 m-4 text-xl max-w-prose bg-primary bg-opacity-70 rounded-md border-x-gray-dark"
        >
          I am always interested in continuing to hone my skills or learn new
          ones. With that in mind or if you'd just like to reach out with a
          request or question, don't hesitate to contact me using this form.
        </h2>
      </div>
      <div className="flex flex-col md:w-1/2 w-full justify-center items-center pl-3 ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-col-2 bg-primary bg-opacity-70 rounded-md border-x-gray-dark p-4"
        >
          <div className="mb-6 col-span-1 pr-2">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              onChange={handleInputChange}
              value={formData.user_name}
              type="text"
              id="name"
              name="user_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-6 col-span-1 pl-2">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              onChange={handleInputChange}
              value={formData.user_email}
              type="email"
              id="email"
              name="user_email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6 col-span-2">
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              onChange={handleInputChange}
              value={formData.subject}
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6 col-span-2 grid-rows-3">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Message
            </label>
            <input
              onChange={handleInputChange}
              value={formData.message}
              name="message"
              type="text"
              id="message"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="col-start-2 col-span-1 text-white bg-secondary hover:bg-warning focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
export default Contact
