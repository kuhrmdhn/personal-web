<template>
  <section
    id="home"
    class="h-[100svh] w-full overflow-hidden bg-black text-silverWhite font-bold pt-16 relative z-0 top-0"
  >
    <div class="h-full w-full flex flex-col justify-center items-center">
      <RandomText target="Kukuh Ardi Ramadhan" class="text-2xl lg:text-5xl" />
      <h2 class="text-lg lg:text-3xl fall">Frontend Web Developer</h2>
    </div>
    <GridBackground />
  </section>
</template>

<script setup>
import GridBackground from "../elements/GridBackground.vue";
import RandomText from "../elements/RandomText.vue";
</script>
