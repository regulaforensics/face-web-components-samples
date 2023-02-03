import '@regulaforensics/vp-frontend-face-components';

const component = document.querySelector('face-capture');

function listener(event) {
    if (event.detail) {
        const response = event.detail; // The response of the component will be located here
        console.log(response);
    }
}

component.addEventListener('face-capture', listener);
