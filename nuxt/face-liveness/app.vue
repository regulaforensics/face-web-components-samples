<template>
  <div class="container" ref="container">
    <face-liveness v-if="showBlock" ref="faceLivenessComponent"></face-liveness>
    <button v-else class="show-btn" @click="showBlock = !showBlock">Show Component</button>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch, onMounted, onBeforeMount } from 'vue';
  import { FaceLivenessWebComponent, FaceLivenessDetailType } from '@regulaforensics/vp-frontend-face-components';
  
  const faceLivenessComponent = ref<FaceLivenessWebComponent | null>(null);
  const container = ref<HTMLElement | null>(null);
  const showBlock = ref(false);

  const listener = (data: CustomEvent<FaceLivenessDetailType>) => {
      if (data.detail.action === 'PROCESS_FINISHED') {
          if (data.detail.data?.status === 1 && data.detail.data.response) {
              console.log(data.detail.data.response);
          }
      }

      if (data.detail?.action === 'CLOSE' || data.detail?.action === 'RETRY_COUNTER_EXCEEDED') {
          showBlock.value = false;
      }
  };

  onMounted(() => {
    if (!container.value) return;
    container.value.addEventListener('face-liveness', listener);
  })

  onBeforeMount(() => {
    if (!container.value) return;
    container.value.removeEventListener('face-liveness', listener);
  })

  watch(faceLivenessComponent, async (newValue, _) => {
    const faceComponent = faceLivenessComponent.value;
    if (!faceComponent) return;
    if (newValue) {
      // set the settings each time when the component is mounted to the DOM
      faceComponent.settings = {
        copyright: true,
        tag: 'ID',
        customization: {
          onboardingScreenStartButtonBackgroundHover: '#000',
        }
      }
    }
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
