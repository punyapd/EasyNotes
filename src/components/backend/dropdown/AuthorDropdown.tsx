import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import DropDown from "../../reusable/dropdown/DropDown";

const authors = [
  "Mr. John Deo",
  "Mr. Sanjay Kapor",
  "Mr. Jems Denor",
  "Mr. Dhilan",
];

const Author = () => {
  return <DropDown title="By author" options={authors} />;
};
export default Author;
