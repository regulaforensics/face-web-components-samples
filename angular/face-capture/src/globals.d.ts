import { FaceDetectionWebComponent } from '@regulaforensics/vp-frontend-face-components';

declare global {
    interface HTMLElementTagNameMap {
        'face-capture': FaceDetectionWebComponent;
    }
}
