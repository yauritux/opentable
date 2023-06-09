"use client"

import Link from "next/link"

export default function ReservationCard() {
  return (
    <div className="fixed w-[15%] bg-white rounded p-3 shadow">
      <div className="text-center border-b pb-2 font-bold">
        <h4 className="mr-7 text-lg text-[#000000]">
          Make a Reservation
        </h4>
      </div>
      <div className="my-3 flex flex-col text-[#000000]">
        <label htmlFor="">Party Size</label>
        <select name="" className="py-3 border-b font-light text-[#ffffff]" id="">
          <option value="">1 person</option>
          <option value="">2 people</option>
        </select>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Date</label>
          <input type="text" className="py-3 border-b font-light w-28" />
        </div>
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Time</label>
          <select name="" id="" className="py-3 border-b font-light text-[#ffffff]">
            <option value="">7:30 AM</option>
            <option value="">9:30 AM</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <Link href="/reserve/milestones-grill">
          <button className="bg-red-600 w-full text-white border p-1 px-4 rounded mr-3 font-bold h-16">Find a Time</button>
        </Link>
      </div>
    </div>
  )
}
