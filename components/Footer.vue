<template>
  <footer class="w-full pb-[120px]">
    <div class="flex justify-center overflow-hidden h-[250px] relative">
      <div
        class="absolute top-[10px] w-[300vw] h-[300vw] rounded-full border-t border-opacity-30 border-primary"
      ></div>
      <div
        class="absolute top-[72px] w-[300vw] h-[300vw] rounded-full border border-opacity-50 border-white"
      ></div>
      <div
        class="absolute top-[130px] w-[300vw] h-[300vw] rounded-full border border-opacity-70 border-white"
      ></div>
    </div>
    <div class="container mx-auto">
      <ul
        class="flex justify-center items-center flex-wrap gap-x-10 gap-y-8 font-medium text-base text-white mt-[30px]"
      >
        <li><NuxtLink to="/">Services</NuxtLink></li>
        <li><NuxtLink to="/">Work</NuxtLink></li>
        <li><NuxtLink to="/">Insight</NuxtLink></li>
        <li><NuxtLink to="/">Career</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
      </ul>
      <ul
        class="flex justify-center flex-wrap flex-shrink-0 items-center gap-14 font-medium text-base text-white mt-[56px]"
      >
        <li>
          <NuxtLink to="/"><img src="../assets/image/linkedin.png" /></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/"><img src="../assets/image/facebook.png" /></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/"><img src="../assets/image/insta.png" /></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/"><img src="../assets/image/youtube.png" /></NuxtLink>
        </li>
      </ul>
      <div class="flex justify-center lg:justify-between mt-[80px]">
        <p class="text-[#6F7176] font-semibold text-xs hidden lg:block">
          © Copyright GrowthOps. All rights reserved.
        </p>
        <div
          class="text-xs flex-wrap justify-center items-center text-center flex gap-x-[48px] gap-y-[24px]"
        >
          <NuxtLink to="/"
            ><i class="fa-solid fa-arrow-up-right-from-square mr-2"></i> Go to
            global GrowthOps website</NuxtLink
          >
          <NuxtLink to="/">Privacy Policy</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
