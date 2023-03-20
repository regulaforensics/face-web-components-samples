import { HTMLAttributes, DetailedHTMLProps } from 'react';
import { FaceDetectionWebComponent, IFaceDetection } from '@regulaforensics/vp-frontend-face-components';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'face-capture': DetailedHTMLProps<IFaceDetection & HTMLAttributes<FaceDetectionWebComponent>,
                FaceDetectionWebComponent>;
        }
    }
}
