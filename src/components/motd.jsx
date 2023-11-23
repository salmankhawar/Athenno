'use client'

import { useState } from "react"

export default function Motd({nmotd}) { 
const [motd,setMotd] = useState(nmotd[0].motd)

    return (
      <>
        {motd.length == 0 ? 
            <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-6 lg:max-w-none lg:grid-cols-1">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">What is your main focus for today?</h2>
              <div className="mt-6 flex max-w-md gap-x-4">
              <form onSubmit={(e) => setMotd(e.target.motd.value)}>
                <input
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  name="motd"
                />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
          :
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-6 lg:max-w-none lg:grid-cols-1">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">Today</h2>
              <div className="mt-6 flex max-w-md gap-x-4">
                <h3 onDoubleClick={() => setMotd('')} className="text-2xl tracking-tight text-white sm:text-4xl">{motd}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
          }
      </>
    )
}

