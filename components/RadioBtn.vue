<template>
  <div>
    <label class="text-sm font-semibold text-[#999D9F]">{{ title }}</label>
    <div class="flex gap-4 mt-2 flex-col lg:flex-row">
      <label
        v-for="(option, index) in options"
        :key="index"
        class="input__checkmark"
      >
        {{ option }}
        <input
          type="radio"
          :value="option"
          :name="name"
          :checked="option === modelValue"
          @change="$emit('update:modelValue', option)"
        />
        <span class="checkmark"></span>
      </label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  name: String,
  options: Array,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped>
.input__checkmark {
  position: relative;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  user-select: none;
  padding-left: 24px;
}

.input__checkmark input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  left: 0;
  height: 16px;
  width: 16px;
  border: 1px solid #666666;
  border-radius: 50%;
}

.input__checkmark:hover input ~ .checkmark {
  background-color: #ccc;
}

.input__checkmark input:checked ~ .checkmark {
  background-color: #07ddda;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.input__checkmark input:checked ~ .checkmark:after {
  display: block;
}

.input__checkmark .checkmark:after {
  top: 4px;
  left: 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>
