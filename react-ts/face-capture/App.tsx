import * as React from 'react';
import {
    FaceDetectionWebComponent,
    FaceCaptureDetailType
} from '@regulaforensics/vp-frontend-face-components-beta';

function App(): JSX.Element {
    const component = React.useRef<FaceDetectionWebComponent>(null);
    const memoizedListener = React.useCallback((data: CustomEvent<FaceCaptureDetailType>) => {
        if (data.detail) {
            const response = data.detail; // The response of the component will be located here
            console.log(response);
        }
    }, []);

    React.useEffect(() => {
        const componentCurrent = component.current;

        if (componentCurrent) {
            componentCurrent.addEventListener('face-capture', memoizedListener);
        }

        return () => {
            if (componentCurrent) {
                componentCurrent.removeEventListener('face-capture', memoizedListener);
            }
        }
    }, []);

    return <face-capture start-screen ref={component}></face-capture>;
}

export default App;
