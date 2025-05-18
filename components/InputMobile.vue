<template>
  <div class="flex flex-col gap-2 max-w-[381px] w-full">
    <label class="text-sm font-semibold text-[#999D9F]">
      {{ label }}
    </label>
    <div
      class="display flex overflow-hidden border border-white border-opacity-[24%] rounded-xl bg-[#0E1015] h-[52px]"
    >
      <!-- Country Code Dropdown -->
      <select
        v-model="countryCode"
        class="bg-[#1B1D24] px-5 py-[15px] text-base font-medium"
      >
        <option value="+60">+60</option>
        <option value="+65">+65</option>
        <option value="+1">+1</option>
      </select>

      <!-- Phone Number Input -->
      <input
        type="number"
        class="w-full px-3 py-2 outline-none bg-transparent"
        v-model="phoneNumber"
      />
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: String,
  label: String,
});

const countryCode = ref("+60");
const phoneNumber = ref("");

if (props.modelValue) {
  const match = props.modelValue.match(/^(\+\d+)(\d+)$/);
  if (match) {
    countryCode.value = match[1];
    phoneNumber.value = match[2];
  }
}

watch([countryCode, phoneNumber], () => {
  const fullPhone = countryCode.value + phoneNumber.value;
  emit("update:modelValue", fullPhone);
});
</script>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url(/assets/image/chevron_down.png);
  background-repeat: no-repeat;
  background-position: right 6px top 15px;
  width: 94px;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
