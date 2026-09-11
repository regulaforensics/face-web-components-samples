import {
  FaceEnrollWebComponent,
  FaceVerifyWebComponent,
} from "@regulaforensics/vp-frontend-face-components";

declare global {
  interface HTMLElementTagNameMap {
    "face-enroll": FaceEnrollWebComponent;
    "face-verify": FaceVerifyWebComponent;
  }
}
