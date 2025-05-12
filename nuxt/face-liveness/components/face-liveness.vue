<template>
  <div
    class="container"
    ref="container"
  >
    <face-liveness ref="component" v-if="isOpen"></face-liveness>
    <button v-else="!isOpen" @click="isOpen = true">Open component</button>
  </div>
</template>

<style>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script setup lang="ts">
import { FaceLivenessWebComponent, type FaceLivenessDetailType } from "@regulaforensics/vp-frontend-face-components";

const container = ref<HTMLDivElement>();
const component = ref<FaceLivenessWebComponent>();
const isOpen = ref(false);
const listener = (data: CustomEvent<FaceLivenessDetailType>) => {
  if (data.detail.action === "PROCESS_FINISHED") {
    console.log(data.detail.data?.response);
  }

  if (data.detail?.action === "CLOSE") {
    isOpen.value = false;
  }
};
onMounted(() => {
  if(!container.value) return;
  container.value?.addEventListener("face-liveness", listener);
});
onUnmounted(() => {
  if(!container.value) return;
  container.value?.removeEventListener("face-liveness", listener);
});



watch(component, (newValue, _) => {
  const faceWebComponent = component.value;
  if (!faceWebComponent) return;
  if (newValue) {
    faceWebComponent.settings = {
      tag: 'id',
      customization: {
        onboardingScreenStartButtonBackground: '#414141',
      }
    }
  }
});

</script>
