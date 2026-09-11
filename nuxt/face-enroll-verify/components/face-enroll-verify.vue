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
    <div v-if="!openComponent" class="result-container">
      <div v-if="enrollResponse && enrollResponse.enrollResult">
        <h4 class="result-text">Enroll info:</h4>
        <img
          :src="`data:image/jpeg;base64,${enrollResponse.images[0]}`"
          style="width: 300px; height: auto"
        />
        <p class="result-text">
          Enrolled: {{ String(enrollResponse.enrollResult?.enrolled) }}
        </p>
        <p class="result-text">
          Person ID: {{ enrollResponse.enrollResult?.person?.id }}
        </p>
        <p class="result-text">
          Person name: {{ enrollResponse.enrollResult?.person?.name }}
        </p>
      </div>

      <div v-if="verifyResponse && verifyResponse.verifyResult">
        <h4 class="result-text">Verification info:</h4>
        <p class="result-text">
          Verified: {{ String(verifyResponse.verifyResult?.verified) }}
        </p>
        <p class="result-text">
          Similarity: {{ verifyResponse.verifyResult?.match?.similarity }}
        </p>
      </div>

      <input
        type="text"
        placeholder="Person ID"
        :value="personId"
        @input="onPersonIdChange"
      />

      <div class="button-container">
        <button @click="openComponent = 'enroll'">Open enroll</button>
        <button @click="openVerify">Open verify</button>
      </div>
    </div>

    <face-enroll
      ref="enrollComponent"
      v-if="openComponent === 'enroll'"
    ></face-enroll>
    <face-verify
      ref="verifyComponent"
      v-if="openComponent === 'verify'"
    ></face-verify>
  </div>
</template>

<script setup lang="ts">
import type {
  FaceEnrollWebComponent,
  FaceVerifyWebComponent,
  FaceEnrollDetailType,
  FaceEnrollResponseType,
  FaceVerifyDetailType,
  FaceVerifyResponseType,
} from "@regulaforensics/vp-frontend-face-components";

const container = ref<HTMLDivElement>();
const enrollComponent = ref<FaceEnrollWebComponent>();
const verifyComponent = ref<FaceVerifyWebComponent>();
const openComponent = ref<"enroll" | "verify" | null>(null);
const personId = ref("");
const enrollResponse = ref<FaceEnrollResponseType | null>(null);
const verifyResponse = ref<FaceVerifyResponseType | null>(null);

const enrollListener = (data: CustomEvent<FaceEnrollDetailType>) => {
  if (data.detail.action === "PROCESS_FINISHED") {
    if (data.detail.data?.status === 1 && data.detail.data.response) {
      console.log(data.detail.data.response);
      personId.value = data.detail.data.response.enrollResult?.person?.id || "";
      enrollResponse.value = data.detail.data.response;
    }
  }

  if (
    data.detail?.action === "CLOSE" ||
    data.detail?.action === "RETRY_COUNTER_EXCEEDED"
  ) {
    openComponent.value = null;
  }
};

const verifyListener = (data: CustomEvent<FaceVerifyDetailType>) => {
  if (data.detail.action === "PROCESS_FINISHED") {
    if (data.detail.data?.status === 1 && data.detail.data.response) {
      console.log(data.detail.data.response);
      verifyResponse.value = data.detail.data.response;
    }
  }

  if (
    data.detail?.action === "CLOSE" ||
    data.detail?.action === "RETRY_COUNTER_EXCEEDED"
  ) {
    openComponent.value = null;
  }
};

const onPersonIdChange = (event: Event) => {
  personId.value = (event.target as HTMLInputElement).value;
};

const openVerify = () => {
  if (!personId.value) {
    alert("Please enter a person ID or enroll a new person");
    return;
  }

  openComponent.value = "verify";
};

onMounted(() => {
  container.value?.addEventListener("face-enroll", enrollListener);
  container.value?.addEventListener("face-verify", verifyListener);
});

onUnmounted(() => {
  container.value?.removeEventListener("face-enroll", enrollListener);
  container.value?.removeEventListener("face-verify", verifyListener);
});

watch(openComponent, async (value) => {
  await nextTick();

  if (value === "enroll" && enrollComponent.value) {
    enrollComponent.value.settings = {
      enroll: {
        person: {}, // person with empty object will be created with default settings (groups - default value is empty array)
      },
      customization: {
        onboardingScreenStartButtonBackground: "#5b5050",
      },
    };
  }

  if (value === "verify" && verifyComponent.value) {
    verifyComponent.value.settings = {
      verify: {
        personId: personId.value, // personId is required
      },
      customization: {
        onboardingScreenStartButtonBackground: "#5b5050",
      },
    };
  }
});
</script>

<style>
.result-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.button-container {
  display: flex;
  gap: 12px;
}

.result-text {
  max-width: 250px;
  font-size: 14px;
  color: #333;
  margin: 0;
}

face-enroll,
face-verify {
  display: block;
  width: 100%;
  height: 100%;
  background: #e5e5e5;
}
</style>
