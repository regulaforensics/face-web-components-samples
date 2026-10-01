import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from "@angular/core";

import { FaceComponent } from "./components/face.component";
import "@regulaforensics/vp-frontend-face-components";
import { FaceLivenessDetailType } from "@regulaforensics/vp-frontend-face-components";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FaceComponent],
})
export class AppComponent implements OnInit, OnDestroy {
  isOpen: boolean = false;

  ngOnInit() {}

  ngOnDestroy() {}

  faceLivenessHandler(data: CustomEvent<FaceLivenessDetailType>) {
    if (data.detail.action === "PROCESS_FINISHED") {
      if (data.detail.data?.status === 1 && data.detail.data.response) {
        console.log(data.detail.data.response);
      }
    }

    if (data.detail?.action === "CLOSE") {
      this.isOpen = false;
    }
  }
}
