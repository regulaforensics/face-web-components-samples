import '@regulaforensics/vp-frontend-face-components';

const container = document.querySelector('#container');
const button = document.querySelector('#button');

function createFaceLiveness() {
    const faceLivenessElement = document.createElement('face-liveness');

    // OPTIONAL: you can add headers for the request or session id
    faceLivenessElement.headers = {
        'Any-header': 'header-value',
    }
    faceLivenessElement.sessionId = 'ID';

    faceLivenessElement.setAttribute('start-screen', 'true');

    return faceLivenessElement;
}

function faceLivenessListener(data) {
    if (data.detail.action === 'PROCESS_FINISHED') {
        if (data.detail.data?.status === 1 && data.detail.data.response) {
            console.log(data.detail.data.response);
        }
    }
    if (data.detail?.action === 'CLOSE') {
        const faceLiveness = document.querySelector('face-liveness');

        if (faceLiveness) {
            faceLiveness.remove();
        }

        button.style.display = 'block';
    }
}

function buttonListener(event) {
    container.append(createFaceLiveness());
    event.target.style.display = 'none';
}

container.addEventListener('face-liveness', faceLivenessListener);
button.addEventListener('click', buttonListener);
