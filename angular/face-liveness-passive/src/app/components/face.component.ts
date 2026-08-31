import { Component, AfterViewInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FaceLivenessType, FaceLivenessWebComponent } from '@regulaforensics/vp-frontend-face-components';

@Component({
    selector: 'app-face',
    templateUrl: './face.component.html',
    styleUrls: ['./face.component.css'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FaceComponent implements AfterViewInit {
    @ViewChild('face', { static: false }) face?: ElementRef<FaceLivenessWebComponent>;

    ngAfterViewInit() {
        if (!this.face) return;

        this.face.nativeElement.settings = {
            // if you want to use face liveness passive with blink, uncomment the line below and comment the line above
            // livenessType: FaceLivenessType.BLINK,
            livenessType: FaceLivenessType.PASSIVE,
        };
    }
}
