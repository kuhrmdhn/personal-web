<template>
  <footer
    class="h-[25rem] sm:h-72 w-full py-4 bg-black text-silverWhite flex flex-col sm:flex-row justify-around items-center"
  >
    <div
      class="h-2/5 lg:h-full w-full sm:w-2/5 lg:w-1/3 flex flex-col items-center justify-center"
    >
      <Logo />
      <KeqingIcon />
    </div>
    <nav
      id="footerNavigation"
      class="w-full sm:w-1/2 h-3/5 sm:h-3/4 flex justify-evenly overflow-hidden"
    >
      <div class="w-2/5 h-3/4 flex flex-col items-center gap-4">
        <h1 class="text-xl">Navigation</h1>
        <OnView class="h-full w-fit flex flex-col gap-2" triggerId="footerNavigation">
          <ul>
            <li v-for="nav of navigationData" :key="nav.id">
              <NavigationItem
                :text="nav.title"
                :url="nav.url"
                :style="{ animationDelay: nav.id * 100 + 'ms' }"
                class="underline-white fall"
              />
            </li>
          </ul>
        </OnView>
      </div>
      <div class="w-2/5 h-3/4 flex flex-col items-center gap-4">
        <h1 class="text-xl">Contact Me</h1>
        <OnView class="h-full w-fit flex flex-col gap-2" triggerId="footerNavigation">
          <ul>
            <li v-for="media of SocialMediaData" :key="media.id">
              <NavigationItem
                :text="media.title"
                :url="media.url"
                class="underline-white fall"
                :style="{ animationDelay: media.id * 100 + 'ms' }"
              />
            </li>
          </ul>
        </OnView>
      </div>
    </nav>
  </footer>
</template>

<script setup>
import { navigationData } from "@/constant/navigation";
import KeqingIcon from "../elements/KeqingIcon.vue";
import Logo from "../elements/Logo.vue";
import { SocialMediaData } from "@/constant/socialMedia";
import NavigationItem from "../atoms/NavigationItem.vue";
import OnView from "../atoms/OnView.vue";
</script>

<style scoped>
.underline-white {
  --underline-color: #fff;
  --underline-height: 1.5px;
  --underline-offset: -4px;
}
</style>
