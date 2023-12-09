import { FaPlus } from "react-icons/fa";
export default function Product() {
  return (
    <section class="justify-center mb-20 mt-10 mx-20  text-neutral-500 dark:text-neutral-300">
      <div class="py-8 max-w-screen-xl mx-auto sm:py-16 lg:py-0 mb-2 ">
        <div class="py-8 pt-5 text-center">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Plans & Pricing
          </h2>
          <p class="text-gray-500 font-semibold sm:text-xl dark:text-gray-400">
            Upgrade your business with our flexible plans.
          </p>
          <p className="text-gray-400 font-light text-lg">
            At IPSUM, we understand that one size doesn't fit all. Choose the
            plan that aligns with your goals and aspirations, and let IPSUM be
            your partner in navigating the digital landscape.
          </p>
        </div>

        <div class="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
          <div class="mb-6 lg:mb-0">
            <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                <p class=" text-white text-sm uppercase">
                  <strong>Basic</strong>
                </p>
                <h2 className="mb-4">Simplified Excellence</h2>
                <h3 class=" text-white mb-6 text-3xl">
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
                    Basic Security Measures
                  </li>
                </ol>
                <hr class="h-px my-4 bg-slate-100 border-0" />
                <p className="text-slate-300 font-light text-sm text-justify mb-2">
                  Dive into efficiency with our Basic Plan – the perfect entry
                  point for businesses looking to enhance their operations.
                  Enjoy essential features that streamline your workflow, boost
                  productivity, and lay the foundation for growth. With a
                  user-friendly interface and cost-effective pricing, the Basic
                  Plan is where simplicity meets functionality.
                </p>
              </div>
            </div>
          </div>

          <div class="mb-6 lg:mb-0">
            <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                <p class=" text-white text-sm uppercase">
                  <strong>Premium</strong>
                </p>
                <h2 className="mb-4">Elevate Your Experience</h2>
                <h3 class=" text-white mb-6 text-3xl">
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
                <ol class="list-inside mb-">
                  <li class="mb-4 flex text-[17px] text-white">
                    <p>
                      Everything from{" "}
                      <span className="uppercase font-bold">basic</span> plus:
                    </p>
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
                    Enhanced Security
                  </li>
                </ol>
                <hr class="h-px my-4 bg-slate-100 border-0" />
                <p className="text-slate-300 font-light text-sm text-justify mb-2">
                  Take your business to new heights with our Premium Plan.
                  Unleash advanced capabilities and customization options
                  tailored to your specific needs. Enjoy priority support,
                  enhanced security features, and seamless integration
                  possibilities. The Premium Plan is perfect for those who
                  demand a higher level of performance and sophistication in
                  their digital solutions.
                </p>
              </div>
            </div>
          </div>

          <div class="mb-6 lg:mb-0">
            <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                <p class=" text-white text-sm uppercase">
                  <strong>Ultimate</strong>
                </p>
                <h2 className="mb-4"> Unrivaled Power and Versatility</h2>
                <h3 class=" text-white mb-6 text-3xl">
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
                  <li class="mb-4 flex text-lg text-[17px] text-white">
                    <p>
                      Everything from{" "}
                      <span className="uppercase font-bold">premium</span> plus:
                    </p>
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
                    Comprehensive Training Resource
                  </li>
                </ol>
                <hr class="h-px my-4 bg-slate-100 border-0" />
                <p className="text-slate-300 font-light text-sm text-justify mb-2">
                  Experience the epitome of SaaS excellence with our Ultimate
                  Plan. Unrivaled power, unmatched versatility. This plan is
                  crafted for enterprises that demand the best. Enjoy top-tier
                  features, extensive scalability, and a dedicated account
                  manager to guide you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </section>
  );
}
