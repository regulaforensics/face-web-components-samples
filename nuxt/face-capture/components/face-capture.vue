<template>
  <div
    style="
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    "
    ref="container"
  >
    <face-capture ref="component" v-if="isOpen"></face-capture>
    <button v-else="!isOpen" @click="isOpen = true">Open component</button>
  </div>
</template>

<script setup lang="ts">
import { FaceDetectionWebComponent, type FaceCaptureDetailType } from "@regulaforensics/vp-frontend-face-components";

const container = ref<HTMLDivElement>();
const component = ref<FaceDetectionWebComponent>();
const isOpen = ref(false);
const listener = (data: CustomEvent<FaceCaptureDetailType>) => {
  if (data.detail.action === "PROCESS_FINISHED") {
    console.log(data.detail.data?.response);
  }

  if (data.detail?.action === "CLOSE") {
    isOpen.value = false;
  }
};
onMounted(() => {
  container.value?.addEventListener("face-capture", listener);
});

onUnmounted(() => {
  container.value?.removeEventListener("face-capture", listener);
});

watch(component, (newValue, _) => {
  const faceWebComponent = component.value;
  if (!faceWebComponent) return;
  if (newValue) {
    faceWebComponent.settings = {
      customization: {
        onboardingScreenStartButtonBackground: '#414141',
      }
    }
  }
})
</script>
