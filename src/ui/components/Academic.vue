<template>
  <section
    id="academic"
    class="h-fit w-full pt-20 flex flex-col items-center gap-7"
  >
    <OnView triggerId="academic" class="self-center">
      <SectionHeading class="flip"> Academic </SectionHeading>
    </OnView>
    <div
      class="w-5/6 h-full flex flex-col sm:flex-row gap-10 lg:justify-center"
    >
      <div>
        <EducationList />
      </div>
      <div>
        <CertificateList />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import OnView from "../atoms/OnView.vue";
import SectionHeading from "../atoms/SectionHeading.vue";
import CertificateList from "../elements/CertificateList.vue";
import EducationList from "../elements/EducationList.vue";
</script>
