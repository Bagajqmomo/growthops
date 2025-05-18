<template>
  <section class="pt-[100px] relative overflow-hidden flex flex-col">
    <img
      class="absolute left-0 top-0 w-full h-auto object-cover"
      src="../assets/image/gradient-about.png"
    />
    <div
      class="container flex flex-col justify-center items-center order-2 lg:order-1"
    >
      <div
        class="text-[20px] lg:text-[32px] font-medium tracking-[-0.01em] lg:leading-[44px] max-w-[327px] lg:max-w-[569px] text-center"
      >
        With a focus in fusing
        <span
          class="bg-gradient-to-r from-[#47F4FF] to-[#4CF1E7] bg-clip-text text-transparent"
          >strategy</span
        >,
        <span
          class="inline-block relative py-[9px] px-[15px] border border-[#33FFF3] max-w-max text-[#33FFF3]"
        >
          <span
            class="w-[11px] h-[11px] absolute left-[-6px] top-[-6px] bg-black border border-[#33FFF3]"
          ></span>
          <span
            class="w-[11px] h-[11px] absolute left-[-6px] bottom-[-6px] bg-black border border-[#33FFF3]"
          ></span>
          <span
            class="w-[11px] h-[11px] absolute right-[-6px] top-[-6px] bg-black border border-[#33FFF3]"
          ></span>
          <span
            class="w-[11px] h-[11px] absolute right-[-6px] bottom-[-6px] bg-black border border-[#33FFF3]"
          ></span>
          design</span
        >
        and
        <span
          class="font-sourceCode bg-gradient-to-r from-[#47F4FF] to-[#4CF1E7] bg-clip-text text-transparent"
          >&lt;technology /&gt;</span
        >
        to

        <span>build and sustain market leaders</span>
      </div>
      <p
        class="mt-[65px] lg:mt-[82px] mb-[40px] lg:mb-[62px] text-[20px] lg:text-[32px] font-medium leading-[44px] tracking-[-0.01em]"
      >
        this is
      </p>
      <h2
        class="animate-gradient text-transparent text-[36px] lg:text-[96px] lg:leading-[84px] font-extrabold tracking-[-0.02em]"
      >
        GrowthOps Asia
      </h2>
    </div>
    <!-- Work -->
    <section
      class="container lg:mt-[260px] justify-center items-center flex flex-col order-1 lg:order-2"
    >
      <h2
        class="uppercase text-[35px] lg:text-[88px] leading-[84px] font-extrabold mb-[88px]"
      >
        what we do
      </h2>
      <div
        v-for="(item, index) in services"
        :key="index"
        :class="[
          'flex items-center gap-16 mb-32 w-full flex-col flex-col-reverse',
          index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse',
        ]"
      >
        <div class="w-full lg:w-1/3 flex-shrink-0">
          <span
            class="flex justify-center items-center text-lg lg:text-xl font-semibold w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] rounded-full border-2 border-white mb-6"
          >
            {{ String(index + 1).padStart(2, "0") }}
          </span>
          <h3 class="text-2xl lg:text-[40px] font-extrabold mb-5 lg:mb-6">
            {{ item.title }}
          </h3>
          <ul class="flex flex-col gap-4 text-base leading-[24px]">
            <li v-for="(point, i) in item.points" :key="i">{{ point }}</li>
          </ul>
          <button
            class="mt-5 lg:mt-6 py-3 px-6 border border-white text-sm font-extrabold rounded-full shadow-[0px_0px_16px_0px_#FF336680]"
          >
            See more
          </button>
        </div>
        <div class="w-full lg:w-2/3">
          <img
            class="w-full h-full object-cover max-h-[588px] rounded-[20px]"
            :src="item.image"
            :alt="item.title"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import workImage from "../assets/image/work.png";
const services = [
  {
    title: "Performance Marketing & Analytics",
    image: workImage,
    points: [
      "Performance Media",
      "Search Engine Optimisation",
      "Web & App Analytics",
      "Conversion Rate Optimisation Through Personalisation",
    ],
  },
  {
    title: "Digital-First Creative",
    image: workImage,
    points: ["Brand & Marketing Strategy", "Content Hubs", "Creative Services"],
  },
  {
    title: "Marketing Technology",
    image: workImage,
    points: [
      "Technology Consulting",
      "MarTech Deployment & Partnerships",
      "Cloud Readiness & Migration",
      "Mobile Development",
      "Custom Web Development",
      "Solution Architecture",
    ],
  },
  {
    title: "Experience Design & Strategy",
    image: workImage,
    points: [
      "Digital Transformation & Change Management",
      "User Experience Strategy and Design",
    ],
  },
];
</script>

<style scoped>
@keyframes animate-gradient {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 600% 0%;
  }
}

.animate-gradient {
  background: linear-gradient(
    90deg,
    #c00836,
    #f14c77,
    #fbb250,
    #5ec9c1,
    #004cba,
    #f36,
    #c00836
  );
  background-clip: text;
  -webkit-background-clip: text;
  background-size: 600% 100%;
  animation: animate-gradient 30s ease-out infinite;
}
</style>
