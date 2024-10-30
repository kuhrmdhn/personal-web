<template>
  <div
    id="navigation"
    :class="[
      'fixed z-20 bg-silverWhite h-[100svh] w-full left-0 pt-16 duration-500 flex flex-col sm:flex-row justify-end sm:justify-around lg:justify-center items-center',
      isActive ? 'top-0' : '-top-[100svh]',
    ]"
  >
    <nav class="h-1/2 lg:h-3/5 w-5/6 sm:w-1/3 pl-7 relative flex">
      <h3
        class="-rotate-90 absolute top-5 -left-5 font-bold text-sm lg:text-base"
      >
        Menu
      </h3>
      <ul class="flex flex-col gap-5 text-2xl lg:text-5xl font-extrabold">
        <li
          class="hover:scale-90 duration-300"
          v-for="item in navigationData"
          :key="item.id"
          @click="toggleMenu"
        >
          <NavigationItem
            :style="{ animationDelay: item.id * 100 + 'ms' }"
            :text="item.title"
            :class="['hover:font-thin', isActive && 'fall']"
            :url="item.url"
          />
        </li>
      </ul>
    </nav>
    <section
      :class="[
        isActive && 'fall image-fall',
        'h-2/5 lg:h-full w-fit sm:w-1/3 flex items-end justify-end lg:items-end',
      ]"
    >
      <img
        src="/images/profile-2.jpg"
        class="h-full lg:h-auto lg:w-full aspect-auto"
      />
    </section>
  </div>
</template>

<script setup>
import { useActiveMenu } from "@/store/useActiveMenu";
import { storeToRefs } from "pinia";
import NavigationItem from "../atoms/NavigationItem.vue";
import { navigationData } from "@/constant/navigation";

const store = useActiveMenu();
const { isActive } = storeToRefs(store);
const { toggleMenu } = store;
</script>

<style scoped>
.navigation-hover {
  position: relative;
  top: 0;
}
.navigation-hover::before {
  content: "";
  width: 0;
  height: 3px;
  position: absolute;
  background: #000;
  transition-duration: 300ms;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
}
.navigation-hover:hover::before {
  width: 80%;
}
.image-fall {
  animation-delay: 500ms;
}
</style>
