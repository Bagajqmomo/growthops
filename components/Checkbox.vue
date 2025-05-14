<template>
  <div>
    <label
      class="input__checkmark flex items-start relative pointer text-base select-none"
    >
      <input
        type="checkbox"
        :checked="modelValue"
        @change="emit('update:modelValue', $event.target.checked)"
      />
      <span
        class="checkmark flex-shrink-0 h-4 w-4 border border-[#666666] rounded"
      ></span>
      <slot />
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped>
.input__checkmark input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.input__checkmark:hover input ~ .checkmark {
  background-color: #ccc;
}

.input__checkmark input:checked ~ .checkmark {
  background-color: #07ddda;
}

.checkmark:after {
  content: "✓";
  position: absolute;
  display: none;
  color: white;
  font-size: 12px;
  font-weight: bold;
  left: 3px;
  top: -3px;
}

.input__checkmark input:checked ~ .checkmark:after {
  display: block;
}
</style>
