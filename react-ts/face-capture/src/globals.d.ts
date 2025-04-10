import { FaceDetectionWebComponent, IFaceDetection } from '@regulaforensics/vp-frontend-face-components';

declare global {
    namespace React.JSX {
        interface IntrinsicElements {
            'face-capture': DetailedHTMLProps<IFaceDetection & HTMLAttributes<FaceDetectionWebComponent>,
                FaceDetectionWebComponent>;
        }
    }
}

