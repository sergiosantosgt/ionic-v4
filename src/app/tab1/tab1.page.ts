import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { log } from 'util';
import { AddressService } from '../services/address.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  isAndroid: boolean;
  address: any = [];
  fileTransfer: FileTransferObject = this.transfer.create();

  constructor(
    public platform: Platform,
    public addressService: AddressService,
    private transfer: FileTransfer, 
    private file: File
  ) {
    const isAndroid = platform.is('ios');
    console.log(isAndroid);
  }

  ngOnInit() {
    // this.getAddress('12710200');
  }

  public ionViewWillEnter(): void {
      console.log('hi');
      this.getAddress('12710200');
      this.downloadFile();
  }

  public downloadFile(): void {
    const url = 'https://www.gajotres.net/wp-content/uploads/2015/04/logo_radni.png';
    this.fileTransfer.download(url, this.file.dataDirectory + 'Download/img.png').then((entry) => {
      console.log('download complete: ' + entry.toURL());
      alert('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
    });
  }

  public getAddress(cep): void {
    this.addressService.getAddressFromZipCode(cep)
    .subscribe(res => {
      this.address = res;
      console.log(this.address);
    }, err => {
      console.log(err);
    });
  }

}
