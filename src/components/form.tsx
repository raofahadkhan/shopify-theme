import React from "react";

export default function Form() {
  return (
    <div>
      <div className="flex justify-center text-3xl font-extrabold w-[960px]">
        <p className="text-left">Questions? Get in touch.</p>
      </div>
      <div className="flex content-center justify-center lg:p-[40px]">
        <form className="mt-3 flex flex-col gap-3 p-[20px] w-[960px]">
          <div className="flex flex-wrap gap-2">
            <div className="flex flex-1 flex-col gap-3 mt-5">
              <label htmlFor="userName">Name</label>
              <input
                id="userName"
                type="text"
                className="border p-2 outline-none focus:border-gray-900"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 mt-5">
              <label htmlFor="userEmail">Email</label>
              <input
                id="userEmail"
                type="email"
                className="border p-2 outline-none focus:border-gray-900"
              />
            </div>
          </div>

          <label className="mt-5" htmlFor="userMessage">
            Phone number
          </label>
          <textarea
            id="userMessage"
            rows={1}
            className="border p-2 outline-none focus:border-gray-900"
          />
          <label className="mt-5" htmlFor="userMessage">
            Message
          </label>
          <textarea
            id="userMessage"
            rows={6}
            className="border p-2 outline-none focus:border-gray-900"
          />

          <button
            className="my-6 h-11 w-28  bg-gray-900 px-8 text-lg font-bold text-gray-100"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
