<template>
  <div
    class="absolute top-0 left-0 z-[9999] w-full py-[39px] px-20 bg-[linear-gradient(to_right,rgba(4,5,6,0.56)_0%,rgba(4,5,6,0.56)_40%)] backdrop-blur-[20px] shadow-[0px_4px_24px_-1px_#00000040]"
  >
    <div class="w-full flex justify-between">
      <NuxtLink to="/" @click="$emit('close')">
        <img src="../assets/image/logo.png" />
      </NuxtLink>
      <div
        class="flex gap-2 cursor-pointer text-white items-center font-bold"
        @click="$emit('close')"
      >
        <span class="hidden sm:block"> CLOSE </span>
        <img src="../assets/image/close.png" />
      </div>
    </div>
    <ul
      class="flex flex-col gap-8 xl:gap-10 font-black text-[48px] tracking-[1%] xl:text-[64px] text-white items-end mt-[52px]"
    >
      <li><NuxtLink to="/" @click="$emit('close')">SERVICES</NuxtLink></li>
      <li><NuxtLink to="/" @click="$emit('close')">WORK</NuxtLink></li>
      <li><NuxtLink to="/" @click="$emit('close')">INSIGHT</NuxtLink></li>
      <li><NuxtLink to="/" @click="$emit('close')">CAREER</NuxtLink></li>
      <li>
        <NuxtLink to="/contact" @click="$emit('close')">CONTACT</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup></script>
