import { FaceLivenessWebComponent } from '@regulaforensics/vp-frontend-face-components';

declare global {
    interface HTMLElementTagNameMap {
        'face-liveness': FaceLivenessWebComponent;
    }
}
