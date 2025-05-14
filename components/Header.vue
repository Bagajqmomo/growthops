<template>
  <header
    class="max-w-[90%] z-50 sm:container m-auto flex justify-between items-center px-8 py-[14px] border-white border-opacity-10 border-2 bg-[linear-gradient(to_right,rgba(4,5,6,0.56)_0%,rgba(4,5,6,0.56)_40%)] rounded-[64px] absolute top-[64px] left-0 right-0 mx-auto backdrop-blur-[20px] shadow-[0px_4px_24px_-1px_#00000040]"
  >
    <NuxtLink to="/">
      <img src="../assets/image/logo.png" />
    </NuxtLink>
    <div
      class="flex gap-2 cursor-pointer text-white items-center font-bold"
      @click="toggleMenu"
    >
      <span class="hidden sm:block"> MENU </span>
      <img src="../assets/image/burgermenu.png" />
    </div>
  </header>
  <transition name="menu-fade">
    <Menu v-if="isOpen" @close="toggleMenu" />
  </transition>
</template>

<script setup>
import logo from "~/assets/image/logo.png";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: all 0.1s ease;
  overflow: hidden;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

.menu-fade-enter-to,
.menu-fade-leave-from {
  opacity: 1;
}
</style>
