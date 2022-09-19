// Importing the component
import '@regulaforensics/vp-frontend-face-components';

// Get our component
const component = document.getElementsByTagName('face-capture')[0];

// Creating an event listener
function listener(event) {
    if (event.detail) {
        const response = event.detail; // The response of the component will be located here
        console.log(response); // Doing something with the response
    }
}

// Adding an event listener to our component
component.addEventListener('face-capture', listener);
