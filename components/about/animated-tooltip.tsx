"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Saad Khan",
    designation: "Team Leader",
    image:
      "/assets/images/team-members/saad.jpg",
  },
  {
    id: 2,
    name: "Sahil Pawade",
    designation: "Product Manager",
    image:
      "/assets/images/logo.png",
  },
  {
    id: 3,
    name: "Shreyash Tambe",
    designation: "Data Scientist",
    image:
      "/assets/images/humidity.png",
  },
  {
    id: 4,
    name: "Ayan Shaikh",
    designation: "UX Designer",
    image:
      "/assets/images/team-members/ayan.jpg",
  },
  {
    id: 5,
    name: "Anushri Jawarkar",
    designation: "Soap Developer",
    image:
      "/assets/images/precipitation.png",
  },
  {
    id: 6,
    name: "Harsh Sawant",
    designation: "The Explorer",
    image:
      "/assets/images/precipitation.png",
  },
];

export default function AnimatedToolTip() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
