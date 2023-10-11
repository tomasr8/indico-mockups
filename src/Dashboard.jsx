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
        <span className="text-lg font-bold text-gray-200">Dashboard</span>
        <img className="w-10 h-10 rounded-full" alt="daisy" src={daisy}></img>
      </div>

      <div className="p-2 text-center pt-6 bg-gray-100">
        <div className="inline-flex rounded-md shadow-sm">
          <div
            aria-current="page"
            className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Upcoming events
          </div>
          <div className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Categories
          </div>
          <div className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Discover
          </div>
        </div>
      </div>

      <div className="p-2 flex flex-col gap-2 bg-gray-100 h-screen">
        <div className="p-4 flex gap-6 bg-white border border-gray-200 rounded-lg">
          <div className="text-blue-500 flex flex-col justify-between self-start">
            <div>1 Aug</div>
            <div className="text-xl">Today</div>
          </div>

          <div>
            <div className="flex flex-col gap-2">
              <div className="text-gray-900">
                Indico developers review meeting
              </div>
              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <div>10:30</div>
                <div>
                  <StarIcon className="w-5 h-5" />
                </div>
                <div>
                  <BellAlertIconSolid className="w-5 h-5 text-pink-500" />
                </div>
              </div>
            </div>

            <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div className="flex flex-col gap-2">
              <div className="text-gray-900">
                42nd International Symposium on Physics in Collision
              </div>
              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <div>14:30</div>
                <div>
                  <StarIconSolid className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <BellAlertIcon className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 flex gap-6 bg-white border border-gray-200 rounded-lg">
          <div className="text-blue-500 flex flex-col justify-between self-start">
            <div className="whitespace-nowrap">3 Aug</div>
            <div className="text-xl">Thu</div>
          </div>

          <div>
            <div className="flex flex-col gap-2">
              <div className="text-gray-900">
                16th International Workshop on Top Quark Physics
              </div>
              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <div>15:00</div>
                <div>
                  <StarIcon className="w-5 h-5" />
                </div>
                <div>
                  <BellAlertIcon className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 flex gap-6 bg-white border border-gray-200 rounded-lg">
          <div className="text-blue-500 flex flex-col justify-between self-start">
            <div className="whitespace-nowrap">4 Aug</div>
            <div className="text-xl">Fri</div>
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-2">
              <div className="text-gray-900">Quark Matter 2023</div>
              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <div>10:00</div>
                <div>
                  <StarIcon className="w-5 h-5" />
                </div>
                <div>
                  <BellAlertIcon className="w-5 h-5" />
                </div>
              </div>
            </div>

            <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div className="flex flex-col gap-2">
              <div className="text-gray-900">IT-CA Group meeting</div>
              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <div>11:30</div>
                <div>
                  <StarIconSolid className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <BellAlertIcon className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
