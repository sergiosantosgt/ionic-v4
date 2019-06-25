import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { log } from 'util';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  isAndroid: boolean;
  address: any = [];

  constructor(
    public platform: Platform,
    public addressService: AddressService,
  ) {
    const isAndroid = platform.is('ios');
    console.log(isAndroid);
  }

  ngOnInit() {
    this.getAddress('12710200');
  }

  getAddress(cep) {
    this.addressService.getAddressFromZipCode(cep)
    .subscribe(res => {
      this.address = res;
      console.log(this.address);
    }, err => {
      console.log(err);
    });
  }

}
