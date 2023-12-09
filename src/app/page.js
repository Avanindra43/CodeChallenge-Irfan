import Image from "next/image";
import { RiTeamLine } from "react-icons/ri";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { IconContext } from "react-icons";

export default function Home() {
  return (
    <div className="dark">
      {/* HERO */}
      <section class="mx-4">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl text-white xl:text-6xl ">
              Transform your business with IPSUM
            </h1>
            <p class="max-w-2xl mb-6 font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
              Your trusted partner in cutting-edge SaaS solutions. enhancing
              efficiency, driving growth, and propelling you towards
              unparalleled success.
            </p>
            <a
              href="/about"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Learn more
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              class="h-auto max-w-lg rounded-lg shadow-xl shadow-[#323232]"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image description"
            ></img>
          </div>
        </div>
      </section>
      {/* OVERVIEW */}
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              One stop shop Saas solution
            </h2>
            <p class="text-gray-500 font-light sm:text-xl dark:text-gray-400">
              Our journey began with a vision to streamline businesses, and
              since then, we have been dedicated to empowering organizations
              with cutting-edge software that enhances efficiency, productivity,
              and overall success.
            </p>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-8 h-8 text-primary-600 lg:w-9 lg:h-9 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <MdOutlineHistoryEdu color="white" />
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">History</h3>
              <p class="text-gray-500 dark:text-gray-400 font-light">
                Founded in 2014, IPSUM has evolved into a leading force in the
                SaaS industry, providing innovative solutions.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-7 h-7 text-primary-600 lg:w-8 lg:h-8 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <RiTeamLine color="white" />
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Teams</h3>
              <p class="text-gray-500 dark:text-gray-400 font-light">
                At IPSUM, we take pride in our diverse and talented teams that
                drive our success.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-7 h-7 text-primary-600 lg:w-8 lg:h-8 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <HiMiniBuildingOffice color="white" />{" "}
                </svg>
              </div>

              <h3 class="mb-2 text-xl font-bold dark:text-white">Culture</h3>
              <p class="text-gray-500 dark:text-gray-400 font-light">
                Our company culture is rooted in collaboration, innovation, and
                a commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* PRICING */}
      <section class="justify-center mx-20">
        <div class="py-8 max-w-screen-xl mx-auto sm:py-16 lg:py-0 mb-2  text-neutral-500 dark:text-neutral-300">
          <div class="py-8 pt-5 text-center">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Plans & Pricing
            </h2>
            <p class="text-gray-500 font-light sm:text-xl dark:text-gray-400">
              Upgrade your business with our flexible plans.
            </p>
          </div>

          <div class="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
            <div class="mb-6 lg:mb-0">
              <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p class="mb-4 text-sm uppercase">
                    <strong>Basic</strong>
                  </p>
                  <h3 class="mb-6 text-3xl">
                    <strong>Rp 299.000</strong>
                    <small class="text-base text-neutral-500 dark:text-neutral-300">
                      /month
                    </small>
                  </h3>

                  <button
                    type="button"
                    class="inline-block w-full bg-gray-400 rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  >
                    Buy
                  </button>
                </div>
                <div class="p-6">
                  <ol class="list-inside">
                    <li class="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      User-Friendly Interface
                    </li>
                    <li class="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Task Management
                    </li>
                    <li class="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Collaboration Tools
                    </li>
                    <li class="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Cross-Platform Compatibility
                    </li>
                    <a href="/product">
                      <li class="mb-4 flex">And more →</li>
                    </a>
                  </ol>
                </div>
              </div>
            </div>

            <div class="mb-6 lg:mb-0">
              <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p class="mb-4 text-sm uppercase">
                    <strong>Premium</strong>
                  </p>
                  <h3 class="mb-6 text-3xl">
                    <strong>Rp 499.000</strong>
                    <small class="text-base text-neutral-500 dark:text-neutral-300">
                      /month
                    </small>
                  </h3>
                  <button
                    type="button"
                    class="inline-block w-full text-color-white  bg-sky-800 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normaltransition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 "
                  >
                    Buy
                  </button>
                </div>
                <div class="p-6">
                  <ol class="list-inside">
                    <li class="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Advanced Task Management
                    </li>
                    <li class="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Automation
                    </li>
                    <li class="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Integration Capabilities
                    </li>
                    <li class="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Analytics and Reporting
                    </li>
                    <a href="/product">
                      <li class="mb-4 flex">And more →</li>
                    </a>
                  </ol>
                </div>
              </div>
            </div>

            <div class="mb-6 lg:mb-0">
              <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p class="mb-4 text-sm uppercase">
                    <strong>Ultimate</strong>
                  </p>
                  <h3 class="mb-6 text-3xl">
                    <strong>Rp 799.000</strong>
                    <small class="text-base text-neutral-500 dark:text-neutral-300">
                      /month
                    </small>
                  </h3>
                  <button
                    type="button"
                    class="inline-block w-full  bg-gray-400 rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  >
                    Buy
                  </button>
                </div>
                <div class="p-6">
                  <ol class="list-inside">
                    <li class="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Customization
                    </li>
                    <li class="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Dedicated Customer Support
                    </li>
                    <li class="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Feedback Mechanism
                    </li>
                    <li class="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Regular Updates and New Features
                    </li>
                    <a href="/product">
                      <li class="mb-4 flex">And more →</li>
                    </a>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="justify-items-center justify-center flex flex-row pt-2 pb-8">
          <a
            href="/product"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Learn more
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </section>

      {/* TESTIMONI */}

      <div class="mx-20 mb-10">
        <section class="py-8  text-center">
          <h2 class="mb-10 pb-5 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our satisfied customer
          </h2>

          <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            <div class="mb-12 md:mb-0 ">
              <div class="mb-6 flex justify-center">
                <img
                  src="https://xsgames.co/randomusers/assets/avatars/female/66.jpg"
                  class="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 class="mb-2 text-lg font-bold text-white">Moran Etel</h5>
              <h6 class="mb-4 font-medium text-primary dark:text-primary-800 text-gray-300">
                Business Owner
              </h6>
              <p class="text-gray-500 dark:text-gray-400 font-light mb-4">
                Implementing IPSUM transformed our IT processes. The security
                features and seamless collaboration have made our team more
                efficient. The reliability and scalability of the platform make
                it a must-have for any IT department.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                  class="inline-block w-6"
                >
                  <path
                    fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                  />
                </svg>
              </p>
            </div>

            <div class="mb-12 md:mb-0">
              <div class="mb-6 flex justify-center">
                <img
                  src="https://xsgames.co/randomusers/assets/avatars/male/73.jpg"
                  class="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 class="mb-2 text-lg font-bold">Franklyn Patsel</h5>
              <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                Business Owner
              </h6>
              <p class="text-gray-500 dark:text-gray-400 font-light mb-4">
                As a marketing professional, I've tried several tools, but IPSUM
                stands out. It simplifies our campaign management, and the
                analytics provide valuable insights. It's become an essential
                part of our toolkit for driving results.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                  class="inline-block w-6"
                >
                  <path
                    fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                  />
                </svg>
              </p>
            </div>
            <div class="mb-0">
              <div class="mb-6 flex justify-center">
                <img
                  src="https://xsgames.co/randomusers/assets/avatars/female/64.jpg"
                  class="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 class="mb-2 text-lg font-bold">Katelynn Barnthouse</h5>
              <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                Business Owner
              </h6>
              <p class="text-gray-500 dark:text-gray-400 font-light mb-4">
                Using IPSUM has been a game-changer for my small business. The
                intuitive interface and powerful features have streamlined our
                operations and saved us valuable time. Highly recommend it to
                fellow entrepreneurs!"
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                  class="inline-block w-6"
                >
                  <path
                    fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                  />
                </svg>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
