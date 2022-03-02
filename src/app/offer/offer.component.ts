import { Component, OnInit, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CommonDialogComponent } from '../common-dialog/common-dialog.component';
import { parse } from 'tldts';
import { OfferService } from './offer.service';

export interface offer {
  categories: string;
  category_array: {
    Fashion: string[];
    Entertainment: string[];
  };
  code: string;
  description: string;
  end_date: string;
  featured: string;
  image_url: string;
  lmd_id: string;
  last_pdated_on?: number;
  merchant_homepage: string;
  offer: string;
  offer_text: string;
  offer_value: string;
  smartLink: string;
  start_date: string;
  status: string;
  store: string;
  terms_and_conditions: string;
  title: string;
  type: string;
  url: string;
}

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferComponent implements OnInit {


  offersData: any[] = [];
  termsData: string = '';
  page = 1;
  pageSize: number = 32;
  lastUpdatedOn!: number;
  constructor(private http: HttpClient, private modalService: NgbModal, private offersService: OfferService) { }

  ngOnInit() {
    let callTo = '';
    this.offersService.getLastUpdatedOn().subscribe((res: any) => {
      this.lastUpdatedOn = new Date(res.last_updated_on.seconds * 1000).getHours();
      const currentTime = new Date().getHours();
      // console.log(this.lastUpdatedOn, new Date().getHours(), this.lastUpdatedOn < new Date().getHours())
      if(this.lastUpdatedOn < currentTime){
        callTo = 'LMD';
        this.offersService.getOffers().subscribe((data: any) => {
          for ( var v in data){
            if(data[v].id !== 'offers_last_updated_on'){
              this.offersService.deleteOffers(data[v].id);
            }
          }
        });
        this.offersService.updateTimestamp();
      } else {
        callTo = 'FB';
      }
      this.offersService.insertOffers(callTo);
    });
    // this.offersData = this.data.offers.map((offer) => {
    //   return offer['last_updated_on'] = new Date();
    // });
    // for(let i = 0; i < this.data.offers.length; i++){
    //   this.data.offers[i] = Object.assign(this.data.offers[i], {
    //     last_updated_on: new Date()
    //   })
    // }
    // console.log(this.data.offers[0]['last_updated_on']);
    // if(new Date(this.lastUpdatedOn).getHours() < new Date().getHours()){

    // this.http.get('http://feed.linkmydeals.com/getOffers/?API_KEY=157c964d1bd1b7bae4145ff7bec29ddc&format=json').subscribe( (data) => {
    //   this.offersData = this.data.offers;
    //   this.offersData = this.offersData.sort((a, b) => a.lmd_id - b.lmd_id);
    //   const offersRef = collection(this.firestore, 'offers');
    //   console.log(offersRef);
    //   // return addDoc(offersRef, this.data.offers[0]);
    // });
  }

  open(content: string) {
    const termsModalRef = this.modalService.open(CommonDialogComponent);
    termsModalRef.componentInstance.heading = 'Terms and Conditions';
    termsModalRef.componentInstance.data = content;
  }

  getDeal(offer: any){
    let termsDiv = '';
    let imageDiv = '';
    if(offer.type == 'Deal'){
      window.open(offer.url);
    } else if(offer.type == 'Code'){
      if(offer.terms_and_conditions){
        termsDiv = `<hr>
        <div class="codeTerms">${offer.terms_and_conditions}</div>`;
      }
      if(offer.image_url){
        imageDiv = `<div class="mb-3"><img src="${offer.image_url}" alt="${offer.store}" width="100%"></div>`;
      }
      const codeModalRef = this.modalService.open(CommonDialogComponent);
      codeModalRef.componentInstance.data = `<div>
      <div>
        ${imageDiv}
        <div>
          <h4>${offer.title}</h4>
          <p class="m-0">${offer.description}</p>
        </div>
      </div>
      ${termsDiv}
      <hr>
      <div class="d-flex justify-content-center fw-bold codeTitle">User this coupon code at checkout:</div>
      <div class="justify-content-center">
        <div class="my-4 code text-center">${offer.code}</div>
        <div class="text-center text-capitalize"><a href="${offer.url}" target="_blank">Go To ${this.extractDomain(offer.store)} Website</a></div>
      </div>
    </div>`;
    }
  }

  getLogoSrc(storename: string){
    if(this.extractDomain(storename) == 'firstcry'){
      return `../../assets/logos/${this.extractDomain(storename)}.jpeg`;
    }
    return `../../assets/logos/${this.extractDomain(storename)}.jpg`;
  }

  extractDomain(storename: string) {
    return parse(storename).domainWithoutSuffix;
  }
}
