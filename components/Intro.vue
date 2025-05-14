<template>
  <div
    ref="slideUp"
    class="min-h-screen bg-[#33FFF3] w-full absolute top-0 left-0 z-[999] flex items-end transition-all delay-[2s] duration-[2s] ease-out translate-y-0 opacity-100"
  >
    <div class="container pb-[199px]">
      <div
        class="flex gap-6 items-center w-full justify-start sm:justify-center flex-wrap"
      >
        <h1
          class="text-[53px] leading-[56px] lg:text-[128px] font-extrabold lg:leading-[118px]"
        >
          We’re<br />
          GrowthOps
        </h1>
        <div
          class="max-w-max py-5 px-10 lg:px-16 bg-white rounded-[80px] rotate-[-10deg]"
        >
          <span
            class="text-[40px] lg:text-[96px] font-extrabold lg:leading-[116px] text-[#33FFF3]"
          >
            Asia
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const slideUp = ref(null);

onMounted(() => {
  window.scrollTo({ top: 0 });
  // 1. Lock scroll during animation
  document.body.style.overflow = "hidden";

  requestAnimationFrame(() => {
    // 2. Trigger the slide-up animation
    slideUp.value.classList.remove("translate-y-0");
    slideUp.value.classList.add("translate-y-[-100vh]");

    // 3. After movement (2s delay + 2s duration), fade out
    setTimeout(() => {
      slideUp.value.classList.add("opacity-0");
    }, 4000);

    // 4. After fade out, hide and restore scroll
    setTimeout(() => {
      slideUp.value.style.display = "none";
      document.body.style.overflow = "";
    }, 4500); // Add 500ms fade-out
  });
});
</script>
