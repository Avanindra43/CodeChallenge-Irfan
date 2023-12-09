/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import getData from "../getData/getData";

export default async function About() {
  const data = await getData();

  return (
    <div>
      <section class="bg-[#202020] dark:bg-[#202020]">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Who is IPSUM?
            </h2>
            <p class="mb-4">
              Founded in 2014, IPSUM has evolved into a leading force in the
              SaaS industry, providing innovative solutions to address the
              evolving needs of businesses worldwide. we're more than just a
              SaaS provider; we're a community of dedicated professionals
              working together to shape the future of technology.
            </p>
          </div>
          <div class="flex flex-row">
            <Image
              height={900}
              width={900}
              class="mt-4  lg:mt-10 rounded-2xl"
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="office content 2"
            />
          </div>
        </div>
      </section>

      <section class="bg-[#202020] dark:bg-[#202020]">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div>
            <Image
              width={500}
              height={500}
              class="mb-4 lg:mt-10 rounded-2xl"
              src="https://images.unsplash.com/photo-1558959356-2f36c7322d3b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="office content 2"
            />
          </div>
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              More than just a business
            </h2>
            <p class="mb-4">
              We take pride in fostering a culture of collaboration, innovation,
              and continuous learning. Our diverse and talented teams are the
              heartbeat of our success, working together to achieve shared
              goals. Transparency and open communication are at the core of our
              values, ensuring that every team member's voice is not only heard
              but celebrated.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl mb-10">
          <a href="/team">
            <h2 class="text-center tracking-tight font-extrabold text-white text-4xl mb-8">
              Meet the team
            </h2>
            <div className="flex -space-x-10 justify-center rtl:space-x-reverse">
              {data.map((teams) => {
                return (
                  <div key={teams.id.value}>
                    <div>
                      <Image
                        width={120}
                        height={120}
                        src={teams.picture.large}
                        alt="Bonnie Avatar"
                        className="rounded-full mx-auto mb-4"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
