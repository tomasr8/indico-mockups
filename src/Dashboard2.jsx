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
      <div className="p-2 text-center pt-6">
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
      <div className="p-2 flex flex-col">
        <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <time className="text-lg font-semibold text-gray-900 dark:text-white">
            1 August
          </time>
          <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
            <li>
              <a
                href="#"
                className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
                  <div className="text-base font-normal">
                    Indico developers review meeting
                  </div>
                  <div className="flex gap-6 items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                    <div>10:00</div>
                    <div>
                      <StarIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <BellAlertIconSolid className="w-5 h-5 text-pink-500" />
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
                  <div className="text-base font-normal">
                    42nd International Symposium on Physics in Collision
                  </div>
                  <div className="flex gap-6 items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                    <div>14:30</div>
                    <div>
                      <StarIconSolid className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <BellAlertIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ol>
        </div>

        <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <time className="text-lg font-semibold text-gray-900 dark:text-white">
            2 August
          </time>
          <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
            <li>
              <a
                href="#"
                className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
                  <div className="text-base font-normal">
                    16th International Workshop on Top Quark Physics
                  </div>
                  <div className="flex gap-6 items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                    <div>10:00</div>
                    <div>
                      <StarIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <BellAlertIconSolid className="w-5 h-5 text-pink-500" />
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
