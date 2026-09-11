import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy
} from "@angular/core";
import { FaceEnrollWebComponent } from "@regulaforensics/vp-frontend-face-components";

@Component({
  selector: "app-enroll",
  templateUrl: "./enroll.component.html",
  styleUrls: ["./enroll.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EnrollComponent implements AfterViewInit {
  @ViewChild("face", { static: false })
  face?: ElementRef<FaceEnrollWebComponent>;

  ngAfterViewInit() {
    if (!this.face) return;

    this.face.nativeElement.settings = {
      url: "http://localhost:41101",
      enroll: {
        person: {}, // person with empty object will be created with default settings (groups - default value is empty array)
      },
      customization: {
        onboardingScreenStartButtonBackground: "#5b5050",
      },
    };
  }
}
