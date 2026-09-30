import {
  FaceEnrollWebComponent,
  IFaceEnroll,
  FaceVerifyWebComponent,
  IFaceVerify,
} from "@regulaforensics/vp-frontend-face-components";

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      "face-enroll": React.DetailedHTMLProps<
        IFaceEnroll & React.HTMLAttributes<FaceEnrollWebComponent>,
        FaceEnrollWebComponent
      >;
      "face-verify": React.DetailedHTMLProps<
        IFaceVerify & React.HTMLAttributes<FaceVerifyWebComponent>,
        FaceVerifyWebComponent
      >;
    }
  }
}
