<template>
  <div class="mx-auto">
    <!-- Tab headers -->
    <div
      class="flex w-max mx-auto flex-wrap border border-[#2B2B2B] p-[6px] rounded-[30px]"
    >
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="[
          'py-1 sm:py-3 px-3 sm:px-5 text-sm lg:text-base rounded-[20px]',
          activeTab === index
            ? 'bg-primaryCyan font-bold text-black'
            : 'text-white hover:text-[#33FFF3]',
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Tab content -->
    <div class="mt-14 flex gap-5 lg:gap-[85px] items-start">
      <img class="flex-shrink-0" src="../assets/image/quote.png" />
      <div class="w-full">
        <p class="textt-[20px] lg:text-2xl leading-[36px] font-medium">
          {{ tabs[activeTab].content }}
        </p>
        <p class="mt-12 lg:mt-16 font-bold mb-3">{{ tabs[activeTab].name }}</p>
        <span class="text-[#cccccc]">
          {{ tabs[activeTab].position }}
          {{ tabs[activeTab].company }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
});

const activeTab = ref(0);
</script>
