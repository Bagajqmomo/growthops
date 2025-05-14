<template>
  <section class="container justify-center items-center flex flex-col">
    <h2
      class="uppercase text-[35px] lg:text-[88px] leading-[40px] lg:leading-[84px] font-extrabold mb-10 lg:mb-[98px] text-center max-w-[327px] sm:max-w-[1000px]"
    >
      <span
        class="inline-block relative bg-[linear-gradient(91.91deg,#9747FF_0.18%,#96BFFD_32.82%)] bg-clip-text text-transparent"
      >
        super
        <img
          class="hidden h-full lg:block absolute left-0 top-0 w-full"
          src="../assets/image/round-purple.png"
        />
        <img
          class="block lg:hidden absolute left-0 top-0 w-full h-full"
          src="../assets/image/round-purple-mobile.png"
        />
      </span>
      proud to work with
    </h2>
  </section>
  <div class="marquee__wrapper flex flex-col gap-9 lg:gap-16 relative">
    <NuxtMarquee speed="50" direction="left">
      <div class="flex gap-8">
        <img
          v-for="num in 11"
          class="max-h-[48px] sm:max-h-full"
          :key="num"
          :src="`/images/row-1-logo-${num}.png`"
        />
        <img
          v-for="num in 11"
          class="max-h-[48px] sm:max-h-full"
          :key="num"
          :src="`/images/row-1-logo-${num}.png`"
        />
      </div>
    </NuxtMarquee>
    <NuxtMarquee speed="50" direction="right">
      <div class="flex gap-8">
        <img
          v-for="num in 11"
          class="max-h-[48px] sm:max-h-full"
          :key="num"
          :src="`/images/row-2-logo-${num}.png`"
        />
        <img
          v-for="num in 11"
          class="max-h-[48px] sm:max-h-full"
          :key="num"
          :src="`/images/row-2-logo-${num}.png`"
        />
      </div>
    </NuxtMarquee>
    <NuxtMarquee speed="50" direction="left">
      <div class="flex gap-8">
        <img
          v-for="num in 11"
          class="max-h-[48px] sm:max-h-full"
          :key="num"
          :src="`/images/row-3-logo-${num}.png`"
        />
        <img
          v-for="num in 11"
          class="max-h-[48px] sm:max-h-full"
          :key="num"
          :src="`/images/row-3-logo-${num}.png`"
        />
      </div>
    </NuxtMarquee>
    <img
      class="absolute left-0 top-[-80px] z-[99] w-full object-cover"
      src="../assets/image/overlay.png"
    />
  </div>
</template>

<style scoped></style>
