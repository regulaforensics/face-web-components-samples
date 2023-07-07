import * as React from 'react';
import { FaceLivenessDetailType, FaceLivenessWebComponent } from '@regulaforensics/vp-frontend-face-components';

const containerStyle = {
    display: 'flex',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
} as React.CSSProperties;

const buttonStyle = {
    padding: '10px 30px',
    color: 'white',
    fontSize: '16px',
    borderRadius: '2px',
    backgroundColor: '#bd7dff',
    border: '1px solid #bd7dff',
    cursor: 'pointer',
} as React.CSSProperties;

function App() {
    const [isOpen, setIsOpen] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const componentRef = React.useRef<FaceLivenessWebComponent>(null);
    const listener = (data: CustomEvent<FaceLivenessDetailType>) => {
        if (data.detail.action === 'PROCESS_FINISHED') {
            if (data.detail.data?.status === 1 && data.detail.data.response) {
                console.log(data.detail.data.response);
            }
        }

        if (data.detail?.action === 'CLOSE' || data.detail?.action === 'RETRY_COUNTER_EXCEEDED') {
            setIsOpen(false);
        }
    };

    React.useEffect(() => {
        if (isOpen && componentRef.current) {
            componentRef.current.settings = {
                headers: {
                    Test: 'Test',
                },
                tag: '123',
                customization: {
                    onboardingScreenStartButtonBackground: '#5b5050',
                }
            }
        }
    }, [isOpen]);

    React.useEffect(() => {
        const containerCurrent = containerRef.current;

        if (!containerCurrent) return;

        containerCurrent.addEventListener('face-liveness', listener);

        return () => {
            containerCurrent.removeEventListener('face-liveness', listener);
        }
    }, []);

    return (
        <div style={containerStyle} ref={containerRef}>
            {isOpen ? (
                <face-liveness ref={componentRef}></face-liveness>
            ) : (
                <button style={buttonStyle} onClick={() => setIsOpen(true)}>Open component</button>
            )}
        </div>
    );
}

export default App;
