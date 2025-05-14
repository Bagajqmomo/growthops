<template>
  <div
    class="bg-[linear-gradient(to_right,rgba(4,5,6,0.56)_0%,rgba(4,5,6,0.56)_40%)] rounded-3xl border-2 border-white border-opacity-[8%] backdrop-blur-[40px] shadow-[0px_4px_24px_-1px_#00000040] py-6 px-8"
  >
    <span
      class="font-semibold text-xs uppercase text-primaryCyan lg:text-[#B4B4B4]"
      >{{ region }}</span
    >
    <h3 class="font-extrabold text-2xl text-primaryCyan mb-6 mt-2">
      {{ city }}
    </h3>
    <div class="flex flex-col gap-3">
      <p v-if="phone" class="flex gap-3 text-base font-medium items-start">
        <img src="/assets/image/phone.png" />
        {{ phone }}
      </p>
      <p v-if="email" class="flex gap-3 text-base font-medium items-start">
        <img src="/assets/image/email.png" />
        {{ email }}
      </p>
      <p v-if="address" class="flex gap-3 text-base font-medium items-start">
        <img src="/assets/image/address.png" />
        {{ address }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  region: {
    type: String,
    default: "asia",
  },
  city: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
});
</script>
