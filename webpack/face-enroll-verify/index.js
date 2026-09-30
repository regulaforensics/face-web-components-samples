import "@regulaforensics/vp-frontend-face-components";

const container = document.querySelector("#container");
const resultContainer = document.querySelector("#result-container");
const enrollButton = document.querySelector("#enroll-button");
const verifyButton = document.querySelector("#verify-button");
const personIdInput = document.querySelector("#person-id");
const enrollInfo = document.querySelector("#enroll-info");
const verifyInfo = document.querySelector("#verify-info");

let personId = "";

function createFaceEnroll() {
  const faceEnrollElement = document.createElement("face-enroll");

  container.append(faceEnrollElement);
  faceEnrollElement.settings = {
    enroll: {
      person: {}, // person with empty object will be created with default settings (groups - default value is empty array)
    },
    customization: {
      onboardingScreenStartButtonBackground: "#5b5050",
    },
  };
}

function createFaceVerify() {
  const faceVerifyElement = document.createElement("face-verify");

  container.append(faceVerifyElement);
  faceVerifyElement.settings = {
    verify: {
      personId: personId, // personId is required
    },
    customization: {
      onboardingScreenStartButtonBackground: "#5b5050",
    },
  };
}

function closeComponent(selector) {
  const element = document.querySelector(selector);

  if (element) {
    element.remove();
  }

  resultContainer.style.display = "flex";
}

function renderEnrollInfo(response) {
  if (!response.enrollResult) return;

  enrollInfo.style.display = "block";
  document.querySelector("#enroll-image").src =
    `data:image/jpeg;base64,${response.images[0]}`;
  document.querySelector("#enrolled").textContent = String(
    response.enrollResult?.enrolled,
  );
  document.querySelector("#enroll-person-id").textContent =
    response.enrollResult?.person?.id;
  document.querySelector("#enroll-person-name").textContent =
    response.enrollResult?.person?.name;
}

function renderVerifyInfo(response) {
  if (!response.verifyResult) return;

  verifyInfo.style.display = "block";
  document.querySelector("#verified").textContent = String(
    response.verifyResult?.verified,
  );
  document.querySelector("#similarity").textContent =
    response.verifyResult?.match?.similarity;
}

function faceEnrollListener(data) {
  if (data.detail.action === "PROCESS_FINISHED") {
    if (data.detail.data?.status === 1 && data.detail.data.response) {
      console.log(data.detail.data.response);
      personId = data.detail.data.response.enrollResult?.person?.id || "";
      personIdInput.value = personId;
      renderEnrollInfo(data.detail.data.response);
    }
  }

  if (
    data.detail?.action === "CLOSE" ||
    data.detail?.action === "RETRY_COUNTER_EXCEEDED"
  ) {
    closeComponent("face-enroll");
  }
}

function faceVerifyListener(data) {
  if (data.detail.action === "PROCESS_FINISHED") {
    if (data.detail.data?.status === 1 && data.detail.data.response) {
      console.log(data.detail.data.response);
      renderVerifyInfo(data.detail.data.response);
    }
  }

  if (
    data.detail?.action === "CLOSE" ||
    data.detail?.action === "RETRY_COUNTER_EXCEEDED"
  ) {
    closeComponent("face-verify");
  }
}

personIdInput.addEventListener("input", (event) => {
  personId = event.target.value;
});

enrollButton.addEventListener("click", () => {
  resultContainer.style.display = "none";
  createFaceEnroll();
});

verifyButton.addEventListener("click", () => {
  if (!personId) {
    alert("Please enter a person ID or enroll a new person");
    return;
  }

  resultContainer.style.display = "none";
  createFaceVerify();
});

container.addEventListener("face-enroll", faceEnrollListener);
container.addEventListener("face-verify", faceVerifyListener);
