<template>
    <button aria-label="Menu Button" @click="toggleMenu" class="flex flex-col gap-1 w-fit h-fit relative z-30 translate-y-1/2 lg:transform-none">
        <svg :class="[isActive ? 'rotate-45' : 'rotate-0', 'transition-transform duration-300 delay-200 w-6']" height="3"
            viewBox="0 0 36 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.5" y1="1.5" x2="34.4375" y2="1.5" :stroke="[isActive ? 'black' : 'white' ]" stroke-width="3"
                stroke-linecap="round" />
        </svg>

        <svg :class="[isActive ? 'opacity-0' : 'opacity-100', 'transition-opacity duration-300 delay-200 w-6']" height="3"
            viewBox="0 0 36 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.5" y1="1.5" x2="34.4375" y2="1.5" :stroke="[isActive ? 'black' : 'white' ]" stroke-width="3"
                stroke-linecap="round" />
        </svg>

        <svg :class="[isActive ? '-rotate-45 -translate-y-[14px]' : 'rotate-0', 'transition-transform duration-300 delay-200 w-6']"
         height="3" viewBox="0 0 36 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.5" y1="1.5" x2="34.4375" y2="1.5" :stroke="[isActive ? 'black' : 'white' ]" stroke-width="3"
                stroke-linecap="round" />
        </svg>
    </button>
</template>

<script setup>
import { useActiveMenu } from '@/store/useActiveMenu';
import { storeToRefs } from 'pinia';

const store = useActiveMenu();
const { isActive } = storeToRefs(store);
const { toggleMenu } = store;
</script>
