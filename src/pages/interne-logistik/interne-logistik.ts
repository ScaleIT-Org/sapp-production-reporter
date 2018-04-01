
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, VERSION, ViewChild, OnInit } from '@angular/core';

import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';


/**
 * Generated class for the InterneLogistikPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interne-logistik',
  templateUrl: 'interne-logistik.html',
})
export class InterneLogistikPage implements OnInit{
	
	ngVersion = VERSION.full;

    @ViewChild('scanner') scanner: ZXingScannerComponent;

    hasCameras = false;
    qrResultString: string;
    qrResult: Result;
    scannerEnabled = true;

    availableDevices: MediaDeviceInfo[];
    selectedDevice: MediaDeviceInfo;

  constructor(
	public navCtrl: NavController, 
	public navParams: NavParams,
	) {}
	
	ngOnInit(): void {
		console.log('hello');
	}
	
	ionViewDidLoad() {
		this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
            this.hasCameras = true;

            // selects the devices's back camera by default
            // for (const device of devices) {
            //     if (/back|rear|environment/gi.test(device.label)) {
            //         this.scanner.changeDevice(device);
            //         this.selectedDevice = device;
            //         break;
            //     }
            // }
        });

        this.scanner.scanComplete.subscribe((result: Result) => {
            this.qrResult = result;
        });
	}

  


    displayCameras(cameras: MediaDeviceInfo[]) {
        console.log('Devices: ', cameras);
        this.availableDevices = cameras;
    }

    handleQrCodeResult(resultString: string) {
        console.log('Result: ', resultString);
        this.qrResultString = resultString;
    }

    onDeviceSelectChange(selectedValue: string) {
        console.log('Selection changed: ', selectedValue);
        this.selectedDevice = this.scanner.getDeviceById(selectedValue);
    }
  
}