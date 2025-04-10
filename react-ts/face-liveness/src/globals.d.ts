import { FaceLivenessWebComponent, IFaceLiveness } from '@regulaforensics/vp-frontend-face-components';

declare global {
    namespace React.JSX {
        interface IntrinsicElements {
            'face-liveness': React.DetailedHTMLProps<
                IFaceLiveness & React.HTMLAttributes<FaceLivenessWebComponent>,
                FaceLivenessWebComponent
            >;
        }
    }
}

