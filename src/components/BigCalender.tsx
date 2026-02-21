"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={(selectedView) => setView(selectedView)}
      // ADD THIS LINE: It forces the calendar to open on your data's date
      defaultDate={new Date(2024, 7, 12)} 
      // Ensure these match your school hours
      min={new Date(2024, 7, 12, 8, 0, 0)} 
      max={new Date(2024, 7, 12, 17, 0, 0)}
    />
  );
};

export default BigCalendar;