<template>
  <div class="container" ref="container">
    <face-capture v-if="showBlock" ref="faceCaptureComponent"></face-capture>
    <button v-else class="show-btn" @click="showBlock = !showBlock">Show Component</button>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { FaceDetectionWebComponent, FaceCaptureDetailType } from '@regulaforensics/vp-frontend-face-components';
  
  const faceCaptureComponent = ref<FaceDetectionWebComponent | null>(null);
  const container = ref<HTMLElement | null>(null);
  const showBlock = ref(false);

  const listener = (data: CustomEvent<FaceCaptureDetailType> ) => {
      if (data.detail.action === 'PROCESS_FINISHED') {
          if (data.detail.data?.status === 1 && data.detail.data.response) {
              console.log(data.detail.data.response);
          }
      }

      if (data.detail?.action === 'CLOSE') {
          showBlock.value = false;
      }
  };

  watch(faceCaptureComponent, async (newValue, _) => {
    const faceComponent = faceCaptureComponent.value;
    if (!faceComponent) return;
    if (newValue) {
      // set the settings each time when the component is mounted to the DOM
      faceComponent.settings = {
        copyright: true,
        customization: {
          onboardingScreenStartButtonBackgroundHover: '#000',
        }
      }
    }
  });

  onMounted(() => {
    if (!container.value) return;
    container.value.addEventListener('face-capture', listener);
  });

  onBeforeMount(() => {
    if (!container.value) return;
    container.value.removeEventListener('face-capture', listener);
  });
</script>

<style>
  .container {
    position: absolute;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .show-btn {
    padding: 15px 20px;
    background: rgb(189, 125, 255);
    color: white;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
  }
</style>
