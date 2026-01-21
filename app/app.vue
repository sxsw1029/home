<template>
  <main class="relative">
    <div
      class="absolute inset-0 -z-10
    bg-[linear-gradient(to_right,var(--color-gray-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-gray-200)_1px,transparent_1px)]
    bg-[size:40px_40px]
    bg-gray-50"
    />

    <div
      class="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-gray-100/75 to-gray-100"
    />

    <div class="min-h-dvh flex flex-col p-6">
      <div class="flex flex-1 flex-col lg:flex-row gap-20 lg:gap-32 items-center justify-center">
        <div class="order-2 lg:order-1 flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <div class="flex justify-center lg:justify-start">
              <div class="relative text-4xl lg:text-5xl">
                <span>Hi, there!</span>

                <span class="absolute text-4xl lg:text-5xl -top-6">
                  ✨
                </span>
              </div>
            </div>

            <p class="text-base lg:text-lg text-gray-800 text-center lg:text-left">
              I'm a beginner programmer and currently learning Computer Science.
            </p>
          </div>

          <div class="flex gap-4 justify-center lg:justify-start">
            <a
              href="mailto:sxsw1029@qq.com"
              target="_blank"
              rel="noopener noreferrer"
              class="flex px-2 py-1 lg:px-3 lg:py-2 rounded-full bg-gray-200/75 hover:bg-gray-300 transition duration-200"
            >
              <Icon name="ri:mail-fill" class="text-2xl lg:text-3xl" />
            </a>

            <a
              href="https://github.com/sxsw1029"
              target="_blank"
              rel="noopener noreferrer"
              class="flex px-2 py-1 lg:px-3 lg:py-2 rounded-full bg-gray-200/75 hover:bg-gray-300 transition duration-200"
            >
              <Icon name="ri:github-fill" class="text-2xl lg:text-3xl" />
            </a>
          </div>
        </div>

        <img class="order-1 lg:order-2 w-42 h-42 lg:w-50 lg:h-50 overflow-hidden border-4 border-white rounded-full border-solid shadow-md transition duration-500 dark:shadow-white/10 hover:shadow-2xl" src="https://gravatar.loli.net/avatar/2243c217602059ec1739885977df96e7?s=200?d=mp?f=y" alt="Avatar">
      </div>

      <footer
        class="flex flex-col justify-center items-center py-2 text-sm"
      >
        <div class="my-px">
          <span class="text-gray-500">Made with ❤ · &copy; 2026 Xushuaiwei Shi</span>
        </div>

        <div class="flex flex-col lg:flex-row items-center">
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-gray-800"
          >苏ICP备2023030123号-1</a>

          <span class="mx-2 text-gray-500 hidden lg:block">·</span>

          <a
            href="https://beian.mps.gov.cn/#/query/webSearch?code=32058502010769"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center text-gray-500 hover:text-gray-800"
          >
            <img src="/beian.png" class="mr-1.5 h-5 opacity-80">
            <span>苏公网安备32058502010769号</span>
          </a>
        </div>
      </footer>
    </div>
  </main>
</template>

<style>
body {
  font-family: var(--font-display);
}
</style>
