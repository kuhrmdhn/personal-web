<template>
  <div class="h-full w-full lg:w-[40svw] flex flex-col gap-5 overflow-y-hidden">
    <OnView id="certificateHeading" triggerId="certificateHeading">
      <SectionHeading custom-class="!text-xl lg:!text-3xl text-center flip">
        Certificate
      </SectionHeading>
    </OnView>
    <div
      id="certificateList"
      class="w-full h-fit flex flex-col items-center gap-4"
    >
      <ul>
        <li v-for="certificate in certificateData" :key="certificate.id">
          <OnView trigger-id="certificateList">
            <CertificateItem
              custom-class="fall"
              :style="{ animationDelay: certificate.id * 100 + 'ms' }"
              :title="certificate.title"
              :credentials-url="certificate.credential_url"
            />
          </OnView>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { supabase } from "@/utils/supabase";
import { onMounted, ref } from "vue";
import CertificateItem from "../atoms/CertificateItem.vue";
import OnView from "../atoms/OnView.vue";
import SectionHeading from "../atoms/SectionHeading.vue";

type Certificate = {
  id: number;
  title: string;
  credential_url: string;
};

const certificateData = ref<Certificate[]>([]);
async function fetchCertificate() {
  const { data: certificateList } = await supabase
    .from("certificate_list")
    .select()
    .order("id", { ascending: true });
  if (certificateList && certificateList.length > 0) {
    certificateData.value = certificateList;
  }
}
onMounted(() => {
  fetchCertificate();
});
</script>

<style scoped>
.certificate:not(:hover) {
  filter: brightness(90%);
  transform: scale(95%);
}
</style>
