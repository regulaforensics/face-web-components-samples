import {
  FaceVerifyWebComponent,
  IFaceVerify,
} from "@regulaforensics/vp-frontend-face-components";

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      "face-verify": React.DetailedHTMLProps<
        IFaceVerify & React.HTMLAttributes<FaceVerifyWebComponent>,
        FaceVerifyWebComponent
      >;
    }
  }
}
