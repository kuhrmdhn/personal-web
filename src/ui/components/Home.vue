<script setup lang="ts">
import RandomText from '../elements/RandomText.vue';
</script>

<template>
    <section id="home"
        class="h-[100svh] w-full overflow-hidden flex flex-col justify-center items-center bg-black text-silverWhite font-bold pt-16">
        <div>
            <RandomText target="Kukuh Ardi Ramadhan" class="text-2xl lg:text-5xl" />
        </div>
        <div>
            <h2 class="text-lg lg:text-3xl fall">Frontend Web Developer</h2>
        </div>
    </section>
</template>

<style scoped>
.fall {
    animation: fall 1s 1s ease forwards;
    position: relative;
    top: -100svh;
    opacity: 0;
}
</style>
