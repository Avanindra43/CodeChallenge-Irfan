/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import getData from "../getData/getData";

export default async function Team() {
  const data = await getData();

  const jobTitle = [
    "CEO/Co-Founder",
    "COO/Co-Founder",
    "Software Engineer",
    "Poduct Manager",
    "Customer Success Manager",
    "Sales Representativ",
    "UX/UI Designer",
    "Data Scientist",
    "DevOps Engineer",
    "Marketing Manager",
  ];

  return (
    <section class="bg-[#202020] dark dark:bg-[#202020]">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our team
          </h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Our strength lies in the diversity and expertise of our talented
            team. We are a passionate group of professionals dedicated to
            driving innovation and delivering exceptional solutions to our
            clients.
          </p>
        </div>
        <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((teams, i) => {
            return (
              <>
                <div key={teams.id.value}>
                  <div class="text-center text-gray-500 dark:text-gray-400">
                    <Image
                      width={150}
                      height={150}
                      src={teams.picture.large}
                      alt="Bonnie Avatar"
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 class="mb-[2px] text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">
                        {teams.name.first} {teams.name.last}
                      </a>
                    </h3>
                    <p>{jobTitle[i]}</p>
                    <p className="text-sm">{teams.email}</p>
                    <p className="text-sm">{teams.phone}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
