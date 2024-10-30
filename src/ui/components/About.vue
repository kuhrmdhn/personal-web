<template>
  <section
    id="about"
    class="w-full min-h-[40rem] h-[100svh] sm:h-[65svh] lg:h-[80svh] flex flex-col sm:flex-row justify-around items-center lg:px-24 pt-12 sm:pt-6"
  >
    <OnView
      id="aboutImage"
      triggerId="aboutImage"
      class="h-1/3 sm:h-2/5 lg:h-fit w-5/6 sm:w-2/5 flex justify-center items-center"
    >
      <img
        src="/images/profile-1.webp"
        alt="Kukuh Ardi Ramadhan Image"
        class="w-4/5 grayscale hover:grayscale-0 hover:scale-105 duration-500 aspect-auto to-right"
      />
    </OnView>
    <div
      id="description"
      class="w-11/12 sm:w-1/2 h-1/2 lg:h-fit flex flex-col justify-center gap-5"
    >
      <OnView triggerId="description">
        <SectionHeading customClass="flip"> About Me </SectionHeading>
      </OnView>
      <OnView triggerId="description">
        <SectionDescription customClass="flip">
          {{ aboutDescription }}
        </SectionDescription>
      </OnView>
    </div>
  </section>
</template>

<script setup>
import { aboutDescription } from "@/constant/aboutDescription";
import OnView from "../atoms/OnView.vue";
import SectionHeading from "../atoms/SectionHeading.vue";
import SectionDescription from "../atoms/SectionDescription.vue";
</script>
<style scoped>
    .flip {
      --flip-delay: 500ms;
    }
</style>
