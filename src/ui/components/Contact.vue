<script setup>
import SocialMediaList from "../elements/SocialMediaList.vue";
import OnView from "../atoms/OnView.vue";
import SectionHeading from "../atoms/SectionHeading.vue";
import SectionDescription from "../atoms/SectionDescription.vue";
</script>

<template>
  <section
    id="contact"
    class="min-h-[35rem] h-[100svh] sm:h-[50svh] lg:h-[100svh] w-full pt-16 flex flex-col sm:flex-row items-center justify-around"
  >
    <OnView id="contactImage" triggerId="contactImage" class="h-1/2 sm:h-full w-5/6 lg:w-2/5 flex justify-center items-center">
      <img
        src="/images/profile-3.webp"
        alt="Contact profile image"
        class="h-full sm:h-3/4 aspect-auto rounded-lg hover:scale-95 duration-300 to-right"
      />
    </OnView>
    <div
      class="h-2/5 sm:h-full w-5/6 lg:w-2/5 flex flex-col justify-center"
    >
      <OnView id="contactHeading" triggerId="contactHeading" class="lg:pl-5 flex flex-col gap-5">
        <SectionHeading customClass="flip">
          Contact Me
        </SectionHeading>
        <SectionDescription customClass="to-up">
          Want to discuss or have an exciting project we can work on together?
          I'm always open to new ideas, let's chat!
        </SectionDescription>
      </OnView>
      <SocialMediaList />
    </div>
  </section>
</template>

<style scoped>
.flip {
  animation-delay: 400ms;
  transform: rotateX(90deg);
}
.to-right {
  animation-delay: 350ms;
  position: relative;
  left: -100svw;
}
</style>
