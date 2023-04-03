import '@regulaforensics/vp-frontend-face-components';

const container = document.querySelector('#container');
const button = document.querySelector('#button');

function createFaceCapture() {
    const faceCaptureElement = document.createElement('face-capture');

    faceCaptureElement.setAttribute('start-screen', 'true');

    return faceCaptureElement;
}

function faceCaptureListener(data) {
    if (data.detail.action === 'PROCESS_FINISHED') {
        if (data.detail.data?.status === 1 && data.detail.data.response) {
            console.log(data.detail.data.response);
        }
    }
    if (data.detail?.action === 'CLOSE') {
        const faceCapture = document.querySelector('face-capture');

        if (faceCapture) {
            faceCapture.remove();
        }

        button.style.display = 'block';
    }
}

function buttonListener(event) {
    container.append(createFaceCapture());
    event.target.style.display = 'none';
}

container.addEventListener('face-capture', faceCaptureListener);
button.addEventListener('click', buttonListener);
