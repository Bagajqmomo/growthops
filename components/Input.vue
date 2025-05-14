<template>
  <div class="flex flex-col gap-2 max-w-[381px] w-full">
    <label class="text-sm font-semibold text-[#999D9F]">
      {{ label }}
    </label>
    <input
      class="border p-4 border-white border-opacity-[24%] rounded-xl bg-[#0E1015] h-[52px]"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>
