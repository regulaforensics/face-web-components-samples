// Importing the component
import '@regulaforensics/vp-frontend-face-components';

// Get our component
const component = document.getElementsByTagName('face-liveness')[0];

// OPTIONAL: you can add headers for the request
component.headers = {
    'Any-header': 'header-value',
}

// Creating an event listener
function listener(event) {
    if (event.detail) {
        const response = event.detail; // The response of the component will be located here
        console.log(response); // Doing something with the response
    }
}

// Adding an event listener to our component
component.addEventListener('face-liveness', listener);
