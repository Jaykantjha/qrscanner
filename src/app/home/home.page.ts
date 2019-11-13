import { Component } from "@angular/core";
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
 
import { CardsDataProvider } from '../cards-data';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  encodeData: any;
  scannedData: {};
  loadedInfo:Array<any>=[];
  barcodeScannerOptions: BarcodeScannerOptions;
 
  constructor(private barcodeScanner: BarcodeScanner,public _service: CardsDataProvider) {
  //this.loadData();
   // this.encodeData = "https://www.FreakyJolly.com";
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }
 
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
     //   alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
        this.loadData(barcodeData['text']);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
 

  loadData(code){
  	this._service.getLocalData()
    .subscribe(res => {
    	console.log(res);
    	this.loadedInfo=res[code];
    });
  }


}
 