<template>
  <section class="relative pb-[324px]">
    <div class="container mt-[203px] flex flex-col justify-center items-center">
      <h2
        class="uppercase text-[35px] lg:text-[88px] leading-[84px] font-extrabold mb-[88px]"
      >
        what we do
      </h2>
      <Tab :tabs="tabData" />
    </div>
    <img
      class="absolute right-0 top-0"
      src="../assets/image/gradient-test.png"
    />
  </section>
</template>

<script setup>
const tabData = [
  {
    label: "Telco",
    content:
      "Through this initiative, GrowthOps have shown to have the right capabilities to take our platform to the next level. We believe the refreshed U.COM.MY will equip us with more insights, enabling us to make more data-led decisions that will result in new digital experiences that will truly benefit our customers.",
    name: "Jasmine Lee",
    position: "[Position], ",
    company: "[Company Name]",
  },
  {
    label: "Insurance",
    content:
      "Through this initiative, GrowthOps have shown to have the right capabilities to take our platform to the next level. We believe the refreshed U.COM.MY will equip us with more insights, enabling us to make more data-led decisions that will result in new digital experiences that will truly benefit our customers.",
    name: "Lorem",
    position: "[Position], ",
    company: "[Company Name]",
  },
  {
    label: "Fintech",
    content:
      "Through this initiative, GrowthOps have shown to have the right capabilities to take our platform to the next level. We believe the refreshed U.COM.MY will equip us with more insights, enabling us to make more data-led decisions that will result in new digital experiences that will truly benefit our customers.",
    name: "Ipsum",
    position: "[Position], ",
    company: "[Company Name]",
  },
  {
    label: "IT",
    content:
      "Through this initiative, GrowthOps have shown to have the right capabilities to take our platform to the next level. We believe the refreshed U.COM.MY will equip us with more insights, enabling us to make more data-led decisions that will result in new digital experiences that will truly benefit our customers.",
    name: "Lorem Ipsum",
    position: "[Position], ",
    company: "[Company Name]",
  },
];
</script>

<style scoped>
.container {
  padding-inline: 183px;
}

@media only screen and (max-width: 1024px) {
  .container {
    padding-inline: 80px;
  }
}

@media only screen and (max-width: 640px) {
  .container {
    padding-inline: 24px;
  }
}
</style>
