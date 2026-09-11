import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { FaceVerifyWebComponent } from "@regulaforensics/vp-frontend-face-components";

@Component({
  selector: "app-verify",
  templateUrl: "./verify.component.html",
  styleUrls: ["./verify.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VerifyComponent implements AfterViewInit {
  @Input() personId = "";
  @ViewChild("face", { static: false })
  face?: ElementRef<FaceVerifyWebComponent>;

  ngAfterViewInit() {
    if (!this.face) return;

    this.face.nativeElement.settings = {
      url: "http://localhost:41101",
      verify: {
        personId: this.personId, // personId is required
      },
      customization: {
        onboardingScreenStartButtonBackground: "#5b5050",
      },
    };
  }
}
