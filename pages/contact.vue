<template>
  <div class="outer">
    <div class="container pt-[150px] relative">
      <h2 class="text-5xl xl:text-8xl font-extrabold tracking-[-0.02em]">
        Contact Us
      </h2>
      <p
        class="xl:text-[32px] text-xl font-medium tracking-[-0.01em] mt-6 max-w-[329px] xl:max-w-[587px]"
      >
        Let’s create something awesome together
      </p>
      <form class="mt-12" @submit.prevent="handleSubmit">
        <Input v-model="form.fullName" label="Full name" class="mb-10" />
        <div class="flex gap-8 mb-8 flex-wrap">
          <InputMobile label="Phone number" v-model="form.phone" />
          <Input v-model="form.email" label="Email" />
        </div>
        <RadioBtn
          class="mb-8"
          title="I want to"
          v-model="form.purpose"
          :options="[
            'Become a client',
            'Join the team',
            'Investor enquiry',
            'Others',
          ]"
        />
        <Textarea
          v-model="form.message"
          class="mb-8"
          label="Tell us more"
          placeholder="Briefly describe your message here"
        />
        <Checkbox class="mb-6" v-model="form.subscribe">
          <p class="font-medium text-sm ml-2">
            I want to subscribe to the occasional insightful materials from
            GrowthOps. (optional)
          </p>
        </Checkbox>
        <Checkbox v-model="form.agree">
          <p class="font-medium text-sm ml-2">
            I have read and agree to the website’s
            <NuxtLink to="/" class="underline">privacy policy</NuxtLink> .
          </p>
        </Checkbox>
        <button
          class="mt-12 bg-[#33FF85] py-4 px-10 rounded-[48px] shadow-[0px_0px_16px_0px_#FF336680] font-extrabold text-lg"
        >
          Submit
        </button>
      </form>
      <!-- <img
      class="absolute top-[95px] object-cover w-full left-0"
      src="/assets/image/gradient.png"
    /> -->
      <section
        class="flex justify-center flex-col items-center mt-[127px] mb-[117px]"
      >
        <h2
          class="uppercase text-[35px] mb-[29px] lg:text-[88px] mb-[73px] font-extrabold"
        >
          our offices
        </h2>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-[41px] gap-y-[68px]"
        >
          <OfficeCard
            city="Kuala Lumpur"
            phone="+60 3 2789 9038"
            email="my@growthops.asia"
            address="Level 11, Block B, Plaza Zurich, No. 12, Jalan Gelenggang, Bukit Damansara, 50490 Kuala Lumpur, Malaysia"
          />
          <OfficeCard
            city="Manila"
            phone="+63 2 7586 4771"
            email="man@growthops.asia"
            address="KMC Solutions, 5F V Corporate Center, L.P. Leviste, Salcedo Village, Makati City 1227"
          />
          <OfficeCard
            city="Hong Kong"
            phone="+852 2805 9009"
            email="hkg@growthops.asia"
            address="29/F, Infinitus Plaza, 199 Des Voeux Road Central, Hong Kong"
          />
          <OfficeCard
            city="Singapore"
            phone="+65 6220 8383"
            email="sg@growthops.asia"
            address="1 Neil Rd, #02-02, Singapore 088804"
          />
          <OfficeCard
            region="middle east"
            city="United Arab Emirates"
            address="Building 1, Unit B304, Dubai Design District"
          />
        </div>
      </section>
      <h2
        class="mx-auto uppercase text-[35px] max-w-[327px] sm:max-w-max lg:text-[88px] mb-[29px] lg:mb-[73px] font-extrabold text-left sm:text-center"
      >
        keep in touch
      </h2>
    </div>
  </div>

  <footer class="w-full pb-[40px] lg:pb-[120px]">
    <div class="flex justify-center overflow-hidden h-[250px] relative">
      <div
        class="absolute top-[10px] w-[300vw] h-[300vw] rounded-full border-t border-opacity-30 border-primary"
      ></div>
      <div
        class="absolute top-[72px] w-[300vw] h-[300vw] rounded-full border border-opacity-50 border-white"
      ></div>
      <div
        class="absolute top-[130px] w-[300vw] h-[300vw] rounded-full border border-opacity-70 border-white"
      ></div>
    </div>
    <div class="container mx-auto">
      <ul
        class="hidden sm:flex justify-center items-center flex-wrap gap-x-10 gap-y-8 font-medium text-base text-white mt-[30px]"
      >
        <li><NuxtLink to="/">Services</NuxtLink></li>
        <li><NuxtLink to="/">Work</NuxtLink></li>
        <li><NuxtLink to="/">Insight</NuxtLink></li>
        <li><NuxtLink to="/">Career</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
      </ul>
      <div class="flex-flex-col flex flex-col sm:hidden gap-5 mb-[21px]">
        <span class="uppercase font-semibold text-sm text-[#666666]">Asia</span>
        <ul class="flex flex-col gap-4">
          <li><NuxtLink to="/"></NuxtLink>Hong Kong</li>
          <li><NuxtLink to="/"></NuxtLink>Kuala Lumpur</li>
          <li><NuxtLink to="/"></NuxtLink>Manila</li>
          <li><NuxtLink to="/"></NuxtLink>Singapore</li>
        </ul>
      </div>
      <div class="flex-flex-col flex flex-col sm:hidden gap-5">
        <span class="uppercase font-semibold text-sm text-[#666666]"
          >Middle East</span
        >
        <ul class="flex flex-col gap-4">
          <li><NuxtLink to="/"></NuxtLink>United Arab Emirates</li>
        </ul>
      </div>
      <ul
        class="flex justify-center flex-wrap flex-shrink-0 items-center gap-14 font-medium text-base text-white mt-[30px] lg:mt-[56px]"
      >
        <li>
          <NuxtLink to="/"><img src="../assets/image/linkedin.png" /></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/"><img src="../assets/image/facebook.png" /></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/"><img src="../assets/image/insta.png" /></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/"><img src="../assets/image/youtube.png" /></NuxtLink>
        </li>
      </ul>
      <div class="justify-center lg:justify-between mt-[80px] hidden sm:flex">
        <p class="text-[#6F7176] font-semibold text-xs hidden lg:block">
          © Copyright GrowthOps. All rights reserved.
        </p>
        <div
          class="text-xs flex-wrap justify-center items-center text-center flex gap-x-[48px] gap-y-[24px]"
        >
          <NuxtLink to="/"
            ><i class="fa-solid fa-arrow-up-right-from-square mr-2"></i> Go to
            global GrowthOps website</NuxtLink
          >
          <NuxtLink to="/">Privacy Policy</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import axios from "axios";
const form = reactive({
  fullName: "",
  phone: "",
  email: "",
  purpose: "",
  message: "",
  subscribe: false,
  agree: false,
});

const handleSubmit = async () => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        ...form,
      }
    );

    console.log("Dummy API Response:", response.data);
    alert("Form submitted to dummy API!");

    form.fullName = "";
    form.phone = "";
    form.email = "";
    form.purpose = "";
    form.message = "";
    form.subscribe = false;
    form.agree = false;
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Submission failed. Please try again.");
  }
};
</script>

<style scoped>
.outer {
  background-image: url(/assets/image/gradient.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center -150px;
}

@media only screen and (max-width: 1025px) {
  .outer {
    background-image: url(/assets/image/gradient-mobile.png);
    background-position: center -200px;
  }
}
</style>
