<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  @apply font-montserrat;
  color: #f5f5f5;
}

.container {
  padding-inline: 80px;
  margin-inline: auto;
}

@media only screen and (max-width: 640px) {
  .container {
    padding-inline: 24px;
  }
}
</style>
