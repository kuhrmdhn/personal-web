<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import ContactList from "../elements/ContactList.vue";
import { isVisibleElement } from "@/utils/useIsVisibleElement.ts";
const contactVisible = ref(false);

const checkVisibility = () => {
  const contactDescriptionElement =
    document.getElementById("contactDescription");
  if (contactDescriptionElement) {
    const status = isVisibleElement(contactDescriptionElement);
    contactVisible.value = status;
  }
};

onMounted(() => window.addEventListener("scroll", checkVisibility));
onBeforeMount(() => window.removeEventListener("scroll", checkVisibility));
checkVisibility();
</script>

<template>
  <section id="contact" class="h-[100svh] w-full pt-16 flex flex-col lg:flex-row items-center justify-around">
    <div class="h-full w-5/6 lg:w-2/5 flex justify-center items-center">
      <img
        src="/images/profile-3.jpg"
        alt="Kukuh Ardi Ramadhan Profile"
        :class="[
          'h-3/4 aspect-auto rounded-lg hover:scale-95 duration-300',
          contactVisible && 'to-right',
        ]"
      />
    </div>
    <div
      id="contactDescription"
      class="h-full w-5/6 lg:w-2/5 flex flex-col justify-center"
    >
      <div class="lg:pl-5 flex flex-col gap-5">
        <h3 :class="['text-3xl lg:text-5xl', contactVisible && 'flip']">
          Contact Me
        </h3>
        <p
          :class="[
            'text-justify w-full text-sm sm:text-base',
            contactVisible && 'to-up',
          ]"
        >
          Want to discuss or have an exciting project we can work on together?
          I'm always open to new ideas, let's chat!
        </p>
      </div>
      <ContactList />
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
