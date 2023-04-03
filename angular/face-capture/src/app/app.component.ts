import { Component } from '@angular/core';
import '@regulaforensics/vp-frontend-face-components';
import { FaceCaptureDetailType } from '@regulaforensics/vp-frontend-face-components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    isOpen: boolean = false;

    faceCaptureHandler(data: CustomEvent<FaceCaptureDetailType>) {
        if (data.detail.action === 'PROCESS_FINISHED') {
            if (data.detail.data?.status === 1 && data.detail.data.response) {
                console.log(data.detail.data.response);
            }
        }

        if (data.detail?.action === 'CLOSE') {
            this.isOpen = false;
        }
    }
}
