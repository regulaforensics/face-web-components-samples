import {
  FaceEnrollWebComponent,
  IFaceEnroll,
} from "@regulaforensics/vp-frontend-face-components";

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      "face-enroll": React.DetailedHTMLProps<
        IFaceEnroll & React.HTMLAttributes<FaceEnrollWebComponent>,
        FaceEnrollWebComponent
      >;
    }
  }
}
