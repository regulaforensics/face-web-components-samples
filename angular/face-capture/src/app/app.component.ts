import { Component } from '@angular/core';
import '@regulaforensics/vp-frontend-face-components';
import { FaceCaptureDetailType } from '@regulaforensics/vp-frontend-face-components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    faceCaptureHandler(e: CustomEvent<FaceCaptureDetailType>) {
        console.log(e);
    }
}
