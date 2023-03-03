import * as React from 'react';
import {
    FaceLivenessWebComponent,
    FaceLivenessDetailType
} from '@regulaforensics/vp-frontend-face-components';

function App() {
    const component = React.useRef<FaceLivenessWebComponent>(null);
    const memoizedListener = React.useCallback((data: CustomEvent<FaceLivenessDetailType>) => {
        if (data.detail) {
            const response = data.detail; // The response of the component will be located here
            console.log(response);
        }
    }, []);

    React.useEffect(() => {
        const componentCurrent = component.current;

        if (componentCurrent) {
            componentCurrent.addEventListener('face-liveness', memoizedListener);
        }

        return () => {
            if (componentCurrent) {
                componentCurrent.removeEventListener('face-liveness', memoizedListener);
            }
        }
    }, []);

    return <face-liveness ref={component}></face-liveness>;
}

export default App;
