"use client";

import Two from "./Two";
import { notFound } from "next/navigation";

const metaData = {
  usa: {},
  canada: {},
  france: {},
  australia: {},
  germany: {},
  uk: {},
  italy: {},
  singapore: {},
  malaysia: {},
  southafrica: {},
  newzealand: {},
  philippines: {},
  poland: {},
  ireland: {},
  spain: {},
  netherlands: {},
  switzerland: {},
  denmark: {},
  dubai: {},
  luxembourg: {},
  hongkong: {},
  uae: {},
  norway: {},
  sweden: {},
};

export default function CountryClient({ country }) {
  const normalizedCountry = country?.toLowerCase();
  const meta = metaData[normalizedCountry];

  if (!meta) {
    notFound();
  }

  return (
    <>
      <div style={{ marginTop: "5%", zIndex: 20, position: "relative" }} />
      <Two />
    </>
  );
}