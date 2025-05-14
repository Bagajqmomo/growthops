<template>
  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-[#999D9F]">
      {{ label }}
    </label>
    <textarea
      class="border border-white border-opacity-[24%] rounded-xl bg-[#0E1015] p-6 max-w-[793px]"
      :placeholder="placeholder"
      rows="8"
      @input="emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>

<script setup>
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
});
</script>
