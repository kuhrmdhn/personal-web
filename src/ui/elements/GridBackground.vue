<template>
    <div class="w-full h-full -z-10 absolute top-0 overflow-hidden">
        <img src="/images/grid-bg.png" class="object-cover object-center w-full h-full fade" />
    </div>
</template>

<style scoped>
.fade {
    animation: fade 1s ease-in-out 500ms forwards;
    opacity: 0;
}

@keyframes fade {
    0% {
        opacity: 0;
    } 100% {
        opacity: 1;
    }
}
</style>