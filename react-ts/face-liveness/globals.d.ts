import { HTMLAttributes, DetailedHTMLProps } from 'react';
import {
    FaceLivenessWebComponent,
    FaceDetectionWebComponent,
    FullScreenContainer,
    IFaceLiveness,
    IFaceDetection,
    IBaseComponent,
} from '@regulaforensics/vp-frontend-document-components';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'face-liveness': DetailedHTMLProps<IFaceLiveness & HTMLAttributes<FaceLivenessWebComponent>,
                FaceLivenessWebComponent>;
            'face-capture': DetailedHTMLProps<IFaceDetection & HTMLAttributes<FaceDetectionWebComponent>,
                FaceDetectionWebComponent>;
            'fullscreen-container': DetailedHTMLProps<IBaseComponent & HTMLAttributes<FullScreenContainer>,
                FullScreenContainer>;
        }
    }
}
