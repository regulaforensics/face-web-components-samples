import { HTMLAttributes, DetailedHTMLProps } from 'react';
import { FaceLivenessWebComponent, IFaceLiveness } from '@regulaforensics/vp-frontend-face-components';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'face-liveness': DetailedHTMLProps<IFaceLiveness & HTMLAttributes<FaceLivenessWebComponent>,
                FaceLivenessWebComponent>;
        }
    }
}
