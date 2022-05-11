// Importing the component
import '@face-component';
// Importing types
import { ICustomEvent, FaceLivenessDetailType, ICustomEventListener } from '@face-types';


// Get our component
const component: IFaceLiveness = document.getElementsByTagName('face-liveness')[0];

// OPTIONAL: you can add headers for the request
component.headers = {
    'Any-header': 'header-value',
};

// Creating an event listener
const listener: ICustomEventListener<FaceLivenessDetailType> = (data: ICustomEvent<FaceLivenessDetailType>): void => {
    if (data.detail) {
        const response = data.detail; // The response of the component will be located here
        console.log(response); // Doing something with the response
    }
}

// Adding an event listener to our component
component.addEventListener('face-liveness', listener);