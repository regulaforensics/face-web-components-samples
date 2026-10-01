import { Component, ChangeDetectionStrategy } from "@angular/core";

import { EnrollComponent } from "./components/enroll.component";
import { VerifyComponent } from "./components/verify.component";
import "@regulaforensics/vp-frontend-face-components";
import {
  FaceEnrollDetailType,
  FaceEnrollResponseType,
  FaceVerifyDetailType,
  FaceVerifyResponseType,
} from "@regulaforensics/vp-frontend-face-components";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [EnrollComponent, VerifyComponent],
})
export class AppComponent {
  openComponent: "enroll" | "verify" | null = null;
  personId = "";
  enrollResponse: FaceEnrollResponseType | null = null;
  verifyResponse: FaceVerifyResponseType | null = null;

  onPersonIdChange(event: Event) {
    this.personId = (event.target as HTMLInputElement).value;
  }

  openEnroll() {
    this.openComponent = "enroll";
  }

  openVerify() {
    if (!this.personId) {
      alert("Please enter a person ID or enroll a new person");
      return;
    }

    this.openComponent = "verify";
  }

  enrollHandler(data: CustomEvent<FaceEnrollDetailType>) {
    if (data.detail.action === "PROCESS_FINISHED") {
      if (data.detail.data?.status === 1 && data.detail.data.response) {
        console.log(data.detail.data.response);
        this.personId =
          data.detail.data.response.enrollResult?.person?.id || "";
        this.enrollResponse = data.detail.data.response;
      }
    }

    if (
      data.detail?.action === "CLOSE" ||
      data.detail?.action === "RETRY_COUNTER_EXCEEDED"
    ) {
      this.openComponent = null;
    }
  }

  verifyHandler(data: CustomEvent<FaceVerifyDetailType>) {
    if (data.detail.action === "PROCESS_FINISHED") {
      if (data.detail.data?.status === 1 && data.detail.data.response) {
        console.log(data.detail.data.response);
        this.verifyResponse = data.detail.data.response;
      }
    }

    if (
      data.detail?.action === "CLOSE" ||
      data.detail?.action === "RETRY_COUNTER_EXCEEDED"
    ) {
      this.openComponent = null;
    }
  }
}
