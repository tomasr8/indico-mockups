import daisy from "./daisy.jpg";
import { BellAlertIcon, StarIcon } from "@heroicons/react/24/outline";
import {
  BellAlertIcon as BellAlertIconSolid,
  StarIcon as StarIconSolid,
} from "@heroicons/react/24/solid";

export default function Dashboard() {
  return (
    <div>
      <div className="flex justify-between px-2 py-2 items-center bg-gradient-to-tr from-blue-500 to-cyan-500">
        <svg
          className="w-5 h-5 m-2 text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
        <span className="text-lg font-bold text-gray-200">
          Higgs Boson conference
        </span>
        <img className="w-10 h-10 rounded-full" alt="daisy" src={daisy}></img>
      </div>
      <div className="py-4 flex flex-col gap-2 text-gray-600">
        <div className="text-center pb-4">
            <h1 className="font-bold text-3xl">Monday</h1>
            <div className="text-lg">14 Aug, 2023</div>
        </div>
        <div className="pb-2">
          <h2 className="text-center font-bold text-xl">Morning</h2>
        </div>
        <div className="flex flex-col">
          <TimelineItem
            time="07:00 - 08:00"
            title="Welcome speech"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
            speaker="John Doe"
            affiliation="CERN"
          />
          <TimelineItem
            time="08:00 - 11:00"
            title="Programming workshop"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
            speaker="Mark Watney"
            affiliation="Software engineer @ Spotify"
          />
          <Break time="11:30 - 13:30" title="Coffee break" />
          <TimelineItem
            time="07:00 - 08:00"
            title="Visit to ATLAS"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
            speaker="John Doe"
            affiliation="CERN"
          />
        </div>
      </div>
    </div>
  );
}

function Break({ time, title }) {
  return (
    <div className="px-4 py-4 flex flex-col gap-2">
      <div className="text-gray-500 whitespace-nowrap text-sm">{time}</div>
      <div className="p-4 bg-blue-200 rounded-lg">
        <h3 className="font-bold text-lg text-gray-800">{title}</h3>
      </div>
    </div>
  );
}

function TimelineItem({ time, title, description, speaker, affiliation }) {
  return (
    <div className="px-4 py-4 flex flex-col gap-2 transition-all hover:bg-gray-100">
      <div className="text-gray-500 whitespace-nowrap text-sm">{time}</div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-lg text-gray-800">{title}</h3>
        <p>{description}</p>
        <p className="flex gap-3">
          <img className="rounded-full w-12 h-12" alt="" src={daisy}></img>
          <div>
            <div className="text-lg font-bold text-gray-800 mb-[-0.3rem]">
              {speaker}
            </div>
            <div className="">{affiliation}</div>
          </div>
        </p>
      </div>
    </div>
  );
}
