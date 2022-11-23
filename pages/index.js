import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Available from "../components/Available";
import EventModal from "../components/EventModal";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);
const testEvents = [
  {
    title: "First Event",
    start: new Date(2022, 10, 15, 18, 30),
    end: new Date(2022, 10, 15, 20, 30),
  },
  {
    title: "Second Event",
    start: new Date(2022, 10, 15),
    end: new Date(2022, 10, 15),
  },
  {
    title: "Third Event",
    start: new Date(2022, 10, 15),
    end: new Date(2022, 10, 15),
  },
];
console.log(testEvents);
export default function Home() {
  return (
    <div>
      {/* <EventModal /> */}
      <h1 className="text-3xl py-2 text-center">Conference Room Booker</h1>

      <Available />

      <Calendar
        localizer={localizer}
        events={testEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "90vh" }}
        defaultView={Views.WEEK}
        views={Views.WEEK}
      />
    </div>
  );
}
