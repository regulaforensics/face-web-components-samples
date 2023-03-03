import '@regulaforensics/vp-frontend-face-components';

const component = document.querySelector('face-liveness');

// OPTIONAL: you can add headers for the request or session id
component.headers = {
    'Any-header': 'header-value',
}
component.sessionId = 'ID';

function listener(event) {
    if (event.detail) {
        const response = event.detail; // The response of the component will be located here
        console.log(response);
    }
}

component.addEventListener('face-liveness', listener);
