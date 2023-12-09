function Footer() {
  return (
    <footer class="  shadow bg-[#323232] ">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center justify-center">
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/" class="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="/about" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="/product" class="hover:underline me-4 md:me-6">
                Services
              </a>
            </li>
            <li>
              <a href="/team" class="hover:underline me-4 md:me-6">
                Team
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-[#202020] lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="/" class="hover:underline">
            IMPSUM™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
