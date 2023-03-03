import { Component } from '@angular/core';
import '@regulaforensics/vp-frontend-face-components';
import { FaceLivenessDetailType } from '@regulaforensics/vp-frontend-face-components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    faceLivenessHandler(e: CustomEvent<FaceLivenessDetailType>) {
        console.log(e);
    }
}
