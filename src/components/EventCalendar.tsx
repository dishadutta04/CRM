"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// Real-world school events
const events = [
  {
    id: 1,
    title: "Math Olympiad",
    time: "09:00 AM - 12:00 PM",
    description: "Annual regional mathematics competition held in the main auditorium.",
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting",
    time: "02:00 PM - 05:00 PM",
    description: "Quarterly progress review between parents and subject teachers.",
  },
  {
    id: 3,
    title: "Spring Music Concert",
    time: "06:00 PM - 08:00 PM",
    description: "The school choir and orchestra performing classic and modern hits.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;