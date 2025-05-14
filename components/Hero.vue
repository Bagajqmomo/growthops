<template>
  <section
    class="relative pt-[300px] pb-[200px] md:pb-[600px] transition-all delay-[2s] duration-[2s] translate-y-[100vh] overflow-hidden"
    ref="slideUp"
  >
    <!-- Actual layout container -->
    <div class="relative container">
      <!-- Decorative circles -->
      <div
        class="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <div
          class="w-[410px] h-[410px] md:w-[374px] md:h-[374px] border rounded-full border-primary lg:border-[#FFFBFC] animate-fade-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div
          class="w-[525px] h-[525px] md:w-[607px] md:h-[607px] border rounded-full border-primary lg:border-[#FFFBFC] animate-fade-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style="animation-delay: 0.3s"
        ></div>
        <div
          class="w-[643px] h-[643px] md:w-[841px] md:h-[841px] border rounded-full border-primary lg:border-[#FFFBFC] animate-fade-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style="animation-delay: 0.6s"
        ></div>
        <div
          class="w-[1098px] h-[1098px] hidden lg:block border rounded-full border-[#FFFBFC] animate-fade-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style="animation-delay: 0.9s"
        ></div>
        <div
          class="w-[1332px] h-[1332px] hidden lg:block border rounded-full border-[#FFFBFC] animate-fade-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style="animation-delay: 1.2s"
        ></div>
        <div
          class="w-[1542px] h-[1542px] hidden lg:block border rounded-full border-[#FFFBFC] animate-fade-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style="animation-delay: 1.5s"
        ></div>
      </div>

      <!-- Foreground text -->
      <div class="container relative z-10">
        <h2
          class="uppercase text-[32px] sm:text-[48px] lg:text-[96px] leading-[36px] sm:leading-[42px] lg:leading-[84px] font-extrabold tracking-[-0.02em]"
        >
          Your new-breed,
        </h2>
        <h2
          class="my-2 sm:my-7 uppercase text-[32px] sm:text-[48px] lg:text-[96px] leading-[36px] sm:leading-[42px] lg:leading-[84px] font-extrabold tracking-[-0.02em] text-right"
        >
          end-to-end
        </h2>
        <h2
          class="uppercase text-[32px] sm:text-[48px] lg:text-[96px] leading-[36px] sm:leading-[42px] lg:leading-[84px] font-extrabold tracking-[-0.02em] pl-0 md:pl-[90px]"
        >
          digital ally
        </h2>
      </div>
      <p
        class="block sm:hidden text-sm font-medium leading-[20px] max-w-[240px] mt-5 ml-auto pr-6"
      >
        We are an award-winning marketing transformation partner delivering
        <strong>unforgettable</strong> digital brands, experiences and
        technology.
      </p>
      <!-- Gradient at the bottom -->
      <div
        class="h-[140px] md:h-[519px] w-full bg-[linear-gradient(180deg,rgba(1,1,1,0)_0%,#010101_100%)] absolute bottom-[-225px] md:bottom-[-602px] left-0"
      ></div>
    </div>
  </section>
</template>

<script setup>
const slideUp = ref(null);
onMounted(() => {
  requestAnimationFrame(() => {
    slideUp.value.classList.remove("translate-y-[100vh]");
    slideUp.value.classList.add("translate-y-0");
  });
});
</script>

<style scoped>
.container {
  padding-inline: 24px;
}
</style>
