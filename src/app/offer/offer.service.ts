import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private firestore: Firestore, private http: HttpClient) { }

  data = {
    "result": true,
    "offers": [
      {
        "lmd_id": "821692",
        "store": "au.zaful.com",
        "merchant_homepage": "https://au.zaful.com/",
        "offer_text": "Extra 25% Off on Swimwear",
        "offer_value": "25%",
        "title": "Extra 25% Off",
        "description": "Valid on Swimwear (On Min. Purchase of $140)",
        "code": "SWIM22",
        "terms_and_conditions": "",
        "categories": "Fashion,Lingerie,Entertainment,Sports",
        "category_array": {
          "Fashion": [
            "Lingerie"
          ],
          "Entertainment": [
            "Sports"
          ]
        },
        "featured": "No",
        "url": "https://au.zaful.com/swimwear-e_14/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fau.zaful.com%2Fswimwear-e_14%2F",
        "image_url": "https://c.cfjump.com/Avatars/ECED3475-931C-41F1-B3CD-513CD7FDFDCA.png",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-19",
        "end_date": "2022-02-22"
      },
      {
        "lmd_id": "767739",
        "store": "au.zaful.com",
        "merchant_homepage": "https://au.zaful.com/",
        "offer_text": "Avail Flat 18% Discount on all products",
        "offer_value": "18%",
        "title": "Avail Flat 18% discount",
        "description": "Applicable on all products (Products include Tees, Crop Tops, Dresses, Blouse and more)",
        "code": "ZAOFF",
        "terms_and_conditions": "",
        "categories": "Fashion,Womens Apparels",
        "category_array": {
          "Fashion": [
            "Womens Apparels"
          ]
        },
        "featured": "No",
        "url": "https://www.zaful.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.zaful.com%2F",
        "image_url": "https://c.cfjump.com/Avatars/ECED3475-931C-41F1-B3CD-513CD7FDFDCA.png",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-10-16",
        "end_date": "2023-01-01"
      },
      {
        "lmd_id": "821694",
        "store": "au.zaful.com",
        "merchant_homepage": "https://au.zaful.com/",
        "offer_text": "Get $30 Off on all products",
        "offer_value": "Sign-Up Offer",
        "title": "Get $30 Discount",
        "description": "This coupon is valid on all products (On Min. Purchase of $200. For New users only)",
        "code": "ZFIRST",
        "terms_and_conditions": "",
        "categories": "Fashion,Womens Apparels,Lingerie",
        "category_array": {
          "Fashion": [
            "Womens Apparels",
            "Lingerie"
          ]
        },
        "featured": "No",
        "url": "https://au.zaful.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fau.zaful.com%2F",
        "image_url": "https://c.cfjump.com/Avatars/ECED3475-931C-41F1-B3CD-513CD7FDFDCA.png",
        "type": "Code",
        "offer": "Sign-Up",
        "status": "active",
        "start_date": "2022-01-19",
        "end_date": "2024-01-01"
      },
      {
        "lmd_id": "821691",
        "store": "au.zaful.com",
        "merchant_homepage": "https://au.zaful.com/",
        "offer_text": "Get Extra 18% off on Swimwear",
        "offer_value": "18%",
        "title": "Extra 18% off",
        "description": "Valid on Swimwear",
        "code": "SWIM",
        "terms_and_conditions": "",
        "categories": "Fashion,Lingerie,Entertainment,Sports",
        "category_array": {
          "Fashion": [
            "Lingerie"
          ],
          "Entertainment": [
            "Sports"
          ]
        },
        "featured": "No",
        "url": "https://au.zaful.com/promotion/ss2022-swimwear-trends.html",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fau.zaful.com%2Fpromotion%2Fss2022-swimwear-trends.html",
        "image_url": "https://c.cfjump.com/Avatars/ECED3475-931C-41F1-B3CD-513CD7FDFDCA.png",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-19",
        "end_date": "2022-02-22"
      },
      {
        "lmd_id": "821693",
        "store": "au.zaful.com",
        "merchant_homepage": "https://au.zaful.com/",
        "offer_text": "$50 discount on all products",
        "offer_value": "$50",
        "title": "Get $50 Off",
        "description": "This promotional offer is valid on all products (On Min. Purchase of $300)",
        "code": "CLOSET",
        "terms_and_conditions": "",
        "categories": "Fashion,Womens Apparels",
        "category_array": {
          "Fashion": [
            "Womens Apparels"
          ]
        },
        "featured": "No",
        "url": "https://au.zaful.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fau.zaful.com%2F",
        "image_url": "https://c.cfjump.com/Avatars/ECED3475-931C-41F1-B3CD-513CD7FDFDCA.png",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2022-01-19",
        "end_date": "2024-01-01"
      },
      {
        "lmd_id": "821695",
        "store": "au.zaful.com",
        "merchant_homepage": "https://au.zaful.com/",
        "offer_text": "Get 22% Off on all products",
        "offer_value": "22%",
        "title": "22% OFF",
        "description": "This coupon is valid on all products (Products include Tees, Crop Tops, Dresses, Bikinis and more)",
        "code": "AFF22",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels"
          ]
        },
        "featured": "No",
        "url": "https://au.zaful.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fau.zaful.com%2F",
        "image_url": "https://c.cfjump.com/Avatars/ECED3475-931C-41F1-B3CD-513CD7FDFDCA.png",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-19",
        "end_date": "2023-01-01"
      },
      {
        "lmd_id": "821696",
        "store": "au.zaful.com",
        "merchant_homepage": "https://au.zaful.com/",
        "offer_text": "Get 18% OFF on all products",
        "offer_value": "18%",
        "title": "Avail Flat 18% off",
        "description": "This voucher is valid on all products (Products include Tees, Crop Tops, Dresses, Lingerie and more)",
        "code": "FUN18",
        "terms_and_conditions": "",
        "categories": "Fashion,Womens Apparels,Lingerie",
        "category_array": {
          "Fashion": [
            "Womens Apparels",
            "Lingerie"
          ]
        },
        "featured": "No",
        "url": "https://au.zaful.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fau.zaful.com%2F",
        "image_url": "https://c.cfjump.com/Avatars/ECED3475-931C-41F1-B3CD-513CD7FDFDCA.png",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-19",
        "end_date": "2023-01-02"
      },
      {
        "lmd_id": "821698",
        "store": "au.zaful.com",
        "merchant_homepage": "https://au.zaful.com/",
        "offer_text": "Avail 18% Discount on all products",
        "offer_value": "18%",
        "title": "Avail 18% off",
        "description": "This voucher is applicable on all products (On Min. Purchase of $20)",
        "code": "ZFLIST",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ]
        },
        "featured": "No",
        "url": "https://au.zaful.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fau.zaful.com%2F",
        "image_url": "https://c.cfjump.com/Avatars/ECED3475-931C-41F1-B3CD-513CD7FDFDCA.png",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-19",
        "end_date": "2024-01-01"
      },
      {
        "lmd_id": "821697",
        "store": "au.zaful.com",
        "merchant_homepage": "https://au.zaful.com/",
        "offer_text": "Get Flat 18% Discount on all products",
        "offer_value": "18%",
        "title": "Get 18% discount",
        "description": "This coupon is applicable on all products (Products include Tees, Crop Tops, Dresses, Lingerie and more)",
        "code": "18FALL",
        "terms_and_conditions": "",
        "categories": "Fashion,Womens Apparels,Lingerie",
        "category_array": {
          "Fashion": [
            "Womens Apparels",
            "Lingerie"
          ]
        },
        "featured": "No",
        "url": "https://au.zaful.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fau.zaful.com%2F",
        "image_url": "https://c.cfjump.com/Avatars/ECED3475-931C-41F1-B3CD-513CD7FDFDCA.png",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-19",
        "end_date": "2023-01-02"
      },
      {
        "lmd_id": "808269",
        "store": "au.zaful.com",
        "merchant_homepage": "https://au.zaful.com/",
        "offer_text": "Avail Additional 15% off on all products",
        "offer_value": "Sign-Up Offer",
        "title": "Extra 15% Off",
        "description": "This voucher is applicable on all products (Only on new registrations)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Footwear,Handbags and Wallets,Jewellery,Travel,Travel Accessories",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Footwear",
            "Handbags and Wallets",
            "Jewellery"
          ],
          "Travel": [
            "Travel Accessories"
          ]
        },
        "featured": "No",
        "url": "https://au.zaful.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fau.zaful.com%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Sign-Up",
        "status": "active",
        "start_date": "2020-12-31",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "793980",
        "store": "bannerbuzz.co.uk",
        "merchant_homepage": "https://www.bannerbuzz.co.uk/",
        "offer_text": "Spike Base @ just ????9.59",
        "offer_value": "Hot Offer",
        "title": "Spike Base",
        "description": "Get it @ ????9.59 only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.bannerbuzz.co.uk/spike-base/p",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.bannerbuzz.co.uk%2Fspike-base%2Fp",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2020-10-06",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "808306",
        "store": "bannerbuzz.co.uk",
        "merchant_homepage": "https://www.bannerbuzz.co.uk/",
        "offer_text": "Free Express Shipping on all products",
        "offer_value": "Free",
        "title": "Free Express Shipping",
        "description": "This coupon is applicable on all products (On Min. Purchase of ????99)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.bannerbuzz.co.uk/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.bannerbuzz.co.uk%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2021-04-22",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "787797",
        "store": "bannerbuzz.co.uk",
        "merchant_homepage": "https://www.bannerbuzz.co.uk/",
        "offer_text": "Custom Clothing starting at just ????9.06",
        "offer_value": "Best Offer",
        "title": "Custom Clothing",
        "description": "Starting from ????9.06 (Products include Shirts, T-shirts and Face Mask)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.bannerbuzz.co.uk/clothing",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.bannerbuzz.co.uk%2Fclothing",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-06-30",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "801430",
        "store": "bannerbuzz.co.uk",
        "merchant_homepage": "https://www.bannerbuzz.co.uk/",
        "offer_text": "Custom Hand Waving Flags @ just ????1.91",
        "offer_value": "Great Value",
        "title": "Custom Hand Waving Flags",
        "description": "Get it just at ????1.91",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.bannerbuzz.co.uk/custom-hand-waving-flags/p",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.bannerbuzz.co.uk%2Fcustom-hand-waving-flags%2Fp",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-04-22",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "813887",
        "store": "bannerbuzz.co.uk",
        "merchant_homepage": "https://www.bannerbuzz.co.uk/",
        "offer_text": "Get 20% Discount on all products",
        "offer_value": "20%",
        "title": "Flat 20% OFF",
        "description": "This discount is applicable on all products",
        "code": "SAVINGS",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.bannerbuzz.co.uk/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.bannerbuzz.co.uk%2F",
        "image_url": "https://static.skimlinks.com/images/merchant_logos/advertiser_logo_5886.gif",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-05",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "815179",
        "store": "bannerbuzz.co.uk",
        "merchant_homepage": "https://www.bannerbuzz.co.uk/",
        "offer_text": "Get 10% Discount on all products",
        "offer_value": "10%",
        "title": "10% Discount",
        "description": "Valid on all products (On Min. Purchase of &#163;350)",
        "code": "BBAOV350",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.bannerbuzz.co.uk/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.bannerbuzz.co.uk%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-07",
        "end_date": "2023-01-01"
      },
      {
        "lmd_id": "714178",
        "store": "bannerbuzz.co.uk",
        "merchant_homepage": "https://www.bannerbuzz.co.uk/",
        "offer_text": "Custom Vinyl Banners @ just ????8.39",
        "offer_value": "Great Value",
        "title": "Custom Vinyl Banners",
        "description": "Get it @ just ????8.39",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.bannerbuzz.co.uk/custom-vinyl-banners/p?instbox=1625037826460",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.bannerbuzz.co.uk%2Fcustom-vinyl-banners%2Fp%3Finstbox%3D1625037826460",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-06-30",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "815181",
        "store": "bannerbuzz.co.uk",
        "merchant_homepage": "https://www.bannerbuzz.co.uk/",
        "offer_text": "Get Flat 20% Off on all products",
        "offer_value": "20%",
        "title": "20% Discount",
        "description": "This coupon is applicable on all products (On Min. Purchase of &#163;700)",
        "code": "BBAOV700",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.bannerbuzz.co.uk/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.bannerbuzz.co.uk%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-07",
        "end_date": "2023-01-01"
      },
      {
        "lmd_id": "820524",
        "store": "bannerbuzz.co.uk",
        "merchant_homepage": "https://www.bannerbuzz.co.uk/",
        "offer_text": "Get Flat 20% Discount on First order",
        "offer_value": "Sign-Up Offer",
        "title": "Get Flat 20% OFF",
        "description": "This coupon is applicable on First order (For new customers only)",
        "code": "NEWUSER",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.bannerbuzz.co.uk/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.bannerbuzz.co.uk%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Sign-Up",
        "status": "active",
        "start_date": "2021-09-15",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "815180",
        "store": "bannerbuzz.co.uk",
        "merchant_homepage": "https://www.bannerbuzz.co.uk/",
        "offer_text": "Avail 15% OFF on all products",
        "offer_value": "15%",
        "title": "Get 15% off",
        "description": "Applicable on all products (On Min. Purchase of &#163;500)",
        "code": "BBAOV500",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.bannerbuzz.co.uk/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.bannerbuzz.co.uk%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-07",
        "end_date": "2023-01-01"
      },
      {
        "lmd_id": "714201",
        "store": "beatoapp.com",
        "merchant_homepage": "https://www.beatoapp.com/",
        "offer_text": "Roasted Snacks Combo @ just &#8377;849",
        "offer_value": "Super Offer",
        "title": "Roasted Snacks Combo",
        "description": "Get it at just &#8377;849",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Nutrition",
        "category_array": {
          "Health and Beauty": [
            "Nutrition"
          ]
        },
        "featured": "No",
        "url": "https://www.beatoapp.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.beatoapp.com%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-06-30",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "684909",
        "store": "beatoapp.com",
        "merchant_homepage": "https://www.beatoapp.com/",
        "offer_text": "Get Upto 60% Off on Monitoring Devices",
        "offer_value": "60%",
        "title": "Upto 60% Off",
        "description": "This voucher is valid on Monitoring Devices (Products include Thermometer, Steam Inhaler, Vaporiser, Blood Pressure Monitors and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Fitness",
        "category_array": {
          "Health and Beauty": [
            "Fitness"
          ]
        },
        "featured": "No",
        "url": "https://www.beatoapp.com/c/monitoring-devices?orderby=price_low",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.beatoapp.com%2Fc%2Fmonitoring-devices%3Forderby%3Dprice_low",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-01-29",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "778163",
        "store": "beatoapp.com",
        "merchant_homepage": "https://www.beatoapp.com/",
        "offer_text": "Ayurvedic Tablets and Capsules for Diabetes starting at just &#8377;80",
        "offer_value": "Best Offer",
        "title": "Ayurvedic Tablets and Capsules for Diabetes",
        "description": "Starting from &#8377;80 only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Nutrition",
        "category_array": {
          "Health and Beauty": [
            "Nutrition"
          ]
        },
        "featured": "No",
        "url": "https://www.beatoapp.com/c/ayurveda-health",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.beatoapp.com%2Fc%2Fayurveda-health",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2020-12-17",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "768033",
        "store": "beatoapp.com",
        "merchant_homepage": "https://www.beatoapp.com/",
        "offer_text": "Get Up To 50% off on Booking Lab Test",
        "offer_value": "50%",
        "title": "Avail Upto 50% Off",
        "description": "This offer is valid on Booking Lab Test",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Fitness",
        "category_array": {
          "Health and Beauty": [
            "Fitness"
          ]
        },
        "featured": "No",
        "url": "https://www.beatoapp.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.beatoapp.com%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-06-30",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "796424",
        "store": "beatoapp.com",
        "merchant_homepage": "https://www.beatoapp.com/",
        "offer_text": "Himalaya Anti Dandruff Conditioner @ just &#8377;90",
        "offer_value": "Best Offer",
        "title": "Himalaya Anti Dandruff Conditioner",
        "description": "Get it just @ &#8377;90 (100 ml)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ]
        },
        "featured": "No",
        "url": "https://www.beatoapp.com/p/personal-care/himalaya-anti-dandruff-conditioner-100ml",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.beatoapp.com%2Fp%2Fpersonal-care%2Fhimalaya-anti-dandruff-conditioner-100ml",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-01-29",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "810144",
        "store": "beatoapp.com",
        "merchant_homepage": "https://www.beatoapp.com/",
        "offer_text": "Upto 20% OFF on Medicine Orders",
        "offer_value": "20%",
        "title": "Get Upto 20% Off",
        "description": "This voucher is applicable on Medicine Orders (Also get free delivery)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Nutrition",
        "category_array": {
          "Health and Beauty": [
            "Nutrition"
          ]
        },
        "featured": "No",
        "url": "https://www.beatoapp.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.beatoapp.com%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2020-12-17",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "810459",
        "store": "beatoapp.com",
        "merchant_homepage": "https://www.beatoapp.com/",
        "offer_text": "Karela Jamun Juice @ just &#8377;425",
        "offer_value": "Save Big",
        "title": "Karela Jamun Juice",
        "description": "Get it at &#8377;425 only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Nutrition",
        "category_array": {
          "Health and Beauty": [
            "Nutrition"
          ]
        },
        "featured": "No",
        "url": "https://www.beatoapp.com/p/detox-drinks/karela-jamun-juice-pack-of-2",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.beatoapp.com%2Fp%2Fdetox-drinks%2Fkarela-jamun-juice-pack-of-2",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-06-30",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "815548",
        "store": "beatoapp.com",
        "merchant_homepage": "https://www.beatoapp.com/",
        "offer_text": "Low Sugar Products starting at just &#8377;30",
        "offer_value": "Hot Offer",
        "title": "Low Sugar Products",
        "description": "Starting at just &#8377;30 (Products include Chips, Noodles, Oats and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Food and Beverages,Fast Food,Grocery",
        "category_array": {
          "Food and Beverages": [
            "Fast Food"
          ],
          "Grocery": []
        },
        "featured": "No",
        "url": "https://www.beatoapp.com/c/guilt-free-food",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.beatoapp.com%2Fc%2Fguilt-free-food",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2020-12-17",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "816319",
        "store": "bedworks.com.au",
        "merchant_homepage": "https://www.bedworks.com.au/",
        "offer_text": "Get Upto 40% Discount on Danish Designed Sofa Beds",
        "offer_value": "40%",
        "title": "Upto 40% discount",
        "description": "This voucher is valid on Danish Designed Sofa Beds",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Home and Living,Furniture and Decor",
        "category_array": {
          "Home and Living": [
            "Furniture and Decor"
          ]
        },
        "featured": "No",
        "url": "https://www.bedworks.com.au/437-sofa-beds",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.bedworks.com.au%2F437-sofa-beds",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-06-30",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "805094",
        "store": "bedworks.com.au",
        "merchant_homepage": "https://www.bedworks.com.au/",
        "offer_text": "Avail 10% discount on Electric Adjustable Bases",
        "offer_value": "10%",
        "title": "Flat 10% off",
        "description": "This voucher is valid on Electric Adjustable Bases",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Home and Living,Furniture and Decor",
        "category_array": {
          "Home and Living": [
            "Furniture and Decor"
          ]
        },
        "featured": "No",
        "url": "https://www.bedworks.com.au/286-electric-adjustable-bases",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.bedworks.com.au%2F286-electric-adjustable-bases",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2020-07-22",
        "end_date": "2022-02-19"
      },
      {
        "lmd_id": "702440",
        "store": "bedworks.com.au",
        "merchant_homepage": "https://www.bedworks.com.au/",
        "offer_text": "Dublexo Frej King Single Sofa Bed Innovation Living @ just $2400",
        "offer_value": "Save Big",
        "title": "Dublexo Frej King Single Sofa Bed Innovation Living",
        "description": "Get it for $2400 only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Home and Living,Furniture and Decor",
        "category_array": {
          "Home and Living": [
            "Furniture and Decor"
          ]
        },
        "featured": "No",
        "url": "https://www.bedworks.com.au/437-sofa-beds",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.bedworks.com.au%2F437-sofa-beds",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2020-07-29",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "787812",
        "store": "bedworks.com.au",
        "merchant_homepage": "https://www.bedworks.com.au/",
        "offer_text": "Dehumidifiers and Air Purifiers starting at just $579",
        "offer_value": "Save Big",
        "title": "Dehumidifiers and Air Purifiers",
        "description": "$579 onwards",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Electronics and Gadgets,Home Appliances",
        "category_array": {
          "Electronics and Gadgets": [
            "Home Appliances"
          ]
        },
        "featured": "No",
        "url": "https://www.bedworks.com.au/507-dehumidifiers-air-purifiers?orderby=price&orderway=asc",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.bedworks.com.au%2F507-dehumidifiers-air-purifiers%3Forderby%3Dprice%26orderway%3Dasc",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-03-16",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "808272",
        "store": "bedworks.com.au",
        "merchant_homepage": "https://www.bedworks.com.au/",
        "offer_text": "10% Off on Australian Custom Timber Beds",
        "offer_value": "10%",
        "title": "Get 10% Discount",
        "description": "Applicable on Australian Custom Timber Beds",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Home and Living,Furniture and Decor",
        "category_array": {
          "Home and Living": [
            "Furniture and Decor"
          ]
        },
        "featured": "No",
        "url": "https://www.bedworks.com.au/413-custom-made-timber-beds",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.bedworks.com.au%2F413-custom-made-timber-beds",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-06-30",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "760845",
        "store": "bedworks.com.au",
        "merchant_homepage": "https://www.bedworks.com.au/",
        "offer_text": "Paddington Custom Padded Bed Head starting at just $1614",
        "offer_value": "Save Big",
        "title": "Paddington Custom Padded Bed Head",
        "description": "Starts for just $1614",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Home and Living,Furniture and Decor",
        "category_array": {
          "Home and Living": [
            "Furniture and Decor"
          ]
        },
        "featured": "No",
        "url": "https://www.bedworks.com.au/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.bedworks.com.au%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2020-07-29",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "715710",
        "store": "bedworks.com.au",
        "merchant_homepage": "https://www.bedworks.com.au/",
        "offer_text": "Avail Up to 20% OFF on Sofa Beds",
        "offer_value": "20%",
        "title": "Get Up To 20% discount",
        "description": "Valid on Sofa Beds",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Home and Living,Furniture and Decor",
        "category_array": {
          "Home and Living": [
            "Furniture and Decor"
          ]
        },
        "featured": "No",
        "url": "https://www.bedworks.com.au/442-sofa-bed-sale-next-day-delivery",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.bedworks.com.au%2F442-sofa-bed-sale-next-day-delivery",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2020-07-22",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "805139",
        "store": "box8.in",
        "merchant_homepage": "https://box8.in/",
        "offer_text": "Dum Biryani starting at just &#8377;198",
        "offer_value": "Best Offer",
        "title": "Dum Biryani",
        "description": "Starting for &#8377;198",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Food and Beverages,Fast Food,Restaurants",
        "category_array": {
          "Food and Beverages": [
            "Fast Food",
            "Restaurants"
          ]
        },
        "featured": "No",
        "url": "https://box8.in/menu",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fbox8.in%2Fmenu",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2020-04-18",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "709793",
        "store": "box8.in",
        "merchant_homepage": "https://box8.in/",
        "offer_text": "Avail Flat &#8377;200 OFF on Food order",
        "offer_value": "Sign-Up Offer",
        "title": "Get Flat &#8377;200 off",
        "description": "This discount is valid on Food order (For New users only. Only on Mobile App)",
        "code": "MEAL200",
        "terms_and_conditions": "",
        "categories": "Food and Beverages,Fast Food",
        "category_array": {
          "Food and Beverages": [
            "Fast Food"
          ]
        },
        "featured": "No",
        "url": "https://box8.in/offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fbox8.in%2Foffers",
        "image_url": "",
        "type": "Code",
        "offer": "Sign-Up",
        "status": "active",
        "start_date": "2021-06-22",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "768108",
        "store": "box8.in",
        "merchant_homepage": "https://box8.in/",
        "offer_text": "Get &#8377;150 Off on most products",
        "offer_value": "Sign-Up Offer",
        "title": "&#8377;150 Discount",
        "description": "This voucher is applicable on most products (Only for New users)",
        "code": "NEWDESI",
        "terms_and_conditions": "",
        "categories": "Food and Beverages,Fast Food,Restaurants",
        "category_array": {
          "Food and Beverages": [
            "Fast Food",
            "Restaurants"
          ]
        },
        "featured": "No",
        "url": "https://box8.in/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fbox8.in%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Sign-Up",
        "status": "active",
        "start_date": "2021-04-21",
        "end_date": "2022-02-18"
      },
      {
        "lmd_id": "800083",
        "store": "box8.in",
        "merchant_homepage": "https://box8.in/",
        "offer_text": "All in one meal box starting at just &#8377;198",
        "offer_value": "Great Value",
        "title": "All in one meal box",
        "description": "Starts from just &#8377;198",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Food and Beverages,Fast Food",
        "category_array": {
          "Food and Beverages": [
            "Fast Food"
          ]
        },
        "featured": "No",
        "url": "https://box8.in/menu",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fbox8.in%2Fmenu",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-04-16",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "808283",
        "store": "box8.in",
        "merchant_homepage": "https://box8.in/",
        "offer_text": "Dhaba-Style Chicken Box @ just &#8377;238",
        "offer_value": "Great Value",
        "title": "Dhaba-Style Chicken Box",
        "description": "Get it @ &#8377;238 only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Food and Beverages,Fast Food",
        "category_array": {
          "Food and Beverages": [
            "Fast Food"
          ]
        },
        "featured": "No",
        "url": "https://box8.in/menu",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fbox8.in%2Fmenu",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-04-16",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "817352",
        "store": "box8.in",
        "merchant_homepage": "https://box8.in/",
        "offer_text": "Get Flat 50% Off on Food Orders",
        "offer_value": "Sign-Up Offer",
        "title": "Get Flat 50% discount",
        "description": "This offer is valid on Food Orders (Only for New Customers)",
        "code": "SAVE",
        "terms_and_conditions": "",
        "categories": "Food and Beverages,Fast Food",
        "category_array": {
          "Food and Beverages": [
            "Fast Food"
          ]
        },
        "featured": "No",
        "url": "https://box8.in/cart",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fbox8.in%2Fcart",
        "image_url": "",
        "type": "Code",
        "offer": "Sign-Up",
        "status": "active",
        "start_date": "2022-01-11",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "817353",
        "store": "box8.in",
        "merchant_homepage": "https://box8.in/",
        "offer_text": "Free Chocolava Cake on Food Orders",
        "offer_value": "Free",
        "title": "Free Chocolava Cake",
        "description": "This promotional offer is valid on Food Orders",
        "code": "FREETREAT",
        "terms_and_conditions": "",
        "categories": "Food and Beverages,Fast Food",
        "category_array": {
          "Food and Beverages": [
            "Fast Food"
          ]
        },
        "featured": "No",
        "url": "https://box8.in/cart",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fbox8.in%2Fcart",
        "image_url": "",
        "type": "Code",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2022-01-11",
        "end_date": "2022-02-18"
      },
      {
        "lmd_id": "817348",
        "store": "box8.in",
        "merchant_homepage": "https://box8.in/",
        "offer_text": "Free Delivery on Food Orders",
        "offer_value": "Free",
        "title": "Free Delivery",
        "description": "This coupon is valid on Food Orders",
        "code": "FREEDEL",
        "terms_and_conditions": "",
        "categories": "Food and Beverages,Fast Food",
        "category_array": {
          "Food and Beverages": [
            "Fast Food"
          ]
        },
        "featured": "No",
        "url": "https://box8.in/cart",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fbox8.in%2Fcart",
        "image_url": "",
        "type": "Code",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2022-01-11",
        "end_date": "2022-02-19"
      },
      {
        "lmd_id": "808282",
        "store": "box8.in",
        "merchant_homepage": "https://box8.in/",
        "offer_text": "Curries, Paratha or Rice and Salad starting at just &#8377;148",
        "offer_value": "Super Offer",
        "title": "Curries, Paratha or Rice and Salad",
        "description": "Starting @ &#8377;148 only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Food and Beverages,Fast Food",
        "category_array": {
          "Food and Beverages": [
            "Fast Food"
          ]
        },
        "featured": "No",
        "url": "https://box8.in/menu",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fbox8.in%2Fmenu",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-06-21",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "684223",
        "store": "box8.in",
        "merchant_homepage": "https://box8.in/",
        "offer_text": "Sides and Drinks starting at just &#8377;10",
        "offer_value": "Hot Offer",
        "title": "Sides and Drinks",
        "description": "Starts for &#8377;10 (Products include Coke, Mineral Water, Raita and more) only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Food and Beverages,Fast Food,Restaurants",
        "category_array": {
          "Food and Beverages": [
            "Fast Food",
            "Restaurants"
          ]
        },
        "featured": "No",
        "url": "https://box8.in/menu",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fbox8.in%2Fmenu",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2020-04-18",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "760856",
        "store": "clearly.com.au",
        "merchant_homepage": "https://www.clearly.com.au",
        "offer_text": "Brooks Brothers Glasses starting at just $144",
        "offer_value": "Super Offer",
        "title": "Brooks Brothers Glasses",
        "description": "Starts from $144 only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Eyewear",
        "category_array": {
          "Fashion": [
            "Eyewear"
          ]
        },
        "featured": "No",
        "url": "https://www.clearly.com.au/glasses/brooks-brothers?usedForFavourites=&_resourcePath=%2Fcontent%2Fclearly%2Fen%2Fglasses%2Fbrooks-brothers%2Fjcr%3Acontent%2Fpar%2Fgrid&countryPath=%2Fcontent%2Fclearly%2Fclearly_com_au%2Fen_AU&query=&initialLoad=24&sort=price&priceFrom=0&priceTo=500",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.clearly.com.au%2Fglasses%2Fbrooks-brothers%3FusedForFavourites%3D%26_resourcePath%3D%252Fcontent%252Fclearly%252Fen%252Fglasses%252Fbrooks-brothers%252Fjcr%253Acontent%252Fpar%252Fgrid%26countryPath%3D%252Fcontent%252Fclearly%252Fclearly_com_au%252Fen_AU%26query%3D%26initialLoad%3D24%26sort%3Dprice%26priceFrom%3D0%26priceTo%3D500",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-09-06",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "816345",
        "store": "clearly.com.au",
        "merchant_homepage": "https://www.clearly.com.au",
        "offer_text": "Michael Kors Glasses starting at just $135",
        "offer_value": "Hot Offer",
        "title": "Michael Kors Glasses",
        "description": "Starts for just $135",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Eyewear",
        "category_array": {
          "Fashion": [
            "Eyewear"
          ]
        },
        "featured": "No",
        "url": "https://www.clearly.com.au/glasses/michael-kors?usedForFavourites=&_resourcePath=%2Fcontent%2Fclearly%2Fclearly_com_au%2Fen_AU%2Fglasses%2Fmichael-kors%2Fjcr%3Acontent%2Fpar%2Fgrid&countryPath=%2Fcontent%2Fclearly%2Fclearly_com_au%2Fen_AU&query=&initialLoad=24&sort=price&priceFrom=0&priceTo=500",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.clearly.com.au%2Fglasses%2Fmichael-kors%3FusedForFavourites%3D%26_resourcePath%3D%252Fcontent%252Fclearly%252Fclearly_com_au%252Fen_AU%252Fglasses%252Fmichael-kors%252Fjcr%253Acontent%252Fpar%252Fgrid%26countryPath%3D%252Fcontent%252Fclearly%252Fclearly_com_au%252Fen_AU%26query%3D%26initialLoad%3D24%26sort%3Dprice%26priceFrom%3D0%26priceTo%3D500",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-09-06",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "745630",
        "store": "clearly.com.au",
        "merchant_homepage": "https://www.clearly.com.au",
        "offer_text": "Oakley Sunglasses starting at just $132",
        "offer_value": "Great Value",
        "title": "Oakley Sunglasses",
        "description": "Starting @ $132 only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Eyewear",
        "category_array": {
          "Fashion": [
            "Eyewear"
          ]
        },
        "featured": "No",
        "url": "https://www.clearly.com.au/sunglasses/oakley?",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.clearly.com.au%2Fsunglasses%2Foakley%3F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-09-01",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "747976",
        "store": "clearly.com.au",
        "merchant_homepage": "https://www.clearly.com.au",
        "offer_text": "Free Returns on all products",
        "offer_value": "Free",
        "title": "Free Returns",
        "description": "This coupon is valid on all products (Select from brands like Armani Exchange, Michael Kors, Oakley, Vogue and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Eyewear",
        "category_array": {
          "Fashion": [
            "Eyewear"
          ]
        },
        "featured": "No",
        "url": "https://www.clearly.com.au/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.clearly.com.au%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2021-09-06",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "793978",
        "store": "clearly.com.au",
        "merchant_homepage": "https://www.clearly.com.au",
        "offer_text": "Glasses starting at just $6",
        "offer_value": "Great Value",
        "title": "Glasses Offer",
        "description": "Starts for just $6",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Eyewear",
        "category_array": {
          "Fashion": [
            "Eyewear"
          ]
        },
        "featured": "No",
        "url": "https://www.clearly.com.au/glasses?sort=price",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.clearly.com.au%2Fglasses%3Fsort%3Dprice",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-08-25",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "788696",
        "store": "coxandcox.co.uk",
        "merchant_homepage": "https://www.coxandcox.co.uk/",
        "offer_text": "Mirrors starting at just ????25",
        "offer_value": "Great Value",
        "title": "Mirrors Offer",
        "description": "Starting for ????25 (Products include Wall Mirrors, Round Mirrors, Table Mirrors and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Home and Living,Furniture and Decor",
        "category_array": {
          "Home and Living": [
            "Furniture and Decor"
          ]
        },
        "featured": "No",
        "url": "https://www.coxandcox.co.uk/mirrors/?product_list_order=price&product_list_dir=asc",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.coxandcox.co.uk%2Fmirrors%2F%3Fproduct_list_order%3Dprice%26product_list_dir%3Dasc",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-11-23",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "825731",
        "store": "coxandcox.co.uk",
        "merchant_homepage": "https://www.coxandcox.co.uk/",
        "offer_text": "Weathered Oak Stool starting at just &#163;250.00",
        "offer_value": "Super Offer",
        "title": "Weathered Oak Stool",
        "description": "Starting for &#163;250.00",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Home and Living,Furniture and Decor",
        "category_array": {
          "Home and Living": [
            "Furniture and Decor"
          ]
        },
        "featured": "No",
        "url": "https://www.coxandcox.co.uk/inspiration/collections/weathered-oak-stools/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.coxandcox.co.uk%2Finspiration%2Fcollections%2Fweathered-oak-stools%2F",
        "image_url": "https://www.coxandcox.co.uk/media/wysiwyg/HomePageSliders/2022-01/ss22-wyo-bg-desktop-1.jpg",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-28",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "826012",
        "store": "coxandcox.co.uk",
        "merchant_homepage": "https://www.coxandcox.co.uk/",
        "offer_text": "Get Flat 20% off on all products",
        "offer_value": "20%",
        "title": "Get 20% discount",
        "description": "This coupon is valid on all products (Products include Tables, Mirrors, Lighting and more)",
        "code": "2PB20",
        "terms_and_conditions": "",
        "categories": "Home and Living,Furniture and Decor",
        "category_array": {
          "Home and Living": [
            "Furniture and Decor"
          ]
        },
        "featured": "No",
        "url": "https://www.coxandcox.co.uk/?S2IOD=355598097&S2REF=S20000772147&om_send=78e478e1367749f792a03737aa918b35",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.coxandcox.co.uk%2F%3FS2IOD%3D355598097%26S2REF%3DS20000772147%26om_send%3D78e478e1367749f792a03737aa918b35",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-28",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "824972",
        "store": "coxandcox.co.uk",
        "merchant_homepage": "https://www.coxandcox.co.uk/",
        "offer_text": "New Tables starting at just &#163;250",
        "offer_value": "Best Offer",
        "title": "New Tables",
        "description": "Starting for &#163;250 only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Home and Living,Furniture and Decor",
        "category_array": {
          "Home and Living": [
            "Furniture and Decor"
          ]
        },
        "featured": "No",
        "url": "https://www.coxandcox.co.uk/new/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.coxandcox.co.uk%2Fnew%2F",
        "image_url": "https://www.coxandcox.co.uk/media/wysiwyg/HomePageSliders/2022-01/20220124-new-slider-template-Slider-2-desktop.jpg",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "551268",
        "store": "coxandcox.co.uk",
        "merchant_homepage": "https://www.coxandcox.co.uk/",
        "offer_text": "????20 Discount on Refer-a-Friend Programme",
        "offer_value": "??20",
        "title": "????20 OFF",
        "description": "This coupon is valid on Refer-a-Friend Programme",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Home and Living,Furniture and Decor",
        "category_array": {
          "Home and Living": [
            "Furniture and Decor"
          ]
        },
        "featured": "No",
        "url": "https://www.coxandcox.co.uk/refer-a-friend?situation=HP_footer",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.coxandcox.co.uk%2Frefer-a-friend%3Fsituation%3DHP_footer",
        "image_url": "https://www.coxandcox.co.uk/media/wysiwyg/HomePageBlocks/2019-05/mention-me-banner-6.png",
        "type": "Deal",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2020-06-11",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "771909",
        "store": "coxandcox.co.uk",
        "merchant_homepage": "https://www.coxandcox.co.uk/",
        "offer_text": "Get 20% off on all products",
        "offer_value": "20%",
        "title": "20% discount",
        "description": "This promotional offer is valid on all products (Products include Furniture, Decor, Lights and more)",
        "code": "ADM20",
        "terms_and_conditions": "",
        "categories": "Home and Living,Furniture and Decor,Housekeeping",
        "category_array": {
          "Home and Living": [
            "Furniture and Decor",
            "Housekeeping"
          ]
        },
        "featured": "No",
        "url": "https://www.coxandcox.co.uk/?awc=4746_1624648581_93efdf31a4c8c816890fe7193049adbb",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=admitad&url=https%3A%2F%2Fwww.coxandcox.co.uk%2F%3Fawc%3D4746_1624648581_93efdf31a4c8c816890fe7193049adbb",
        "image_url": "http://cdn.admitad.com/campaign/images/2021/4/6/24292-c2dae346d72daaa7.svg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-10-25",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "823967",
        "store": "coxandcox.co.uk",
        "merchant_homepage": "https://www.coxandcox.co.uk/",
        "offer_text": "NEW Weathered Oak Counter Stool @ just &#163;250",
        "offer_value": "Hot Offer",
        "title": "NEW Weathered Oak Counter Stool",
        "description": "Get it for just &#163;250",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Home and Living,Furniture and Decor",
        "category_array": {
          "Home and Living": [
            "Furniture and Decor"
          ]
        },
        "featured": "No",
        "url": "https://www.coxandcox.co.uk/weathered-oak-counter-stool-greywash/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.coxandcox.co.uk%2Fweathered-oak-counter-stool-greywash%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-25",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "812379",
        "store": "dhiindia.com",
        "merchant_homepage": "https://www.dhiindia.com/",
        "offer_text": "DHI Laser Cap With 272 Medical Grade Lasers @ just &#8377;55999",
        "offer_value": "Great Value",
        "title": "DHI Laser Cap With 272 Medical Grade Lasers",
        "description": "Get it just for &#8377;55999",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ]
        },
        "featured": "No",
        "url": "https://shop.dhiindia.com/products/dhi-laser-cap-with-272-lasers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fshop.dhiindia.com%2Fproducts%2Fdhi-laser-cap-with-272-lasers",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-01",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "813628",
        "store": "dhiindia.com",
        "merchant_homepage": "https://www.dhiindia.com/",
        "offer_text": "Hair Serum @ just &#8377;390",
        "offer_value": "Great Value",
        "title": "Hair Serum",
        "description": "Get it just at &#8377;390",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ]
        },
        "featured": "No",
        "url": "https://shop.dhiindia.com/collections/lotions-serums/products/hair-serum-with-natural-peptides-essential-vitamins-oils-to-promote-hair-growth",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fshop.dhiindia.com%2Fcollections%2Flotions-serums%2Fproducts%2Fhair-serum-with-natural-peptides-essential-vitamins-oils-to-promote-hair-growth",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-01",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "812381",
        "store": "dhiindia.com",
        "merchant_homepage": "https://www.dhiindia.com/",
        "offer_text": "Hair Conditioner @ just &#8377;360",
        "offer_value": "Hot Offer",
        "title": "Hair Conditioner",
        "description": "Get it just for &#8377;360",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ]
        },
        "featured": "No",
        "url": "https://shop.dhiindia.com/collections/shampoos/products/hair-conditioner",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fshop.dhiindia.com%2Fcollections%2Fshampoos%2Fproducts%2Fhair-conditioner",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-01",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "812384",
        "store": "dhiindia.com",
        "merchant_homepage": "https://www.dhiindia.com/",
        "offer_text": "Avail 50% Discount on DHI Hair Transplant Consultation Fees",
        "offer_value": "50%",
        "title": "Avail Flat 50% discount",
        "description": "Valid on DHI Hair Transplant Consultation Fees",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ]
        },
        "featured": "No",
        "url": "https://www.dhiindia.com/book-an-appointment/?utm_source=affiliate&utm_medium=CPC&utm_campaign=7CouponsHT&utm_id=7CouponsConsultation",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.dhiindia.com%2Fbook-an-appointment%2F%3Futm_source%3Daffiliate%26utm_medium%3DCPC%26utm_campaign%3D7CouponsHT%26utm_id%3D7CouponsConsultation",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-08-23",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "822857",
        "store": "dhiindia.com",
        "merchant_homepage": "https://www.dhiindia.com/",
        "offer_text": "Get Up To 30% discount on Hair Supplements",
        "offer_value": "30%",
        "title": "Up to 30% OFF",
        "description": "This discount is valid on Hair Supplements",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ]
        },
        "featured": "No",
        "url": "https://shop.dhiindia.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fshop.dhiindia.com%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-01",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "725814",
        "store": "dresslily.com",
        "merchant_homepage": "https://www.dresslily.com/",
        "offer_text": "Free shipping on all products",
        "offer_value": "Free",
        "title": "Free shipping",
        "description": "This discount is applicable on all products (On Min. Purchase of $59)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Watches,Lingerie,Eyewear,Footwear,Handbags and Wallets,Jewellery,Fashion Accessories,Health and Beauty,Makeup Products,Home and Living,Furniture and Decor",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Watches",
            "Lingerie",
            "Eyewear",
            "Footwear",
            "Handbags and Wallets",
            "Jewellery",
            "Fashion Accessories"
          ],
          "Health and Beauty": [
            "Makeup Products"
          ],
          "Home and Living": [
            "Furniture and Decor"
          ]
        },
        "featured": "No",
        "url": "https://www.dresslily.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.dresslily.com%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2019-05-20",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "713949",
        "store": "dresslily.com",
        "merchant_homepage": "https://www.dresslily.com/",
        "offer_text": "Up To 60% Off on Men&#039;s Fall Styles",
        "offer_value": "60%",
        "title": "Avail Upto 60% discount",
        "description": "Applicable on Men&#039;s Fall Styles (Products include Shirt, Jackets, Hoodies and more)",
        "code": "ACHALLOWEEN47",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels",
        "category_array": {
          "Fashion": [
            "Mens Apparels"
          ]
        },
        "featured": "No",
        "url": "https://www.dresslily.com/promotion-mens-fall-break-special-224.html",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.dresslily.com%2Fpromotion-mens-fall-break-special-224.html",
        "image_url": "http://",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-06-30",
        "end_date": "2030-01-01"
      },
      {
        "lmd_id": "818309",
        "store": "dresslily.com",
        "merchant_homepage": "https://www.dresslily.com/",
        "offer_text": "Get Up to 69% Discount on Swimwear",
        "offer_value": "69%",
        "title": "Get Up To 69% off",
        "description": "Applicable on Swimwear (Products include Tankinis, one-Pieces, Bikinis and more)",
        "code": "SWIM",
        "terms_and_conditions": "",
        "categories": "Fashion,Womens Apparels",
        "category_array": {
          "Fashion": [
            "Womens Apparels"
          ]
        },
        "featured": "No",
        "url": "https://www.dresslily.com/promotion/Swimwear-2022.html?skimoffer=1504844",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.dresslily.com%2Fpromotion%2FSwimwear-2022.html%3Fskimoffer%3D1504844",
        "image_url": "https://static.skimlinks.com/images/merchant_logos/advertiser_logo_3222.jpg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-13",
        "end_date": "2022-02-14"
      },
      {
        "lmd_id": "645091",
        "store": "dresslily.com",
        "merchant_homepage": "https://www.dresslily.com/",
        "offer_text": "Avail Buy 3 Get 20% OFF on Womens Fashion",
        "offer_value": "Buy &amp; Get",
        "title": "Get Buy 3 Get 20% OFF",
        "description": "This offer is applicable on Womens Fashion (Products include Dresses, Jumpsuits, Sweaters, Cardigans and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Womens Apparels,Footwear,Handbags and Wallets,Jewellery,Fashion Accessories,Health and Beauty,Body Care,Makeup Products",
        "category_array": {
          "Fashion": [
            "Womens Apparels",
            "Footwear",
            "Handbags and Wallets",
            "Jewellery",
            "Fashion Accessories"
          ],
          "Health and Beauty": [
            "Body Care",
            "Makeup Products"
          ]
        },
        "featured": "No",
        "url": "https://www.dresslily.com/promotion/dresslily-clearance-sale.html",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.dresslily.com%2Fpromotion%2Fdresslily-clearance-sale.html",
        "image_url": "https://uidesign.drlcdn.com/DL/image/5611/c.png?imbypass=true",
        "type": "Deal",
        "offer": "BOGO",
        "status": "active",
        "start_date": "2021-02-25",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "645089",
        "store": "dresslily.com",
        "merchant_homepage": "https://www.dresslily.com/",
        "offer_text": "Buy 2 Get 30% discount on all products",
        "offer_value": "Buy &amp; Get",
        "title": "Get Buy 2 Get 30% OFF",
        "description": "This voucher is applicable on all products (Products include Dresses, Sweaters, Cardigans, Jumpsuits and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Footwear,Handbags and Wallets,Jewellery,Fashion Accessories,Health and Beauty,Body Care,Makeup Products",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Footwear",
            "Handbags and Wallets",
            "Jewellery",
            "Fashion Accessories"
          ],
          "Health and Beauty": [
            "Body Care",
            "Makeup Products"
          ]
        },
        "featured": "No",
        "url": "https://www.dresslily.com/promotion/dresslily-clearance-sale.html",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.dresslily.com%2Fpromotion%2Fdresslily-clearance-sale.html",
        "image_url": "https://uidesign.drlcdn.com/DL/image/5611/a.jpg?imbypass=true",
        "type": "Deal",
        "offer": "BOGO",
        "status": "active",
        "start_date": "2021-02-25",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "645090",
        "store": "dresslily.com",
        "merchant_homepage": "https://www.dresslily.com/",
        "offer_text": "Free Shipping on all products",
        "offer_value": "Free",
        "title": "Free Shipping",
        "description": "This coupon is valid on all products (On Min. Purchase of $45)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Footwear,Handbags and Wallets,Jewellery,Fashion Accessories,Health and Beauty,Body Care,Makeup Products",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Footwear",
            "Handbags and Wallets",
            "Jewellery",
            "Fashion Accessories"
          ],
          "Health and Beauty": [
            "Body Care",
            "Makeup Products"
          ]
        },
        "featured": "No",
        "url": "https://www.dresslily.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.dresslily.com%2F",
        "image_url": "https://uidesign.drlcdn.com/DL/image/5611/b.png?imbypass=true",
        "type": "Deal",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2021-02-25",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "665297",
        "store": "dresslily.com",
        "merchant_homepage": "https://www.dresslily.com/",
        "offer_text": "Flat 15% Discount on all products",
        "offer_value": "15%",
        "title": "Avail 15% discount",
        "description": "Valid on all products (Products include T-shirts, Jeans, Jackets and Coats and more)",
        "code": "dresslily15sale",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Footwear,Jewellery,Fashion Accessories",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Footwear",
            "Jewellery",
            "Fashion Accessories"
          ]
        },
        "featured": "No",
        "url": "https://www.dresslily.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.dresslily.com%2F",
        "image_url": "http://cdn.admitad.com/campaign/images/2020/9/30/15504-af674f26cd481a83.jpeg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-04-01",
        "end_date": "2023-01-02"
      },
      {
        "lmd_id": "782426",
        "store": "dresslily.com",
        "merchant_homepage": "https://www.dresslily.com/",
        "offer_text": "Up To $18 off on all products",
        "offer_value": "$18",
        "title": "Get Up To $18 OFF",
        "description": "This voucher is valid on all products (On Min. Purchase of $50)",
        "code": "AFFDL",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Watches,Lingerie,Eyewear,Footwear,Handbags and Wallets,Jewellery,Fashion Accessories,Home and Living,Furniture and Decor,Housekeeping,Pet Supplies,Kitchenware",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Watches",
            "Lingerie",
            "Eyewear",
            "Footwear",
            "Handbags and Wallets",
            "Jewellery",
            "Fashion Accessories"
          ],
          "Home and Living": [
            "Furniture and Decor",
            "Housekeeping",
            "Pet Supplies",
            "Kitchenware"
          ]
        },
        "featured": "No",
        "url": "https://www.dresslily.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.dresslily.com%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2021-11-12",
        "end_date": "2023-03-01"
      },
      {
        "lmd_id": "812033",
        "store": "dresslily.com",
        "merchant_homepage": "https://www.dresslily.com/",
        "offer_text": "Get Upto $30 off on all products",
        "offer_value": "$30",
        "title": "Get Upto $30 Off",
        "description": "This coupon is valid on all products (On Min. Purchase of $99)",
        "code": "DLBIGDEAL",
        "terms_and_conditions": "",
        "categories": "Fashion,Womens Apparels",
        "category_array": {
          "Fashion": [
            "Womens Apparels"
          ]
        },
        "featured": "No",
        "url": "https://www.dresslily.com/promotion/New-Year.html?awc=7138_1640957151_b38a7b4d84fef0a638acd7b354866858",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.dresslily.com%2Fpromotion%2FNew-Year.html%3Fawc%3D7138_1640957151_b38a7b4d84fef0a638acd7b354866858",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2022-01-01",
        "end_date": "2023-01-02"
      },
      {
        "lmd_id": "817920",
        "store": "dresslily.com",
        "merchant_homepage": "https://www.dresslily.com/",
        "offer_text": "Up To 20% OFF on all products",
        "offer_value": "20%",
        "title": "Up to 20% OFF",
        "description": "This discount is applicable on all products (On Min. Purchase of &#163;69)",
        "code": "NYDRESS",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Handbags and Wallets,Jewellery,Fashion Accessories",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Handbags and Wallets",
            "Jewellery",
            "Fashion Accessories"
          ]
        },
        "featured": "No",
        "url": "https://www.dresslily.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.dresslily.com%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-12",
        "end_date": "2023-01-14"
      },
      {
        "lmd_id": "665300",
        "store": "dresslily.com",
        "merchant_homepage": "https://www.dresslily.com/",
        "offer_text": "Get Flat 18% OFF on all products",
        "offer_value": "18%",
        "title": "Avail Flat 18% Off",
        "description": "This promotional offer is valid on all products (Products include Shirts, Jeans, Jackets and Coats and more)",
        "code": "DL18SALE",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Footwear,Jewellery,Fashion Accessories",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Footwear",
            "Jewellery",
            "Fashion Accessories"
          ]
        },
        "featured": "No",
        "url": "https://www.dresslily.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.dresslily.com%2F",
        "image_url": "http://cdn.admitad.com/campaign/images/2020/9/30/15504-af674f26cd481a83.jpeg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-04-01",
        "end_date": "2023-01-02"
      },
      {
        "lmd_id": "665301",
        "store": "dresslily.com",
        "merchant_homepage": "https://www.dresslily.com/",
        "offer_text": "Avail Flat 18% off on all products",
        "offer_value": "18%",
        "title": "Get Flat 18% Off",
        "description": "This promotional offer is valid on all products (Products include Shirts, Jeans, Jackets and Coats and more)",
        "code": "Dresslily18",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Footwear,Jewellery,Fashion Accessories",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Footwear",
            "Jewellery",
            "Fashion Accessories"
          ]
        },
        "featured": "No",
        "url": "https://www.dresslily.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.dresslily.com%2F",
        "image_url": "http://cdn.admitad.com/campaign/images/2020/9/30/15504-af674f26cd481a83.jpeg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-04-01",
        "end_date": "2023-01-02"
      },
      {
        "lmd_id": "665298",
        "store": "dresslily.com",
        "merchant_homepage": "https://www.dresslily.com/",
        "offer_text": "16% off on most products",
        "offer_value": "16%",
        "title": "16% OFF",
        "description": "This voucher is valid on most products (Products include Shirts, T-shirts, Jeans, Jackets and Coats and more)",
        "code": "dresslily16sale",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Footwear,Jewellery,Fashion Accessories",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Footwear",
            "Jewellery",
            "Fashion Accessories"
          ]
        },
        "featured": "No",
        "url": "https://www.dresslily.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.dresslily.com%2F",
        "image_url": "http://cdn.admitad.com/campaign/images/2020/9/30/15504-af674f26cd481a83.jpeg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-04-01",
        "end_date": "2023-01-02"
      },
      {
        "lmd_id": "665299",
        "store": "dresslily.com",
        "merchant_homepage": "https://www.dresslily.com/",
        "offer_text": "Flat 17% off on all products",
        "offer_value": "17%",
        "title": "Avail Flat 17% Discount",
        "description": "This promotional offer is valid on all products (Products include Shirts, Jeans, Jackets and Coats and more)",
        "code": "dresslily17sale",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Footwear,Jewellery,Fashion Accessories",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Footwear",
            "Jewellery",
            "Fashion Accessories"
          ]
        },
        "featured": "No",
        "url": "https://www.dresslily.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.dresslily.com%2F",
        "image_url": "http://cdn.admitad.com/campaign/images/2020/9/30/15504-af674f26cd481a83.jpeg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-04-01",
        "end_date": "2023-01-02"
      },
      {
        "lmd_id": "665296",
        "store": "dresslily.com",
        "merchant_homepage": "https://www.dresslily.com/",
        "offer_text": "Get Upto $17 OFF on all products",
        "offer_value": "$17",
        "title": "Get Upto $17 off",
        "description": "This promotional offer is valid on all products (On Min. Purchase of $19)",
        "code": "DLSALE",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Footwear,Jewellery,Fashion Accessories",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Footwear",
            "Jewellery",
            "Fashion Accessories"
          ]
        },
        "featured": "No",
        "url": "https://www.dresslily.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.dresslily.com%2F",
        "image_url": "http://cdn.admitad.com/campaign/images/2020/9/30/15504-af674f26cd481a83.jpeg",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2021-04-01",
        "end_date": "2023-01-02"
      },
      {
        "lmd_id": "665295",
        "store": "dresslily.com",
        "merchant_homepage": "https://www.dresslily.com/",
        "offer_text": "Get Up To $7 off on all products",
        "offer_value": "$7",
        "title": "Up to $7 Discount",
        "description": "This discount is valid on all products (On Min. Purchase of $30)",
        "code": "DLOFF",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Eyewear,Footwear,Fashion Accessories",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Eyewear",
            "Footwear",
            "Fashion Accessories"
          ]
        },
        "featured": "No",
        "url": "https://www.dresslily.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.dresslily.com%2F",
        "image_url": "http://cdn.admitad.com/campaign/images/2020/9/30/15504-af674f26cd481a83.jpeg",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2021-04-01",
        "end_date": "2023-01-02"
      },
      {
        "lmd_id": "826099",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Mega Combo Fest - Upto 60% OFF on Babyhug Diaper Pants",
        "offer_value": "Sale",
        "title": "Mega Combo Fest - Get Up To 60% discount",
        "description": "Valid on Babyhug Diaper Pants",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=32309",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D32309",
        "image_url": "https://cdn.fcglcdn.com/brainbees/banners/test/BabyhugMCFUpto60_DP_HP_994x399_202212710316.gif",
        "type": "Deal",
        "offer": "Sale",
        "status": "active",
        "start_date": "2022-01-29",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "809580",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Avail 33% Off on Nursery Range",
        "offer_value": "33%",
        "title": "Flat 33% off",
        "description": "Valid on Nursery Range (Max. Once per user. Max. discount of &#8377;5000. Not valid on Combos, Bottles &amp; Accessories and Formula &amp; Supplements, Innerwear &amp; Thermals, Socks &amp; Tights Swimwear, Bath Tubs and few brands)",
        "code": "NURS",
        "terms_and_conditions": "<p><span>1.User will get flat 33% Off on Entire Site or on-site discount whichever is higher.</span><br /><span>2.Max discount is &#8377;5000.</span></p>\r\n<div><br /><strong><u>More T&amp;C's</u></strong>:<br />1.Limited Period Offer.<br />2.Coupon code is not valid on Combos, Bottles &amp; Accessories and Formula &amp; Supplements, Innerwear &amp; Thermals, Socks &amp; Tights Swimwear, Bath Tubs and brands Meemee Select Baby Gear Range,Joie,Dabur, Enfagrow, Johnson's Baby, Dettol, Bella, Hamdard, Duracell, Complan, Ryca, Fancy Fluff, Pampers Active Baby, Pampers Dry, Intellikit Trial Kits, Dermadew, Tango, Nestle, Protinex, PediaSure, Figaro, Motorola, Melissa &amp; Doug, Horlicks, Foscam, Alex Daisy, Bio Oil, Jane, Vaux, SeTracker, DMR, Miniwash, Masilo-Linen For Littles, Shesha Naturals, IFITech, StarAndDaisy, Shumee,&nbsp;IFITech,Star n Daisy,Osasbazaar,Boingg,Duroflex,Bianca .<br />3. Benefits arising post implementation of GST are part of this coupon.<br />4. Coupon can be used only once and is not applicable with any other coupon.<br />5. Coupon Code is applicable only on the MRP of products.<br />6. GST applicable on discounted price.</div>",
        "categories": "Kids and Toddlers,Baby Gears",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Gears"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=1443&ref2=Nursery_21_09_2021_combo0_d_21Sep21_cl&c=NURS",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D1443%26ref2%3DNursery_21_09_2021_combo0_d_21Sep21_cl%26c%3DNURS",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-12-28",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "825587",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Upto 48% discount on Babyhug Products",
        "offer_value": "48%",
        "title": "Upto 48% Discount",
        "description": "This discount is valid on Babyhug Products (Max. &#8377;3000 discount)",
        "code": "BHUGWEEK",
        "terms_and_conditions": "<div><span><span>For Club Members:</span></span></div>\r\n<div><span><span>1. User will get flat 48% Off* on Entire Babyhug Range.</span></span></div>\r\n<div><span><span>2.Max discount is &#8377;3000.</span></span></div>\r\n<div><span><span>&nbsp;</span></span></div>\r\n<div><span><span>For All Users:</span></span></div>\r\n<div><span><span>1.User will get flat 42% Off* on Entire Babyhug Range.</span></span></div>\r\n<div><span><span>2.Max discount is &#8377;3000.</span></span></div>\r\n<div><span><span>&nbsp;</span></span></div>\r\n<div><span><span>More T&amp;C's:</span></span></div>\r\n<div><span><span>1. Limited period offer.</span></span></div>\r\n<div><span><span>2. Coupon code is not applicable with any other coupon.</span></span></div>\r\n<div><span><span>3. Benefits arising post implementation of GST are part of this coupon.</span></span></div>\r\n<div><span><span>4. Coupon code is applicable on the MRP of the products.</span></span></div>\r\n<div><span><span>5. GST applicable on discounted price.</span></span></div>\r\n<div><span><span>6. Coupon code cannot be used for purchase of Firstcry Club Membership.</span></span></div>",
        "categories": "Entertainment,Board Games and Toys,Kids and Toddlers,Kids Fashion,Baby Care,Baby Gears",
        "category_array": {
          "Entertainment": [
            "Board Games and Toys"
          ],
          "Kids and Toddlers": [
            "Kids Fashion",
            "Baby Care",
            "Baby Gears"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=1772&c=BHUGWEEK",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D1772%26c%3DBHUGWEEK",
        "image_url": "https://cdn.fcglcdn.com/brainbees/banners/test/MKTGN_HP_BHUG_28JAN_2022127215115.jpg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-28",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "820528",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 30% off on Bath &amp; Skincare Range",
        "offer_value": "30%",
        "title": "Get 30% OFF",
        "description": "Applicable on Bath &amp; Skincare Range (Maximum discount allowed is &#8377;2000)",
        "code": "BSKIN",
        "terms_and_conditions": "<div>\r\n<div>\r\n<div>\r\n<div>\r\n<div><span><span><span>1.Limited Period Offer.</span></span><br /><span><span>2.&nbsp;Benefits arising post implementation of GST are part of this coupon.</span></span><br /><span><span>3. Coupon code is valid on Bath &amp; Skin Care except on&nbsp;</span></span><span>Bath Robes, Bath Towels,&nbsp;</span><span><span>Bath tubs &amp; Bathers, and brands Johnson's Baby,BabyDove,Dabur,Dermadew, Hamdard,Figaro,Ryca, Shesha Naturals,Avidia Labs,Osasbazaar &amp; IFITech , West Coast, SHESHA NATURALS, Bath Tubs,Bathers.</span></span><br /><span><span>4. Coupon can be used only once and is not applicable with any 5. Coupon code is applicable only on the MRP of products.</span></span><br /><span><span>6. GST applicable on discounted price.</span></span><br /></span>\r\n<p><span><span>&nbsp;</span></span></p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=&brandid=0&searchstring=brand@~14~13@@@1@0@20@@@@@@@@@@@@@@@@&sort=popularity&ref2=Bath_Skin_28_09_2021_combo0_d_28Sep21_cl&c=BSKIN",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D%26brandid%3D0%26searchstring%3Dbrand%40%7E14%7E13%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26sort%3Dpopularity%26ref2%3DBath_Skin_28_09_2021_combo0_d_28Sep21_cl%26c%3DBSKIN",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-09-29",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "820527",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Flat 35% Off on Diapers and Diapering Essentials",
        "offer_value": "35%",
        "title": "Get Flat 35% Discount",
        "description": "Valid on Diapers and Diapering Essentials (Max. Once per user. Max. &#8377;1000 discount. Not valid on Combos and few Brands)",
        "code": "DP35CAT",
        "terms_and_conditions": "<div>Coupon code is valid for limited period.</div>\r\n<div>2. User will get Flat 35% Off on Diapers &amp; Diapering Essentials.</div>\r\n<div>3. User will get maximum discount of &#8377;1000. Coupon is applicable on MRP of product.</div>\r\n<div>4. Coupon code is not valid on Combos and Brands- Johnson's baby,Bella,West Coast,Shumee,Masilo,Fancy Fluff,Dermadew,Pureborn,Huggies Dry Pants, Pampers Pure.</div>\r\n<div>5. Coupon code can be used only once and is not applicable with any other coupon.</div>\r\n<div>6. GST applicable on discounted price.</div>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=1&brandid=0&searchstring=brand@~29~30~87~31~88~28@@@1@0@20@@@@@@@@@@@@@@@@&sort=Popularity&c=DP35CAT&ref2=BABYDIAPERING_combo0_d_29Jan21_DP35CAT",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D1%26brandid%3D0%26searchstring%3Dbrand%40%7E29%7E30%7E87%7E31%7E88%7E28%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26sort%3DPopularity%26c%3DDP35CAT%26ref2%3DBABYDIAPERING_combo0_d_29Jan21_DP35CAT",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-04-27",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "825517",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "40% Discount on Basant Panchami Collection",
        "offer_value": "40%",
        "title": "Get 40% OFF",
        "description": "This offer is applicable on Basant Panchami Collection (Maximum &#8377;5000 discount will be offered)",
        "code": "BSNTNR22",
        "terms_and_conditions": "<div><span><span>More T&amp;C's:</span></span></div>\r\n<div><span><span>1. Limited Period Offer.</span></span></div>\r\n<div><span><span>2. Max discount is &#8377;5000.</span></span></div>\r\n<div><span><span>3. Coupon is valid only on Select Brands.</span></span></div>\r\n<div><span><span>4. Offer valid only on the listed sizes &amp; colors of the products featured on the page.</span></span></div>\r\n<div><span><span>5. Coupon code is not applicable with any other coupon.</span></span></div>\r\n<div><span><span>6. Benefits arising post implementation of GST are part of this coupon.</span></span></div>\r\n<div><span><span>7. Coupon code is applicable on the MRP of the products.</span></span></div>\r\n<div><span><span>8. GST applicable on discounted price.</span></span></div>\r\n<div><span><span>9. Coupon code cannot be used for purchase of FirstCry Club Membership.</span></span></div>",
        "categories": "Fashion,Ethnic Wear,Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Fashion": [
            "Ethnic Wear"
          ],
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=33094&c=BSNTNR22",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D33094%26c%3DBSNTNR22",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "809564",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Avail Flat 35% Discount on Entire Fashion Range",
        "offer_value": "35%",
        "title": "Flat 35% OFF",
        "description": "Valid on Entire Fashion Range (Max. discount of &#8377;5000 will be applied. Not valid on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; few Brands)",
        "code": "PRC",
        "terms_and_conditions": "<div><span>. Limited Period Offer.</span></div>\r\n<div><span>2. Maximum discount is &#8377;5000.</span></div>\r\n<div><span>3.&nbsp;</span><span><span>Coupon is not applicable on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; Brands Chicco Fashion, Tango, Cherokee, Colt, Donut, Karigari, U.S. Polo Assn, U.S. Polo Assn Kids, Birkenstock, Crocs, Lilpicks Couture, Converse, Jordan, Levi's, Nike &amp; Jockey.</span></span></div>\r\n<div><span>4. Coupon code is not applicable with any other coupon.</span></div>\r\n<div><span>5. Benefits arising post implementation of GST are part of this coupon.</span></div>\r\n<div><span>6. Coupon code is applicable on the MRP of the products.</span></div>\r\n<div><span>7. GST applicable on discounted price.</span></div>\r\n<div><span>8. Coupon code cannot be used for purchase of FirstCry Club Membership.</span></div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=84&ref2=PremiumFashion_01_combo0_d_22Nov21_cl&c=PRC",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D84%26ref2%3DPremiumFashion_01_combo0_d_22Nov21_cl%26c%3DPRC",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-12-28",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "819910",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Avail 38% off on Baby &amp; Kids Gear",
        "offer_value": "38%",
        "title": "Get 38% Discount",
        "description": "Valid on Baby &amp; Kids Gear (Max. discount applicable is &#8377;5000. Not valid on Combos, spare parts and few brands)",
        "code": "GEARJAN",
        "terms_and_conditions": "<div><span>1. Limited Period Offer.</span></div>\r\n<div><span>2.&nbsp;</span><span><span><span>Coupon code is not valid on Combos, spare parts and brands </span></span><span>Beaba, Brainsmith, Dreambaby, Duracell, Fisher Price by Tiffany, GETBEST, Jane, Masilo, Shumee, StarAndDaisy, Vaux</span><span><span>.</span></span></span></div>\r\n<div>\r\n<div><span>3. Coupon code is not applicable with any other coupon.</span></div>\r\n<div><span>4. Benefits arising post implementation of GST are part of this coupon.</span></div>\r\n<div><span>5. Coupon code is applicable on the MRP of the products.</span></div>\r\n<div><span>6. GST applicable on discounted price.</span></div>\r\n<div><span>7.&nbsp;</span><span>Coupon code cannot be used for purchase of Firstcry Club Membership.</span></div>\r\n</div>",
        "categories": "Kids and Toddlers,Baby Gears",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Gears"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=7&brandid=0&searchstring=brand@@@@1@0@20@@@@@@@@@@@@@@@@&rating=&sort=bestseller&c=GEARJAN",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D7%26brandid%3D0%26searchstring%3Dbrand%40%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26rating%3D%26sort%3Dbestseller%26c%3DGEARJAN",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-15",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "825519",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "33% Off on Baby &amp; Kids Gear",
        "offer_value": "33%",
        "title": "Flat 33% OFF",
        "description": "Valid on Baby &amp; Kids Gear (Max. discount allowed is &#8377;5000. Not valid on Combos, Feeding Bottles &amp; Teats,Baby Food and Infant Formula,Inner wear &amp; Thermals,Socks &amp; Tights,Swim wear,Coding, Bath Tubs Mask, Sanitizer, Kids Gadgets and few brands)",
        "code": "BGEA",
        "terms_and_conditions": "<div><u><strong>For All Users:</strong></u></div>\r\n<div>\r\n<div><span><span>1.User will get flat 33% Off on Entire Site or on-site discount whichever is higher.</span></span></div>\r\n<div><span><span>2.</span></span><span>Max discount is &#8377;5000.</span></div>\r\n<div>&nbsp;</div>\r\n</div>\r\n<div><strong><u>More T&amp;C's:</u></strong></div>\r\n<div>\r\n<div><span><span>1. Limited Period Offer.</span></span></div>\r\n<div><span><span>2.&nbsp;</span></span><span>Coupon code is not valid on Combos, Feeding Bottles &amp; Teats,Baby Food and Infant Formula,Inner wear &amp; Thermals,Socks &amp; Tights,Swim wear,Coding, Bath Tubs Mask, Sanitizer, Kids Gadgets and brands Pampers Pure, Huggies Dry Pants,Dabur, BabyDove, Johnson's Baby, Dettol, Bella, Hamdard, Duracell, Complan, Ryca, Fancy Fluff, Intellikit Trial Kits, Dermadew, Tango, Nestle, Protinex, PediaSure, Figaro, Motorola, Melissa &amp; Doug, Horlicks, Foscam, Alex Daisy, Star and Daisy, Bio Oil, Sofy, Jane, Vaux, SeTracker, DMR, Miniwash, Masilo-Linen For Littles, Shesha Naturals, Dettol, IFITech,Emotix, TigerTech, Vaux, SeTracker, RYCA, Avidia Labs, Osasbazaar, Saregama,Shemaroo,Boingg, Star and Daisy, Class Monitor</span><span><span>.</span></span></div>\r\n<div><span><span>3. Coupon code is not applicable with any other coupon.</span></span></div>\r\n<div><span><span>4. Benefits arising post implementation of GST are part of this coupon.</span></span></div>\r\n<div><span><span>5. Coupon code is applicable on the MRP of the products.</span></span></div>\r\n<div><span><span>6. GST applicable on discounted price.</span></span></div>\r\n</div>",
        "categories": "Kids and Toddlers,Baby Gears",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Gears"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=7&brandid=0&searchstring=brand@~809~41~810~44~43@@@1@0@20@@@@@@@@@@@@@@@@&sort=popularity&c=BGEA",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D7%26brandid%3D0%26searchstring%3Dbrand%40%7E809%7E41%7E810%7E44%7E43%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26sort%3Dpopularity%26c%3DBGEA",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "821251",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 70% off on On Purchase of 2 Products",
        "offer_value": "70%",
        "title": "70% OFF",
        "description": "Valid on on Purchase of 2 Products (Max. Once per user. Max. &#8377;10000 discount is allowed. Not valid on Feeding Bottle, Infant Formula and Few Brands)",
        "code": "TRI70",
        "terms_and_conditions": "<p><span>1. Limited period offer.</span><br /><span>2. User will get flat 70% off on 2 or more products on select range.</span><br /><span>3. Max discount is &#8377;10000</span><br /><span>4. Benefits arising post implementation of GST are part of this coupon.</span><br /><span>5. Coupon can be used only once and is not applicable with any other coupon.</span><br /><span>6. Coupon code is applicable on the MRP of the products.</span><br /><span>7. GST applicable on discounted price.</span><br /><span>8.Coupon is not applicable on Feeding Bottle &amp; Teats, Infant formula and brands:Yamaha, CROSSBEATS, Crossloops,GOQii,Havells,HP,Instax,JBL,Travel Blue,Lexingham / Travel Blue, Macmerise, Phillips, Portronics, Saregama, Sekyo, SeTracker, Shemaroo, STAUNCH, THINKERPLACE, Trakbond, Turet, Ultraprolink, WatchOut Wearables, Zebronics, Cherokee, Colt, Donut, Karigari,U.S. Polo Assn.,U.S. Polo Assn. Kids, JOCKEY, Birkenstock,Chicco,Campus,Crocs,Indian Terrain,Tommy Hilfiger,Allen Solly Juniors, Puma, GETBEST, Nestasia, Abena,Beaba,Brainsmith,Dreambaby,Red Castle, NumNum, Stokke,The Brushies</span></p>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=33002&c=TRI70&ref2=6a_jazzydeals_flat70",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D33002%26c%3DTRI70%26ref2%3D6a_jazzydeals_flat70",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-18",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "397902",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Flat 30% discount on Feeding and Nursing",
        "offer_value": "30%",
        "title": "Avail 30% discount",
        "description": "Valid on Feeding and Nursing (On min. order-value of &#8377;500. Maximum &#8377;2000 discount will be offered. Not valid on Combos, Bottles &amp; Accessories and Formula &amp; Supplements and few brands)",
        "code": "FC30FDNR",
        "terms_and_conditions": "<div>Terms &amp; Condition</div>\r\n<p><span>1.&nbsp;Limited Period Offer.<br />2. User will get minimum 30% or the stated discount on the chosen product, whichever is higher on order above &#8377;500.<br />3. Maximum discount is &#8377;2000.<br />4. Coupon code is valid on Feeding &amp; Nursing Category except Bottles &amp; Accessories and Formula &amp; Supplements and brands Charlie Banana, Foscam, Melissa &amp; Doug, Motorola, Tupperware, Wanna Party, Bio Oil, PediaSure, Horlicks, Protinex, Nestle, BeCool, Alex Daisy, Jane, Xbox &amp; Sony PayStation. For more T &amp; C's, <a href=\"http://www.firstcry.com/TermsofUse.aspx#b3\" target=\"_\">Click Here</a>.<br />5.&nbsp;Coupon code not applicable with any other coupon.<br />6. Coupon code is applicable only on the MRP of products.<br />7. Applicable taxes extra on discounted price. Please refer <a href=\"http://www.firstcry.com/termsofuse#hd3\" target=\"_\">Terms of Use</a> for full details.</span></p>",
        "categories": "Health and Beauty,Nutrition,Kids and Toddlers,Baby Care",
        "category_array": {
          "Health and Beauty": [
            "Nutrition"
          ],
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/feeding-and-nursing/2/0/0?=&c=FC30FDNR",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeeding-and-nursing%2F2%2F0%2F0%3F%3D%26c%3DFC30FDNR",
        "image_url": "https://cdn.fcglcdn.com/brainbees/banners/HS_Feeding_Nursing_30_OFF.jpg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2019-05-20",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "821257",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 60% off on Select Range",
        "offer_value": "60%",
        "title": "Flat 60% discount",
        "description": "Valid on Select Range (Max. Once per user. Max. discount of &#8377;5000 will be applied. Not valid on Feeding Bottle &amp; Teats, Infant formula and few brands)",
        "code": "TRI60",
        "terms_and_conditions": "<p><span>1. Limited period offer.</span><br /><span>2. User will get flat 60% off on select range.</span><br /><span>3. Max discount is &#8377;5000</span><br /><span>4. Benefits arising post implementation of GST are part of this coupon.</span><br /><span>5. Coupon can be used only once and is not applicable with any other coupon.</span><br /><span>6. Coupon code is applicable on the MRP of the products.</span><br /><span>7. GST applicable on discounted price.</span><br /><span>8.Coupon is not applicable on Feeding Bottle &amp; Teats, Infant formula and brands:Yamaha, CROSSBEATS, Crossloops,GOQii,Havells,HP,Instax,JBL,Travel Blue,Lexingham / Travel Blue, Macmerise, Phillips, Portronics, Saregama, Sekyo, SeTracker, Shemaroo, STAUNCH, THINKERPLACE, Trakbond, Turet, Ultraprolink, WatchOut Wearables, Zebronics, Cherokee, Colt, Donut, Karigari,U.S. Polo Assn.,U.S. Polo Assn. Kids, JOCKEY, Birkenstock,Chicco,Campus,Crocs,Indian Terrain,Tommy Hilfiger,Allen Solly Juniors, Puma, GETBEST, Nestasia, Abena,Beaba,Brainsmith,Dreambaby,Red Castle, NumNum, Stokke,The Brushies.</span></p>",
        "categories": "Kids and Toddlers,Baby Care,Maternity,Baby Gears",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care",
            "Maternity",
            "Baby Gears"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=33003&c=TRI60&ref2=6b_jazzydeals_flat60",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D33003%26c%3DTRI60%26ref2%3D6b_jazzydeals_flat60",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-18",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "825499",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Flat 30% discount on Selected Momsco range",
        "offer_value": "30%",
        "title": "30% discount",
        "description": "Valid on Selected Momsco range (Max. &#8377;2000 discount will be applicable. Not valid on Bottles &amp; Accessories)",
        "code": "MOMJS30",
        "terms_and_conditions": "<div>Terms &amp; Condition</div>\r\n<p><span>1. Limited Period Offer.<br />2. User will get Flat 30% on selected Momsco range.<br />3.&nbsp;Benefits arising post implementation of GST are part of this coupon.<br />4. Maximum discount is &#8377;2000 on selected Moms-co Range.<br />5.&nbsp;<span>&nbsp;Coupon code is not valid on Guaranteed Savings Offer,</span><span>Bottles &amp; Accessories.</span><br />6. Coupon is not applicable with any other coupon.<br />7. Coupon code is applicable only on the MRP of products.<br />8. GST applicable on discounted price.</span></p>\r\n<div><br />\r\n<div><br />\r\n<div>&nbsp;</div>\r\n</div>\r\n</div>",
        "categories": "Kids and Toddlers,Baby Care,Maternity",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care",
            "Maternity"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/momsco/0/0/1004390?c=MOMJS30",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fmomsco%2F0%2F0%2F1004390%3Fc%3DMOMJS30",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "804648",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Flat 35% discount on Entire Baby Gear Range",
        "offer_value": "35%",
        "title": "Get 35% Off",
        "description": "Valid on Entire Baby Gear Range (Max. Once per user. Maximum discount of &#8377;5000 will be applicable. Not valid on Combos, Bottles &amp; Accessories and Formula &amp; Supplements, Innerwear &amp; Thermals, Socks &amp; Tights Swimwear, Bath Tubs and few brands)",
        "code": "BG35CAT",
        "terms_and_conditions": "",
        "categories": "Kids and Toddlers,Baby Gears",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Gears"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=7&brandid=0&searchstring=brand@~809~41~810~44~366~365~43@@@1@0@20@@@@@@@@@@@@@@@@&sort=popularity&c=BG35CAT&ref2=Gear_06_combo0_d_24Nov20_BG35CAT",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D7%26brandid%3D0%26searchstring%3Dbrand%40%7E809%7E41%7E810%7E44%7E366%7E365%7E43%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26sort%3Dpopularity%26c%3DBG35CAT%26ref2%3DGear_06_combo0_d_24Nov20_BG35CAT",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-07-28",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "825502",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 30% Discount on selected Momsco range",
        "offer_value": "30%",
        "title": "30% OFF",
        "description": "This discount is applicable on selected Momsco range (Maximum discount of &#8377;2000)",
        "code": "MOMSJ30",
        "terms_and_conditions": "<p><span>. Limited Period Offer.</span><br /><span>2. User will get Flat 30% on selected Momsco range.</span><br /><span>3.&nbsp;Benefits arising post implementation of GST are part of this coupon.</span><br /><span>4. Maximum discount is &#8377;2000 on selected Moms-co Range.</span><br /><span>5.&nbsp;</span><span>&nbsp;Coupon code is not valid on Guaranteed Savings Offer,</span><span>Bottles &amp; Accessories.</span><br /><span>6. Coupon is not applicable with any other coupon.</span><br /><span>7. Coupon code is applicable only on the MRP of products.</span><br /><span>8. GST applicable on discounted price.</span></p>\r\n<p><span>&nbsp;</span></p>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=3&brandid=1004390&searchstring=brand@@@@1@0@20@@@@@@@@@@@@@@@@&rating=&sort=Rating&c=MOMJS30",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D3%26brandid%3D1004390%26searchstring%3Dbrand%40%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26rating%3D%26sort%3DRating%26c%3DMOMJS30",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "809496",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Avail Flat 40% OFF on Winter Care Range",
        "offer_value": "40%",
        "title": "Get Flat 40% OFF",
        "description": "Valid on Winter Care Range (Max. &#8377;5000 discount will be offered. Not valid on Select Diapers, Feeding Bottles &amp; Teats,Baby Food and Infant Formula,Inner wear &amp; Thermals,Socks &amp; Tights,Swim wear,Coding, Bath Tubs Mask, Sanitizer, Kids Gadgets and few brands)",
        "code": "WINTER21HP",
        "terms_and_conditions": "",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=1854&c=WINTER21HP",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D1854%26c%3DWINTER21HP",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-12-28",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "773444",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 35% discount on Books Range",
        "offer_value": "35%",
        "title": "35% Off",
        "description": "Valid on Books Range (Max. discount of &#8377;1200. Not valid on brand Class Monitor)",
        "code": "BOOKHP",
        "terms_and_conditions": "<div>\r\n<div><strong><u>For Club Members:</u></strong></div>\r\n<div>1. User will get flat 35% off on Entire Site or on-site discount whichever is higher.</div>\r\n<div>2. Max discount is &#8377;1200.</div>\r\n<div>&nbsp;</div>\r\n<div><strong><u>For All Users:</u></strong></div>\r\n<div>1.User will get flat 30% Off on Entire Site or on-site discount whichever is higher.</div>\r\n<div>2.Max discount is &#8377;1200.</div>\r\n<div>&nbsp;</div>\r\n<div><strong><u>More T&amp;C's:</u></strong></div>\r\n</div>\r\n<div><span>1. Offer Valid for limited time.</span></div>\r\n<div>2. Coupon code is valid on Books Range.</div>\r\n<div><span>3. Coupon is not applicable with any other coupon.</span></div>\r\n<div><span>4. Coupon code is applicable on the MRP of the products.</span></div>\r\n<div><span>5. GST applicable on discounted price.</span></div>\r\n<div><span>6. Benefits arising post implementation of GST are a part of this coupon.</span></div>\r\n<div><span>7. Coupon code is not applicable on brand Class Monitor.</span></div>",
        "categories": "Entertainment,CDs Books and Magazine",
        "category_array": {
          "Entertainment": [
            "CDs Books and Magazine"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=31079&c=BOOKHP&ref2=Book_Up_Your_Shelves_combo0_d_11Aug21_cl",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D31079%26c%3DBOOKHP%26ref2%3DBook_Up_Your_Shelves_combo0_d_11Aug21_cl",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-10-27",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "778409",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Flat 35% Discount on Cocomo Products",
        "offer_value": "35%",
        "title": "Get Flat 35% OFF",
        "description": "This discount is valid on Cocomo Products (Max. &#8377;1500 discount)",
        "code": "COCO35",
        "terms_and_conditions": "<p><span>1. Limited Period Offer.</span><br /><span>2. User will get Flat 35% off onFlat 30% OFF* on Cocomo&nbsp; Products&nbsp;</span><br /><span>3.&nbsp;Benefits arising post implementation of GST are part of this coupon.</span><br /><span>4. Maximum discount is &#8377;1500</span><br /><span>5. Coupon is not applicable with any other coupon.</span><br /><span>6. Coupon code is applicable only on the MRP of products.</span><br /><span>7. GST applicable on discounted price.</span></p>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=3&brandid=1005270&searchstring=brand@~14~12@@@1@0@20@@@@@@@@@@@@@@@@&rating=&sort=popularity&ref=ie30augone_2plus_nclub&utm-source=iemail&utm-medium=email&utm-content=30augone_2plus_nclub_cocomo&c=coco35",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D3%26brandid%3D1005270%26searchstring%3Dbrand%40%7E14%7E12%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26rating%3D%26sort%3Dpopularity%26ref%3Die30augone_2plus_nclub%26utm-source%3Diemail%26utm-medium%3Demail%26utm-content%3D30augone_2plus_nclub_cocomo%26c%3Dcoco35",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-08-30",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "816337",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Flat 35% discount on Entire Mee Mee Range",
        "offer_value": "35%",
        "title": "Flat 35% off",
        "description": "Valid on Entire Mee Mee Range (Maximum &#8377;3000 discount is allowed. Not valid on Combos, Bottles &amp; Accessories, Formula &amp; supplements)",
        "code": "MEEFC35",
        "terms_and_conditions": "<p>1. Limited period offer.<br />2. User will get Flat 35% Off on Entire Mee Mee Range.</p>\r\n<div>3. Maximum Discount is &#8377;3000.<br />\r\n<div>4.&nbsp;Benefits arising post implementation of GST are part of this coupon.<br />5. Coupon code is valid only on Mee Mee Range except Combos, Bottles &amp; Accessories, Formula &amp; supplements.<br />6.&nbsp;Coupon code is not applicable with any other coupon.<br />7. Coupon code is applicable only on the MRP of products.<br />8. GST applicable on discounted price.</div>\r\n</div>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=0&brandid=17&searchstring=brand@@@@1@0@20@@@@@@@@@@@@@@@@&rating=&sort=BestSeller&ref=ie28JunOne&utm-source=iemail&utm-medium=email&utm-content=28JunOne_Meemee&c=MEEFC35",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D0%26brandid%3D17%26searchstring%3Dbrand%40%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26rating%3D%26sort%3DBestSeller%26ref%3Die28JunOne%26utm-source%3Diemail%26utm-medium%3Demail%26utm-content%3D28JunOne_Meemee%26c%3DMEEFC35",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-06-28",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "778403",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 38% Off on Select Fashion Range",
        "offer_value": "38%",
        "title": "Avail Flat 38% Off",
        "description": "This coupon is applicable on Select Fashion Range (Max. discount of &#8377;5000 will be offered)",
        "code": "WINTSH21",
        "terms_and_conditions": "<div><span>Limited Period Offer.</span></div>\r\n<div><span>2. Max discount is &#8377;5000.</span></div>\r\n<div><span>3. Coupon is not applicable on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; Brands Tango, Cherokee, Colt, Donut, Karigari, U.S. Polo Assn, U.S. Polo Assn Kids, &amp; JOCKEY.</span></div>\r\n<div><span>4. Coupon code is not applicable with any other coupon.</span></div>\r\n<div><span>5. Benefits arising post implementation of GST are part of this coupon.</span></div>\r\n<div><span>6. Coupon code is applicable on the MRP of the products.</span></div>\r\n<div><span>7. GST applicable on discounted price.</span></div>\r\n<div><span>8. Coupon code cannot be used for purchase of FirstCry Club Membership.</span></div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=32467&sort=bestseller&ref2=WinterSouth_combo0_d_22Oct21_cl_834&c=WINTSH21",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D32467%26sort%3Dbestseller%26ref2%3DWinterSouth_combo0_d_22Oct21_cl_834%26c%3DWINTSH21",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-10-27",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "826101",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Upto 40% off on all products",
        "offer_value": "40%",
        "title": "Up To 40% OFF",
        "description": "Valid on all products (On cart-value of &#8377;4999 and above. Maximum &#8377;5000 discount is allowed. Not valid on Feeding Bottles &amp; Teats,Baby Food and Infant Formula,Inner wear &amp; Thermals,Socks &amp; Tights,Swim wear,Coding, Bath Tubs, Sanitizer, Kids Gadgets and few brands)",
        "code": "SALUTE",
        "terms_and_conditions": "<div>1.Users will get Assured Flat 35% OFF And Flat 40% OFF On Min. Purchase of &#8377;4999.</div>\r\n<div>2.Maximum discount is &#8377;5000.</div>\r\n<div>3.Limited offer period.</div>\r\n<div><span>4.Coupon code is applicable on MRP of Products.</span></div>\r\n<div><span>5.Coupon cannot be applicable with any other coupon.</span></div>\r\n<div><span>6.Coupon code is not valid on&nbsp;<a href=\"https://www.firstcry.com/topoffers?moid=33045\">Select Diapers</a>,Feeding Bottles &amp; Teats,Baby Food and Infant Formula,Inner wear &amp; Thermals,Socks &amp; Tights,Swim wear,Coding, Bath Tubs, Sanitizer, Kids Gadgets and brands Pampers Pure,&nbsp;<a href=\"https://www.firstcry.com/topoffers?moid=33046\">Pampers Active</a>, Huggies Dry Pants,&nbsp;<a href=\"https://www.firstcry.com/topoffers?moid=33105\">Merries</a>,Dabur, BabyDove, Johnson's Baby, Dettol, Bella, Hamdard, Duracell, Complan, Ryca, Fancy Fluff, Intellikit Trial Kits, Dermadew, Tango, Nestle, Protinex, PediaSure, Figaro, Motorola, Melissa &amp; Doug, Horlicks, Foscam, Alex Daisy,Jane, Vaux, SeTracker, DMR, Miniwash, Masilo-Linen For Littles, Shesha Naturals, Dettol, IFITech,Emotix, TigerTech, Vaux, SeTracker, RYCA, Avidia Labs, Osasbazaar, Saregama,Shemaroo,Boingg, Class Monitor,Fisher Price by Tiffany, Duroflex, Bianca,Jada, Havells, Simon &amp; Schuster, Embassy Books, Westland &amp; Pan Macmillan, Birkenstock, Volwco, Nooie, Skypearll, HP, Yamaha, Crossbeats, Crossloops, GOQii, JBL, Travel Blue, Lexingham / Travel Blue, Macmerise, Phillips, Portronics, Sekyo, Staunch,Star And Daisy, Thinkerplace, Trakbond, Turet, Ultraprolink, WatchOut Wearables, Zebronics, Chicco, Campus,Crocs, Indian Terrain, Tommy Hilfiger, Allen Solly Juniors, Lilpicks Couture, Chicco Fashion, StarAndDaisy,&nbsp;</span><span><span>GETBEST, Nestasia, Abena, Beaba, Brainsmith, Dreambaby, Red Castle, NumNum, Stokke, The Brushies, Bianca, Sofy, Olay, Whisper.</span></span></div>\r\n<div><span>7.GST applicable on discounted price.</span></div>\r\n<div><span>8.Coupon code cannot be used for purchase of Firstcry Club Membership</span></div>",
        "categories": "Entertainment,Board Games and Toys,Kids and Toddlers,Kids Fashion,Baby Care,Baby Gears",
        "category_array": {
          "Entertainment": [
            "Board Games and Toys"
          ],
          "Kids and Toddlers": [
            "Kids Fashion",
            "Baby Care",
            "Baby Gears"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=2144&c=SALUTE",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D2144%26c%3DSALUTE",
        "image_url": "https://cdn.fcglcdn.com/brainbees/banners/test/MKTGN_HP_SOI_AU_29JAN_202212901730.jpg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-29",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "821252",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 33% Off on Health and Safety Range",
        "offer_value": "33%",
        "title": "Get 33% off",
        "description": "Valid on Health and Safety Range (Maximum discount allowed is &#8377;2000. Not valid on Mask &amp; Sanitizers and few Brands)",
        "code": "SAFE",
        "terms_and_conditions": "",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=4&brandid=0&searchstring=brand&sort=popularity&prodids=3791397,3791398&c=SAFE",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D4%26brandid%3D0%26searchstring%3Dbrand%26sort%3Dpopularity%26prodids%3D3791397%2C3791398%26c%3DSAFE",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-18",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "793070",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 35% OFF on Entire Medela Range",
        "offer_value": "35%",
        "title": "Get 35% Off",
        "description": "This discount is valid on Entire Medela Range (Maximum discount of &#8377;5000 can be availed)",
        "code": "MEDFC35",
        "terms_and_conditions": "<p><span>1. Limited period offer.</span><br /><span>2. User will get flat 35% off on entire Medela range.</span><br /><span>3. Benefits arising post implementation of GST are part of this coupon.</span><br /><span>4 . Maximum discount is &#8377;5000.</span><br /><span>5. Coupon code is valid only on Medela Entire Range&nbsp;</span><span>except feeding bottles</span><br /><span>6.&nbsp;Coupon is not applicable with any other coupon.</span><br /><span>7. Coupon code is applicable only on the MRP of products.</span><br /><span>8. GST applicable on discounted price.</span></p>\r\n<div>9.<span>Coupon code cannot be used for purchase of FirstCry Club Membership</span></div>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=2&brandid=167&searchstring=brand@~37@@@1@0@20@@@@@@@@@@@@@@@@&rating=&sort=Popularity&c=MEDFC35&ref2=Medela_combo0_d_23Oct21_cl",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D2%26brandid%3D167%26searchstring%3Dbrand%40%7E37%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26rating%3D%26sort%3DPopularity%26c%3DMEDFC35%26ref2%3DMedela_combo0_d_23Oct21_cl",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-11-30",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "823925",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Extra 5% discount on all products",
        "offer_value": "5%",
        "title": "Extra 5% discount",
        "description": "Valid on all products (On min. order-value of &#8377;1500. On Payment via SBI Credit Cards only. Maximum discount of &#8377;500 will be offered. Not valid on Corporate &amp; Paytm SBI Credit Cards)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Entertainment,CDs Books and Magazine,Board Games and Toys,Kids and Toddlers,Kids Fashion,School Stuff,Baby Care,Maternity,Baby Gears",
        "category_array": {
          "Entertainment": [
            "CDs Books and Magazine",
            "Board Games and Toys"
          ],
          "Kids and Toddlers": [
            "Kids Fashion",
            "School Stuff",
            "Baby Care",
            "Maternity",
            "Baby Gears"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-24",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "390793",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Avail &#8377;400 Discount on all products",
        "offer_value": "Sign-Up Offer",
        "title": "Get &#8377;400 Discount",
        "description": "Valid on all products (On min. spend of &#8377;1100. Max. Once per user. Only on new registrations. Not valid on Diapers, Combos, Bottles &amp; Accessories and Formula &amp; Supplements and few brands)",
        "code": "",
        "terms_and_conditions": "<div>Terms &amp; Condition</div>\r\n<p><span><span>1. Limited period offer</span><br /><span>2. User will get flat &#8377;400 Off on your order worth &#8377;1100.</span><br /><span>3. Coupon code is valid only for New user.</span><br /><span>4. Coupon code can be used only once and is not applicable with any other coupon.</span><br /><span>5. Coupon code is applicable on MRP of Products.</span><br /><span>6. Coupon code is not valid on&nbsp;</span><span>Diapers, Combos, Bottles &amp; Accessories and Formula &amp; Supplements and brands&nbsp;</span><span>Charlie Banana, Foscam, Melissa &amp; Doug, Motorola, Figaro, Tupperware, Wanna Party, Bio Oil, BeCool, Alex Daisy, Jane, Chicco, Enfagrow, Xbox,&nbsp;</span><span><span>Sony Playstation, Pediasure, Horlicks, Protinex, Nestle.&nbsp;</span></span><span><span>For more T&amp; C's,&nbsp;</span></span><a href=\"http://www.firstcry.com/TermsofUse.aspx#hd3\" target=\"_\">Click Here</a><br /><span>7. GST extra on discounted price.</span></span></p>",
        "categories": "Entertainment,Board Games and Toys,Kids and Toddlers,Kids Fashion,School Stuff,Baby Care,Maternity,Baby Gears",
        "category_array": {
          "Entertainment": [
            "Board Games and Toys"
          ],
          "Kids and Toddlers": [
            "Kids Fashion",
            "School Stuff",
            "Baby Care",
            "Maternity",
            "Baby Gears"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/?&c=FT400D",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2F%3F%26c%3DFT400D",
        "image_url": "http://cdn.firstcry.com/brainbees/banners/WO_All_1302.jpg",
        "type": "Deal",
        "offer": "Sign-Up",
        "status": "active",
        "start_date": "2019-04-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "390791",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Avail &#8377;400 discount on Premium products",
        "offer_value": "Sign-Up Offer",
        "title": "Flat &#8377;400 OFF",
        "description": "Valid on Premium products (On shopping of &#8377;1100+. For new customers only. Not valid on Diapers, Combos, Bottles &amp; Accessories ,Formula &amp; Supplements and few brands)",
        "code": "PREMIUM400",
        "terms_and_conditions": "<div>Terms &amp; Condition</div>\r\n<p>1. Limited Period Offer.<br />2. Coupon code applicable on MRP of the products.<br />3. User will get flat &#8377;400 Off on premium brands with minimum purchases worth &#8377;1100.<br />4. Coupon code is valid only for first premium store purchase.<br />5. Coupon can be used only once and is not applicable with any other coupon.<br />6. Coupon code is not valid on Diapers, Combos, Bottles &amp; Accessories ,Formula &amp; Supplements and brands Charlie Banana, Foscam, Melissa &amp; Doug, Motorola, Patanjali, Pinehill, Tupperware, Wanna Party, Bio Oil, BeCool, Alex Daisy, Jane, Chicco, Enfagrow and Wudplay. For more T&amp; C's,&nbsp;<a href=\"http://www.firstcry.com/TermsofUse.aspx#b3\" target=\"_\">Click Here</a><br />7. Applicable taxes extra on discounted price. Please refer&nbsp;<a href=\"http://www.firstcry.com/termsofuse#hd3\" target=\"_\">Terms of Use</a>&nbsp;for full details.</p>",
        "categories": "Entertainment,Board Games and Toys,Kids and Toddlers,Kids Fashion,School Stuff,Baby Care,Maternity,Baby Gears",
        "category_array": {
          "Entertainment": [
            "Board Games and Toys"
          ],
          "Kids and Toddlers": [
            "Kids Fashion",
            "School Stuff",
            "Baby Care",
            "Maternity",
            "Baby Gears"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/boutiques?&c=PREMIUM400",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fboutiques%3F%26c%3DPREMIUM400",
        "image_url": "http://cdn.firstcry.com/brainbees/banners/FO_PremiumOffer.jpg",
        "type": "Code",
        "offer": "Sign-Up",
        "status": "active",
        "start_date": "2019-04-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "821256",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "50% discount on Select range",
        "offer_value": "50%",
        "title": "Get Flat 50% OFF",
        "description": "Valid on Select range (Max. Once per user. Maximum &#8377;5000 discount is allowed. Not valid on Feeding Bottle &amp; Teats, Infant formula and few brands)",
        "code": "TRI50",
        "terms_and_conditions": "",
        "categories": "Kids and Toddlers,Baby Gears",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Gears"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=33004&c=TRI50&ref2=6c_jazzydeals_flat50",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D33004%26c%3DTRI50%26ref2%3D6c_jazzydeals_flat50",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-18",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "811727",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "35% Off on Entire Mom and Maternity Range",
        "offer_value": "35%",
        "title": "Flat 35% discount",
        "description": "Valid on Entire Mom and Maternity Range (Maximum discount of &#8377;5000 will be applicable.00. Not valid on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; Brands Tango, Cherokee, Colt, Donut, Karigari, U.S. Polo Assn, U.S. Polo Assn Kids, &amp; JOCKEY. Only for club members)",
        "code": "MOMFS",
        "terms_and_conditions": "<div><span>1. Limited Period Offer.</span></div>\r\n<div><span>2. Max discount is &#8377;5000.</span></div>\r\n<div><span>3. Coupon is not applicable on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; Brands Tango, Cherokee, Colt, Donut, Karigari, U.S. Polo Assn, U.S. Polo Assn Kids, &amp; JOCKEY.</span></div>\r\n<div><span>4. Coupon code is not applicable with any other coupon.</span></div>\r\n<div><span>5. Benefits arising post implementation of GST are part of this coupon.</span></div>\r\n<div><span>6. Coupon code is applicable on the MRP of the products.</span></div>\r\n<div><span>7. GST applicable on discounted price.</span></div>\r\n<div><span>8. Coupon code cannot be used for purchase of FirstCry Club Membership.</span></div>",
        "categories": "Kids and Toddlers,Maternity",
        "category_array": {
          "Kids and Toddlers": [
            "Maternity"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=6&brandid=0&searchstring=brand@~246~170~168~165~164~269~243~166~220~221~267~219~26@@@1@0@20@@@@@@@@@@@@@@@&sort=BestSeller&ref2=MOASFashion35_01_combo0_d_08Jul21_cl&c=MOMFS",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D6%26brandid%3D0%26searchstring%3Dbrand%40%7E246%7E170%7E168%7E165%7E164%7E269%7E243%7E166%7E220%7E221%7E267%7E219%7E26%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26sort%3DBestSeller%26ref2%3DMOASFashion35_01_combo0_d_08Jul21_cl%26c%3DMOMFS",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-07-09",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "825529",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Free Shipping on Babyhug Diapers",
        "offer_value": "Free",
        "title": "Free Shipping",
        "description": "This promotional offer is valid on Babyhug Diapers (On minimum shopping of &#8377;249)",
        "code": "BHFREESHIP",
        "terms_and_conditions": "<div>Terms &amp; Condition</div>\r\n<p>&nbsp;</p>\r\n<div>\r\n<div>\r\n<div>1. User will get free shipping on select Babyhug Diaper Pants</div>\r\n<div>2. Limited period offer</div>\r\n<div>3. Coupon code is valid on Babyhug Diaper Pants.</div>\r\n<div>4. To place an order the minimum order value has to be more than INR 249/- (Excluding Shipping Charges &amp; Taxes)&nbsp;</div>\r\n<div>5. Coupon can be used only once and is not applicable with any other coupon.</div>\r\n<div>6. Coupon code cannot be used for purchase of FirstCry Club Membership.</div>\r\n<div>7. GST applicable on discounted price.</div>\r\n</div>\r\n</div>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=31804&c=BHFREESHIP",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D31804%26c%3DBHFREESHIP",
        "image_url": "",
        "type": "Code",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "825505",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 33% off on Feeding &amp; Nursing Range",
        "offer_value": "33%",
        "title": "33% OFF",
        "description": "Valid on Feeding &amp; Nursing Range (Max. Once per user. Max. discount of &#8377;1500 will be offered. Not valid on Bottles &amp; Accessories, Formula &amp; Supplements, Infant Formula and few Brands)",
        "code": "FEEDN",
        "terms_and_conditions": "<div>\r\n<div><span><span><strong><u>For All Users:</u></strong></span></span></div>\r\n<div><span>1.User will get flat 33% Off on Entire Site or on-site discount whichever is higher.</span></div>\r\n<div><span>2.Max discount is &#8377;1500.</span></div>\r\n<div><span>&nbsp;</span></div>\r\n<div><span><span><strong><u>More T&amp;C's:</u></strong></span></span></div>\r\n</div>\r\n<p><span><span>1. Limited Period Offer.</span></span><br /><span><span>2. Benefits arising post implementation of GST are part of this coupon.</span></span><br /><span><span>3. Coupon code is valid only on Feeding &amp; Nursing except Bottles &amp; Accessories,&nbsp;</span></span><span><span>Formula &amp; Supplements, Infant Formula and Brands Dermadew, Tango, Nestle, Protinex, PediaSure, Figaro, Motorola, Horlicks, Foscam, Alex Daisy, Bio Oil, Jane, Vaux,SeTracker, DMR, Miniwash, Masilo-Linen For Littles, Shesha Naturals, IFITech,Johnson's baby,Melissa &amp; Doug,Hamdard,Complan,Shumee,Masilo,Fancy Fluff,StarAndDaisy,Osasbazaar.</span></span><br /><span><span>4. Coupon code is not applicable with any other coupon and can be used only once per user.</span></span><br /><span><span>5. Coupon code is applicable only on the MRP of products.</span></span><br /><span><span>6. GST applicable on discounted price.</span></span></p>\r\n<div>7. Coupon Code is not applicable on these brands: .</div>",
        "categories": "Kids and Toddlers,Baby Care,Baby Gears",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care",
            "Baby Gears"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=1520&c=FEEDN",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D1520%26c%3DFEEDN",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "800820",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 30% OFF on Entire Bella Mama Fashion Range",
        "offer_value": "30%",
        "title": "Flat 30% discount",
        "description": "This discount is valid on Entire Bella Mama Fashion Range (Max. &#8377;5000 discount)",
        "code": "BELLA",
        "terms_and_conditions": "<div>1. Limited Period Offer.</div>\r\n<div>2. Max discount is &#8377;5000.</div>\r\n<div>3. Coupon is not applicable on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; Brands Tango, Cherokee, Colt, Donut, Karigari, U.S. Polo Assn, U.S. Polo Assn Kids, &amp; JOCKEY.</div>\r\n<div>4. Coupon code is not applicable with any other coupon.</div>\r\n<div>5. Benefits arising post implementation of GST are part of this coupon.</div>\r\n<div>6. Coupon code is applicable on the MRP of the products.</div>\r\n<div>7. GST applicable on discounted price.</div>\r\n<div>8. Coupon code cannot be used for purchase of FirstCry Club Membership</div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=1656&ref=ie16AugOne_NClub&utm_source=iemail&utm_medium=email&utm_content=16AugOne_NClub_Bella&c=BELLA",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D1656%26ref%3Die16AugOne_NClub%26utm_source%3Diemail%26utm_medium%3Demail%26utm_content%3D16AugOne_NClub_Bella%26c%3DBELLA",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-08-16",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "825501",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 50% off on 3 Books Range",
        "offer_value": "50%",
        "title": "Flat 50% discount",
        "description": "This promotional offer is valid on 3 Books Range (Maximum &#8377;5000 discount will be applied)",
        "code": "B3G50BK",
        "terms_and_conditions": "<div>Terms &amp; Condition</div>\r\n<p>&nbsp;</p>\r\n<div>\r\n<div>\r\n<div>1. User will get Flat 50% Off on 3 or more products</div>\r\n<div><span><span>2. Limited Period Offer.</span></span></div>\r\n<div><span><span>3. Max discount is &#8377;5000.</span></span></div>\r\n<div><span><span>4. Coupon is valid on select Books Range</span></span></div>\r\n<div><span><span>5. Coupon code is not applicable with any other coupon.</span></span></div>\r\n<div><span><span>6. Benefits arising post implementation of GST are part of this coupon.</span></span></div>\r\n<div><span><span>7. Coupon code is applicable on the MRP of the products.</span></span></div>\r\n<div><span><span>8. GST applicable on discounted price.</span></span></div>\r\n</div>\r\n</div>",
        "categories": "Entertainment,CDs Books and Magazine",
        "category_array": {
          "Entertainment": [
            "CDs Books and Magazine"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=33006&sort=bestseller&c=B3G50BK",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D33006%26sort%3Dbestseller%26c%3DB3G50BK",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "826098",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "35% Off on Pampers Baby Diapers",
        "offer_value": "35%",
        "title": "35% discount",
        "description": "This voucher is valid on Pampers Baby Diapers (Maximum &#8377;1000 discount will be applicable)",
        "code": "PMJAN35",
        "terms_and_conditions": "<p><span>1. Limited Period Offer.</span></p>\r\n<p><span>2.User will get flat 35% off on select Pampers Range (doesn't include Pampers Pure).</span></p>\r\n<p><span>3. The coupon code is only applicable for products below 35% discount.</span></p>\r\n<p><span>4. Coupon code is not valid on combos.</span></p>\r\n<p><span>5. Maximum discount is &#8377;1000.</span></p>\r\n<p><span>6. Coupon is applicable on MRP of products.</span></p>\r\n<p>7. Coupon code cannot be used for purchase for FirstCry Club Membership.</p>\r\n<p><span>8. GST applicable on discounted price.</span></p>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=31600&c=PMJAN35",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D31600%26c%3DPMJAN35",
        "image_url": "https://cdn.fcglcdn.com/brainbees/banners/test/PampersBonanza_PremiumNY_Flat35_DP_HP_994x399_2022127102724.jpg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-29",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "390792",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Flat 50% OFF on all products",
        "offer_value": "50%",
        "title": "Get 50% off",
        "description": "Valid on all products (On order-value of &#8377;1199+. Max. Once per user. Only using Mobile App. Max. &#8377;400 discount is applicable. Not valid on Diapers, Combos, Bottles &amp; Accessories and Formula &amp; Supplements and brands)",
        "code": "FT50APP",
        "terms_and_conditions": "",
        "categories": "Entertainment,Board Games and Toys,Kids and Toddlers,Kids Fashion,School Stuff,Baby Care,Maternity,Baby Gears",
        "category_array": {
          "Entertainment": [
            "Board Games and Toys"
          ],
          "Kids and Toddlers": [
            "Kids Fashion",
            "School Stuff",
            "Baby Care",
            "Maternity",
            "Baby Gears"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/appdownload?&c=FT50APP",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fappdownload%3F%26c%3DFT50APP",
        "image_url": "http://cdn.firstcry.com/brainbees/banners/WO_APP_1302.jpg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2019-04-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "809594",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "35% discount on Charlie Banana Diapers",
        "offer_value": "35%",
        "title": "Get 35% Discount",
        "description": "This voucher is valid on Charlie Banana Diapers (Max. Once per user. Max. &#8377;1500 discount will be offered)",
        "code": "CHARLIE35",
        "terms_and_conditions": "<p><span>1. Limited period offer</span><br /><span>2. User will get Flat 35% OFF on Charlie Banana Diapers&nbsp;</span><span>&amp; Accessories.</span><br /><span>3. Maximum Discount amount is &#8377;1500.</span><br /><span>4. Coupon code is valid on&nbsp;</span><span>Charlie Banana Diapers &amp; Accessories.</span></p>\r\n<div>\r\n<div>5. Coupon can be used only once and is not applicable with any other coupon.</div>\r\n<div>6. Coupon code cannot be used for purchase of FirstCry Club Membership.</div>\r\n<div>7. Coupon code is applicable on the MRP of the products.<br />8. GST applicable on discounted price.</div>\r\n</div>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/charlie-banana/0/0/1000912?sort=BestSeller&c=CHARLIE35&ref2=CharlieBananaUpto35_off_combo0_d_09Nov21_cl",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fcharlie-banana%2F0%2F0%2F1000912%3Fsort%3DBestSeller%26c%3DCHARLIE35%26ref2%3DCharlieBananaUpto35_off_combo0_d_09Nov21_cl",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-12-28",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "809579",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 35% off on Women&#039;s Personal Care and Moms &amp; Maternity",
        "offer_value": "35%",
        "title": "Get 35% off",
        "description": "Valid on Women&#039;s Personal Care and Moms &amp; Maternity (Maximum &#8377;3500 discount will be applicable. Not valid on select brands, Sanitizers and Masks)",
        "code": "WCARE",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care,Kids and Toddlers,Maternity",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ],
          "Kids and Toddlers": [
            "Maternity"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=78&brandid=0&searchstring=brand@~875~873~874@@@1@0@20@@@@@@@@@@@@@@@@&sort=popularity&ref2=WPC_05_11_2021_combo0_d_05Nov21_cl&c=WCARE",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D78%26brandid%3D0%26searchstring%3Dbrand%40%7E875%7E873%7E874%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26sort%3Dpopularity%26ref2%3DWPC_05_11_2021_combo0_d_05Nov21_cl%26c%3DWCARE",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-12-28",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "820515",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "50% Off on Selected Fashion Range",
        "offer_value": "50%",
        "title": "Avail 50% off",
        "description": "Valid on Selected Fashion Range (Max. discount of &#8377;5000)",
        "code": "KMHP50",
        "terms_and_conditions": "<div><span>1.User will get flat 50% off on Select Fashion Range or on-site discount whichever is higher.</span></div>\r\n<div><span>2. Limited Period Offer.</span></div>\r\n<div><span>3. Max discount is &#8377;5000.</span></div>\r\n<div><span>4. Coupon is not applicable on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; Brands Tango, Cherokee, Colt, Donut, Karigari, U.S. Polo Assn, U.S. Polo Assn Kids, &amp; JOCKEY.</span></div>\r\n<div><span>5. Coupon code is not applicable with any other coupon.</span></div>\r\n<div><span>6. Benefits arising post implementation of GST are part of this coupon.</span></div>\r\n<div><span>7. Coupon code is applicable on the MRP of the products.</span></div>\r\n<div><span>8. GST applicable on discounted price.</span></div>\r\n<div><span>9. Coupon code cannot be used for purchase of FirstCry Club Membership.</span></div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=32449&sort=bestseller&c=KMHP50&ref2=Kookie_Kids_MerchF_combo0_d_12Oct21_cl",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D32449%26sort%3Dbestseller%26c%3DKMHP50%26ref2%3DKookie_Kids_MerchF_combo0_d_12Oct21_cl",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-10-19",
        "end_date": "2022-02-08"
      },
      {
        "lmd_id": "826097",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Upto 42% OFF on Superhit Fashion Brands",
        "offer_value": "42%",
        "title": "Up to 42% Discount",
        "description": "This voucher is applicable on Superhit Fashion Brands (Max. &#8377;5000 discount can be availed)",
        "code": "RPSFB",
        "terms_and_conditions": "<div><span><span>For Club Members:</span></span></div>\r\n<div><span>User will get Flat 42% Off on Select Brands or on-site discount whichever is higher.</span></div>\r\n<div><span><span>&nbsp;</span></span></div>\r\n<div><span><span>For All Users:</span></span></div>\r\n<div><span>User will get Flat 40% Off on Select Brands or on-site discount whichever is higher.</span></div>\r\n<div><span><span>&nbsp;</span></span></div>\r\n<div><span><span>More T&amp;C's:</span></span></div>\r\n<div><span><span>1. Limited Period Offer.</span></span></div>\r\n<div><span><span>2. Max discount is &#8377;5000.</span></span></div>\r\n<div><span><span>3. Coupon is valid only on Select Brands.</span></span></div>\r\n<div><span><span>4. Offer valid only on the listed sizes &amp; colors of the products featured on the page.</span></span></div>\r\n<div><span><span>5. Coupon code is not applicable with any other coupon.</span></span></div>\r\n<div><span><span>6. Benefits arising post implementation of GST are part of this coupon.</span></span></div>\r\n<div><span><span>7. Coupon code is applicable on the MRP of the products.</span></span></div>\r\n<div><span><span>8. GST applicable on discounted price.</span></span></div>\r\n<div><span><span>9. Coupon code cannot be used for purchase of FirstCry Club Membership.</span></span></div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=2133&sort=Bestseller&c=RPSFB",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D2133%26sort%3DBestseller%26c%3DRPSFB",
        "image_url": "https://cdn.fcglcdn.com/brainbees/banners/test/Desktop_Hp_Superhit-fashion-deal%20-%201_20221141695.jpg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-29",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "826488",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 35% discount on Entire Fashion Range",
        "offer_value": "35%",
        "title": "Get 35% off",
        "description": "Valid on Entire Fashion Range (Max. &#8377;5000 discount will be applied. Not valid on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; few Brands)",
        "code": "RPSFSH",
        "terms_and_conditions": "<div><span><span>For All Users:</span></span></div>\r\n<div><span><span>User will get flat 35% Off on Entire Fashion Range or on-site discount whichever is higher.</span></span></div>\r\n<div><span><span>&nbsp;</span></span></div>\r\n<div><span><span>More T&amp;C's:</span></span></div>\r\n<div><span><span>1. Limited Period Offer.</span></span></div>\r\n<div><span><span>2. Maximum discount is &#8377;5000.</span></span></div>\r\n<div><span><span>3. Coupon is not applicable on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; Brands Chicco Fashion, Tango, Cherokee, Colt, Donut, Karigari, U.S. Polo Assn, U.S. Polo Assn Kids, Birkenstock, Crocs, Lilpicks Couture, Converse, Jordan, Levi's, Nike &amp; Jockey.</span></span></div>\r\n<div><span><span>4. Coupon code is not applicable with any other coupon.</span></span></div>\r\n<div><span><span>5. Benefits arising post implementation of GST are part of this coupon.</span></span></div>\r\n<div><span><span>6. Coupon code is applicable on the MRP of the products.</span></span></div>\r\n<div><span><span>7. GST applicable on discounted price.</span></span></div>\r\n<div><span><span>8. Coupon code cannot be used for purchase of FirstCry Club Membership.</span></span></div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=2133&c=RPSFSH",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D2133%26c%3DRPSFSH",
        "image_url": "https://cdn0.cuelinks.com/merchant/47/medium/FC-Logo-big_store_tagline.png?1582718962",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-29",
        "end_date": "2022-03-01"
      },
      {
        "lmd_id": "820519",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "33% discount on Health &amp; Safety",
        "offer_value": "33%",
        "title": "Get 33% Discount",
        "description": "This offer is applicable on Health &amp; Safety (Max. discount of &#8377;1500)",
        "code": "HSAFE35",
        "terms_and_conditions": "<p><span><span>1. Offer is valid for Limited Period.</span></span><br /><span><span>2. Benefits arising post implementation of GST are part of this coupon.</span></span><br /><span><span>3. Coupon code is not valid on Combos, Sanitizer and Brands - Dabur, Johnson's Baby, Dettol, Bella, Hamdard, SeTracker, IFITech, Motorola, DMR MiniWash,&nbsp; Masilo,&nbsp; TigerTech, Foscam &nbsp; .</span></span><br /><span><span>4. Coupon can be used only once and is not applicable with any other coupon.</span></span><br /><span><span>5. Coupon code is applicable only on the MRP of products.</span></span><br /><span><span>6. GST applicable on discounted price.</span></span></p>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=1422&c=HSAFE35&ref2=Health_Safety_combo0_d_08Jul21_cl",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D1422%26c%3DHSAFE35%26ref2%3DHealth_Safety_combo0_d_08Jul21_cl",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-09-15",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "805231",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Flat 35% off on Selected Fashion Range",
        "offer_value": "35%",
        "title": "Avail Flat 35% off",
        "description": "This promotional offer is valid on Selected Fashion Range (Maximum discount of &#8377;5000 will be offered)",
        "code": "WINBH",
        "terms_and_conditions": "<div><span>1. Limited Period Offer.</span></div>\r\n<div><span>2. Max discount is &#8377;5000.</span></div>\r\n<div><span>3. Coupon is not applicable on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; Brands Tango, Cherokee, Colt, Donut, Karigari, U.S. Polo Assn, U.S. Polo Assn Kids, &amp; JOCKEY.</span></div>\r\n<div><span>4. Coupon code is not applicable with any other coupon.</span></div>\r\n<div><span>5. Benefits arising post implementation of GST are part of this coupon.</span></div>\r\n<div><span>6. Coupon code is applicable on the MRP of the products.</span></div>\r\n<div><span>7. GST applicable on discounted price.</span></div>\r\n<div><span>8. Coupon code cannot be used for purchase of FirstCry Club Membership.</span></div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=32527&c=WINBH&ref2=MechF_babyhug_0_4_Winter_combo0_d_10Dec21_cl",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D32527%26c%3DWINBH%26ref2%3DMechF_babyhug_0_4_Winter_combo0_d_10Dec21_cl",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-12-13",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "778366",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 30% Discount on Selected Categories",
        "offer_value": "30%",
        "title": "Get Flat 30% OFF",
        "description": "Applicable on Selected Categories (Max. &#8377;5000 discount is allowed)",
        "code": "SALEMOM",
        "terms_and_conditions": "<p><span>1. Limited Period Offer.</span><br /><span>2. Coupon is valid on Select Categories (Bath &amp; Skin, Women's Personal Care, Moms and Maternity, Books, Gifts and School Supplies).</span><br /><span>3. Max Discount is &#8377;5000</span><br /><span>4.Coupon code is not valid on Combos, Bottles &amp; Accessories and Formula &amp; Supplements, Innerwear &amp; Thermals, Socks &amp; Tights Swimwear, Bath Tubs and brands Meemee Select Baby Gear Range,Joie,Dabur, Enfagrow, Whisper, Olay, Aveeno, Pantene, Head &amp; Shoulder, Neutrogena, Organic India, Johnson's Baby, Dettol, Bella, Hamdard, Duracell, Complan, Ryca, Fancy Fluff, Pampers Active Baby, Pampers Dry, Intellikit Trial Kits, Dermadew, Tango, Nestle, Protinex, PediaSure, Figaro, Motorola, Melissa &amp; Doug, Horlicks, Foscam, Alex Daisy, Bio Oil, Jane, Vaux, SeTracker, DMR, Miniwash, Masilo-Linen For Littles, Shesha Naturals, IFITech,Shumee,Duroflex,Bianca .</span><br /><span>5. Benefits arising post implementation of GST are part of this coupon.</span><br /><span>6. Coupon is not applicable with any other coupon.</span><br /><span>7. Coupon Code is applicable only on the MRP of products.</span><br /><span>8. GST applicable on discounted price.</span></p>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=1516&c=SALEMOM&ref2=Bath_Skin_Flat35_combo0_d_08Jul21_cl",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D1516%26c%3DSALEMOM%26ref2%3DBath_Skin_Flat35_combo0_d_08Jul21_cl",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-08-27",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "800814",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 35% discount on Women&#039;s Personal Care",
        "offer_value": "35%",
        "title": "Avail Flat 35% off",
        "description": "Valid on Women&#039;s Personal Care (Max. &#8377;3500 discount. Not valid on Sanitizers and Masks, and on few Brands)",
        "code": "WPC35HP",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=78&brandid=0&searchstring=brand@@@@1@0@20@@@@@@@@@@@@@@@@&sort=bestseller&c=WPC35HP&ref2=WomenPersonalCare_combo0_d_15Apr21_WPC35HP",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D78%26brandid%3D0%26searchstring%3Dbrand%40%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26sort%3Dbestseller%26c%3DWPC35HP%26ref2%3DWomenPersonalCare_combo0_d_15Apr21_WPC35HP",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-06-28",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "809567",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 33% Off on Health and Safety",
        "offer_value": "33%",
        "title": "33% off",
        "description": "Valid on Health and Safety (Max. Once per user. Maximum &#8377;3000 discount will be applicable. Not valid on Sanitizer and few Brands)",
        "code": "HSAFE",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care,Kids and Toddlers,Baby Care",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ],
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=1726&c=HSAFE&ref2=HealthEssStore_18_09_2021_combo0_d_18Sep21_cl",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D1726%26c%3DHSAFE%26ref2%3DHealthEssStore_18_09_2021_combo0_d_18Sep21_cl",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-12-28",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "809568",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 35% Off on Entire Phillips Avent Range",
        "offer_value": "35%",
        "title": "Avail 35% discount",
        "description": "Valid on Entire Phillips Avent Range (Max. &#8377;5000 discount will be applied. Not valid on Combos, Infant feeding, Bottles &amp; Accessories, Formula &amp; Supplements)",
        "code": "AVFSTN35",
        "terms_and_conditions": "<p><span>1. Limited period offer.</span><br /><span>2. User will get flat 35% Off on Entire Phillips Avent Range.</span><br /><span>3. Maximum discount is &#8377;5000</span><br /><span>4. Benefits arising post implementation of GST are part of this&nbsp; coupon.</span><br /><span>5. Coupon code is&nbsp;</span><span>not applicable on Combos, Infant feeding, Bottles &amp; Accessories, Formula &amp; Supplements.</span><br /><span>6. Coupon code is not applicable with any other coupon.</span><br /><span>7. Coupon code is applicable on the MRP of products.</span><br /><span>8.&nbsp;</span><span>GST applicable on discounted price.</span></p>\r\n<div><span>9.</span><span>Coupon code cannot be used for purchase of FirstCry Club Membership</span></div>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=2&brandid=20&searchstring=brand@~37~32~454~34~452~98@@@1@0@20@@@@@@@@@@@@@@@@&rating=&sort=Popularity&c=AVFSTN35&ref2=Avent_combo0_d_18Jun21_AVFSTN35_ncl",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D2%26brandid%3D20%26searchstring%3Dbrand%40%7E37%7E32%7E454%7E34%7E452%7E98%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26rating%3D%26sort%3DPopularity%26c%3DAVFSTN35%26ref2%3DAvent_combo0_d_18Jun21_AVFSTN35_ncl",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-12-28",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "825525",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "50% off on Entire Phillips Avent Range",
        "offer_value": "50%",
        "title": "50% Discount",
        "description": "Valid on Entire Phillips Avent Range (Max. discount of &#8377;5000 can be availed. Not valid on Combos, Infant feeding, Bottles &amp; Accessories, Formula &amp; Supplements.)",
        "code": "AVFSTN50",
        "terms_and_conditions": "<p><span>1. Limited period offer.</span><br /><span>2. User will get flat 50% Off on Entire Phillips Avent Range.</span><br /><span>3. Maximum discount is &#8377;5000</span><br /><span>4. Benefits arising post implementation of GST are part of this&nbsp; coupon.</span><br /><span>5. Coupon code is&nbsp;</span><span>not applicable on Combos, Infant feeding, Bottles &amp; Accessories, Formula &amp; Supplements.</span><br /><span>6. Coupon code is not applicable with any other coupon.</span><br /><span>7. Coupon code is applicable on the MRP of products.</span><br /><span>8.&nbsp;</span><span>GST applicable on discounted price.</span></p>\r\n<div><span>9.</span><span>Coupon code cannot be used for purchase of FirstCry Club Membership</span></div>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=2&brandid=20&searchstring=brand@@@@1@0@20@@@@@@@@@@@@@@@@&rating=&sort=popularity&prodids=4340,10431,9051892&c=AVFSTN50",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D2%26brandid%3D20%26searchstring%3Dbrand%40%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26rating%3D%26sort%3Dpopularity%26prodids%3D4340%2C10431%2C9051892%26c%3DAVFSTN50",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "821260",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 50% off on Select Fashion Range",
        "offer_value": "50%",
        "title": "Flat 50% OFF",
        "description": "Valid on Select Fashion Range (Maximum discount of &#8377;5000 will be applicable. Not valid on infant feeding, Bottles, Inner Wear and few products)",
        "code": "RPS50",
        "terms_and_conditions": "<div><span>1.&nbsp;</span><span>User will get flat 50% off on Select Brands or on-site discount whichever is higher.&nbsp;</span><span>Max discount is &#8377;5000.</span></div>\r\n<div><span>2. Coupon is not applicable on&nbsp;infant feeding, Bottles &amp; Accessories, Formula &amp; Supplements,&nbsp;</span><span>Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear</span><span>.</span></div>\r\n<div><span>3. Coupon code is not applicable with any other coupon.</span></div>\r\n<div><span>4. Benefits arising post implementation of GST are part of this coupon.</span></div>\r\n<div><span>5. Coupon code is applicable on the MRP of the products.</span></div>\r\n<div><span>6. GST applicable on discounted price.</span></div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=32165&sort=Bestseller&c=RPS50&ref2=MktgFashion_SOIS_default_Sec5_BigDeals_50off",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D32165%26sort%3DBestseller%26c%3DRPS50%26ref2%3DMktgFashion_SOIS_default_Sec5_BigDeals_50off",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-18",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "778473",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 38% off on Select Fashion Range",
        "offer_value": "38%",
        "title": "Get Flat 38% off",
        "description": "Valid on Select Fashion Range (Max. &#8377;5000 discount will be offered. Not valid on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; few Brands)",
        "code": "STHWIN",
        "terms_and_conditions": "",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=32468&sort=bestseller&c=STHWIN&ref2=WinterSouth_combo0_d_20Oct21_cl_834",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D32468%26sort%3Dbestseller%26c%3DSTHWIN%26ref2%3DWinterSouth_combo0_d_20Oct21_cl_834",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-10-27",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "793080",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Avail Flat 40% Discount on Toffyhouse",
        "offer_value": "40%",
        "title": "Get Flat 40% off",
        "description": "This promotional offer is valid on Toffyhouse (Maximum discount of &#8377;2000 will be applied)",
        "code": "TOFFY40",
        "terms_and_conditions": "<p><span>1. Limited Period Offer.<br />2. User will get Flat 40% on&nbsp;</span><span><span>Toffyhouse</span><span>.</span></span><br /><span><span>3.&nbsp;Benefits arising post implementation of GST are part of this coupon.</span></span><br /><span><span>4. Maximum discount is &#8377;2000 on Toffyhouse.</span></span><br /><span><span>5. Coupon is not applicable with any other coupon.</span></span><br /><span><span>6. Coupon code is applicable only on the MRP of products.</span></span><br /><span><span>7. GST applicable on discounted price.</span></span></p>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=6&brandid=361&sort=bestseller&c=TOFFY40&ref2=Toffy_house_combo0_d_14Oct21_cl",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D6%26brandid%3D361%26sort%3Dbestseller%26c%3DTOFFY40%26ref2%3DToffy_house_combo0_d_14Oct21_cl",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-11-30",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "809551",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Avail 35% off on Entire Fashion Range",
        "offer_value": "35%",
        "title": "Flat 35% OFF",
        "description": "Valid on Entire Fashion Range (Maximum &#8377;5000 discount can be availed. Not valid on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; few Brands)",
        "code": "MSLFSH",
        "terms_and_conditions": "<div><span><span>1. Limited Period Offer.</span></span></div>\r\n<div><span><span>2. Maximum discount is &#8377;5000.</span></span></div>\r\n<div><span><span>3. Coupon is not applicable on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; Brands Chicco Fashion, Tango, Cherokee, Colt, Donut, Karigari, U.S. Polo Assn, U.S. Polo Assn Kids, Birkenstock, Crocs, Lilpicks Couture, Converse, Jordan, Levi's, Nike &amp; Jockey.</span></span></div>\r\n<div><span><span>4. Coupon code is not applicable with any other coupon.</span></span></div>\r\n<div><span><span>5. Benefits arising post implementation of GST are part of this coupon.</span></span></div>\r\n<div><span><span>6. Coupon code is applicable on the MRP of the products.</span></span></div>\r\n<div><span><span>7. GST applicable on discounted price.</span></span></div>\r\n<div><span><span>8. Coupon code cannot be used for purchase of FirstCry Club Membership.</span></span></div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=1987&ref2=MOASFashion35_01_combo0_d_15Dec21_cl&c=MSLFSH",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D1987%26ref2%3DMOASFashion35_01_combo0_d_15Dec21_cl%26c%3DMSLFSH",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-12-28",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "800813",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 35% Discount on Diapers",
        "offer_value": "35%",
        "title": "Get Flat 35% OFF",
        "description": "Valid on Diapers (Max. Once per user. Maximum &#8377;1000 discount is allowed. Not valid on Combos and few Brands)",
        "code": "DB35CARE",
        "terms_and_conditions": "",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=1493&c=DB35CARE&ref2=Diapering_30_06_21_combo0_d_30Jun21_cl",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D1493%26c%3DDB35CARE%26ref2%3DDiapering_30_06_21_combo0_d_30Jun21_cl",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-07-05",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "804661",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Avail Additional 5% off on most products",
        "offer_value": "5%",
        "title": "Get Additional 5% Discount",
        "description": "Valid on most products (On order of &#8377;2499+. Maximum discount allowed is &#8377;1500. Not valid on infant feeding, Bottles &amp; Accessories, Formula &amp; Supplements, Innerwear &amp; Thermals, Socks &amp; Tights, School Supplies and few brands)",
        "code": "GET5",
        "terms_and_conditions": "",
        "categories": "Entertainment,Board Games and Toys,Kids and Toddlers,Kids Fashion,Baby Care,Baby Gears",
        "category_array": {
          "Entertainment": [
            "Board Games and Toys"
          ],
          "Kids and Toddlers": [
            "Kids Fashion",
            "Baby Care",
            "Baby Gears"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/?c=GET5&ref2=11_look-book_temppos-8_extra-5-off-_banpos-2",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2F%3Fc%3DGET5%26ref2%3D11_look-book_temppos-8_extra-5-off-_banpos-2",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-04-27",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "825520",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 50% Off on Babyoye Carter&#039;s And Kookie Kids",
        "offer_value": "50%",
        "title": "Get 50% Discount",
        "description": "Applicable on Babyoye Carter&#039;s And Kookie Kids (Maximum &#8377;3000 discount will be applicable)",
        "code": "REPCBK50",
        "terms_and_conditions": "<div>Terms &amp; Condition</div>\r\n<p>&nbsp;</p>\r\n<div>\r\n<div>1. Limited Period Offer.</div>\r\n<div>2. Offer valid only on the listed sizes &amp; colors of the products featured on the page.</div>\r\n<div>3. User will get Flat 50% Off* or on-site discount whichever is higher.</div>\r\n<div>4. Maximum discount is &#8377;3000.</div>\r\n<div>5. Coupon code is not applicable with any other coupon.</div>\r\n<div>6. Benefits arising post implementation of GST are part of this coupon.</div>\r\n<div>7. Coupon code is applicable on the MRP of the products.</div>\r\n<div>8. GST applicable on discounted price.</div>\r\n<div>&nbsp;</div>\r\n</div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=32926&sort=bestseller&c=REPCBK50",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D32926%26sort%3Dbestseller%26c%3DREPCBK50",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "825515",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 40% Discount on Fashion Brands",
        "offer_value": "40%",
        "title": "Flat 40% Discount",
        "description": "This voucher is applicable on Fashion Brands (Maximum &#8377;5000 discount will be offered)",
        "code": "MSLSFB",
        "terms_and_conditions": "<div><span><span>More T&amp;C's:</span></span></div>\r\n<div><span><span>1. Limited Period Offer.</span></span></div>\r\n<div><span><span>2. Max discount is &#8377;5000.</span></span></div>\r\n<div><span><span>3. Coupon is valid only on Select Brands.</span></span></div>\r\n<div><span><span>4. Offer valid only on the listed sizes &amp; colors of the products featured on the page.</span></span></div>\r\n<div><span><span>5. Coupon code is not applicable with any other coupon.</span></span></div>\r\n<div><span><span>6. Benefits arising post implementation of GST are part of this coupon.</span></span></div>\r\n<div><span><span>7. Coupon code is applicable on the MRP of the products.</span></span></div>\r\n<div><span><span>8. GST applicable on discounted price.</span></span></div>\r\n<div><span><span>9. Coupon code cannot be used for purchase of FirstCry Club Membership.</span></span></div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=1987&c=MSLSFB",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D1987%26c%3DMSLSFB",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "820521",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 35% off on Selected Categories",
        "offer_value": "35%",
        "title": "Get 35% Off",
        "description": "This promotional offer is valid on Selected Categories (Max. discount of &#8377;5000 will be offered)",
        "code": "WPC37HP",
        "terms_and_conditions": "<p><span><span>1. Limited period offer</span></span></p>\r\n<div><span><span>2. Coupon is applicable on Women's Personal Care and Moms &amp; Maternity.</span></span><br /><span>3. Coupon code is applicable on MRP of Products.</span><br /><span>4. Coupon is not applicable with any other coupon.</span><br /><span>5.&nbsp;</span><span>Coupon code is&nbsp;</span><span>not valid on</span><span>&nbsp;brands Johnson's Baby, BabyDove,Dabur,Dermadew, Hamdard,Figaro,Ryca, Shesha Naturals,Avidia Labs,Osasbazaar, Bio Oil, Sofy &amp; IFITech,&nbsp;</span><span><span>Whisper, Olay, Aveeno, Pantene, Head &amp; Shoulder, Neutrogena &amp; Organic India.</span></span><br /><span>6.Coupon is not applicable on Sanitizers and Masks.</span><br /><span>7. GST applicable on discounted price.</span></div>",
        "categories": "Health and Beauty,Body Care",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=1474&c=WPC37HP",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D1474%26c%3DWPC37HP",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-08-27",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "800811",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 35% Discount on Timios Kids Food and Nutritional Supplements",
        "offer_value": "35%",
        "title": "35% discount",
        "description": "This discount is valid on Timios Kids Food and Nutritional Supplements (Maximum &#8377;1000 discount is applicable)",
        "code": "TIMIO35",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Nutrition,Kids and Toddlers",
        "category_array": {
          "Health and Beauty": [
            "Nutrition"
          ],
          "Kids and Toddlers": []
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=2&brandid=0&searchstring=brand@~815@~1005109@@1@0@20@@@@@@@@@@@@@@@@&rating=&sort=HighestDiscount&c=TIMIO35&ref2=1484_free-height-banner-with-rotation_temppos-1_timios_banpos-5",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D2%26brandid%3D0%26searchstring%3Dbrand%40%7E815%40%7E1005109%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26rating%3D%26sort%3DHighestDiscount%26c%3DTIMIO35%26ref2%3D1484_free-height-banner-with-rotation_temppos-1_timios_banpos-5",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-07-28",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "820511",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 35% Discount on Entire Mother Sparsh  Range",
        "offer_value": "35%",
        "title": "35% OFF",
        "description": "Valid on Entire Mother Sparsh  Range (Maximum &#8377;1200 discount will be applicable. Not valid on Combos,Guaranteed Savings Offer,Bottles &amp; Accessories.)",
        "code": "MSPARSH35",
        "terms_and_conditions": "<p><span>1. Limited Period Offer.</span><br /><span>2. User will get Flat 35% on entire Mother Sparsh&nbsp; range.</span><br /><span>3.&nbsp;Benefits arising post implementation of GST are part of this coupon.</span><br /><span>4. Maximum discount is &#8377;1200 on Entire Mother Sparsh Range.</span><br /><span>5.&nbsp;</span><span>&nbsp;Coupon code is not valid on Combos,Guaranteed Savings Offer,</span><span>Bottles &amp; Accessories.</span><br /><span>6. Coupon is not applicable with any other coupon.</span><br /><span>7. Coupon code is applicable only on the MRP of products.</span><br /><span>8. GST applicable on discounted price.</span></p>\r\n<div>9.Coupon code cannot be used for purchase of FirstCry Club Membership</div>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=0&brandid=1003834&searchstring=brand@@@@1@0@20@@@@@@@@@@@@@@@@&rating=&sort=popularity&prodids=9296491&c=MSPARSH35&ref2=mothersparsh_new_combo0_d_18Oct21_cl",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D0%26brandid%3D1003834%26searchstring%3Dbrand%40%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26rating%3D%26sort%3Dpopularity%26prodids%3D9296491%26c%3DMSPARSH35%26ref2%3Dmothersparsh_new_combo0_d_18Oct21_cl",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-11-30",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "784704",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 40% discount on Babyhug Entire Range",
        "offer_value": "40%",
        "title": "Get 40% discount",
        "description": "This voucher is valid on Babyhug Entire Range (Maximum discount allowed is &#8377;2000)",
        "code": "BESTDEAL",
        "terms_and_conditions": "<p><span><span>For Club Members:</span></span><br /><span><span>1. User will get flat 45% off on chosen product or on-site discount whichever is higher.</span></span><br /><br /></p>\r\n<div>For All Users:\r\n<div>1.User will get flat 40% Off on chosen product or on-site discount whichever is higher.</div>\r\n<div>&nbsp;</div>\r\n<div>More T&amp;C:</div>\r\n<div>1. Limited Period Offer.<br /><span>2. Coupon is valid on Babyhug Entire Range, Coupon is not valid on &nbsp;Feeding Bottles &amp; Teats,Baby Food and Infant Formula,Inner wear &amp; Thermals,Socks &amp; Tights,Swim wear,Coding, Bath Tubs , Mask, Sanitizer, Kids Gadgets&nbsp;</span><br />3. Max Discount is &#8377;2000<br />4. Benefits arising post implementation of GST are part of this coupon.<br />5. Coupon is not applicable with any other coupon.<br />6. Coupon Code is applicable only on the MRP of products.<br />7. GST applicable on discounted price.</div>\r\n</div>\r\n<div><span><span>8.Shipping is Free.</span></span><span>For Club Members:</span></div>\r\n<p><span><span>1. User will get flat 45% off on chosen product or on-site discount whichever is higher.</span></span><br /><br /></p>\r\n<div>For All Users:\r\n<div>1.User will get flat 40% Off on chosen product or on-site discount whichever is higher.</div>\r\n<div>&nbsp;</div>\r\n<div>More T&amp;C:</div>\r\n<div>1. Limited Period Offer.<br /><span>2. Coupon is valid on Babyhug Entire Range, Coupon is not valid on &nbsp;Feeding Bottles &amp; Teats,Baby Food and Infant Formula,Inner wear &amp; Thermals,Socks &amp; Tights,Swim wear,Coding, Bath Tubs , Mask, Sanitizer, Kids Gadgets&nbsp;</span><br />3. Max Discount is &#8377;2000<br />4. Benefits arising post implementation of GST are part of this coupon.<br />5. Coupon is not applicable with any other coupon.<br />6. Coupon Code is applicable only on the MRP of products.<br />7. GST applicable on discounted price.</div>\r\n</div>\r\n<div><span><span>8.Shipping is Free.</span></span></div>",
        "categories": "Kids and Toddlers,Baby Care,Baby Gears",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care",
            "Baby Gears"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=8&brandid=621&searchstring=brand@@@@1@0@20@@@@@@@@@@@@@@@@&rating=&sort=bestseller&c=BESTDEAL",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D8%26brandid%3D621%26searchstring%3Dbrand%40%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26rating%3D%26sort%3Dbestseller%26c%3DBESTDEAL",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-11-16",
        "end_date": "2022-02-08"
      },
      {
        "lmd_id": "820513",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Additional 10% Discount on all products",
        "offer_value": "10%",
        "title": "Extra 10% Discount",
        "description": "Valid on all products (On order of min. &#8377;2999. Max. discount of &#8377;1500. Not valid on nfant feeding, Bottles &amp; Accessories, Formula &amp; Supplements, Innerwear &amp; Thermals, Socks &amp; Tights, School Supplies and few brands)",
        "code": "GET10CT",
        "terms_and_conditions": "<div>1. Limited Period Offer.</div>\r\n<div>2. User will get extra 10% Off on minimum purchase worth &#8377;2999.</div>\r\n<div>3. Maximum discount is &#8377;1500. Coupon code is applicable on cart value of products.</div>\r\n<div>4. Benefits arising post implementation of GST are part of this coupon.</div>\r\n<div>5. Coupon code is not applicable with any other coupon.</div>\r\n<div>6. Coupon code is not valid on&nbsp; infant feeding, Bottles &amp; Accessories, Formula &amp; Supplements, Innerwear &amp; Thermals, Socks &amp; Tights, School Supplies and brands&nbsp;Duracell, Johnson Baby, Nestle, Protinex, Bella,&nbsp; Figaro, Tango, Dabur, West Coast, Motorola, Horlicks, DMR MiniWash, Foscam, Hamdard, Alex Daisy, Complan, Shumee, Bio Oil, Jane, Masilo-Linen For Littles, Fancy Fluff, IFITech, Dettol, SHESHA NATURALS, Dermadew, Emotix, TigerTech, Vaux, Joie, SeTracker, RYCA, Avidia Labs, Osasbazaar..</div>\r\n<div>7. GST applicable on discounted price.</div>\r\n<div>8. Valid for select Pin Codes.</div>",
        "categories": "Kids and Toddlers,Kids Fashion,Baby Care,Baby Gears",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion",
            "Baby Care",
            "Baby Gears"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/?c=GET10CT&ref2=11_look-book_temppos-8_extra-10-off-_banpos-1",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2F%3Fc%3DGET10CT%26ref2%3D11_look-book_temppos-8_extra-10-off-_banpos-1",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-01-06",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "825497",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "50% discount on Select Kids Fashion",
        "offer_value": "50%",
        "title": "Get 50% Off",
        "description": "Valid on Select Kids Fashion (Maximum &#8377;3000 discount can be availed)",
        "code": "FREEZING50",
        "terms_and_conditions": "<div>1. Limited Period Offer.</div>\r\n<div>2. Offer valid only on the listed sizes &amp; colors of the products featured on the page.</div>\r\n<div>3. User will get Flat 50% Off* or on-site discount whichever is higher.</div>\r\n<div>4. Maximum discount is &#8377;3000.</div>\r\n<div>5. Coupon code is not applicable with any other coupon.</div>\r\n<div>6. Benefits arising post implementation of GST are part of this coupon.</div>\r\n<div>7. Coupon code is applicable on the MRP of the products.</div>\r\n<div>8. GST applicable on discounted price.</div>\r\n<div>&nbsp;</div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=32911&sort=bestseller&c=FREEZING50",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D32911%26sort%3Dbestseller%26c%3DFREEZING50",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "712137",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Flat 30% Discount on Select Books Range",
        "offer_value": "30%",
        "title": "Flat 30% Discount",
        "description": "Valid on Select Books Range (Max. &#8377;1200 discount is applicable. Not valid on brand Class Monitor)",
        "code": "BOOK30",
        "terms_and_conditions": "",
        "categories": "Entertainment,CDs Books and Magazine",
        "category_array": {
          "Entertainment": [
            "CDs Books and Magazine"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/books-and-cds/11/0/0?c=BOOK30&ref2=Books_06_combo0_d_02Dec20_BOOK30",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fbooks-and-cds%2F11%2F0%2F0%3Fc%3DBOOK30%26ref2%3DBooks_06_combo0_d_02Dec20_BOOK30",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-06-25",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "810244",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Avail Flat 40% OFF on Timios Kids Food &amp; Nutritional",
        "offer_value": "40%",
        "title": "40% Discount",
        "description": "This promotional offer is valid on Timios Kids Food &amp; Nutritional (Maximum &#8377;1000 discount will be offered)",
        "code": "TIMIO40",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Nutrition",
        "category_array": {
          "Health and Beauty": [
            "Nutrition"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=2&brandid=1005109&searchstring=brand@~815@@@1@0@20@@@@@@@@@@@@@@@@&rating=&sort=HighestDiscount&ref2=Timios_new_offer_combo0_d_18Sep21_cl&c=TIMIO40",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D2%26brandid%3D1005109%26searchstring%3Dbrand%40%7E815%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26rating%3D%26sort%3DHighestDiscount%26ref2%3DTimios_new_offer_combo0_d_18Sep21_cl%26c%3DTIMIO40",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-09-20",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "805196",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 35% Discount on Women&#039;s Personal Care Select Categories",
        "offer_value": "35%",
        "title": "Get 35% Off",
        "description": "This discount is applicable on Women&#039;s Personal Care Select Categories (Max. &#8377;3500 discount is applicable)",
        "code": "GLOW",
        "terms_and_conditions": "<p><span><span>1. Limited Period Offer.</span></span></p>\r\n<div><span><span>2. Coupon code is not valid on brands Shesha Naturals,Avidia Labs,Osasbazaar.</span></span></div>\r\n<p><span><span>3. Benefits arising post implementation of GST are part of this coupon.</span></span><br /><span><span>4. Coupon code is applicable on the MRP of the products.</span></span><br /><span><span>5. GST applicable on discounted price.</span></span><br /><span><span>6. Coupon code cannot be used for purchase of Firstcry Club Membership.</span></span></p>",
        "categories": "Health and Beauty,Body Care",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=78&brandid=0&searchstring=brand@@@@1@0@20@@@@@@@@@@@@@@@@&rating=&sort=popularity&ref2=WomensPersonalCare_combo0_d_03Dec21_ncl&c=GLOW",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D78%26brandid%3D0%26searchstring%3Dbrand%40%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26rating%3D%26sort%3Dpopularity%26ref2%3DWomensPersonalCare_combo0_d_03Dec21_ncl%26c%3DGLOW",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-12-08",
        "end_date": "2022-02-09"
      },
      {
        "lmd_id": "825523",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 40% off on Entire Phillips Avent Range",
        "offer_value": "40%",
        "title": "40% OFF",
        "description": "Valid on Entire Phillips Avent Range (Maximum discount applicable is &#8377;5000. Not valid on Combos, Infant feeding, Bottles &amp; Accessories, Formula &amp; Supplements)",
        "code": "AVFSTN40",
        "terms_and_conditions": "<div>Terms &amp; Condition</div>\r\n<p><span>1. Limited period offer.<br />2. User will get flat 40% Off on Entire Phillips Avent Range.<br />3. Maximum discount is &#8377;5000<br />4. Benefits arising post implementation of GST are part of this&nbsp; coupon.<br />5. Coupon code is&nbsp;<span>not applicable on Combos, Infant feeding, Bottles &amp; Accessories, Formula &amp; Supplements.</span><br />6. Coupon code is not applicable with any other coupon.<br />7. Coupon code is applicable on the MRP of products.<br />8.&nbsp;<span>GST applicable on discounted price.</span></span></p>\r\n<div><span>9.</span><span>Coupon code cannot be used for purchase of FirstCry Club Membership</span></div>",
        "categories": "Kids and Toddlers,Baby Care,Baby Gears",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care",
            "Baby Gears"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=33032&c=AVFSTN40",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D33032%26c%3DAVFSTN40",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "810280",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Avail Flat 50% off on Selected Fashion Range",
        "offer_value": "50%",
        "title": "50% off",
        "description": "Valid on Selected Fashion Range (Maximum discount of &#8377;5000 will be applicable)",
        "code": "WINCTR",
        "terms_and_conditions": "<div><span>1. Limited Period Offer.</span></div>\r\n<div><span>2. Max discount is &#8377;5000.</span></div>\r\n<div><span>3. Coupon is not applicable on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; Brands Tango, Cherokee, Colt, Donut, Karigari, U.S. Polo Assn, U.S. Polo Assn Kids, &amp; JOCKEY.</span></div>\r\n<div><span>4. Coupon code is not applicable with any other coupon.</span></div>\r\n<div><span>5. Benefits arising post implementation of GST are part of this coupon.</span></div>\r\n<div><span>6. Coupon code is applicable on the MRP of the products.</span></div>\r\n<div><span>7. GST applicable on discounted price.</span></div>\r\n<div><span>8. Coupon code cannot be used for purchase of FirstCry Club Membership</span></div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=32622&sort=bestseller&ref2=Winter_Carters_Merch_combo0_d_04Dec21_cl&c=WINCTR",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D32622%26sort%3Dbestseller%26ref2%3DWinter_Carters_Merch_combo0_d_04Dec21_cl%26c%3DWINCTR",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-12-08",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "825510",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Flat 50% OFF on select products",
        "offer_value": "50%",
        "title": "Flat 50% off",
        "description": "Applicable on products listed at landing page (Maximum &#8377;3000 discount will be applied)",
        "code": "REPHP50",
        "terms_and_conditions": "<div>Terms &amp; Condition</div>\r\n<p>&nbsp;</p>\r\n<div>\r\n<div>1. Limited Period Offer.</div>\r\n<div>2. Offer valid only on the listed sizes &amp; colors of the products featured on the page.</div>\r\n<div>3. User will get Flat 50% Off* or on-site discount whichever is higher.</div>\r\n<div>4. Maximum discount is &#8377;3000.</div>\r\n<div>5. Coupon code is not applicable with any other coupon.</div>\r\n<div>6. Benefits arising post implementation of GST are part of this coupon.</div>\r\n<div>7. Coupon code is applicable on the MRP of the products.</div>\r\n<div>8. GST applicable on discounted price.</div>\r\n</div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=33033&sort=bestseller&c=REPHP50",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D33033%26sort%3Dbestseller%26c%3DREPHP50",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "825495",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 40% Off on Babyhug skincare",
        "offer_value": "40%",
        "title": "Get Flat 40% Discount",
        "description": "Valid on Babyhug skincare (Maximum discount of &#8377;1500 will be applied)",
        "code": "BHGSKN",
        "terms_and_conditions": "<div>Terms &amp; Condition</div>\r\n<p><span><span>For Club Members:</span><br /><span>1. User will get flat 45% off on&nbsp;</span><span>babyhug skincare</span><span>.</span><br /><span><span>2. Max discount is &#8377;1500.</span></span></span></p>\r\n<div><span>&nbsp;</span></div>\r\n<p>&nbsp;</p>\r\n<div>\r\n<div>For All Users:<br />1.User will get flat 40% Off on&nbsp;<span>babyhug skincare</span><span>.</span><br />2.Max discount is &#8377;1500.</div>\r\n<div>&nbsp;</div>\r\n<span>3. Benefits arising post implementation of GST are part of this coupon.</span><br /><span>4.Coupon code is not valid on Guaranteed Savings Offer.</span><br /><span>5.Coupon code is applicable on the MRP of products.</span><br /><span>6. GST applicable on discounted price .</span><br />\r\n<div>7.<span>Coupon code cannot be used for purchase of FirstCry Club Membership</span></div>\r\n</div>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=31269&c=BHGSKN",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D31269%26c%3DBHGSKN",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "804672",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "35% discount on Dream land book",
        "offer_value": "35%",
        "title": "Avail Flat 35% Discount",
        "description": "This offer is valid on Dream land book",
        "code": "DREAM35",
        "terms_and_conditions": "<p>1. Limited Period Offer.<br />2. User will get Flat 35% on selected on&nbsp; Dream land book&nbsp;&nbsp;.<br />3.&nbsp;Benefits arising post implementation of GST are part of this coupon.<br />5. Coupon is not applicable with any other coupon.<br />6. Coupon code is applicable only on the MRP of products.<br />7. GST applicable on discounted price.</p>\r\n<div>8.Coupon code cannot be used for purchase of FirstCry Club Membership</div>",
        "categories": "Entertainment,CDs Books and Magazine",
        "category_array": {
          "Entertainment": [
            "CDs Books and Magazine"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=11&brandid=0&searchstring=brand@~378~121~375~112~140~142~122~141~123~272~139@~1002591@@1@0@20@@@@@@@@@@@@@@@@&rating=&sort=bestseller&ref=ie15augone_nclub&utm-source=iemail&utm-medium=email&utm-content=15augone_nclub_dreamland&c=dream35",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D11%26brandid%3D0%26searchstring%3Dbrand%40%7E378%7E121%7E375%7E112%7E140%7E142%7E122%7E141%7E123%7E272%7E139%40%7E1002591%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26rating%3D%26sort%3Dbestseller%26ref%3Die15augone_nclub%26utm-source%3Diemail%26utm-medium%3Demail%26utm-content%3D15augone_nclub_dreamland%26c%3Ddream35",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-08-16",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "821254",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Avail Flat 60% off on Select Fashion Range",
        "offer_value": "60%",
        "title": "Avail 60% off",
        "description": "This offer is valid on Select Fashion Range (Maximum &#8377;5000 discount is applicable)",
        "code": "RPS60",
        "terms_and_conditions": "<div><span>1.&nbsp;</span><span>User will get flat 60% off on Select Brands or on-site discount whichever is higher.&nbsp;</span><span>Max discount is &#8377;5000.</span></div>\r\n<div><span>2. Coupon is not applicable on&nbsp;infant feeding, Bottles &amp; Accessories, Formula &amp; Supplements,&nbsp;</span><span>Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear</span><span>.</span></div>\r\n<div><span>3. Coupon code is not applicable with any other coupon.</span></div>\r\n<div><span>4. Benefits arising post implementation of GST are part of this coupon.</span></div>\r\n<div><span>5. Coupon code is applicable on the MRP of the products.</span></div>\r\n<div><span>6. GST applicable on discounted price.</span></div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=30808&sort=Bestseller&c=RPS60&ref2=MktgFashion_SOIS_default_Sec5_BigDeals_60off",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D30808%26sort%3DBestseller%26c%3DRPS60%26ref2%3DMktgFashion_SOIS_default_Sec5_BigDeals_60off",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-18",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "778466",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 35% Off on Biotique Product",
        "offer_value": "35%",
        "title": "Flat 35% off",
        "description": "Applicable on Biotique Product (Maximum &#8377;1000 discount will be applicable)",
        "code": "BIOTI35",
        "terms_and_conditions": "<p>1. Limited period offer.<br />2. User will get flat 35% off on Biotique Product<br />3. Maximum discount is &#8377;1000.<br />4. Benefits arising post implementation of GST are part of this coupon.<br />5. Coupon code is not valid on Guaranteed Savings Offer.<br />6. Coupon code is applicable on the MRP of products.<br />8.&nbsp; GST applicable on discounted price .</p>\r\n<div>9.Coupon code cannot be used for purchase of FirstCry Club Membership</div>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/baby-biotique/0/0/501?ref=ie06augtwo&utm-source=iemail&utm-medium=email&utm-content=06augtwo_biotique&c=bioti35",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fbaby-biotique%2F0%2F0%2F501%3Fref%3Die06augtwo%26utm-source%3Diemail%26utm-medium%3Demail%26utm-content%3D06augtwo_biotique%26c%3Dbioti35",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-08-07",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "820541",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Flat 38% Off on Select Fashion Range",
        "offer_value": "38%",
        "title": "38% off",
        "description": "Valid on Select Fashion Range (Max. discount applicable is &#8377;5000. Not valid on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; few Brands)",
        "code": "FROSTH",
        "terms_and_conditions": "",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=32632&c=FROSTH",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D32632%26c%3DFROSTH",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-11-16",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "821255",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 40% OFF on Select Fashion Range",
        "offer_value": "40%",
        "title": "Flat 40% OFF",
        "description": "Valid on Select Fashion Range (Max. discount of &#8377;5000 will be applicable. Not valid on infant feeding, Bottles &amp; Accessories, Formula &amp; Supplements, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear)",
        "code": "RPS40",
        "terms_and_conditions": "<div><span><span><strong><u>Flat 40% Off* on Select Fashion Range</u></strong></span></span></div>\r\n<div>&nbsp;</div>\r\n<div><span>1.&nbsp;</span><span>User will get flat 40% off on Select Brands or on-site discount whichever is higher.&nbsp;</span><span>Max discount is &#8377;5000.</span></div>\r\n<div><span>2. Coupon is not applicable on&nbsp;infant feeding, Bottles &amp; Accessories, Formula &amp; Supplements,&nbsp;</span><span>Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear</span><span>.</span></div>\r\n<div><span>3. Coupon code is not applicable with any other coupon.</span></div>\r\n<div><span>4. Benefits arising post implementation of GST are part of this coupon.</span></div>\r\n<div><span>5. Coupon code is applicable on the MRP of the products.</span></div>\r\n<div><span>6. GST applicable on discounted price.</span></div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=31447&sort=Bestseller&c=RPS40&ref2=MktgFashion_SOIS_default_Sec5_BigDeals_40off",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D31447%26sort%3DBestseller%26c%3DRPS40%26ref2%3DMktgFashion_SOIS_default_Sec5_BigDeals_40off",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-18",
        "end_date": "2022-02-06"
      },
      {
        "lmd_id": "800802",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 35% Discount on Select Fashion Range",
        "offer_value": "35%",
        "title": "Get Flat 35% off",
        "description": "This coupon is valid on Select Fashion Range (Maximum discount applicable is &#8377;5000)",
        "code": "WINJS",
        "terms_and_conditions": "<div><span>1. Limited Period Offer.</span></div>\r\n<div><span>2. Max discount is &#8377;5000.</span></div>\r\n<div><span>3. Coupon is not applicable on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; Brands Tango, Cherokee, Colt, Donut, Karigari, U.S. Polo Assn, U.S. Polo Assn Kids, JOCKEY, J</span><span>ack n Jones and Allen Solly Junior</span><span>.</span></div>\r\n<div><span>4. Coupon code is not applicable with any other coupon.</span></div>\r\n<div><span>5. Benefits arising post implementation of GST are part of this coupon.</span></div>\r\n<div><span>6. Coupon code is applicable on the MRP of the products.</span></div>\r\n<div><span>7. GST applicable on discounted price.</span></div>\r\n<div><span>8. Coupon code cannot be used for purchase of FirstCry Club Membership.</span></div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=32546&sort=bestseller&c=WINJS&ref2=HP_MerchF_winter_Sweatshirt_Jacket_combo0_d_30Oct21_cl",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D32546%26sort%3Dbestseller%26c%3DWINJS%26ref2%3DHP_MerchF_winter_Sweatshirt_Jacket_combo0_d_30Oct21_cl",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-11-30",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "821259",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Avail 33% Off on Entire Toys Range",
        "offer_value": "33%",
        "title": "Flat 33% Discount",
        "description": "Valid on Entire Toys Range (Max. Once per user. Maximum &#8377;2000 discount will be applied. Not valid on few brands)",
        "code": "TOYBUY",
        "terms_and_conditions": "<div><span>1.User will get flat 33% Off on Entire Site or on-site discount whichever is higher.</span></div>\r\n<div><span>2.Max discount is &#8377;2000.</span></div>\r\n<div><span>&nbsp;</span></div>\r\n<div><span>More T&amp;C's:</span></div>\r\n<div><span>1.Limited Period Offer.</span></div>\r\n<div><span>2. Benefits arising post implementation of GST are part of this coupon.</span></div>\r\n<div>\r\n<div><span><span>3.</span></span><span>Coupon code is not valid on Avidia Labs,Boingg,Brainsmith,ClassMonitor,dreambaby,Duracell,Emotix,Fancy Fluff,GETBEST,</span><span>HP, Instax Fujifilm,Jada Toys,Masilo,Melissa &amp; Doug,Osasbazaar,Saregama,SeTracker,Shemaroo</span></div>\r\n<div>Shumee,StarAndDaisy,STAUNCH,THINKER PLACE,TigerTech,Travel Blue,Turet,Yamaha.</div>\r\n</div>\r\n<div><span>4. Coupon code can be used only once &amp; is not applicable with any other coupon.</span></div>\r\n<div><span>5. Coupon code is applicable only on the MRP of products.</span></div>\r\n<div><span>6. GST applicable on discounted price.</span></div>\r\n<div><span>7.</span>Coupon code cannot be used for purchase of firstcry club membership</div>",
        "categories": "Entertainment,Board Games and Toys",
        "category_array": {
          "Entertainment": [
            "Board Games and Toys"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=5&brandid=0&searchstring=brand&sort=bestseller&c=TOYBUY",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D5%26brandid%3D0%26searchstring%3Dbrand%26sort%3Dbestseller%26c%3DTOYBUY",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-18",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "816360",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "35% Off on Diapering Essentials",
        "offer_value": "35%",
        "title": "Flat 35% Discount",
        "description": "Valid on Diapering Essentials (Max. Once per user. Maximum &#8377;2000 discount will be offered. Not valid on Combos and few Brands)",
        "code": "DIAPE",
        "terms_and_conditions": "",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/baby-wipes/1/29?scat=29,30,87,31,88,28@@@@@@@@@@1@0@20@@@@@@@@@@&sort=Popularity&c=DIAPE",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fbaby-wipes%2F1%2F29%3Fscat%3D29%2C30%2C87%2C31%2C88%2C28%40%40%40%40%40%40%40%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%26sort%3DPopularity%26c%3DDIAPE",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-08-19",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "809582",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "35% Discount on Select Fashion Range",
        "offer_value": "35%",
        "title": "Flat 35% Off",
        "description": "Valid on Select Fashion Range (Maximum &#8377;5000 discount will be applied. Not valid on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; few Brands)",
        "code": "XMASHP",
        "terms_and_conditions": "",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=32761&c=XMASHP",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D32761%26c%3DXMASHP",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-12-28",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "778363",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Avail 25% OFF on Fashion Range",
        "offer_value": "25%",
        "title": "Flat 25% discount",
        "description": "Valid on Fashion Range (Not valid on  Innerwear &amp; Thermals, Socks &amp; Tights and few brands)",
        "code": "FSH25ZNE",
        "terms_and_conditions": "<p>1. Limited Period Offer.<br />2. User will get flat 25% off on Fashion.<br />3. Benefits arising post implementation of GST are part of this coupon.<br />4. Coupon is valid on Apparel, Footwear &amp; Fashion Accessories except Innerwear &amp; Thermals, Socks &amp; Tights, brands Dermadew, Pampers Active Baby, Pampers Dry, Intellikit Trial Kits, Tango, Nestle, Protinex, PediaSure, Figaro, Motorola, Melissa &amp; Doug, Horlicks, Foscam, Alex Daisy, Bio Oil, Jane, Vaux, SeTracker, DMR, Miniwash, Masilo-Linen For Littles, Shesha Naturals, IFITech<br />5.&nbsp;Coupon is not applicable with any other coupon.<br />6. Coupon is applicable only on the MRP of products.</p>\r\n<div>7. GST applicable on discounted price.</div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=6&brandid=0&searchstring=brand@@@@1@0@20@@@@@@@@@@@@@@@@&sort=BestSeller&c=FSH25ZNE",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D6%26brandid%3D0%26searchstring%3Dbrand%40%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26sort%3DBestSeller%26c%3DFSH25ZNE",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-01-06",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "586615",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Flat 20% Discount on Feeding &amp; Nursing orders",
        "offer_value": "20%",
        "title": "20% Off",
        "description": "Valid on Feeding &amp; Nursing orders (Max. discount of &#8377;1500 will be offered. Not valid on Formula &amp; Supplements, Feeding Teats, Bottles &amp; Accessories, Super Savers &amp; Gift Packs and few brands)",
        "code": "FDR20ZNE",
        "terms_and_conditions": "<div>Terms &amp; Condition</div>\r\n<div><span><span>1. Limited Period Offer.&nbsp;</span></span></div>\r\n<div><span><span>2. User will get f</span></span><span><span>lat 20% off on Feeding &amp; Nursing orders worth &#8377;599 &amp; above.&nbsp;Maximum discount is &#8377;1500.</span></span></div>\r\n<div><span><span>3. Coupon is applicable only on&nbsp;</span></span><span>Feeding &amp; Nursing</span><span><span>&nbsp;range except&nbsp;</span></span><span><span>Formula &amp; Supplements, Feeding Teats, Bottles &amp; Accessories, Super Savers &amp; Gift Packs and&nbsp;</span></span><span><span>brands&nbsp;</span></span><span><span>Duracell, Johnson Baby, Nestle, Protinex, Bella, PediaSure, Figaro, Tango, Dabur, West Coast, Motorola, Melissa &amp; Doug,&nbsp; Horlicks, DMR MiniWash, Foscam, Hamdard, Alex Daisy, Complan, Shumee, Bio Oil, Jane, Masilo-Linen For Littles, Fancy Fluff, IFITech, Dettol, SHESHA NATURALS, Dermadew, Emotix, TigerTech, Vaux, Joie, SeTracker, RYCA, Avidia Labs, Osasbazaar.</span></span></div>\r\n<div><span><span>4. Coupon code is not applicable with any other coupon.</span></span></div>\r\n<div><span><span>5. Coupon Code is applicable only on the MRP of products.</span></span></div>\r\n<div><span><span>6. GST applicable on discounted price.</span></span></div>\r\n<div><span><span>7. Benefits arising post implementation of GST are part of this coupon.</span></span></div>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=2&brandid=0&searchstring=brand@@@@1@0@20@@@@@@@@@@@@@@@@&rating=&sort=BestSeller&c=FDR20ZNE",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D2%26brandid%3D0%26searchstring%3Dbrand%40%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26rating%3D%26sort%3DBestSeller%26c%3DFDR20ZNE",
        "image_url": "https://cdn.fcglcdn.com/brainbees/banners/feeding20off_25sept2020.jpg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2020-10-06",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "821258",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Up To &#8377;350 Off on Select Kids Fashion",
        "offer_value": "&#8377;350",
        "title": "Get Up To &#8377;350 Off",
        "description": "Valid on Select Kids Fashion (On order of min. &#8377;999. Not valid on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; few Brands)",
        "code": "RPSEXT",
        "terms_and_conditions": "<div>1. Limited period offer.</div>\r\n<div>2. User can avail anyone of the offers mentioned below:</div>\r\n<div>a. Extra &#8377;150 off on entire fashion range worth &#8377;999 &amp; above</div>\r\n<div>b. Extra &#8377;250 off on entire fashion range worth &#8377;1499 &amp; above</div>\r\n<div>c. Extra &#8377;350 off on entire fashion range worth &#8377;1999 &amp; above</div>\r\n<div>3. Coupon code is applicable on cart value of products.</div>\r\n<div>4. Benefits arising post implementation of GST are part of this coupon.</div>\r\n<div>5. Coupon code is not applicable with any other coupon.</div>\r\n<div>6. Coupon is not applicable on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; Brands Tango, Cherokee, Colt, Donut, Karigari, Masilo, Crocs, Birkenstock, JOCKEY and select products of&nbsp; Chicco, Tommy Hilfiger, US Polo Assn, PUMA, Allen Solly Junior, Jack &amp; Jones Junior.</div>\r\n<div>7. GST applicable on discounted price.</div>\r\n<div>8. Coupon code can't be used for purchase of FirstCry Club Membership.</div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/?c=RPSEXT",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2F%3Fc%3DRPSEXT",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2022-01-18",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "820542",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 33% Off on Nursery Range",
        "offer_value": "33%",
        "title": "Flat 33% discount",
        "description": "This coupon is valid on Nursery Range (Max. Once per user. Max. discount applicable is &#8377;5000)",
        "code": "NURS35",
        "terms_and_conditions": "<p><span>1.Limited Period Offer.</span><br /><span>2.Coupon code is not valid on Combos, Bottles &amp; Accessories and Formula &amp; Supplements, Innerwear &amp; Thermals, Socks &amp; Tights Swimwear, Bath Tubs and brands Meemee Select Baby Gear Range,Joie,Dabur, Enfagrow, Johnson's Baby, Dettol, Bella, Hamdard, Duracell, Complan, Ryca, Fancy Fluff, Pampers Active Baby, Pampers Dry, Intellikit Trial Kits, Dermadew, Tango, Nestle, Protinex, PediaSure, Figaro, Motorola, Melissa &amp; Doug, Horlicks, Foscam, Alex Daisy, Bio Oil, Jane, Vaux, SeTracker, DMR, Miniwash, Masilo-Linen For Littles, Shesha Naturals, IFITech, Alex Daisy, Shumee,&nbsp;IFITech,Joie,Osasbazaar,Boingg,Duroflex,Bianca .</span><br /><span>3. Benefits arising post implementation of GST are part of this coupon.</span><br /><span>4. Coupon can be used only once and is not applicable with any other coupon.</span><br /><span>5. Coupon Code is applicable only on the MRP of products.</span><br /><span>6. GST applicable on discounted price</span></p>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=1443&ref2=Nursery_03_07_2021_combo0_d_03Jul21_cl&c=NURS35",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D1443%26ref2%3DNursery_03_07_2021_combo0_d_03Jul21_cl%26c%3DNURS35",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-08-27",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "826566",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 45% OFF on Select Kids Fashion",
        "offer_value": "45%",
        "title": "Flat 45% Off",
        "description": "This promotional offer is valid on Select Kids Fashion (between 12PM to 3PM. Max. discount of &#8377;4000 will be offered)",
        "code": "JN45WKND",
        "terms_and_conditions": "<div><span>1.User will get Flat 45% Off on 29th Jan'22 between (12PM to 3PM).</span></div>\r\n<div><span>2. User will get mentioned offer on Select Fashion Range.</span></div>\r\n<div><span><span>3. Offer valid only on the listed Sizes &amp; Colors of the products featured on the page.</span></span></div>\r\n<div><span><span>4. Coupon code is not applicable with any other coupon.</span></span></div>\r\n<div><span><span>5. Max Discount is &#8377;4000.</span></span></div>\r\n<div><span><span>6. Benefits arising post implementation of GST are part of this coupon.</span></span></div>\r\n<div><span><span>7. Coupon code is applicable on the MRP of the products.</span></span></div>\r\n<div><span><span>8. GST applicable on discounted price.</span></span></div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=30916&sort=Bestseller&c=JN45WKND",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D30916%26sort%3DBestseller%26c%3DJN45WKND",
        "image_url": "https://cdn.fcglcdn.com/brainbees/banners/test/Desktop_Hp_2022114142626.jpg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-29",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "820532",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Flat 35% off on Diapers",
        "offer_value": "35%",
        "title": "Flat 35% discount",
        "description": "Valid on Diapers (Maximum &#8377;1000 discount will be applicable. Not valid on Combos, Bottles &amp; Accessories and Formula &amp; Supplements, Innerwear &amp; Thermals, Socks &amp; Tights Swimwear, Bath Tubs and few brands)",
        "code": "MOMSALEDPR",
        "terms_and_conditions": "",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=1&brandid=0&searchstring=brand@~29~30~87~31~88~28@@@1@0@20@@@@@@@@@@@@@@@@&rating=&sort=BestSeller&c=MOMSALEDPR&ref2=moasdpessentials_viewall",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D1%26brandid%3D0%26searchstring%3Dbrand%40%7E29%7E30%7E87%7E31%7E88%7E28%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26rating%3D%26sort%3DBestSeller%26c%3DMOMSALEDPR%26ref2%3Dmoasdpessentials_viewall",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-07-28",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "820531",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 30% discount on Books Range",
        "offer_value": "30%",
        "title": "30% Off",
        "description": "This coupon is applicable on Books Range (Max. discount of &#8377;1200)",
        "code": "BOOKS32",
        "terms_and_conditions": "<div>1. Offer Valid for limited time.</div>\r\n<div>2. Coupon code is valid on Books Range.</div>\r\n<div>3. Coupon is not applicable with any other coupon.</div>\r\n<div>4. Coupon code is applicable on the MRP of the products.</div>\r\n<div>5. GST applicable on discounted price.</div>\r\n<div>6. Benefits arising post implementation of GST are a part of this coupon.</div>\r\n<div>7. Coupon code is not applicable on brand Class Monitor.</div>",
        "categories": "Entertainment,CDs Books and Magazine",
        "category_array": {
          "Entertainment": [
            "CDs Books and Magazine"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=31079&c=BOOKS32&ref2=AWorldofBooks_combo0_d_05Jul21_cl",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D31079%26c%3DBOOKS32%26ref2%3DAWorldofBooks_combo0_d_05Jul21_cl",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-09-15",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "826102",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 50% discount on Kids Nightwear",
        "offer_value": "50%",
        "title": "Get 50% discount",
        "description": "Applicable on Kids Nightwear (Maximum &#8377;5000 discount is applicable)",
        "code": "NGHP50",
        "terms_and_conditions": "<div>1. Limited period offer.</div>\r\n<div>2. Offer valid only on the listed sizes &amp; colors of the products featured on the page.</div>\r\n<div>3.&nbsp;<span>User will get flat 50% Off* on select products.</span></div>\r\n<div>4. Maximum discount is &#8377;5000.</div>\r\n<div>5. Coupon code is not applicable with any other coupon.</div>\r\n<div>6. Benefits arising post implementation of GST are part of this coupon.</div>\r\n<div>7. Coupon code is applicable on the MRP of the products.</div>\r\n<div>8. GST applicable on discounted price.</div>\r\n<div>9. Coupon code cannot be used for purchase of FirstCry Club Membership.</div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=33011&c=NGHP50",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D33011%26c%3DNGHP50",
        "image_url": "https://cdn.fcglcdn.com/brainbees/banners/test/MerchF_NGHP50_desktop_hp_happy_dreams_20012022_2022121135059.jpg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-29",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "820530",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "35% off on Feeding &amp; Nursing Range",
        "offer_value": "35%",
        "title": "Get Flat 35% discount",
        "description": "This promotional offer is valid on Feeding &amp; Nursing Range (Maximum discount of &#8377;1500 will be offered)",
        "code": "FN35CAT",
        "terms_and_conditions": "<p><span>1. Limited Period Offer.</span><br /><span>2. User will get Flat 35% OFF or the stated discount on the chosen product, whichever is higher.</span><br /><span>3. Benefits arising post implementation of GST are part of this coupon.</span><br /><span>4. Maximum discount is &#8377;1500.</span><br /><span>5. Coupon code is valid only on Feeding &amp; Nursing except Bottles &amp; Accessories, Formula &amp; Supplements, Infant Formula and Brands Dermadew, Tango, Nestle, Protinex, PediaSure, Figaro, Motorola, Horlicks, Foscam, Alex Daisy, Bio Oil, Jane, Vaux, SeTracker, DMR, Miniwash, Masilo-Linen For Littles, Shesha Naturals, IFITech.</span><br /><span>6. Coupon code is not applicable with any other coupon and can be used only once per user.</span><br /><span>7. Coupon code is applicable only on the MRP of products.</span><br /><span>8. GST applicable on discounted price.</span></p>\r\n<div>9. Coupon Code is not applicable on these brands: Johnson's baby,Nestle,Protinex,Bella,PediaSure,Tango,Melissa &amp; Doug,Horlicks,Hamdard,Complan,Shumee,Masilo,Fancy Fluff,IFITech,Osasbazaar.</div>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=30786&c=FN35CAT",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D30786%26c%3DFN35CAT",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-06-25",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "825528",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 40% Discount on Select Huggies range",
        "offer_value": "40%",
        "title": "Get 40% Discount",
        "description": "Valid on Select Huggies range (Max. &#8377;1000 discount is allowed. Not valid on Huggies Dry Pants, Combos, Guaranteed Savings Offers, Super Savers &amp; Gifts)",
        "code": "HGDP40",
        "terms_and_conditions": "<div>Terms &amp; Condition</div>\r\n<p><span><span>1. Limited period offer.<br />2. User will get flat 40% off on select Huggies range.<br />3. Benefits arising post implementation of GST are part of this coupon.<br />4. Maximum discount amount is &#8377;1000.<br />5. Coupon code is valid on Huggies Diapers except on&nbsp; Huggies Dry Pants, Combos, Guaranteed Savings Offers, Super Savers &amp; Gift</span><span>s.</span></span></p>\r\n<div><span>6. Coupon code cannot be used for purchase for FirstCry Club Membership.</span></div>\r\n<p>&nbsp;</p>\r\n<div><span>7. Coupon is not applicable with any other coupon.</span><br /><span>8. Coupon code is applicable only on the MRP of products.</span><br /><span>9. GST applicable on discounted price.</span>\r\n<div>\r\n<div>&nbsp;</div>\r\n</div>\r\n</div>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=31604&c=HGDP40",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D31604%26c%3DHGDP40",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "816300",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Avail 35% Off on Diapers",
        "offer_value": "35%",
        "title": "Get Flat 35% OFF",
        "description": "Valid on Diapers (Maximum &#8377;1000 discount is allowed. Not valid on Combos, Select Diaper Range, few Brands)",
        "code": "MOMSALEDP",
        "terms_and_conditions": "<p>1. Limited Period Offer.<br />2. Coupon is valid on Diapers.<br />3. Max Discount is &#8377;1000<br />4. Coupon code is not valid on Combos,<a href=\"https://www.firstcry.com/topoffers?moid=31588\">&nbsp;Select Diaper Range</a>, Brands-Johnson's Baby &amp; Bella, Merries, Huggies Dry Pants.<br />5. Benefits arising post implementation of GST are part of this coupon.<br />6. Coupon is not applicable with any other coupon.<br />7. Coupon Code is applicable only on the MRP of products.<br />8. GST applicable on discounted price.</p>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/baby-diapers/1/27?c=MOMSALEDP&ref2=Diapers_Flat35_combo0_d_10Jul21_cl",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fbaby-diapers%2F1%2F27%3Fc%3DMOMSALEDP%26ref2%3DDiapers_Flat35_combo0_d_10Jul21_cl",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-08-27",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "825489",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Avail Flat 33% Off on Entire Toys Range",
        "offer_value": "33%",
        "title": "Avail Flat 33% Off",
        "description": "Valid on Entire Toys Range (Max. Once per user. Max. discount of &#8377;2000 will be applied. Not valid on Combos, Kids Gadgets and Few Brands)",
        "code": "TOYHP",
        "terms_and_conditions": "<div>Terms &amp; Condition</div>\r\n<div>\r\n<div><span>For Club Members:</span></div>\r\n<div><span>1. User will get flat 38% off on Entire Site or on-site discount whichever is higher.</span></div>\r\n<div><span>2. Max discount is &#8377;2000.</span></div>\r\n<div><span>&nbsp;</span></div>\r\n<div><span>For All Users:</span></div>\r\n<div><span>1.User will get flat 33% Off on Entire Site or on-site discount whichever is higher.</span></div>\r\n<div><span>2.Max discount is &#8377;2000.</span></div>\r\n<div><span>&nbsp;</span></div>\r\n<div><span>More T&amp;C's:</span></div>\r\n</div>\r\n<p><span><span>1. Limited Period Offer.</span><br /><span>2. Benefits arising post implementation of GST are part of this coupon.</span><br /><span><span>3.Coupon code is not valid on Combos, Kids Gadgets and Brands-Duracell,Intellikit Trial Kits, SeTracker,Fancy Fluff, Saregama, Melissa &amp; Doug, Shemaroo, Shumee, Masilo, IFITech, Emotix, TigerTech, SeTracker, Avidia,</span><span>&nbsp;West Coast, Motorola, Binaca, Melissa &amp; Doug, Horlicks, Shemaroo, DMR MiniWash, Foscam, Cherokee, Hamdard, Alex Daisy, Complan, Shumee, Bio Oil, Jane, Masilo, Fancy Fluff, IFITech, Dettol, Shesha Naturals, Dermadew, Emotix, TigerTech, Vaux, Joie, SeTracker, Ryca, Pureborn, U.S. Polo Assn., Avidia Labs, Osasbazaar, Jockey, U.S. Polo Assn. Kids, Colt, Donut, Karigari, Savlon, Boingg, Instax Fujifilm, ClassMonitor, Fisher Price by Tiffany, DuroFlex, Jade Toys, Havells, Whisper, Olay, Aveeno, Pantene, Head &amp; Shoulder, Organic India, Simon &amp; Schuster, Embassy Books, Pan Macmillan, Westland, Birkenstock, Volwco, Nooie, Skypearll, HP, Yamaha, CROSSBEATS, Crossloops, GOQii, JBL, Travel Blue, Lexingham / Travel Blue, Macmerise, Phillips, Portronics, Sekyo, STAUNCH, THINKERPLACE, Trakbond, Turet, Ultraprolink, WatchOut Wearables, Zebronics, Chicco, Campus,Crocs, Indian Terrain, Tommy Hilfiger, Allen Solly Juniors, Puma.</span><span>&nbsp;Labs,Osasbazaar, Instax Fujifilm,&nbsp;</span></span><span>Class Monitor, Jada Toys.</span><br /><span>4. Coupon code can be used only once &amp; is not applicable with any other coupon.</span><br /><span>5. Coupon code is applicable only on the MRP of products.</span><br /><span>6. GST applicable on discounted price.</span></span></p>",
        "categories": "Entertainment,Board Games and Toys",
        "category_array": {
          "Entertainment": [
            "Board Games and Toys"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=5&brandid=0&searchstring=brand@~92~103~95~106@@@1@0@20@@@@@@@@@@@@@@@@&sort=popularity&c=TOYHP",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D5%26brandid%3D0%26searchstring%3Dbrand%40%7E92%7E103%7E95%7E106%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26sort%3Dpopularity%26c%3DTOYHP",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "816305",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 35% Off on Entire Nursery Range",
        "offer_value": "35%",
        "title": "35% OFF",
        "description": "Applicable on Entire Nursery Range (Max. &#8377;5000 discount can be availed)",
        "code": "NUR35CAT",
        "terms_and_conditions": "<p>1. Limited Period Offer.<br />2. User will get Flat 35% OFF* on Entire Nursery Range.<br />3. Max Discount is &#8377;5000<br />4.Coupon code is not valid on Combos, Bottles &amp; Accessories and Formula &amp; Supplements, Innerwear &amp; Thermals, Socks &amp; Tights Swimwear, Bath Tubs and brands Meemee Select Baby Gear Range,Joie,Dabur, Enfagrow, Johnson's Baby, Dettol, Bella, Hamdard, Duracell, Complan, Ryca, Fancy Fluff, Pampers Active Baby, Pampers Dry, Intellikit Trial Kits, Dermadew, Tango, Nestle, Protinex, PediaSure, Figaro, Motorola, Melissa &amp; Doug, Horlicks, Foscam, Alex Daisy, Bio Oil, Jane, Vaux, SeTracker, DMR, Miniwash, Masilo-Linen For Littles, Shesha Naturals, IFITech, Alex Daisy, Shumee,&nbsp;IFITech,Joie,Osasbazaar,Boingg,Duroflex,Bianca .<br />5. Benefits arising post implementation of GST are part of this coupon.<br />6. Coupon can be used only once and is not applicable with any other coupon.<br />7. Coupon Code is applicable only on the MRP of products.<br />8. GST applicable on discounted price.</p>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=1036&c=NUR35CAT&ref2=Nursery_06_combo0_d_23Nov20_NUR35CAT",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D1036%26c%3DNUR35CAT%26ref2%3DNursery_06_combo0_d_23Nov20_NUR35CAT",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-06-28",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "820525",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Flat 35% Off on Feeding and Nursing Range",
        "offer_value": "35%",
        "title": "Flat 35% OFF",
        "description": "Valid on Feeding and Nursing Range (Max. Once per user. Maximum discount of &#8377;1500 can be availed. Not valid on Bottles &amp; Accessories, Formula &amp; Supplements, Infant Formula and few Brands)",
        "code": "FEEDN35",
        "terms_and_conditions": "",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=1507&ref2=feeding_01_07_21_combo4_m_01jul21_ncl&c=feedn35",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D1507%26ref2%3Dfeeding_01_07_21_combo4_m_01jul21_ncl%26c%3Dfeedn35",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-07-06",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "820523",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "50% off on Select Products",
        "offer_value": "50%",
        "title": "Avail 50% off",
        "description": "This voucher is valid on Select Products (Maximum &#8377;5000 discount)",
        "code": "KITE50",
        "terms_and_conditions": "<div>1. Limited period offer.</div>\r\n<div>2. Offer valid only on the listed sizes &amp; colors of the products featured on the page.</div>\r\n<div>3.&nbsp;<span>User will get flat 50% Off* on select products.</span></div>\r\n<div>4. Maximum discount is &#8377;5000.</div>\r\n<div>5. Coupon code is not applicable with any other coupon.</div>\r\n<div>6. Benefits arising post implementation of GST are part of this coupon.</div>\r\n<div>7. Coupon code is applicable on the MRP of the products.</div>\r\n<div>8. GST applicable on discounted price.</div>\r\n<div>9. Coupon code cannot be used for purchase of FirstCry Club Membership.</div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=32911&sort=bestseller&ref2=MerchF_ROI_Kites_Discounts_combo0_d_06Jan22_cl&c=KITE50",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D32911%26sort%3Dbestseller%26ref2%3DMerchF_ROI_Kites_Discounts_combo0_d_06Jan22_cl%26c%3DKITE50",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-10",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "804656",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Flat 30% Discount on Toys orders",
        "offer_value": "30%",
        "title": "Avail Flat 30% Off",
        "description": "Valid on Toys orders (On min. order-value of &#8377;899. Max. discount allowed is &#8377;2500. Not valid on Select brands)",
        "code": "TY30ZNE",
        "terms_and_conditions": "",
        "categories": "Entertainment,Board Games and Toys",
        "category_array": {
          "Entertainment": [
            "Board Games and Toys"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=5&brandid=0&searchstring=brand@@@1@0@20@@@@@@@@@@@@@@@@&sort=bestseller&c=TY30ZNE",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D5%26brandid%3D0%26searchstring%3Dbrand%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26sort%3Dbestseller%26c%3DTY30ZNE",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-02-01",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "548869",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 30% discount on Bath &amp; Skin Range\r\n",
        "offer_value": "30%",
        "title": "Avail 30% Discount",
        "description": " (On spending min. &#8377;750. Max. discount of &#8377;2000 will be applicable. Not valid on brands Dabur,Enfagrow,Johnson&#039;s Baby, Dettol, Bella, Hamdard, Duracell, Complan, Ryca, Fancy and few more)",
        "code": "FC30BSHS",
        "terms_and_conditions": "<div>Terms &amp; Condition</div>\r\n<p><span>1.&nbsp;Limited Period Offer.<br />2. User will get Flat 30% or the stated discount on the chosen product, whichever is higher on order above &#8377;750.<br />3. Maximum discount is &#8377;2000.<br />4. Coupon code is valid on Bath &amp; Skin category except on brands Dabur,Enfagrow,Johnson's Baby, Dettol, Bella, Hamdard, Duracell, Complan, Ryca, Fancy Fluff, Pampers Active Baby, Pampers Dry, Intellikit Trial Kits, Dermadew, Tango, Nestle, Protinex, PediaSure, Figaro, Motorola, Melissa &amp; Doug, Horlicks, Foscam, Alex Daisy, Bio Oil, Jane, Vaux, SeTracker, DMR, Miniwash, Masilo-Linen For Littles, Shesha Naturals, IFITech.<br />5.&nbsp;Coupon code is not applicable with any other coupon.<br />6. Coupon Code is applicable only on the MRP of products.<br />7. GST Applicable on discounted price.<br /></span></p>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=3&brandid=0&searchstring=brand@@@@1@0@20@@@@@@@@@@@@@@@@&sort=BestSeller&c=FC30BSHS",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D3%26brandid%3D0%26searchstring%3Dbrand%40%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26sort%3DBestSeller%26c%3DFC30BSHS",
        "image_url": "https://cdn.fcglcdn.com/brainbees/banners/HS_Bath_Skin_Care_30_OFF.jpg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2020-06-04",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "548868",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 30% Discount on Kids Fashion",
        "offer_value": "30%",
        "title": "Get Flat 30% OFF",
        "description": "This voucher is applicable on Kids Fashion (Products include Shorts, Skirts, Frocks, T-Shirts and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/baby-gear-and-nursery?&c=FC30BGNS",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fbaby-gear-and-nursery%3F%26c%3DFC30BGNS",
        "image_url": "https://cdn.fcglcdn.com/brainbees/banners/HS_BabyGear_30_OFF.jpg",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2020-06-04",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "795820",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Flat 40% Off on Select Fashion Range",
        "offer_value": "40%",
        "title": "Flat 40% discount",
        "description": "Valid on Select Fashion Range (Max. &#8377;5000 discount will be applied. Not valid on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; few Brands)",
        "code": "PARTYHP",
        "terms_and_conditions": "",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/topoffers?moid=32738&c=PARTYHP",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ftopoffers%3Fmoid%3D32738%26c%3DPARTYHP",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-12-03",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "800795",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get 30% OFF on Entire Bath and Skin Care",
        "offer_value": "30%",
        "title": "Avail 30% Off",
        "description": "Valid on Entire Bath and Skin Care (Max. Once per user. Maximum &#8377;2000 discount will be applicable. Not valid on Bath Robes, Bath Towels, Bath tubs &amp; Bathers, and few brands)",
        "code": "BNS30CAT",
        "terms_and_conditions": "",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=3&brandid=0&searchstring=brand@~14~13@@@1@0@20@@@@@@@@@@@@@@@@&sort=popularity&c=BNS30CAT&ref2=FORNOURISHINGTHEIRSKIN_combo0_d_09Feb21_BNS30CAT",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D3%26brandid%3D0%26searchstring%3Dbrand%40%7E14%7E13%40%40%401%400%4020%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%40%26sort%3Dpopularity%26c%3DBNS30CAT%26ref2%3DFORNOURISHINGTHEIRSKIN_combo0_d_09Feb21_BNS30CAT",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-06-25",
        "end_date": "2022-02-09"
      },
      {
        "lmd_id": "634089",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Flat &#8377;150 off on Toys orders",
        "offer_value": "&#8377;150",
        "title": "Flat &#8377;150 Off",
        "description": "Valid on Toys orders (On purchase of &#8377;999+. Not valid on Select  Brand)",
        "code": "FCY150TY",
        "terms_and_conditions": "<div><span>&nbsp;Limited Period Offer.&nbsp;</span></div>\r\n<div><span>2. User will get flat &#8377;150 OFF on Toys orders worth &#8377;999 &amp; above.</span></div>\r\n<div><span><span>3. Coupon is applicable only on Toys range except brands Duracell, Johnson Baby, Nestle, Protinex, Bella, PediaSure, Figaro, Tango, Dabur, West Coast, Motorola, Melissa &amp; Doug, Cetaphil, Horlicks, DMR MiniWash, Foscam, Hamdard, Alex Daisy, Complan, Shumee, Bio Oil, Jane, Masilo-Linen For Littles, Fancy Fluff, IFITech, Dettol, SHESHA NATURALS, Dermadew, Emotix, TigerTech, Vaux, Joie, SeTracker, RYCA, Avidia Labs, Osasbazaar.</span></span></div>\r\n<div><span>4. Coupon code is not applicable with any other coupon.</span></div>\r\n<div><span>5. Coupon Code is applicable only on the MRP of products.</span></div>\r\n<div><span>6. GST applicable on discounted price.</span></div>\r\n<div><span>7. Benefits arising post implementation of GST are part of this coupon.</span></div>",
        "categories": "Entertainment,Board Games and Toys",
        "category_array": {
          "Entertainment": [
            "Board Games and Toys"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2F",
        "image_url": "https://cdn.fcglcdn.com/brainbees/banners/Offerzone_Jan_19_3.jpg",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2021-02-01",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "634088",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get &#8377;200 Discount on Diapers",
        "offer_value": "&#8377;200",
        "title": "Get Flat &#8377;200 Discount",
        "description": "Valid on Diapers (On shopping of minimum &#8377;799. Not valid on Combos, Guaranteed Savings Offers, Super Savers &amp; Gift Packs and brands)",
        "code": "FCY200DPR",
        "terms_and_conditions": "<p><span>1. Limited period offer.</span><br /><span>2. User will get flat &#8377;200 OFF on Diapers orders worth &#8377;799 &amp; above.</span><br /><span>3. Benefits arising post implementation of GST are part of this coupon.&nbsp;</span><br /><span>4. Coupon code is valid on Diapers except on Combos, Guaranteed Savings Offers, Super Savers &amp; Gift Packs and brands.</span><br /><span>5.&nbsp;Coupon is not applicable with any other coupon.</span><br /><span>6. Coupon code is applicable only on the cart value of products.</span><br /><span>7. GST applicable on discounted price.</span></p>",
        "categories": "Kids and Toddlers,Baby Care",
        "category_array": {
          "Kids and Toddlers": [
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2F",
        "image_url": "https://cdn.fcglcdn.com/brainbees/banners/Offerzone_Jan_19_2.jpg",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2021-02-01",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "634087",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Avail Flat &#8377;250 off on Baby Hug",
        "offer_value": "&#8377;250",
        "title": "&#8377;250 Off",
        "description": "Valid on Baby Hug (On order of minimum &#8377;1999. Not valid on  Combos, Bottles &amp; Accessories and Formula &amp; Supplements,Innerwear &amp; Thermals, Socks &amp; Tights)",
        "code": "FCY250BHUG",
        "terms_and_conditions": "",
        "categories": "Fashion,Kids and Toddlers,Kids Fashion,Baby Care",
        "category_array": {
          "Fashion": [],
          "Kids and Toddlers": [
            "Kids Fashion",
            "Baby Care"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2F",
        "image_url": "https://cdn.fcglcdn.com/brainbees/banners/Offerzone_Jan_19_1.jpg",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2021-02-01",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "548867",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "30% off on Kids Fashion",
        "offer_value": "30%",
        "title": "Avail 30% discount",
        "description": "Valid on Kids Fashion (On minimum purchase of &#8377;750. Max. &#8377;5000 discount. Not valid on Innerwear &amp; Thermals, Socks &amp; Tights, brands like Pampers Active Baby, Pampers Dry, Tango and few more brands)",
        "code": "FC30CFF",
        "terms_and_conditions": "<div><span>Flat 30% OFF* on Clothes, Footwear &amp; Fashion on orders above &#8377;750</span></div>\r\n<div>Terms &amp; Condition</div>\r\n<p><span>1. Limited Period Offer.<br />2. The user will get Flat 30% or the stated discount on the chosen product, whichever is higher.<br />3. Max discount is &#8377;5000.<br />4. The Coupon code is valid on Clothes, Footwear &amp; Fashion Category except Innerwear &amp; Thermals, Socks &amp; Tights and brands Pampers Active Baby, Pampers Dry, Tango, Intellikit Trial Kits, Nestle, Protinex, PediaSure, Figaro, Motorola, Melissa &amp; Doug, Horlicks, Foscam, Alex Daisy, Bio Oil Jane, Vaux, SeTracker, DMR, Miniwash, Masilo-Linen For Littles, Shesha Naturals, IFITech.<br />5.&nbsp;Coupon is not applicable with any other coupon.<br />6. Coupon Code is applicable only on the MRP of products.<br />7. GST Applicable on discounted price.</span></p>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/clothes-and-fashion-accessories?&c=FC30CFF",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fclothes-and-fashion-accessories%3F%26c%3DFC30CFF",
        "image_url": "https://cdn.fcglcdn.com/brainbees/banners/HS_Fashion_30_OFF.jpg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2020-06-04",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "802000",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Up To 42% Off on 3 or more products",
        "offer_value": "42%",
        "title": "Up to 42% off",
        "description": "Valid on 3 or more products (Maximum discount of &#8377;5000.00. Not valid on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; few Brands. Extra Off for Members only)",
        "code": "PRC3B",
        "terms_and_conditions": "<div>1. Limited Period Offer.</div>\r\n<div>2. Max discount is &#8377;5000.</div>\r\n<div>3. Coupon is not applicable on Socks &amp; Tights, Inner Wear &amp; Thermals, Caps Gloves &amp; Mittens, Swim Wear &amp; Brands Tango, Cherokee, Colt, Donut, Karigari, Masilo, Crocs, Birkenstock, JOCKEY and select products of&nbsp; Chicco, Tommy Hilfiger, US Polo Assn, PUMA, Allen Solly Junior, Jack &amp; Jones Junior.</div>\r\n<div>4. Coupon code is not applicable with any other coupon.</div>\r\n<div>5. Benefits arising post implementation of GST are part of this coupon.</div>\r\n<div>6. Coupon code is applicable on the MRP of the products.</div>\r\n<div>7. GST applicable on discounted price.</div>\r\n<div>8. Coupon code cannot be used for purchase of FirstCry Club Membership</div>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/featuredoffer?cpid=84&c=PRC3B&ref2=PremiumFashionBuy3_01_combo0_d_06Dec21_cl",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Ffeaturedoffer%3Fcpid%3D84%26c%3DPRC3B%26ref2%3DPremiumFashionBuy3_01_combo0_d_06Dec21_cl",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-12-08",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "825546",
        "store": "firstcry.com",
        "merchant_homepage": "https://www.firstcry.com/",
        "offer_text": "Get Flat 45% Off on Toffyhouse Products",
        "offer_value": "45%",
        "title": "Get Flat 45% Off",
        "description": "This coupon is applicable on Toffyhouse Products (Max. discount of &#8377;2000 will be applied)",
        "code": "TOFFY45",
        "terms_and_conditions": "<p><span>1. Limited Period Offer.<br />2. User will get Flat 45% on&nbsp;</span><span><span>Toffyhouse</span><span>.</span></span><br /><span><span>3.&nbsp;Benefits arising post implementation of GST are part of this coupon.</span></span><br /><span><span>4. Maximum discount is &#8377;2000 on Toffyhouse.</span></span><br /><span><span>5. Coupon is not applicable with any other coupon.</span></span><br /><span><span>6. Coupon code is applicable only on the MRP of products.</span></span><br /><span><span>7. GST applicable on discounted price.</span></span></p>",
        "categories": "Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.firstcry.com/searchresult?sale=6&brandid=361&sort=bestseller&c=TOFFY45",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.firstcry.com%2Fsearchresult%3Fsale%3D6%26brandid%3D361%26sort%3Dbestseller%26c%3DTOFFY45",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "813871",
        "store": "glossybox.co.uk",
        "merchant_homepage": "https://www.glossybox.co.uk/",
        "offer_text": "Get Flat 15% Discount on GLOSSYBOX Subscriptions",
        "offer_value": "15%",
        "title": "Avail 15% OFF",
        "description": "This discount is applicable on GLOSSYBOX Subscriptions",
        "code": "GLOSSYSUB",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Makeup Products",
        "category_array": {
          "Health and Beauty": [
            "Makeup Products"
          ]
        },
        "featured": "No",
        "url": "https://www.glossybox.co.uk/beauty-box/glossybox-beauty-box-subscription/11381920.html?variation=11381921&awc=3749_1641301485_89fdb2664b31cb9973524493897fe22b",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.glossybox.co.uk%2Fbeauty-box%2Fglossybox-beauty-box-subscription%2F11381920.html%3Fvariation%3D11381921%26awc%3D3749_1641301485_89fdb2664b31cb9973524493897fe22b",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-05",
        "end_date": "2023-01-01"
      },
      {
        "lmd_id": "822196",
        "store": "glossybox.co.uk",
        "merchant_homepage": "https://www.glossybox.co.uk/",
        "offer_text": "&#163;5.25 off on 3 months of GLOSSYBOX",
        "offer_value": "&#163;5.25",
        "title": "Get &#163;5.25 Off",
        "description": "This coupon is applicable on 3 months of GLOSSYBOX",
        "code": "FUN33",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Makeup Products",
        "category_array": {
          "Health and Beauty": [
            "Makeup Products"
          ]
        },
        "featured": "No",
        "url": "https://www.glossybox.co.uk/beauty-box/glossybox-beauty-box-subscription/11381920.html?variation=11381922",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.glossybox.co.uk%2Fbeauty-box%2Fglossybox-beauty-box-subscription%2F11381920.html%3Fvariation%3D11381922",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2022-01-20",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "815173",
        "store": "glossybox.co.uk",
        "merchant_homepage": "https://www.glossybox.co.uk/",
        "offer_text": "Flat 15% Discount on GLOSSYBOX eGift Voucher",
        "offer_value": "15%",
        "title": "Flat 15% discount",
        "description": "This discount is valid on GLOSSYBOX eGift Voucher (On Min. Purchase of &#163;50)",
        "code": "GLOSSYGIFT",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Makeup Products",
        "category_array": {
          "Health and Beauty": [
            "Makeup Products"
          ]
        },
        "featured": "No",
        "url": "https://www.glossybox.co.uk/customer-gift-voucher/glossybox-egift-voucher/11381912.html",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.glossybox.co.uk%2Fcustomer-gift-voucher%2Fglossybox-egift-voucher%2F11381912.html",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-07",
        "end_date": "2023-01-01"
      },
      {
        "lmd_id": "605157",
        "store": "glossybox.co.uk",
        "merchant_homepage": "https://www.glossybox.co.uk/",
        "offer_text": "GLOSSYBOX Voucher starting at just ????16.95",
        "offer_value": "Great Value",
        "title": "GLOSSYBOX Voucher",
        "description": "Starting @ just ????16.95 (only for members)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Gift Items",
        "category_array": {
          "Gift Items": []
        },
        "featured": "No",
        "url": "https://www.glossybox.co.uk/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.glossybox.co.uk%2F",
        "image_url": "https://s3.thcdn.com/widgets/129-en/41/1-UK-Mobile-Quote-Banners-600px-051341.jpg",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2020-12-01",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "817919",
        "store": "glossybox.co.uk",
        "merchant_homepage": "https://www.glossybox.co.uk/",
        "offer_text": "Free REE Avant Pro Perfecting Primer on GLOSSYBOX subscription",
        "offer_value": "Free",
        "title": "Free REE Avant Pro Perfecting Primer",
        "description": "This promotional offer is valid on GLOSSYBOX subscription (On Min. Purchase of &#163;50)",
        "code": "GIFT",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care,Makeup Products",
        "category_array": {
          "Health and Beauty": [
            "Body Care",
            "Makeup Products"
          ]
        },
        "featured": "No",
        "url": "https://www.glossybox.co.uk/beauty-box/glossybox-beauty-box-subscription/11381920.html?variation=11381921&awc=3749_1641914693_97f67519be4af85edfafa7ad950d688f",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.glossybox.co.uk%2Fbeauty-box%2Fglossybox-beauty-box-subscription%2F11381920.html%3Fvariation%3D11381921%26awc%3D3749_1641914693_97f67519be4af85edfafa7ad950d688f",
        "image_url": "",
        "type": "Code",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2022-01-12",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "822195",
        "store": "glossybox.co.uk",
        "merchant_homepage": "https://www.glossybox.co.uk/",
        "offer_text": "3 months GLOSSYBOX subscription @ just &#163;33",
        "offer_value": "Great Value",
        "title": "3 months GLOSSYBOX subscription",
        "description": "Get it at &#163;33 only",
        "code": "SAVE",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care,Makeup Products",
        "category_array": {
          "Health and Beauty": [
            "Body Care",
            "Makeup Products"
          ]
        },
        "featured": "No",
        "url": "https://www.glossybox.co.uk/beauty-box/glossybox-beauty-box-subscription/11381920.html?variation=11381921&awc=3749_1642612935_901c1c168546e57ecd129f731e3d7d34",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.glossybox.co.uk%2Fbeauty-box%2Fglossybox-beauty-box-subscription%2F11381920.html%3Fvariation%3D11381921%26awc%3D3749_1642612935_901c1c168546e57ecd129f731e3d7d34",
        "image_url": "",
        "type": "Code",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-20",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "787747",
        "store": "glossybox.co.uk",
        "merchant_homepage": "https://www.glossybox.co.uk/",
        "offer_text": "Avail 25% Off on GLOSSYBOX Skincare Sets",
        "offer_value": "25%",
        "title": "25% Discount",
        "description": "This promotional offer is valid on GLOSSYBOX Skincare Sets",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ]
        },
        "featured": "No",
        "url": "https://www.glossybox.co.uk/skincare/sets.list",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.glossybox.co.uk%2Fskincare%2Fsets.list",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-07-01",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "816004",
        "store": "glossybox.co.uk",
        "merchant_homepage": "https://www.glossybox.co.uk/",
        "offer_text": "GLOSSYBOX Beauty Box @ just &#163;10",
        "offer_value": "Super Offer",
        "title": "GLOSSYBOX Beauty Box",
        "description": "Get it for &#163;10 only",
        "code": "RELAX",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Makeup Products",
        "category_array": {
          "Health and Beauty": [
            "Makeup Products"
          ]
        },
        "featured": "No",
        "url": "https://www.glossybox.co.uk/beauty-box/glossybox-beauty-box-subscription/11381920.html?variation=11381921&awc=3749_1641573139_360dc990e3bddacc8d507a4fb49b3e07",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.glossybox.co.uk%2Fbeauty-box%2Fglossybox-beauty-box-subscription%2F11381920.html%3Fvariation%3D11381921%26awc%3D3749_1641573139_360dc990e3bddacc8d507a4fb49b3e07",
        "image_url": "",
        "type": "Code",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-08",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "683973",
        "store": "glossybox.co.uk",
        "merchant_homepage": "https://www.glossybox.co.uk/",
        "offer_text": "GLOSSYBOX eGift Voucher @ just ????38.25",
        "offer_value": "Save Big",
        "title": "GLOSSYBOX eGift Voucher",
        "description": "Get it @ just ????38.25",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Gift Items,Health and Beauty,Makeup Products",
        "category_array": {
          "Gift Items": [],
          "Health and Beauty": [
            "Makeup Products"
          ]
        },
        "featured": "No",
        "url": "https://www.glossybox.co.uk/customer-gift-voucher/glossybox-egift-voucher/11381912.html",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.glossybox.co.uk%2Fcustomer-gift-voucher%2Fglossybox-egift-voucher%2F11381912.html",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2020-07-29",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "812391",
        "store": "glossybox.co.uk",
        "merchant_homepage": "https://www.glossybox.co.uk/",
        "offer_text": "Free first gift box on Glossybox Beauty Subscription",
        "offer_value": "Free",
        "title": "Free first gift box",
        "description": "This discount is applicable on Glossybox Beauty Subscription",
        "code": "MINDFUL",
        "terms_and_conditions": "",
        "categories": "Gift Items",
        "category_array": {
          "Gift Items": []
        },
        "featured": "No",
        "url": "https://www.glossybox.co.uk/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.glossybox.co.uk%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2022-01-01",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "794053",
        "store": "kmart.com",
        "merchant_homepage": "http://www.kmart.com/",
        "offer_text": "Get Upto 30% discount on Men&#039;s Footwear",
        "offer_value": "30%",
        "title": "Up To 30% discount",
        "description": "This voucher is valid on Men&#039;s Footwear (Products include Slipper, Slip ons, Sandals, Shoes and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Footwear",
        "category_array": {
          "Fashion": [
            "Footwear"
          ]
        },
        "featured": "No",
        "url": "https://www.kmart.com/shoes-men-s-shoes/b-5001380",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kmart.com%2Fshoes-men-s-shoes%2Fb-5001380",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-11-01",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "775705",
        "store": "kmart.com",
        "merchant_homepage": "http://www.kmart.com/",
        "offer_text": "Get Up To 60% off on Select Men&#039;s activewear",
        "offer_value": "60%",
        "title": "Get Up To 60% discount",
        "description": "Applicable on Select Men&#039;s activewear (Products include Shirts, Shorts, Pants, Hoodies and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels",
        "category_array": {
          "Fashion": [
            "Mens Apparels"
          ]
        },
        "featured": "No",
        "url": "https://www.kmart.com/deals/kmart-online-deals.html/dealGrid?adcell=hp_hero",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kmart.com%2Fdeals%2Fkmart-online-deals.html%2FdealGrid%3Fadcell%3Dhp_hero",
        "image_url": "https://s7.sears.com/is/image/SearsTransform/20211031_K_HP_Hero_NovWk1",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-11-01",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "793968",
        "store": "kmart.com",
        "merchant_homepage": "http://www.kmart.com/",
        "offer_text": "Get Upto 50% Off + Free Shipping on Szul Rings",
        "offer_value": "50%",
        "title": "Up to 50% Off + Free Shipping",
        "description": "This voucher is valid on Szul Rings",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kmart.com/jewelry-rings/b-20103?Brand=szul.com&discount=40&offer=Free%20Shipping&filterList=Brand%7Cdiscount%7Coffer&sortOption=UNITS_HIGH_TO_LOW&subCatView=true",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kmart.com%2Fjewelry-rings%2Fb-20103%3FBrand%3Dszul.com%26discount%3D40%26offer%3DFree%2520Shipping%26filterList%3DBrand%257Cdiscount%257Coffer%26sortOption%3DUNITS_HIGH_TO_LOW%26subCatView%3Dtrue",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-06-23",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "775908",
        "store": "kmart.com",
        "merchant_homepage": "http://www.kmart.com/",
        "offer_text": "Avail Up To 20% off on vidaXL Living Room Furniture",
        "offer_value": "20%",
        "title": "Get Up to 20% OFF",
        "description": "Applicable on vidaXL Living Room Furniture (Products include TV Cabinet, Chair, Sofa and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Home and Living,Furniture and Decor",
        "category_array": {
          "Home and Living": [
            "Furniture and Decor"
          ]
        },
        "featured": "No",
        "url": "https://www.kmart.com/home-furniture-living-room-furniture/b-1348506027?Brand=vidaXL&discount=1&offer=Free%20Shipping&filterList=Brand%7Cdiscount%7Coffer&sortOption=UNITS_HIGH_TO_LOW&subCatView=true&shipOrDelivery=true",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kmart.com%2Fhome-furniture-living-room-furniture%2Fb-1348506027%3FBrand%3DvidaXL%26discount%3D1%26offer%3DFree%2520Shipping%26filterList%3DBrand%257Cdiscount%257Coffer%26sortOption%3DUNITS_HIGH_TO_LOW%26subCatView%3Dtrue%26shipOrDelivery%3Dtrue",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-11-01",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "711017",
        "store": "kmart.com",
        "merchant_homepage": "http://www.kmart.com/",
        "offer_text": "Get Upto 60% Off on Beautyrest and Serta Matresses",
        "offer_value": "60%",
        "title": "Avail Upto 60% discount",
        "description": "This offer is applicable on Beautyrest and Serta Matresses",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Home and Living,Furniture and Decor",
        "category_array": {
          "Home and Living": [
            "Furniture and Decor"
          ]
        },
        "featured": "No",
        "url": "https://www.kmart.com/home-mattresses-accessories-mattresses/b-5000619?subCatView=true&tagLabel=Overstock",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kmart.com%2Fhome-mattresses-accessories-mattresses%2Fb-5000619%3FsubCatView%3Dtrue%26tagLabel%3DOverstock",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-06-23",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "815230",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Temple Silver Look Series starting at just &#8377;3290.00",
        "offer_value": "Hot Offer",
        "title": "Temple Silver Look Series",
        "description": "Starting for &#8377;3290.00 (Products include Necklace, Bangles, Maang Tikka and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/collections/temple-silver-look-series-13",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fcollections%2Ftemple-silver-look-series-13",
        "image_url": "https://cdn.shopify.com/s/files/1/0796/1959/files/11_copy_349a9324-0a41-48b8-9863-9dec7b6cc5e3_540x.jpg?v=1624099744",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-07",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "818270",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Swarnika Bridal Look @ just &#8377;6750",
        "offer_value": "Best Offer",
        "title": "Swarnika Bridal Look",
        "description": "Get it just for &#8377;6750",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/collections/south-indian-style-look-series-14",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fcollections%2Fsouth-indian-style-look-series-14",
        "image_url": "https://cdn.shopify.com/s/files/1/0796/1959/files/15_22f3cb6c-9991-4227-84a1-1fd9caf1c383_540x.jpg?v=1640157640",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-13",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "815232",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Diva Look Necklace and Bangle starting at just &#8377;2390.00",
        "offer_value": "Hot Offer",
        "title": "Diva Look Necklace and Bangle",
        "description": "Starts at just &#8377;2390.00",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/collections/diva-look-series-5",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fcollections%2Fdiva-look-series-5",
        "image_url": "https://cdn.shopify.com/s/files/1/0796/1959/files/12_d2ceb12f-cb9b-42dd-9b39-97609cd4bd9e_540x.jpg?v=1640150784",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-07",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "815237",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Zircon Necklaces starting at just &#8377;3080.00",
        "offer_value": "Hot Offer",
        "title": "Zircon Necklaces",
        "description": "Starts at &#8377;3080.00 only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/search?q=zircon%20necklaces&sort=-created_at&f.Price=5001%20-%20100000%2C3001%20-%205000",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fsearch%3Fq%3Dzircon%2520necklaces%26sort%3D-created_at%26f.Price%3D5001%2520-%2520100000%252C3001%2520-%25205000",
        "image_url": "https://cdn.shopify.com/s/files/1/0796/1959/files/6_13d4e7ea-1fbb-4686-a6e0-2f1e511c5ff8_540x.jpg?v=1640153028",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-07",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "815236",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Bridal Jewellery Sets starting at just &#8377;2090.00",
        "offer_value": "Hot Offer",
        "title": "Bridal Jewellery Sets",
        "description": "Starting from &#8377;2090.00",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/collections/bridal-jewellery-sets",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fcollections%2Fbridal-jewellery-sets",
        "image_url": "https://cdn.shopify.com/s/files/1/0796/1959/files/8_6ce1d42d-313c-4ddc-a642-8a156d5580c4_540x.jpg?v=1640152938",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-07",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "816178",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Divine Collection starting at just &#8377;3050",
        "offer_value": "Hot Offer",
        "title": "Divine Collection",
        "description": "Starting from &#8377;3050 only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/search?q=divine%20collection&sort=-created_at&f.Price=5001%20-%20100000%2C3001%20-%205000",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fsearch%3Fq%3Ddivine%2520collection%26sort%3D-created_at%26f.Price%3D5001%2520-%2520100000%252C3001%2520-%25205000",
        "image_url": "https://cdn.shopify.com/s/files/1/0796/1959/files/7_11269557-8c83-4397-8148-375872366059_540x.jpg?v=1640152786",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-10",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "809584",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Avail Flat &#8377;200 off on all products",
        "offer_value": "Sign-Up Offer",
        "title": "Flat &#8377;200 OFF",
        "description": "This discount is valid on all products (On min. order of &#8377;2000. For New users only)",
        "code": "HOWDY200",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Sign-Up",
        "status": "active",
        "start_date": "2021-06-04",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "815234",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Kundan Bangle @ just &#8377;2950.00",
        "offer_value": "Save Big",
        "title": "Kundan Bangle",
        "description": "Get it just for &#8377;2950.00",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/collections/series-3",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fcollections%2Fseries-3",
        "image_url": "https://cdn.shopify.com/s/files/1/0796/1959/files/18_615f99bd-0e39-49b0-a31d-7baf83463a98_540x.jpg?v=1640151857",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-07",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "815235",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Sanghini Collection starting at just &#8377;820",
        "offer_value": "Save Big",
        "title": "Sanghini Collection",
        "description": "Starts at &#8377;820 (Products include Necklace, Bangles, Earrings and more) only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/search?q=sanghini",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fsearch%3Fq%3Dsanghini",
        "image_url": "https://cdn.shopify.com/s/files/1/0796/1959/files/9_d76afa9c-b6e6-497c-bf5f-019da800efc3_540x.jpg?v=1640152901",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-07",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "778349",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Get 60% Discount on Selected Jewelry",
        "offer_value": "60%",
        "title": "Flat 60% OFF",
        "description": "This promotional offer is valid on Selected Jewelry (Products include Necklace, Bangles, Earrings, Pendants, Bracelet and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/collections/60-off",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fcollections%2F60-off",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-06-04",
        "end_date": "2022-01-31"
      },
      {
        "lmd_id": "820088",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Kundan Jewellery starting at just &#8377;380",
        "offer_value": "Hot Offer",
        "title": "Kundan Jewellery",
        "description": "Starting for just &#8377;380 (Products include Necklace, Bangles, Earrings, Pendants, Bracelet and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/search?q=kundan&sort=-created_at",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fsearch%3Fq%3Dkundan%26sort%3D-created_at",
        "image_url": "https://cdn.shopify.com/s/files/1/0796/1959/files/kundan-banner-desktop_540x.jpg?v=1642164351",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-17",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "815231",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Swarnika Bridal Set starting at just &#8377;560.00",
        "offer_value": "Great Value",
        "title": "Swarnika Bridal Set",
        "description": "Starts @ &#8377;560.00 (Products include Necklace, Bangles, Earrings, and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/collections/swarnika-bridal-set-series-10",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fcollections%2Fswarnika-bridal-set-series-10",
        "image_url": "https://cdn.shopify.com/s/files/1/0796/1959/files/11_d6673ad9-8416-4a97-9b7b-7bb1c31a7e09_540x.jpg?v=1640149296",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-07",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "820087",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Sankranti Jewellery starting at just &#8377;100",
        "offer_value": "Best Offer",
        "title": "Sankranti Jewellery",
        "description": "Starting from just &#8377;100 (Products include Necklace, Bangles, Earrings, Pendants, Bracelet and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/search?q=silver%20temple&sort=-created_at&goal=0_3865c2b71a-d851ff2e32-&mc_eid=UNIQID",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fsearch%3Fq%3Dsilver%2520temple%26sort%3D-created_at%26goal%3D0_3865c2b71a-d851ff2e32-%26mc_eid%3DUNIQID",
        "image_url": "https://cdn.shopify.com/s/files/1/0796/1959/files/sankranti-banner-desktop_540x.jpg?v=1642164513",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-17",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "815233",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Zircon Tikka @ just &#8377;980.00",
        "offer_value": "Super Offer",
        "title": "Zircon Tikka",
        "description": "Get it just at &#8377;980.00",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/collections/series-4",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fcollections%2Fseries-4",
        "image_url": "https://cdn.shopify.com/s/files/1/0796/1959/files/13_b936b232-f580-43a1-a65d-2756b6bdfbff_540x.jpg?v=1640151381",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-07",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "816173",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Diwa Earrings starting at just &#8377;750",
        "offer_value": "Best Offer",
        "title": "Diwa Earrings",
        "description": "Starting from &#8377;750",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/search?q=diwa",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fsearch%3Fq%3Ddiwa",
        "image_url": "https://cdn.shopify.com/s/files/1/0796/1959/files/2_efe70424-1bfb-455e-aca3-3a17c6e12c3b_540x.jpg?v=1640148120",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-10",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "810467",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Antique Red Saree Look Series starting at just &#8377;690",
        "offer_value": "Great Value",
        "title": "Antique Red Saree Look Series",
        "description": "Starting @ &#8377;690 (Products include Necklace, Bangles, Earrings, Pendants and more) only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/collections/series-12",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fcollections%2Fseries-12",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-06-04",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "807330",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Antique Jewellery starting at just &#8377;140",
        "offer_value": "Hot Offer",
        "title": "Antique Jewellery",
        "description": "Starts @ &#8377;140 (Products include Necklace, Bangles, Earrings, Pendants, Bracelet and more) only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/search?q=antique%20jewellery&sort=-created_at",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fsearch%3Fq%3Dantique%2520jewellery%26sort%3D-created_at",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-06-04",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "816170",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Zircon Jewellery starting at just &#8377;1020.00",
        "offer_value": "Save Big",
        "title": "Zircon Jewellery",
        "description": "Starting at &#8377;1020.00 (Products include Necklace, Earrings, Pendants, Bracelet and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/search?q=zircon&sort=-created_at&f.Price=1001+-+2000,2001+-+3000",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fsearch%3Fq%3Dzircon%26sort%3D-created_at%26f.Price%3D1001%2B-%2B2000%2C2001%2B-%2B3000",
        "image_url": "https://cdn.shopify.com/s/files/1/0796/1959/files/1_208acc98-6034-447c-8888-dc653eab51e0_540x.jpg?v=1640355921",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-10",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "816177",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Zircon Necklace @ just &#8377;13800",
        "offer_value": "Hot Offer",
        "title": "Zircon Necklace",
        "description": "Get it at just &#8377;13800",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/collections/party-look-series-6",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fcollections%2Fparty-look-series-6",
        "image_url": "https://cdn.shopify.com/s/files/1/0796/1959/files/10_dd16b03f-fadf-4130-8f08-6964089280d0_540x.jpg?v=1640151783",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-10",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "816176",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Antique Red Saree Look- Series starting at just &#8377;1450",
        "offer_value": "Save Big",
        "title": "Antique Red Saree Look- Series",
        "description": "Starting from &#8377;1450",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/collections/antique-red-saree-look-series-11",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fcollections%2Fantique-red-saree-look-series-11",
        "image_url": "https://cdn.shopify.com/s/files/1/0796/1959/files/17_ee13da3f-72e3-43ab-91a6-2368ac7892ac_540x.jpg?v=1640149442",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-10",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "816175",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Zircon Blue Saree Look Series starting at just &#8377;750",
        "offer_value": "Great Value",
        "title": "Zircon Blue Saree Look Series",
        "description": "Starting for &#8377;750 only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/collections/zircon-blue-saree-series-9",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fcollections%2Fzircon-blue-saree-series-9",
        "image_url": "https://cdn.shopify.com/s/files/1/0796/1959/files/14_2f10c3c8-24f3-4ce8-b3e6-9c9e6b703dde_540x.jpg?v=1640149330",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-10",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "816172",
        "store": "kushals.com",
        "merchant_homepage": "https://www.kushals.com/",
        "offer_text": "Zircon Necklace Set starting at just &#8377;690",
        "offer_value": "Hot Offer",
        "title": "Zircon Necklace Set",
        "description": "Starting from &#8377;690 only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.kushals.com/search?q=zircon%20necklace%20set&sort=-created_at",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.kushals.com%2Fsearch%3Fq%3Dzircon%2520necklace%2520set%26sort%3D-created_at",
        "image_url": "https://cdn.shopify.com/s/files/1/0796/1959/files/4_d1b03142-f3c7-46cf-9ab7-1c3fccb20b72_540x.jpg?v=1640148430",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-10",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "798667",
        "store": "maccaron.in",
        "merchant_homepage": "https://maccaron.in/",
        "offer_text": "Base Makeup starting at just &#8377;300",
        "offer_value": "Save Big",
        "title": "Base Makeup",
        "description": "Starts from &#8377;300 (Products include Lipstick, Eyeliner, Nail Polish, Foundation Cream, Mascara and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Makeup Products",
        "category_array": {
          "Health and Beauty": [
            "Makeup Products"
          ]
        },
        "featured": "No",
        "url": "https://maccaron.in/en/products/category/base-makeup-8/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fmaccaron.in%2Fen%2Fproducts%2Fcategory%2Fbase-makeup-8%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-09-16",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "761433",
        "store": "maccaron.in",
        "merchant_homepage": "https://maccaron.in/",
        "offer_text": "Flat 30% OFF on Mediheal Face Mask",
        "offer_value": "30%",
        "title": "Get 30% Off",
        "description": "This offer is applicable on Mediheal Face Mask",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ]
        },
        "featured": "No",
        "url": "https://maccaron.in/en/products/collection/mediheal-114/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fmaccaron.in%2Fen%2Fproducts%2Fcollection%2Fmediheal-114%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-08-26",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "810186",
        "store": "maccaron.in",
        "merchant_homepage": "https://maccaron.in/",
        "offer_text": "Hair Care starting at just &#8377;99",
        "offer_value": "Save Big",
        "title": "Hair Care",
        "description": "Starting @ &#8377;99 (Products include Shampoo, Conditioner, Serum and more) only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ]
        },
        "featured": "No",
        "url": "https://maccaron.in/en/products/category/hair-care2-279/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fmaccaron.in%2Fen%2Fproducts%2Fcategory%2Fhair-care2-279%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-09-16",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "818044",
        "store": "maccaron.in",
        "merchant_homepage": "https://maccaron.in/",
        "offer_text": "Avail Up To 40% Off on Mask Sheets",
        "offer_value": "40%",
        "title": "Up to 40% Discount",
        "description": "This voucher is valid on Mask Sheets",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ]
        },
        "featured": "No",
        "url": "https://maccaron.in/en/products/collection/shop-masksheet-40-mobile-197/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fmaccaron.in%2Fen%2Fproducts%2Fcollection%2Fshop-masksheet-40-mobile-197%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-12",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "810483",
        "store": "maccaron.in",
        "merchant_homepage": "https://maccaron.in/",
        "offer_text": "Body Care starting at just &#8377;149",
        "offer_value": "Great Value",
        "title": "Body Care",
        "description": "Starts from just &#8377;149 (Products include Face Wash, Scrub, Serum, Cleanser, Toner and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ]
        },
        "featured": "No",
        "url": "https://maccaron.in/en/products/category/body-care-320/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fmaccaron.in%2Fen%2Fproducts%2Fcategory%2Fbody-care-320%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-09-16",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "809443",
        "store": "photojaanic.com",
        "merchant_homepage": "https://www.photojaanic.com/",
        "offer_text": "Get Up to 30% Off on all products",
        "offer_value": "30%",
        "title": "Get Upto 30% Discount",
        "description": "This promotional offer is valid on all products (Only using Mobile App)",
        "code": "APPOFFER",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.photojaanic.com/app?utm_source=7Coupons&utm_medium=Referral&utm_campaign=Photojaanic_7Coupons",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.photojaanic.com%2Fapp%3Futm_source%3D7Coupons%26utm_medium%3DReferral%26utm_campaign%3DPhotojaanic_7Coupons",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-07-22",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "809560",
        "store": "photojaanic.com",
        "merchant_homepage": "https://www.photojaanic.com/",
        "offer_text": "Upto 50% discount on all products",
        "offer_value": "50%",
        "title": "Avail Upto 50% discount",
        "description": "This promotional offer is valid on all products (Products include Decor, Cards, Photobook and more)",
        "code": "OFFER",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.photojaanic.com/offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.photojaanic.com%2Foffers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-12-28",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "809387",
        "store": "photojaanic.com",
        "merchant_homepage": "https://www.photojaanic.com/",
        "offer_text": "Additional 25% off on Customized Magnets",
        "offer_value": "25%",
        "title": "Additional 25% Off",
        "description": "This promotional offer is valid on Customized Magnets",
        "code": "EXTRA25",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.photojaanic.com/magnets",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.photojaanic.com%2Fmagnets",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-10-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "819961",
        "store": "photojaanic.com",
        "merchant_homepage": "https://www.photojaanic.com/",
        "offer_text": "Buy 1 Get 1 Free on Magnets",
        "offer_value": "Buy &amp; Get",
        "title": "Buy 1 Get 1 Free",
        "description": "Valid on Magnets",
        "code": "FREEMAG",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.photojaanic.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.photojaanic.com%2F",
        "image_url": "",
        "type": "Code",
        "offer": "BOGO",
        "status": "active",
        "start_date": "2021-08-27",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "825511",
        "store": "photojaanic.com",
        "merchant_homepage": "https://www.photojaanic.com/",
        "offer_text": "Get Flat 50% discount on all products",
        "offer_value": "50%",
        "title": "Flat 50% Off",
        "description": "Valid on all products (Not valid on Prints and Cards)",
        "code": "ORDERNOW",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.photojaanic.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.photojaanic.com%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "809403",
        "store": "photojaanic.com",
        "merchant_homepage": "https://www.photojaanic.com/",
        "offer_text": "Buy 1 Get 1 for Free on Table Photo Frame",
        "offer_value": "Buy &amp; Get",
        "title": "Buy One Get One for Free",
        "description": "Applicable on Table Photo Frame",
        "code": "B1G1",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.photojaanic.com/table-photo-frame",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.photojaanic.com%2Ftable-photo-frame",
        "image_url": "",
        "type": "Code",
        "offer": "BOGO",
        "status": "active",
        "start_date": "2021-09-30",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "809398",
        "store": "photojaanic.com",
        "merchant_homepage": "https://www.photojaanic.com/",
        "offer_text": "Free Delivery on all products",
        "offer_value": "Free",
        "title": "Free Delivery",
        "description": "This discount is applicable on all products (On purchase of &#8377;499+)",
        "code": "FREESHIP499",
        "terms_and_conditions": "",
        "categories": "Gift Items",
        "category_array": {
          "Gift Items": []
        },
        "featured": "No",
        "url": "https://www.photojaanic.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.photojaanic.com%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2021-05-28",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "819960",
        "store": "photojaanic.com",
        "merchant_homepage": "https://www.photojaanic.com/",
        "offer_text": "Avail 50% Off on all products",
        "offer_value": "Sign-Up Offer",
        "title": "Get Flat 50% Off",
        "description": "Valid on all products (Only on new registrations. Not valid on Prints)",
        "code": "NEW50",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.photojaanic.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.photojaanic.com%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Sign-Up",
        "status": "active",
        "start_date": "2021-05-28",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "811852",
        "store": "photojaanic.com",
        "merchant_homepage": "https://www.photojaanic.com/",
        "offer_text": "Up to 70% Discount on Select Products",
        "offer_value": "70%",
        "title": "Up To 70% Discount",
        "description": "This offer is applicable on Select Products",
        "code": "NEW2022",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.photojaanic.com/offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.photojaanic.com%2Foffers",
        "image_url": "https://www.images.photojaanic.com/homepage/banners/in/web-newyear-31dec21.jpg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-01",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "808145",
        "store": "photojaanic.com",
        "merchant_homepage": "https://www.photojaanic.com/",
        "offer_text": "Get Up to 70% discount on Personalised Calendars",
        "offer_value": "70%",
        "title": "Avail Upto 70% Off",
        "description": "This coupon is valid on Personalised Calendars",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.photojaanic.com/offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.photojaanic.com%2Foffers",
        "image_url": "https://www.images.photojaanic.com/homepage/banners/in/web-calendars-24dec.jpg",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-12-27",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "780355",
        "store": "photojaanic.com",
        "merchant_homepage": "https://www.photojaanic.com/",
        "offer_text": "Canvas Prints starting at just &#8377;399",
        "offer_value": "Best Offer",
        "title": "Canvas Prints",
        "description": "&#8377;399 onwards",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Stationary,Online Printing",
        "category_array": {
          "Stationary": [
            "Online Printing"
          ]
        },
        "featured": "No",
        "url": "https://www.photojaanic.com/decor",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.photojaanic.com%2Fdecor",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-05-28",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "820482",
        "store": "railmitra.com",
        "merchant_homepage": "https://www.railmitra.com/",
        "offer_text": "15% Off on Group Order",
        "offer_value": "15%",
        "title": "Get 15% off",
        "description": "This promotional offer is valid on Group Order (On order-value of minimum &#8377;1500.00. Only for App users)",
        "code": "GROUP15",
        "terms_and_conditions": "",
        "categories": "Food and Beverages,Travel",
        "category_array": {
          "Food and Beverages": [],
          "Travel": []
        },
        "featured": "No",
        "url": "https://www.railmitra.com/offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.railmitra.com%2Foffers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-10-20",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "820494",
        "store": "railmitra.com",
        "merchant_homepage": "https://www.railmitra.com/",
        "offer_text": "Get 15% Off on food order",
        "offer_value": "Sign-Up Offer",
        "title": "Get Flat 15% off",
        "description": "This offer is valid on food order (Only on new registrations)",
        "code": "NEW15",
        "terms_and_conditions": "",
        "categories": "Food and Beverages,Fast Food",
        "category_array": {
          "Food and Beverages": [
            "Fast Food"
          ]
        },
        "featured": "No",
        "url": "https://www.railmitra.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.railmitra.com%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Sign-Up",
        "status": "active",
        "start_date": "2021-12-28",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "809604",
        "store": "railmitra.com",
        "merchant_homepage": "https://www.railmitra.com/",
        "offer_text": "Upto 25% discount on all food orders",
        "offer_value": "25%",
        "title": "Avail Upto 25% discount",
        "description": "This promotional offer is valid on all food orders (Maximum discount of &#8377;50 can be availed)",
        "code": "DEC25",
        "terms_and_conditions": "",
        "categories": "Food and Beverages,Fast Food",
        "category_array": {
          "Food and Beverages": [
            "Fast Food"
          ]
        },
        "featured": "No",
        "url": "https://www.railmitra.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.railmitra.com%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-12-28",
        "end_date": "2023-01-01"
      },
      {
        "lmd_id": "787695",
        "store": "railmitra.com",
        "merchant_homepage": "https://www.railmitra.com/",
        "offer_text": "Get &#8377;75 Off on Food in Train",
        "offer_value": "&#8377;75",
        "title": "Get Flat &#8377;75 OFF",
        "description": "This promotional offer is valid on Food in Train (On minimum shopping of &#8377;499)",
        "code": "BITE75",
        "terms_and_conditions": "",
        "categories": "Food and Beverages,Fast Food,Travel",
        "category_array": {
          "Food and Beverages": [
            "Fast Food"
          ],
          "Travel": []
        },
        "featured": "No",
        "url": "https://www.railmitra.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.railmitra.com%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2021-07-09",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "796980",
        "store": "railmitra.com",
        "merchant_homepage": "https://www.railmitra.com/",
        "offer_text": "Flat 10% Off on Order Restaurant Food on Trains",
        "offer_value": "10%",
        "title": "10% Discount",
        "description": "This promotional offer is valid on Order Restaurant Food on Trains (On spending min. &#8377;399.00. Max. &#8377;50 discount.00)",
        "code": "RM10",
        "terms_and_conditions": "",
        "categories": "Food and Beverages,Fast Food,Travel",
        "category_array": {
          "Food and Beverages": [
            "Fast Food"
          ],
          "Travel": []
        },
        "featured": "No",
        "url": "https://www.railmitra.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.railmitra.com%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-07-09",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "809452",
        "store": "railmitra.com",
        "merchant_homepage": "https://www.railmitra.com/",
        "offer_text": "&#8377;100 OFF on Food Orders",
        "offer_value": "&#8377;100",
        "title": "Get &#8377;100 OFF",
        "description": "Valid on Food Orders (On min. shopping of &#8377;499.00. On Mobile App only)",
        "code": "RMAPP100",
        "terms_and_conditions": "",
        "categories": "Travel",
        "category_array": {
          "Travel": []
        },
        "featured": "No",
        "url": "https://www.railmitra.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.railmitra.com%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2021-07-09",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "825762",
        "store": "rosegal.com",
        "merchant_homepage": "https://www.rosegal.com/",
        "offer_text": "Get Buy 2 Get 14% off on all products",
        "offer_value": "Buy &amp; Get",
        "title": "Buy 2 Get 14% Off",
        "description": "This promotional offer is valid on all products (Products include Dress, Jewellery, Belts and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Womens Apparels,Lingerie,Jewellery,Fashion Accessories",
        "category_array": {
          "Fashion": [
            "Womens Apparels",
            "Lingerie",
            "Jewellery",
            "Fashion Accessories"
          ]
        },
        "featured": "No",
        "url": "https://www.rosegal.com/promotion/the-valentines-day-shop.html",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.rosegal.com%2Fpromotion%2Fthe-valentines-day-shop.html",
        "image_url": "https://uidesign.rglcdn.com/RG/image/9218/PC01.jpg?imbypass=true",
        "type": "Deal",
        "offer": "BOGO",
        "status": "active",
        "start_date": "2022-01-28",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "825763",
        "store": "rosegal.com",
        "merchant_homepage": "https://www.rosegal.com/",
        "offer_text": "Free Shipping on all products",
        "offer_value": "Free",
        "title": "Free Shipping",
        "description": "This voucher is valid on all products (On Min. Purchase of $99)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Womens Apparels,Lingerie,Jewellery,Fashion Accessories",
        "category_array": {
          "Fashion": [
            "Womens Apparels",
            "Lingerie",
            "Jewellery",
            "Fashion Accessories"
          ]
        },
        "featured": "No",
        "url": "https://www.rosegal.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.rosegal.com%2F",
        "image_url": "https://uidesign.rglcdn.com/RG/image/9218/PC02.png?imbypass=true",
        "type": "Deal",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2022-01-28",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "825764",
        "store": "rosegal.com",
        "merchant_homepage": "https://www.rosegal.com/",
        "offer_text": "Women&#039;s Fashion starting at just $12.99",
        "offer_value": "Save Big",
        "title": "Women&#039;s Fashion",
        "description": "Starting from just $12.99 (Products include Dress, Tops, Pants and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Womens Apparels,Lingerie",
        "category_array": {
          "Fashion": [
            "Womens Apparels",
            "Lingerie"
          ]
        },
        "featured": "No",
        "url": "https://www.rosegal.com/new-products/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.rosegal.com%2Fnew-products%2F",
        "image_url": "https://uidesign.rglcdn.com/RG/image/9218/PC03.jpg?imbypass=true",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-28",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "825765",
        "store": "rosegal.com",
        "merchant_homepage": "https://www.rosegal.com/",
        "offer_text": "Up To 30% Off on Swimwear",
        "offer_value": "30%",
        "title": "Up To 30% Off",
        "description": "Applicable on Swimwear (Products include Bra, Panty, Bikini Sets and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Lingerie",
        "category_array": {
          "Fashion": [
            "Lingerie"
          ]
        },
        "featured": "No",
        "url": "https://www.rosegal.com/promotion/swimwear-collection-2022.html",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.rosegal.com%2Fpromotion%2Fswimwear-collection-2022.html",
        "image_url": "%20https://uidesign.rglcdn.com/RG/image/9218/PC06.jpg?imbypass=true",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-28",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "825766",
        "store": "rosegal.com",
        "merchant_homepage": "https://www.rosegal.com/",
        "offer_text": "Women&#039;s Fashion starting at just $16.99",
        "offer_value": "Best Offer",
        "title": "Women&#039;s Fashion",
        "description": "Starting @ just $16.99",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Womens Apparels",
        "category_array": {
          "Fashion": [
            "Womens Apparels"
          ]
        },
        "featured": "No",
        "url": "https://www.rosegal.com/promotion/winter-or-spring.html",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.rosegal.com%2Fpromotion%2Fwinter-or-spring.html",
        "image_url": "https://uidesign.rglcdn.com/RG/image/9218/PC07.jpg?imbypass=true",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-28",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "826261",
        "store": "rosegal.com",
        "merchant_homepage": "https://www.rosegal.com/",
        "offer_text": "Free Shipping on Women&#039;s Fashion",
        "offer_value": "Free",
        "title": "Free Shipping",
        "description": "This coupon is valid on Women&#039;s Fashion (Products include Tees, Crop Tops, Dresses, Blouse and more)",
        "code": "FREE22",
        "terms_and_conditions": "",
        "categories": "Fashion,Womens Apparels",
        "category_array": {
          "Fashion": [
            "Womens Apparels"
          ]
        },
        "featured": "No",
        "url": "https://www.rosegal.com/matching-sets-856/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.rosegal.com%2Fmatching-sets-856%2F",
        "image_url": "https://uidesign.rglcdn.com/RG/image/9340/pcen.gif?imbypass=true",
        "type": "Code",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2022-01-29",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "813132",
        "store": "rosegal.com",
        "merchant_homepage": "https://www.rosegal.com/",
        "offer_text": "New Year Sale - Get Upto 30% discount on all products",
        "offer_value": "Sale",
        "title": "New Year Sale - Get Up to 30% Off",
        "description": "This voucher is valid on all products (On Min. Purchase of $89)",
        "code": "GIFT30",
        "terms_and_conditions": "",
        "categories": "Fashion,Womens Apparels,Watches,Lingerie,Eyewear,Footwear,Handbags and Wallets,Jewellery,Fashion Accessories",
        "category_array": {
          "Fashion": [
            "Womens Apparels",
            "Watches",
            "Lingerie",
            "Eyewear",
            "Footwear",
            "Handbags and Wallets",
            "Jewellery",
            "Fashion Accessories"
          ]
        },
        "featured": "Yes",
        "url": "https://www.rosegal.com/promotion/New-Year-Gift.html?%24deep_link=true&branch_dp=rosegal%3A%2F%2Faction%3Factiontype%3D5%26url%3Dhttps%3A%2F%2Fwww.rosegal.com%2Fpromotion%2FNew-Year-Gift.html%3Fis_app%3D1&utm_source=mail_api&utm_medium=mail&utm_campaign=RG_special_211231_1640943752_z09&%243p=e_emarsys&_branch_match_id=994488828643301162&_branch_referrer=H4sIAAAAAAAAA22QQWvDMAyFf413a9LYcUYHZQxKe9tht52M52iJmB0b2yF0v35ymh3KBj5IT35PHxpzDumprqNPMGhb6RAqi9NXLcIz460IR1DgdEzX9EC9jzjgpK2aoz2OxcvEC%2BNnesuyVL8pxjtSQvTOZ%2FQT1a%2Bw7N5Bx90FP3M1ZmeZIJfkbQ8QVFnJxCnHGRjvPqKezKj6QNIWSV%2FLIslX01mbW64UW5mvAUp7kmXeEd7a3RDvvX9A5R2q%2FBe2bMKk6DxrbkOUc3Yq%2BTkaIEyn0dIUN91Bj7Pb9E0z2gWNw0Tq20WlAAbpkLxpuGhU07X7QyseJVff%2B8MPmqCFkZYBAAA%3D",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.rosegal.com%2Fpromotion%2FNew-Year-Gift.html%3F%2524deep_link%3Dtrue%26branch_dp%3Drosegal%253A%252F%252Faction%253Factiontype%253D5%2526url%253Dhttps%253A%252F%252Fwww.rosegal.com%252Fpromotion%252FNew-Year-Gift.html%253Fis_app%253D1%26utm_source%3Dmail_api%26utm_medium%3Dmail%26utm_campaign%3DRG_special_211231_1640943752_z09%26%25243p%3De_emarsys%26_branch_match_id%3D994488828643301162%26_branch_referrer%3DH4sIAAAAAAAAA22QQWvDMAyFf413a9LYcUYHZQxKe9tht52M52iJmB0b2yF0v35ymh3KBj5IT35PHxpzDumprqNPMGhb6RAqi9NXLcIz460IR1DgdEzX9EC9jzjgpK2aoz2OxcvEC%252BNnesuyVL8pxjtSQvTOZ%252FQT1a%252Bw7N5Bx90FP3M1ZmeZIJfkbQ8QVFnJxCnHGRjvPqKezKj6QNIWSV%252FLIslX01mbW64UW5mvAUp7kmXeEd7a3RDvvX9A5R2q%252FBe2bMKk6DxrbkOUc3Yq%252BTkaIEyn0dIUN91Bj7Pb9E0z2gWNw0Tq20WlAAbpkLxpuGhU07X7QyseJVff%252B8MPmqCFkZYBAAA%253D",
        "image_url": "",
        "type": "Code",
        "offer": "Sale",
        "status": "active",
        "start_date": "2022-01-01",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "706264",
        "store": "sarva.com",
        "merchant_homepage": "https://www.sarva.com/",
        "offer_text": "Free 2 Online Yoga Sessions on Sarva Yoga Studio",
        "offer_value": "Free",
        "title": "Free 2 Online Yoga Sessions",
        "description": "This voucher is valid on Sarva Yoga Studio",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Fitness",
        "category_array": {
          "Health and Beauty": [
            "Fitness"
          ]
        },
        "featured": "No",
        "url": "https://sarva.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fsarva.com%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2020-12-17",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "761350",
        "store": "sarva.com",
        "merchant_homepage": "https://www.sarva.com/",
        "offer_text": "Face Yoga Course @ just &#8377;499",
        "offer_value": "Great Value",
        "title": "Face Yoga Course",
        "description": "Get it for just &#8377;499",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care,Fitness",
        "category_array": {
          "Health and Beauty": [
            "Body Care",
            "Fitness"
          ]
        },
        "featured": "No",
        "url": "https://sarva.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fsarva.com%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-04-26",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "714252",
        "store": "sarva.com",
        "merchant_homepage": "https://www.sarva.com/",
        "offer_text": "Personal Training 1 trial session @ just &#8377;500",
        "offer_value": "Best Offer",
        "title": "Personal Training 1 trial session",
        "description": "Get it for &#8377;500 (For 7 Days) only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Fitness",
        "category_array": {
          "Health and Beauty": [
            "Fitness"
          ]
        },
        "featured": "No",
        "url": "https://sarva.com/personal-training/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fsarva.com%2Fpersonal-training%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-06-30",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "768615",
        "store": "sarva.com",
        "merchant_homepage": "https://www.sarva.com/",
        "offer_text": "Sarva Membership Plan @ just &#8377;549(Per Month)",
        "offer_value": "Best Offer",
        "title": "Sarva Membership Plan",
        "description": "Get it just @ &#8377;549(Per Month)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Fitness",
        "category_array": {
          "Health and Beauty": [
            "Fitness"
          ]
        },
        "featured": "No",
        "url": "https://www.sarva.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.sarva.com%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-04-26",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "743944",
        "store": "sarva.com",
        "merchant_homepage": "https://www.sarva.com/",
        "offer_text": "Sarva Membership Quarterly Plan @ just &#8377;999",
        "offer_value": "Best Offer",
        "title": "Sarva Membership Quarterly Plan",
        "description": "Get it @ &#8377;999 (For 3 months) only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Fitness,Software and IT",
        "category_array": {
          "Health and Beauty": [
            "Fitness"
          ],
          "Software and IT": []
        },
        "featured": "No",
        "url": "https://www.sarva.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.sarva.com%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-05-03",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "798670",
        "store": "smartmedicalbuyer.com",
        "merchant_homepage": "https://www.smartmedicalbuyer.com/",
        "offer_text": "CareNow Eco Bath CHG Bath Wipes @ just &#8377;41.90",
        "offer_value": "Great Value",
        "title": "CareNow Eco Bath CHG Bath Wipes",
        "description": "Get it just at &#8377;41.90",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ]
        },
        "featured": "No",
        "url": "https://www.smartmedicalbuyer.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.smartmedicalbuyer.com%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-12-08",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "810236",
        "store": "smartmedicalbuyer.com",
        "merchant_homepage": "https://www.smartmedicalbuyer.com/",
        "offer_text": "2.5% Discount on Make in India Band Products",
        "offer_value": "2.5%",
        "title": "Get 2.5% off",
        "description": "This voucher is valid on Make in India Band Products",
        "code": "MADEININDIA",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Fitness",
        "category_array": {
          "Health and Beauty": [
            "Fitness"
          ]
        },
        "featured": "No",
        "url": "https://www.smartmedicalbuyer.com/pages/offers-and-discounts",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.smartmedicalbuyer.com%2Fpages%2Foffers-and-discounts",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-05-06",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "810185",
        "store": "smartmedicalbuyer.com",
        "merchant_homepage": "https://www.smartmedicalbuyer.com/",
        "offer_text": "3M Avagard CHG 500 ml Hand Sanitizer @ just &#8377;525",
        "offer_value": "Super Offer",
        "title": "3M Avagard CHG 500 ml Hand Sanitizer",
        "description": "Get it for just &#8377;525",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Body Care",
        "category_array": {
          "Health and Beauty": [
            "Body Care"
          ]
        },
        "featured": "No",
        "url": "https://www.smartmedicalbuyer.com/products/3m-avagard-chg-500-ml-hand-sanitizer-single",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.smartmedicalbuyer.com%2Fproducts%2F3m-avagard-chg-500-ml-hand-sanitizer-single",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-12-08",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "796400",
        "store": "smartmedicalbuyer.com",
        "merchant_homepage": "https://www.smartmedicalbuyer.com/",
        "offer_text": "Buy 10 Get 15% OFF on Medical Products",
        "offer_value": "Buy &amp; Get",
        "title": "Get Buy 10 Get 15% discount",
        "description": "This voucher is valid on Medical Products (Products include Bath Wipes, Face Mask, Hand Sanitizer, Pulse oximeter and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Fitness",
        "category_array": {
          "Health and Beauty": [
            "Fitness"
          ]
        },
        "featured": "No",
        "url": "https://www.smartmedicalbuyer.com/collections/essentials",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.smartmedicalbuyer.com%2Fcollections%2Fessentials",
        "image_url": "",
        "type": "Deal",
        "offer": "BOGO",
        "status": "active",
        "start_date": "2021-01-04",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "778297",
        "store": "smartmedicalbuyer.com",
        "merchant_homepage": "https://www.smartmedicalbuyer.com/",
        "offer_text": "5% OFF on SMB Student Bundle",
        "offer_value": "5%",
        "title": "Get 5% discount",
        "description": "This voucher is applicable on SMB Student Bundle (Products include Glucometer, Thermometers, BP Monitor and more)",
        "code": "SMBSTUDENT21",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Fitness",
        "category_array": {
          "Health and Beauty": [
            "Fitness"
          ]
        },
        "featured": "No",
        "url": "https://www.smartmedicalbuyer.com/pages/offers-and-discounts",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.smartmedicalbuyer.com%2Fpages%2Foffers-and-discounts",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-03-24",
        "end_date": "2022-02-07"
      },
      {
        "lmd_id": "810159",
        "store": "soccer.com",
        "merchant_homepage": "https://www.soccer.com/",
        "offer_text": "Free Shipping on most products",
        "offer_value": "Free",
        "title": "Free Shipping",
        "description": "This coupon is valid on most products (Products include Shoes, Socks, Jackets, Hats, T-shirts and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Footwear,Fashion Accessories,Entertainment,Sports,Kids and Toddlers,Kids Fashion",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Footwear",
            "Fashion Accessories"
          ],
          "Entertainment": [
            "Sports"
          ],
          "Kids and Toddlers": [
            "Kids Fashion"
          ]
        },
        "featured": "No",
        "url": "https://www.soccer.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.soccer.com%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2021-04-06",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "810158",
        "store": "soccer.com",
        "merchant_homepage": "https://www.soccer.com/",
        "offer_text": "Men&#039;s Replica adidas Mexico Home Jersey @ just $89.99",
        "offer_value": "Great Value",
        "title": "Men&#039;s Replica adidas Mexico Home Jersey",
        "description": "Get it @ $89.99 only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels",
        "category_array": {
          "Fashion": [
            "Mens Apparels"
          ]
        },
        "featured": "No",
        "url": "https://www.soccer.com/shop/details/men-s-replica-adidas-mexico-home-jersey-2021-22_A1038974",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.soccer.com%2Fshop%2Fdetails%2Fmen-s-replica-adidas-mexico-home-jersey-2021-22_A1038974",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-05-03",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "768686",
        "store": "soccer.com",
        "merchant_homepage": "https://www.soccer.com/",
        "offer_text": "Duffle Bags starting at just $34.99",
        "offer_value": "Hot Offer",
        "title": "Duffle Bags",
        "description": "Starting at $34.99 (Select from brands like Nike, Adidas, Under Armour and more) only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Entertainment,Sports",
        "category_array": {
          "Entertainment": [
            "Sports"
          ]
        },
        "featured": "No",
        "url": "https://www.soccer.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.soccer.com%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-05-06",
        "end_date": "2022-01-31"
      },
      {
        "lmd_id": "641672",
        "store": "soccer.com",
        "merchant_homepage": "https://www.soccer.com/",
        "offer_text": "Free Shipping on Goalkeeper Gloves",
        "offer_value": "Free",
        "title": "Free Shipping",
        "description": "This voucher is applicable on Goalkeeper Gloves (Select from brands like Adidas, Nike, Puma and more)",
        "code": "GLOVES",
        "terms_and_conditions": "",
        "categories": "Fashion,Fashion Accessories,Entertainment,Sports",
        "category_array": {
          "Fashion": [
            "Fashion Accessories"
          ],
          "Entertainment": [
            "Sports"
          ]
        },
        "featured": "No",
        "url": "https://www.soccer.com/shop/products/goalkeeping/gloves",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.soccer.com%2Fshop%2Fproducts%2Fgoalkeeping%2Fgloves",
        "image_url": "",
        "type": "Code",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2021-02-17",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "641671",
        "store": "soccer.com",
        "merchant_homepage": "https://www.soccer.com/",
        "offer_text": "Free Standard Shipping on all products",
        "offer_value": "Free",
        "title": "Free Standard Shipping",
        "description": "This discount is valid on all products (On Min. Purchase of $99)",
        "code": "SHIPAT99",
        "terms_and_conditions": "<p>Free Standard Shipping on Orders of $99 or more. Not valid on Team Store Orders. Offer valid for lowest cost shipping. Shipping promotions do not include items with extra freight and shipping outside the contiguous US. Offer valid on online orders only. Coupon may not be combined with other offers or coupons. Previous purchases, team orders and other pricing programs are not eligible Other exclusions may apply. Limited time offer. We reserve the right to end this promotion at any time. Void where prohibited.</p>",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Footwear,Fashion Accessories,Entertainment,Sports",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Footwear",
            "Fashion Accessories"
          ],
          "Entertainment": [
            "Sports"
          ]
        },
        "featured": "No",
        "url": "https://www.soccer.com/coupons",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.soccer.com%2Fcoupons",
        "image_url": "",
        "type": "Code",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2021-02-17",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "697505",
        "store": "timesprime.com",
        "merchant_homepage": "https://www.timesprime.com/",
        "offer_text": "Get Flat &#8377;100 off on Times Prime Membership",
        "offer_value": "&#8377;100",
        "title": "Get &#8377;100 OFF",
        "description": "This discount is applicable on Times Prime Membership",
        "code": "TP026",
        "terms_and_conditions": "",
        "categories": "Entertainment",
        "category_array": {
          "Entertainment": []
        },
        "featured": "No",
        "url": "https://www.timesprime.com/campaign?showFT=false",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.timesprime.com%2Fcampaign%3FshowFT%3Dfalse",
        "image_url": "http://cdn.admitad.com/campaign/images/2020/10/5/22348-15a1c2b6d9efb8a6.png",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2021-05-26",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "779536",
        "store": "timesprime.com",
        "merchant_homepage": "https://www.timesprime.com/",
        "offer_text": "Times Prime membership @ just &#8377;999",
        "offer_value": "Super Offer",
        "title": "Times Prime membership",
        "description": "Get it just @ &#8377;999",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Entertainment",
        "category_array": {
          "Entertainment": []
        },
        "featured": "No",
        "url": "https://www.timesprime.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.timesprime.com%2F",
        "image_url": "https://static.timesprime.com/3x/timesprime.png",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-11-08",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "684261",
        "store": "timesprime.com",
        "merchant_homepage": "https://www.timesprime.com/",
        "offer_text": "Join TimesPrime @ just &#8377;999",
        "offer_value": "Super Offer",
        "title": "Join TimesPrime",
        "description": "Get it for just &#8377;999",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Entertainment,Movies",
        "category_array": {
          "Entertainment": [
            "Movies"
          ]
        },
        "featured": "No",
        "url": "https://www.timesprime.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.timesprime.com%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2020-08-31",
        "end_date": "2022-02-05"
      },
      {
        "lmd_id": "681642",
        "store": "timesprime.com",
        "merchant_homepage": "https://www.timesprime.com/",
        "offer_text": "Get 6 Month Pharmeasy Plus Membership on Medicines",
        "offer_value": "Free",
        "title": "Get 6 Month Pharmeasy Plus Membership",
        "description": "This voucher is valid on Medicines (valid for timesprime membership)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Health and Beauty,Fitness",
        "category_array": {
          "Health and Beauty": [
            "Fitness"
          ]
        },
        "featured": "No",
        "url": "https://www.timesprime.com/categories/essentials",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.timesprime.com%2Fcategories%2Fessentials",
        "image_url": "",
        "type": "Deal",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2020-10-10",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "796272",
        "store": "timesprime.com",
        "merchant_homepage": "https://www.timesprime.com/",
        "offer_text": "Avail 20% off Uber Premier on Times Prime Membership",
        "offer_value": "Free",
        "title": "20% Off Uber Premier",
        "description": "This promotional offer is valid on Times Prime Membership",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Entertainment,Travel,Cabs",
        "category_array": {
          "Entertainment": [],
          "Travel": [
            "Cabs"
          ]
        },
        "featured": "No",
        "url": "https://www.timesprime.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.timesprime.com%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2021-03-15",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "810305",
        "store": "timesprime.com",
        "merchant_homepage": "https://www.timesprime.com/",
        "offer_text": "&#8377;100 Off on Times Prime Subscription",
        "offer_value": "&#8377;100",
        "title": "Get &#8377;100 OFF",
        "description": "This promotional offer is valid on Times Prime Subscription",
        "code": "TPCR6",
        "terms_and_conditions": "",
        "categories": "Entertainment",
        "category_array": {
          "Entertainment": []
        },
        "featured": "No",
        "url": "https://www.timesprime.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.timesprime.com%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2021-11-16",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "702376",
        "store": "toliday.in",
        "merchant_homepage": "https://www.toliday.in/",
        "offer_text": "Get Up To &#8377;500 discount on Domestic Flight",
        "offer_value": "&#8377;500",
        "title": "Up To &#8377;500 discount",
        "description": "Valid on Domestic Flight (On Min. Booking of &#8377;1000. Max. Once per user. Not valid on multi-city bookings on domestic flights)",
        "code": "TTFDOM",
        "terms_and_conditions": "",
        "categories": "Travel,Domestic Flights",
        "category_array": {
          "Travel": [
            "Domestic Flights"
          ]
        },
        "featured": "Yes",
        "url": "https://toliday.in/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Ftoliday.in%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2021-02-17",
        "end_date": "2022-03-01"
      },
      {
        "lmd_id": "761483",
        "store": "toliday.in",
        "merchant_homepage": "https://www.toliday.in/",
        "offer_text": "Bus Booking Dehli to Shimla starting at just &#8377;699",
        "offer_value": "Best Offer",
        "title": "Bus Booking Dehli to Shimla",
        "description": "Starting from &#8377;699 only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Travel,Bus Bookings",
        "category_array": {
          "Travel": [
            "Bus Bookings"
          ]
        },
        "featured": "No",
        "url": "https://toliday.in/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Ftoliday.in%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-04-22",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "796410",
        "store": "toliday.in",
        "merchant_homepage": "https://www.toliday.in/",
        "offer_text": "Hotels Booking in Mumbai starting at just &#8377;1988",
        "offer_value": "Super Offer",
        "title": "Hotels Booking in Mumbai",
        "description": "Starting for just &#8377;1988",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Travel,Hotels",
        "category_array": {
          "Travel": [
            "Hotels"
          ]
        },
        "featured": "No",
        "url": "https://toliday.in/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Ftoliday.in%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-04-22",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "775920",
        "store": "toliday.in",
        "merchant_homepage": "https://www.toliday.in/",
        "offer_text": "Get Up To &#8377;500 off on Domestic hotel booking",
        "offer_value": "&#8377;500",
        "title": "Up to &#8377;500 Off",
        "description": "Valid on Domestic hotel booking (On Min. Booking of &#8377;1000.00. Max. Once per user. Not valid on multi-city bookings on domestic hotel)",
        "code": "TTHDOM",
        "terms_and_conditions": "<p>OFFERS MIN. BOOKING AMOUNT APPLICABLE BANKS BOOKING CHANNEL UPTO 500 1000 ALL BANKS/CARDS WEBSITE Offer Details: ?????? The customer gets instant cash back, valid up to &#8377;500, on applying this code. ?????? This offer can be availed only once per customer, during the offer duration. What do you get? ?????? The customer will get the above amount as instant cash back on his/her domestic hotel booking made on Toliday Trip's website. ?????? The discount will be credited instantly in the booking amount while making the transaction. How do you get it? ?????? To avail this offer, the customer must enter the deal code in the Coupon Code field. ?????? This offer is valid for ONE domestic hotel booking per user i.e. only on his/her first domestic hotel booking on Toliday Trip's website. ?????? The offer is valid for bookings made on Toliday Trip's website. Conditions in case of cancellation: ?????? In case of full cancellation, the offer stands void and the customer will not be eligible for any discount. ?????? If the customer cancels the travel service purchased, after the discount is credited, Toliday Trip will deduct the discount amount from the refund, and cancellation charges shall apply. ?????? In case of partial cancellation, offer stands void if the revised booking amount is not eligible for discount. If the revised booking amount is still eligible for discount, then it will be appropriately reduced basis booking amount. Booking Amount Discount (INR) 1000 - 5000 &#8377;50 5001 - 10000 &#8377;100 10001 - 15000 &#8377;150 15001 - 20000 &#8377;200 20001 - 25000 &#8377;250 25001 -30000 &#8377;300 30000 + &#8377;500 Other Terms and Conditions: ?????? The customer needs to enter the appropriate Deal Code (TTHDOM) at the time of payment to be eligible for the discount offer. In case the customer enters the incorrect deal code or forgets to mention the code, he/she will not be eligible for the cash back. ?????? The offer is not valid for Gift Cards and My Wallet. ?????? This offer is not valid on multi-city bookings on domestic hotel. ?????? The user agreement and privacy policy of Toliday Trip shall apply. ?????? In the event of any misuse or abuse of the offer by the customer of travel agent, Toliday Trip reserves the right to deny the offer or cancel the booking. Toliday Trip shall not refund the booking amount in such cases. ?????? Customers, who are travel agents by occupation, are barred from making bookings for their customers and Toliday Trip reserves the right to deny the offer or cancel the booking. Toliday Trip shall not refund the booking amount in such cases. ?????? This offer cannot be clubbed with any other Toliday Trip offer. ?????? Toliday Trip reserves the right, at any time, without prior notice and liability and without assigning any reason whatsoever, to add/alter/modify/change or vary all of these terms and conditions or to replace, wholly or in part, this offer by another offer, whether similar to this Offer or not, or to extend or withdraw it altogether. ?????? For any card related claims, the customer shall approach the bank and Toliday Trip shall not entertain any such claims. ?????? Toliday Trip is the sole authority for interpretation of these terms. ?????? Toliday Trip shall not be liable for any loss or damage arising due to force majeure event. ?????? In the event of any misuse or abuse of the offer by the customer or travel agent, Toliday Trip reserves the right to deny the offer or cancel the booking. ?????? In no event the entire liability of Toliday Trip under this offer shall exceed the amount of promotional discount under this offer. ?????? Toliday Trip shall not be liable for any indirect, punitive, special, incidental or consequential damages arising out of or in connection with the offer. ?????? Disputes, if any, arising out of or in connection with this offer shall be subject to the exclusive jurisdiction of the competent courts in Greater Noida. ?????? The user agreement and privacy policy put up on the Toliday Trip website shall apply. ?????? Customers, who are Travel Agents by occupation, are barred from making bookings for their customers and Toliday Trip reserves the right to deny the offer against such bookings or to cancel such bookings. For such cases, Toliday Trip shall not refund the booking amount.</p>",
        "categories": "Travel,Hotels",
        "category_array": {
          "Travel": [
            "Hotels"
          ]
        },
        "featured": "Yes",
        "url": "https://toliday.in/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Ftoliday.in%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2021-02-17",
        "end_date": "2022-03-01"
      },
      {
        "lmd_id": "775917",
        "store": "toliday.in",
        "merchant_homepage": "https://www.toliday.in/",
        "offer_text": "Up to &#8377;1000 Off on International Hotels",
        "offer_value": "&#8377;1000",
        "title": "Avail Upto &#8377;1000 Discount",
        "description": "Valid on International Hotels (On Min. Booking of &#8377;10000. Max. Once per user. Not valid on multi-city bookings on international hotel)",
        "code": "TTHINTL",
        "terms_and_conditions": "",
        "categories": "Travel,Hotels",
        "category_array": {
          "Travel": [
            "Hotels"
          ]
        },
        "featured": "No",
        "url": "https://toliday.in/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Ftoliday.in%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2021-02-17",
        "end_date": "2022-03-01"
      },
      {
        "lmd_id": "762129",
        "store": "travolook.in",
        "merchant_homepage": "https://www.travolook.in/",
        "offer_text": "Get &#8377;800 Off + Extra &#8377;200 Cash Back on Domestic Flights",
        "offer_value": "&#8377;800 + &#8377;200",
        "title": "Get Flat &#8377;800 discount + Additional &#8377;200 cashback",
        "description": "This coupon is valid on Domestic Flights (On Min. Booking of &#8377;5000. Only for MobiKwik wallet users)",
        "code": "TMOBIKWIK",
        "terms_and_conditions": "<div>\r\n<ul>\r\n<li>Save upto &#8377;800 on your payments with MobiKwik!</li>\r\n<li>&middot; Use discount code ****** in Promo-code/Deal-code section in your Flights and get flat &#8377;600 instant discount + &#8377;200 MobiKwik cashback using MobiKwik</li>\r\n<li>&middot; Minimum transaction amount &#8377;5000 required to avail this offer</li>\r\n<li>. No code required to avail MobiKwik Cashback</li>\r\n<li>&middot; Maximum Cashback is fixed at Rs 200</li>\r\n<li>&middot; Offer is valid once per user every month from 1-31 Aug 2021</li>\r\n<li>&middot; Cashback will be directly credited to your MobiKwik wallet within 24 hours</li>\r\n<li>&middot; In case of partial refunds/cancellations, refund amount will be adjusted with the Cashback received on initial payment. Full Cashback will be rolled back in case of a full refund</li>\r\n<li>&middot; After the refund is initiated, amount will be credited back to wallet within 7-10 days</li>\r\n<li>&middot; MobiKwik and Travolook reserve the right to discontinue any or all of its offers without prior notice</li>\r\n</ul>\r\n</div>\r\n<div>\r\n<p>Terms and conditions.</p>\r\n<ul>\r\n<li>The offers cannot be merged or combined with other offers available at the checkout.</li>\r\n<li>Travo deals starting with travo code are for new and existing customers.</li>\r\n<li>Customer with Travolook account gets other amazing deals and travo cashback in their Travolook wallet, also in their bank accounts directly after the checkout.</li>\r\n<li>Travolook reserves the right to change, amend, add or negate the offers at any time without priot notice</li>\r\n</ul>\r\n</div>",
        "categories": "Travel,Domestic Flights",
        "category_array": {
          "Travel": [
            "Domestic Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.travolook.in/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.travolook.in%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2021-09-29",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "705316",
        "store": "travolook.in",
        "merchant_homepage": "https://www.travolook.in/",
        "offer_text": "Booking Flights to Delhi from Bangalore starting at just &#8377;3160",
        "offer_value": "Great Value",
        "title": "Booking Flights to Delhi from Bangalore",
        "description": "Starts @ just &#8377;3160",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Travel,Domestic Flights",
        "category_array": {
          "Travel": [
            "Domestic Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.travolook.in/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.travolook.in%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-06-11",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "809419",
        "store": "travolook.in",
        "merchant_homepage": "https://www.travolook.in/",
        "offer_text": "Free Next Flight on Domestic Flight Booking",
        "offer_value": "Free",
        "title": "Free Next Flight",
        "description": "This promotional offer is valid on Domestic Flight Booking",
        "code": "TFREE",
        "terms_and_conditions": "",
        "categories": "Travel,Domestic Flights",
        "category_array": {
          "Travel": [
            "Domestic Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.travolook.in/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.travolook.in%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Freebie",
        "status": "active",
        "start_date": "2021-09-29",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "778288",
        "store": "travolook.in",
        "merchant_homepage": "https://www.travolook.in/",
        "offer_text": "Booking Flights to Mumbai From Delhi starting at just &#8377;2635",
        "offer_value": "Great Value",
        "title": "Booking Flights to Mumbai From Delhi",
        "description": "Starts @ &#8377;2635 only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Travel,Domestic Flights",
        "category_array": {
          "Travel": [
            "Domestic Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.travolook.in/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.travolook.in%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-06-11",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "765231",
        "store": "travolook.in",
        "merchant_homepage": "https://www.travolook.in/",
        "offer_text": "Get &#8377;1000 OFF on Domestic Flights",
        "offer_value": "&#8377;1000",
        "title": "Avail Flat &#8377;1000 Discount",
        "description": "This offer is valid on Domestic Flights",
        "code": "TRAVO1000",
        "terms_and_conditions": "",
        "categories": "Travel,Domestic Flights",
        "category_array": {
          "Travel": [
            "Domestic Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.travolook.in/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.travolook.in%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2021-09-29",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "816347",
        "store": "uk.zaful.com",
        "merchant_homepage": "https://uk.zaful.com/",
        "offer_text": "Women&#039;s Collection under &#163;9.99",
        "offer_value": "Best Offer",
        "title": "Women&#039;s Collection",
        "description": "Everything under &#163;9.99 (Products include Jackets, Sweatshirts, Dresses and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Womens Apparels",
        "category_array": {
          "Fashion": [
            "Womens Apparels"
          ]
        },
        "featured": "No",
        "url": "https://uk.zaful.com/promotion/new-year-sale.html",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fuk.zaful.com%2Fpromotion%2Fnew-year-sale.html",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-03",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "821729",
        "store": "uk.zaful.com",
        "merchant_homepage": "https://uk.zaful.com/",
        "offer_text": "Get Flat 18% discount on all products",
        "offer_value": "18%",
        "title": "Flat 18% off",
        "description": "This voucher is valid on all products (Products include Clothing, Footwear, Accessories and more)",
        "code": "FUN18",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Watches,Ethnic Wear,Lingerie,Eyewear,Footwear,Handbags and Wallets,Jewellery,Fashion Accessories",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Watches",
            "Ethnic Wear",
            "Lingerie",
            "Eyewear",
            "Footwear",
            "Handbags and Wallets",
            "Jewellery",
            "Fashion Accessories"
          ]
        },
        "featured": "No",
        "url": "https://uk.zaful.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fuk.zaful.com%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-19",
        "end_date": "2023-01-01"
      },
      {
        "lmd_id": "821733",
        "store": "uk.zaful.com",
        "merchant_homepage": "https://uk.zaful.com/",
        "offer_text": "22% off on Swimwear",
        "offer_value": "22%",
        "title": "Get 22% off",
        "description": "This discount is applicable on Swimwear (On Min. Purchase of &#163;77)",
        "code": "SWIM22",
        "terms_and_conditions": "",
        "categories": "Fashion,Lingerie",
        "category_array": {
          "Fashion": [
            "Lingerie"
          ]
        },
        "featured": "No",
        "url": "https://uk.zaful.com/promotion/ss2022-swimwear-trends.html",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fuk.zaful.com%2Fpromotion%2Fss2022-swimwear-trends.html",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-19",
        "end_date": "2022-02-21"
      },
      {
        "lmd_id": "822234",
        "store": "uk.zaful.com",
        "merchant_homepage": "https://uk.zaful.com/",
        "offer_text": "Get Flat 18% OFF on all products",
        "offer_value": "18%",
        "title": "Avail Flat 18% Off",
        "description": "Applicable on all products (Products include Tees, Crop Tops, Dresses, Shirt and more)",
        "code": "18FALL",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels"
          ]
        },
        "featured": "No",
        "url": "https://uk.zaful.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fuk.zaful.com%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-20",
        "end_date": "2023-01-01"
      },
      {
        "lmd_id": "693821",
        "store": "uk.zaful.com",
        "merchant_homepage": "https://uk.zaful.com/",
        "offer_text": "Flat 15% Discount on all products",
        "offer_value": "Sign-Up Offer",
        "title": "Flat 15% OFF",
        "description": "This offer is valid on all products (Only for New Customers)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Footwear,Handbags and Wallets,Jewellery,Fashion Accessories,Health and Beauty,Body Care,Makeup Products",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Footwear",
            "Handbags and Wallets",
            "Jewellery",
            "Fashion Accessories"
          ],
          "Health and Beauty": [
            "Body Care",
            "Makeup Products"
          ]
        },
        "featured": "No",
        "url": "https://uk.zaful.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fuk.zaful.com%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Sign-Up",
        "status": "active",
        "start_date": "2021-02-17",
        "end_date": "2022-02-03"
      },
      {
        "lmd_id": "794090",
        "store": "uk.zaful.com",
        "merchant_homepage": "https://uk.zaful.com/",
        "offer_text": "Buy 3 Get 20% discount on Women&#039;s Fashion",
        "offer_value": "20%",
        "title": "Get Buy 3 Get 20% Discount",
        "description": "This voucher is applicable on Women&#039;s Fashion (Selected products only)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Womens Apparels,Lingerie,Fashion Accessories",
        "category_array": {
          "Fashion": [
            "Womens Apparels",
            "Lingerie",
            "Fashion Accessories"
          ]
        },
        "featured": "No",
        "url": "https://uk.zaful.com/promotion/new-arrivals-deals-6334.html",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fuk.zaful.com%2Fpromotion%2Fnew-arrivals-deals-6334.html",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2020-12-10",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "821732",
        "store": "uk.zaful.com",
        "merchant_homepage": "https://uk.zaful.com/",
        "offer_text": "Get 22% Off on all products",
        "offer_value": "22%",
        "title": "Flat 22% discount",
        "description": "Applicable on all products (Products include Clothing, Footwear, Accessories and more)",
        "code": "AFF22",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Watches,Ethnic Wear,Lingerie,Eyewear,Footwear,Handbags and Wallets,Jewellery,Fashion Accessories",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Watches",
            "Ethnic Wear",
            "Lingerie",
            "Eyewear",
            "Footwear",
            "Handbags and Wallets",
            "Jewellery",
            "Fashion Accessories"
          ]
        },
        "featured": "No",
        "url": "https://uk.zaful.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fuk.zaful.com%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-19",
        "end_date": "2022-12-31"
      },
      {
        "lmd_id": "821734",
        "store": "uk.zaful.com",
        "merchant_homepage": "https://uk.zaful.com/",
        "offer_text": "Upto &#163;95 discount on all products",
        "offer_value": "&#163;95",
        "title": "Upto &#163;95 Discount",
        "description": "This coupon is applicable on all products (On Min. Purchase of &#163;5)",
        "code": "DEAL22",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Watches,Ethnic Wear,Lingerie,Eyewear,Footwear,Handbags and Wallets,Jewellery,Fashion Accessories",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Watches",
            "Ethnic Wear",
            "Lingerie",
            "Eyewear",
            "Footwear",
            "Handbags and Wallets",
            "Jewellery",
            "Fashion Accessories"
          ]
        },
        "featured": "No",
        "url": "https://uk.zaful.com/promotion/winter-sale-2022.html",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fuk.zaful.com%2Fpromotion%2Fwinter-sale-2022.html",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2022-01-19",
        "end_date": "2022-01-31"
      },
      {
        "lmd_id": "821731",
        "store": "uk.zaful.com",
        "merchant_homepage": "https://uk.zaful.com/",
        "offer_text": "20% discount on all products",
        "offer_value": "20%",
        "title": "Get Flat 20% off",
        "description": "This promotional offer is valid on all products (On order of &#8377;49+)",
        "code": "20Honey",
        "terms_and_conditions": "",
        "categories": "Fashion,Mens Apparels,Womens Apparels,Watches,Ethnic Wear,Lingerie,Eyewear,Footwear,Handbags and Wallets,Jewellery,Fashion Accessories",
        "category_array": {
          "Fashion": [
            "Mens Apparels",
            "Womens Apparels",
            "Watches",
            "Ethnic Wear",
            "Lingerie",
            "Eyewear",
            "Footwear",
            "Handbags and Wallets",
            "Jewellery",
            "Fashion Accessories"
          ]
        },
        "featured": "No",
        "url": "https://www.zaful.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.zaful.com%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-19",
        "end_date": "2022-09-02"
      },
      {
        "lmd_id": "796351",
        "store": "uk.zaful.com",
        "merchant_homepage": "https://uk.zaful.com/",
        "offer_text": "Women&#039;s Fashion starting at just ????9.96(Products include Lingerie, Activewear, Tops and more)",
        "offer_value": "Great Value",
        "title": "Women&#039;s Fashion",
        "description": "Starting @ ????9.96(Products include Lingerie, Activewear, Tops and more) only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Womens Apparels,Lingerie",
        "category_array": {
          "Fashion": [
            "Womens Apparels",
            "Lingerie"
          ]
        },
        "featured": "No",
        "url": "https://uk.zaful.com/best-sellers/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fuk.zaful.com%2Fbest-sellers%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2020-12-31",
        "end_date": "2022-02-04"
      },
      {
        "lmd_id": "630030",
        "store": "voylla.com",
        "merchant_homepage": "https://www.voylla.com/",
        "offer_text": "Get Up to 50% off on Jewellery",
        "offer_value": "50%",
        "title": "Avail Upto 50% Discount",
        "description": "This coupon is valid on Jewellery (Products include Necklace, Bangles, Earrings, Pendants, Bracelet and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.voylla.com/jewellery?discount[]=20%25%20Or%20More&look[]=Cz&&sort=pop",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.voylla.com%2Fjewellery%3Fdiscount%5B%5D%3D20%2525%2520Or%2520More%26look%5B%5D%3DCz%26%26sort%3Dpop",
        "image_url": "https://images.voylla.com/mobile_cf/cz-cf-website.jpg",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2021-01-20",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "815261",
        "store": "voylla.com",
        "merchant_homepage": "https://www.voylla.com/",
        "offer_text": "Kundan Earrings starting at just &#8377;149",
        "offer_value": "Super Offer",
        "title": "Kundan Earrings",
        "description": "Starts at just &#8377;149",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.voylla.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.voylla.com%2F",
        "image_url": "https://images.voylla.com/offer-strip.jpg",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-07",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "815259",
        "store": "voylla.com",
        "merchant_homepage": "https://www.voylla.com/",
        "offer_text": "Aham brahmasmi starting at just &#8377;299",
        "offer_value": "Save Big",
        "title": "Aham brahmasmi",
        "description": "Starting from &#8377;299 (Products include Necklace, Bangles, Earrings, and more) only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.voylla.com/collections/aham-brahmasmi?sort=pop",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.voylla.com%2Fcollections%2Faham-brahmasmi%3Fsort%3Dpop",
        "image_url": "https://images.voylla.com/mobile_cf/aham-brahmasmi.jpg",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-07",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "815262",
        "store": "voylla.com",
        "merchant_homepage": "https://www.voylla.com/",
        "offer_text": "Get Upto 20% Discount on Bidri Jewellery Collection",
        "offer_value": "20%",
        "title": "Avail Upto 20% OFF",
        "description": "This promotional offer is valid on Bidri Jewellery Collection",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.voylla.com/campaign/bidri-jewellery-collection",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.voylla.com%2Fcampaign%2Fbidri-jewellery-collection",
        "image_url": "https://images.voylla.com/Bidri.jpg",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-07",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "811206",
        "store": "voylla.com",
        "merchant_homepage": "https://www.voylla.com/",
        "offer_text": "Ethnic Jewellery starting at just &#8377;139",
        "offer_value": "Best Offer",
        "title": "Ethnic Jewellery",
        "description": "Starting from &#8377;139 (Products include Earrings, Bengals, mangalsutra and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.voylla.com/jewellery?look[]=Ethnic&sort=pricehigh&",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.voylla.com%2Fjewellery%3Flook%5B%5D%3DEthnic%26sort%3Dpricehigh%26",
        "image_url": "https://images.voylla.com/mobile_cf/Ethnicnecklace.jpg",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-12-31",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "815258",
        "store": "voylla.com",
        "merchant_homepage": "https://www.voylla.com/",
        "offer_text": "Arabian Nights Collection starting at just &#8377;1249",
        "offer_value": "Hot Offer",
        "title": "Arabian Nights Collection",
        "description": "Starts from &#8377;1249 (Products include Necklace, Bangles, Earrings, and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.voylla.com/search?q=kundan&cat=&sort=pop",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.voylla.com%2Fsearch%3Fq%3Dkundan%26cat%3D%26sort%3Dpop",
        "image_url": "https://images.voylla.com/mobile_cf/kundan.jpg",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-07",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "815260",
        "store": "voylla.com",
        "merchant_homepage": "https://www.voylla.com/",
        "offer_text": "Bridal Jewelry starting at just &#8377;79",
        "offer_value": "Best Offer",
        "title": "Bridal Jewelry",
        "description": "Starting at &#8377;79 (Products include Rings, Necklace, Earrings)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.voylla.com/look-the-part/bridal?app_view_type=template",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.voylla.com%2Flook-the-part%2Fbridal%3Fapp_view_type%3Dtemplate",
        "image_url": "https://images.voylla.com/mobile_cf/Bridal.jpg",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-07",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "501998",
        "store": "voylla.com",
        "merchant_homepage": "https://www.voylla.com/",
        "offer_text": "Avail Up to\r\n80% Off on all products",
        "offer_value": "80%",
        "title": "Up To\r\n80% off",
        "description": "This voucher is applicable on all products (Products include Necklace, Bangles, Earrings,\r\nPendants, Bracelet and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.voylla.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.voylla.com%2F",
        "image_url": "https://images.voylla.com/Strip-2-(1200x300).jpg",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2020-01-23",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "559656",
        "store": "voylla.com",
        "merchant_homepage": "https://www.voylla.com/",
        "offer_text": "Avail Upto\r\n70% off on\r\nBangles",
        "offer_value": "70%",
        "title": "Avail Upto\r\n70% Off",
        "description": "This promotional offer is valid on\r\nBangles",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.voylla.com/campaign/offers-on-bangles?sort=pop",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.voylla.com%2Fcampaign%2Foffers-on-bangles%3Fsort%3Dpop",
        "image_url": "https://images.voylla.com/2.jpg",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2020-07-09",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "421080",
        "store": "voylla.com",
        "merchant_homepage": "https://www.voylla.com/",
        "offer_text": "Get Up To\r\n95% OFF on Men&#039;s Jewellery",
        "offer_value": "95%",
        "title": "Avail Up To\r\n95% Discount",
        "description": "This offer is valid on Men&#039;s Jewellery (Products include Bracelet, Pendant,\r\nChain and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.voylla.com/campaign/stock-clearance-sale-men?sort=pop",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.voylla.com%2Fcampaign%2Fstock-clearance-sale-men%3Fsort%3Dpop",
        "image_url": "https://images.voylla.com/Men-offer.jpg",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2019-07-19",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "820481",
        "store": "voylla.com",
        "merchant_homepage": "https://www.voylla.com/",
        "offer_text": "Additional 10% Off on all products",
        "offer_value": "10%",
        "title": "Extra 10% Off",
        "description": "This promotional offer is valid on all products (On Payment via Digibank Visa Debit Cards only. Max. Once per user)",
        "code": "VOYLLAVISA",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.voylla.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.voylla.com%2F",
        "image_url": "https://www.dbs.com/in/iwov-resources/media/images/promotions/promo_india/voylla-684x630.jpg",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-17",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "630031",
        "store": "voylla.com",
        "merchant_homepage": "https://www.voylla.com/",
        "offer_text": "Designer Jewellery starting at just &#8377;299",
        "offer_value": "Save Big",
        "title": "Designer Jewellery",
        "description": "Starts for just &#8377;299 (Products include Necklace, Bangles, Earrings, Pendants, Bracelet and more)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Fashion,Jewellery",
        "category_array": {
          "Fashion": [
            "Jewellery"
          ]
        },
        "featured": "No",
        "url": "https://www.voylla.com/campaign/partywear-jewelry-for-women",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.voylla.com%2Fcampaign%2Fpartywear-jewelry-for-women",
        "image_url": "https://images.voylla.com/mobile_cf/designer-party-wear-cf.jpg",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-01-20",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "824674",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Avail Flat 15% + Additional &#8377;200 Cash-back on Selected Domestic Hotels Booking",
        "offer_value": "15% + &#8377;200",
        "title": "Get Flat 15% + Extra &#8377;200 Cash-Back",
        "description": "This promotional offer is valid on Selected Domestic Hotels Booking (On Min. Booking of &#8377;2500. On purchase using Cred Pay wallet only. Max. 2 times per user. Maximum &#8377;3000 discount will be applied)",
        "code": "YTCRED",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;between January 26 - March 31, 2022.</li>\r\n<li>There is no minimum booking amount required to avail this offer.</li>\r\n<li>User should have the CRED app and must be logged in through the same mobile number on both Yatra.com and CRED app.</li>\r\n<li>User will get cashback in their respective credit card through which they will make the payment using CRED Pay.</li>\r\n<li>Offer valid on&nbsp;CRED Pay payment menthod&nbsp;only.</li>\r\n<li>Use promo code&nbsp;***to avail this offer.</li>\r\n<li>This offer is valid only on&nbsp;both App (android) and Web&nbsp;(www.yatra.com) only.</li>\r\n<li>Valid twice per user, any product, per month during the offer.</li>\r\n<li>This offer is valid on selected domestic hotels only.</li>\r\n<li>This offer is valid only on online confirmed bookings.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>User are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>User needs to enter the Promo Code at the time of booking to be eligible for the offer.</li>\r\n<li>On validation of the promo code, discount will be provided upfront on the total transaction amount upon using the promotion code on&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>.</li>\r\n<li>Offer is valid on online bookings of Domestic Flights and Domestic Hotels only.</li>\r\n<li>Offer is not available to travel agents.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>In case of refund, the discounted amount will be deducted from the total refund due.</li>\r\n<li><a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra</a>&nbsp;reserves the right to add, alter, modify all or any of these terms and conditions, or replace wholly or in part, this offer by any other offer, whether similar to this offer or not, or to withdraw it altogether, without prior notice.</li>\r\n<li>All tickets would be subject to availability at the time of booking and will be governed by the standard airline terms and conditions. Cancellation charges / date change penalties will be applicable as per the airline rules for all tickets purchased through this promotion.</li>\r\n<li>Yatra shall not guarantee or be held responsible or liable for any product or service offered by the Airlines which is not within the control of&nbsp;<a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra.</a></li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>All Offers are subject to availability.</li>\r\n<li>Decision of&nbsp;<a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra</a>&nbsp;in all matters connected with or incidental to this offer shall be final and binding.</li>\r\n<li>All purchases made by the customer at&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>&nbsp;shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>.</li>\r\n<li>All disputes arising out of or in connection with this offer shall be subject to the exclusive jurisdiction of the court in Gurgaon.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,Hotels",
        "category_array": {
          "Travel": [
            "Hotels"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/credpay-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fcredpay-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "823262",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Ladakh Holiday Packages starting at just &#8377;33999 Per Person",
        "offer_value": "Hot Offer",
        "title": "Ladakh Holiday Packages",
        "description": "Starting at just &#8377;33999 Per Person",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Travel,Holidays",
        "category_array": {
          "Travel": [
            "Holidays"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/india-tour-packages/holidays-in-ladakh",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Findia-tour-packages%2Fholidays-in-ladakh",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-22",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "816097",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Zero Date Change Fee on Domestic Flight Booking",
        "offer_value": "Hot Offer",
        "title": "Zero Date Change Fee",
        "description": "Valid on Domestic Flight Booking (Not valid on infant and group bookings)",
        "code": "",
        "terms_and_conditions": "<ul>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>Limited inventory is available under the Offer and therefore, discounts will be provided, subject to availability of inventory and at the sole discretion of Airlines.</li>\r\n<li>Fares under this offer are refundable and only statutory taxes will be refunded.</li>\r\n<li>Any change in the booking will involve a change fee and difference of fare, which would be borne by the passenger.</li>\r\n<li>The offer is not applicable on infant and group bookings.</li>\r\n<li>This offer cannot be clubbed with any other promotion on<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">&nbsp;www.yatra.com</a></li>\r\n<li>Yatra Online Pvt. Ltd. reserves the right without prior notice to add, alter, modify, all or any of these terms and conditions.</li>\r\n<li>The offer maybe replaced wholly or in part, by any other offer, whether similar or not and can be withdrawn altogether.</li>\r\n<li>Any disputes arising out of this offer shall be subject to the exclusive jurisdiction of competent courts in Gurgaon, Haryana.</li>\r\n<li>All other standard terms and conditions of the airlines and Yatra.com shall apply.</li>\r\n</ul>",
        "categories": "Travel,Domestic Flights",
        "category_array": {
          "Travel": [
            "Domestic Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/airlines-offer-no-change-fee",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fairlines-offer-no-change-fee",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2022-01-10",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "814982",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Avail Up to 40% Discount + Additional 10% cashback on Domestic Hotel Booking",
        "offer_value": "40% + 10%",
        "title": "Up to 40% Off + Extra 10% Cash-back",
        "description": "This voucher is valid on Domestic Hotel Booking (Max. cashback of &#8377;1000 can be availed. Extra 10%  Cashback in Yatra Wallet)",
        "code": "YATSTAY",
        "terms_and_conditions": "<ul>\r\n<li>App related bookings are valid on Android &amp; iOS devices only.</li>\r\n<li>This offer cannot be clubbed with any other offer extended by Yatra as part of any other arrangement.</li>\r\n<li>The offer is not applicable where hotel stay has been split into multiple bookings to avail the offer multiple times. Yatra.com reserves the right to cancel such bookings.</li>\r\n<li><span>In case of a cancellation/refund, the offer amount will be deducted from the total refund due.</span></li>\r\n<li>Yatra Online Pvt. Ltd. (\"Yatra\") reserves the right to add, alter, modify all or any of these terms and conditions, or replace wholly or in part, this offer by any other offer, whether similar to this offer or not, or to withdraw it altogether, without prior notice.</li>\r\n<li>Yatra shall not guarantee or be held responsible or liable for any product or service offered by the hotels which is not within the control of Yatra.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>Decision of Yatra in all matters connected with or incidental to this offer shall be final and binding.</li>\r\n<li>Any disputes arising out of this offer shall be subject to the exclusive jurisdiction of competent courts in Gurgaon, Haryana.</li>\r\n<li>All other standard terms and conditions available at Yatra.com shall apply.</li>\r\n</ul>",
        "categories": "Travel,Hotels",
        "category_array": {
          "Travel": [
            "Hotels"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/yatra-offer-yatstay",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fyatra-offer-yatstay",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-07",
        "end_date": "2023-01-01"
      },
      {
        "lmd_id": "731207",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Andaman Holiday Packages starting at just &#8377;14999",
        "offer_value": "Super Offer",
        "title": "Andaman Holiday Packages",
        "description": "Starts at &#8377;14999",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Travel,Holidays",
        "category_array": {
          "Travel": [
            "Holidays"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/india-tour-packages/holidays-in-andaman",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Findia-tour-packages%2Fholidays-in-andaman",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-08-04",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "708141",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Himachal Holiday Packages starting at just &#8377;6499",
        "offer_value": "Great Value",
        "title": "Himachal Holiday Packages",
        "description": "Starting for &#8377;6499 (Per person)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Travel,Holidays",
        "category_array": {
          "Travel": [
            "Holidays"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/india-tour-packages/holidays-in-himachal-pradesh",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Findia-tour-packages%2Fholidays-in-himachal-pradesh",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-06-17",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "705710",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Rejuvenation and Energising Vacation Stays starting at just &#8377;4990",
        "offer_value": "Best Offer",
        "title": "Rejuvenation and Energising Vacation Stays",
        "description": "Starting from &#8377;4990",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Travel,Holidays",
        "category_array": {
          "Travel": [
            "Holidays"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/Rejuvenation-Energising-Vacation-Stay",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2FRejuvenation-Energising-Vacation-Stay",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-06-14",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "825547",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Flat &#8377;500 discount + Extra &#8377;50 Cashback on Selected Domestic Hotels Booking",
        "offer_value": "&#8377;500 + &#8377;50",
        "title": "&#8377;500 off + Extra &#8377;50 Cash-back",
        "description": "This offer is valid on Selected Domestic Hotels Booking (On Min. Booking of &#8377;3000. Only on orders using Mobikwik wallet. Only on Monday, Tuesday, Thursday, Friday, Saturday, Sunday. Extra Cashback for Zip users only)",
        "code": "YAYMBK",
        "terms_and_conditions": "<ul>\r\n<li>This offer is valid only on online confirmed Mobikwik Wallet Transaction Domestic flights, Domestic hotels and Bus, bookings made through Yatra.com.</li>\r\n<li>The offer will be applicable once Per Month During the offer period.</li>\r\n<li>The offer is valid on the bookings made between&nbsp;January 1 - March 31, 2022 (every Thursday to Tuesday).</li>\r\n<li>The customer needs to apply to promo code *******to avail the discounts.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>To be eligible for the offer, the user is required to use MobiKwik wallet at Yatra.</li>\r\n<li>Cashback will be credited within 24 hours of successful transaction.</li>\r\n<li>Offer valid on domestic flights only.</li>\r\n<li>On mobile app, the offer is valid on Android and iOS based devices only.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc. shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>In the case of refund, the discounted amount will be deducted from the total refund due.</li>\r\n<li>Yatra.com reserves the right to add, alter, modify all or any of these terms and conditions, or replace wholly or in part, this offer by any other offer, whether similar to this offer or not, or to withdraw it altogether, without prior notice.</li>\r\n<li>All tickets would be subject to availability at the time of booking and will be governed by the standard airline terms and conditions. Cancellation charges/date change penalties will be applicable as per the airline rules for all tickets purchased through this promotion.</li>\r\n<li>Yatra shall not guarantee or be held responsible or liable for any product or service offered by the airlines which is not within the control of Yatra.com.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In the case of a cancellation, Yatra shall reverse the discount and shall not provide an additional discount to the customer.</li>\r\n<li>All offers are subject to availability.</li>\r\n<li>The decision of Yatra.com in all matters connected with or incidental to this offer shall be final and binding.</li>\r\n<li>All purchases made by the customer at www.yatra.com shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website www.yatra.com.</li>\r\n<li>All disputes arising out of or in connection with this offer shall be subject to the exclusive jurisdiction of the court in Gurugram.</li>\r\n</ul>",
        "categories": "Travel,Hotels",
        "category_array": {
          "Travel": [
            "Hotels"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/mobikwik-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fmobikwik-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "825343",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Get Flat &#8377;100 off on Bus Booking",
        "offer_value": "&#8377;100",
        "title": "Flat &#8377;100 discount",
        "description": "Applicable on Bus Booking (On Min. Booking of &#8377;500. Only on payment via Mobikwik wallet. Max. Once per user. Only on Monday, Tuesday, Thursday, Friday, Saturday, Sunday)",
        "code": "YAYMBK",
        "terms_and_conditions": "<div>\r\n<section>\r\n<div>\r\n<aside>\r\n<div>\r\n<div>\r\n<ul>\r\n<li>This offer is valid only on online confirmed Mobikwik Wallet Transaction Domestic flights, Domestic hotels and Bus, bookings made through Yatra.com.</li>\r\n<li>The offer will be applicable once Per Month During the offer period.</li>\r\n<li>The offer is valid on the bookings made between&nbsp;<span>January 1 - March 31, 2022 (every Thursday to Tuesday)</span>.</li>\r\n<li>The customer needs to apply to promo code ********** to avail the discounts.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>To be eligible for the offer, the user is required to use MobiKwik wallet at Yatra.</li>\r\n<li>Cashback will be credited within 24 hours of successful transaction.</li>\r\n<li>Offer valid on domestic flights only.</li>\r\n<li>On mobile app, the offer is valid on Android and iOS based devices only.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc. shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>In the case of refund, the discounted amount will be deducted from the total refund due.</li>\r\n<li>Yatra.com reserves the right to add, alter, modify all or any of these terms and conditions, or replace wholly or in part, this offer by any other offer, whether similar to this offer or not, or to withdraw it altogether, without prior notice.</li>\r\n<li>All tickets would be subject to availability at the time of booking and will be governed by the standard airline terms and conditions. Cancellation charges/date change penalties will be applicable as per the airline rules for all tickets purchased through this promotion.</li>\r\n<li>Yatra shall not guarantee or be held responsible or liable for any product or service offered by the airlines which is not within the control of Yatra.com.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In the case of a cancellation, Yatra shall reverse the discount and shall not provide an additional discount to the customer.</li>\r\n<li>All offers are subject to availability.</li>\r\n<li>The decision of Yatra.com in all matters connected with or incidental to this offer shall be final and binding.</li>\r\n<li>All purchases made by the customer at www.yatra.com shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website www.yatra.com.</li>\r\n<li>All disputes arising out of or in connection with this offer shall be subject to the exclusive jurisdiction of the court in Gurugram.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n</aside>\r\n<aside>\r\n<div>\r\n<div>\r\n<p>Share this offer</p>\r\n<span><a href=\"https://twitter.com/share\" target=\"_blank\" rel=\"nofollow noopener\" data-url=\"\">&nbsp;</a></span>\r\n<div data-layout=\"button_count\" data-action=\"like\" data-show-faces=\"false\" data-share=\"false\"><span><iframe title=\"fb:like Facebook Social Plugin\" src=\"https://www.facebook.com/v2.0/plugins/like.php?action=like&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3cf64d1091d354%26domain%3Dwww.yatra.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.yatra.com%252Ff2266ab574ba434%26relation%3Dparent.parent&amp;container_width=124&amp;href=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fmobikwik-offers&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=false&amp;show_faces=false\" width=\"1000px\" height=\"1000px\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"allowfullscreen\" data-testid=\"fb:like Facebook Social Plugin\"></iframe></span></div>\r\n<span></span>\r\n<div><iframe tabindex=\"0\" src=\"https://apis.google.com/u/0/se/0/_/+1/fastbutton?usegapi=1&amp;origin=https%3A%2F%2Fwww.yatra.com&amp;url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fmobikwik-offers&amp;gsrc=3p&amp;ic=1&amp;jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.en.IsloGm5DHq0.O%2Fam%3DAQ%2Fd%3D1%2Frs%3DAGLTcCNLqLj-f3R5mIaRCoBH1ZffQdA_eQ%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&amp;id=I0_1643280032381&amp;_gfid=I0_1643280032381&amp;parent=https%3A%2F%2Fwww.yatra.com&amp;pfname=&amp;rpctoken=42636279\" width=\"100%\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\"></iframe></div>\r\n<div data-gapiscan=\"true\" data-onload=\"true\" data-gapistub=\"true\">&nbsp;</div>\r\n</div>\r\n</div>\r\n<div>\r\n<div>\r\n<div>&nbsp;</div>\r\n</div>\r\n</div>\r\n<div>\r\n<div>\r\n<p>Deals in Your Inbox</p>\r\n<p>Sign up for emails from Yatra about travel deals and promotions.</p>\r\n<ul>\r\n<li><form><input name=\"Emailrs\" type=\"text\" value=\"\" placeholder=\"Enter your email\" data-regexmsg=\"Enter your email...\" data-regtype=\"email\" data-errormsg=\"Please Enter your email\" /><button type=\"submit\" value=\"Sign up\">Sign Up</button></form></li>\r\n</ul>\r\n</div>\r\n</div>\r\n</aside>\r\n</div>\r\n</section>\r\n</div>\r\n<div>\r\n<div>\r\n<div>\r\n<div>\r\n<div>&nbsp;</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>",
        "categories": "Travel,Bus Bookings",
        "category_array": {
          "Travel": [
            "Bus Bookings"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/mobikwik-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fmobikwik-offers",
        "image_url": "https://www.yatra.com/ythomepagecms/media/todayspick_home/2022/Jan/9b7da84a1db1bdcaa6f0fdc941d7ddaa.jpg",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "825342",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Get Flat &#8377;500 Discount on Domestic Flight Booking",
        "offer_value": "&#8377;500",
        "title": "Get &#8377;500 Discount",
        "description": "This voucher is applicable on Domestic Flight Booking (On Min. Booking of &#8377;4000. On purchase using Mobikwik wallet only. Only on Monday, Tuesday, Thursday, Friday, Saturday, Sunday)",
        "code": "YAYMBK",
        "terms_and_conditions": "<ul>\r\n<li>This offer is valid only on online confirmed Mobikwik Wallet Transaction Domestic flights, Domestic hotels and Bus, bookings made through Yatra.com.</li>\r\n<li>The offer will be applicable once Per Month During the offer period.</li>\r\n<li>The offer is valid on the bookings made between&nbsp;<span>January 1 - March 31, 2022 (every Thursday to Tuesday)</span>.</li>\r\n<li>The customer needs to apply to promo code *******to avail the discounts.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>To be eligible for the offer, the user is required to use MobiKwik wallet at Yatra.</li>\r\n<li>Cashback will be credited within 24 hours of successful transaction.</li>\r\n<li>Offer valid on domestic flights only.</li>\r\n<li>On mobile app, the offer is valid on Android and iOS based devices only.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc. shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>In the case of refund, the discounted amount will be deducted from the total refund due.</li>\r\n<li>Yatra.com reserves the right to add, alter, modify all or any of these terms and conditions, or replace wholly or in part, this offer by any other offer, whether similar to this offer or not, or to withdraw it altogether, without prior notice.</li>\r\n<li>All tickets would be subject to availability at the time of booking and will be governed by the standard airline terms and conditions. Cancellation charges/date change penalties will be applicable as per the airline rules for all tickets purchased through this promotion.</li>\r\n<li>Yatra shall not guarantee or be held responsible or liable for any product or service offered by the airlines which is not within the control of Yatra.com.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In the case of a cancellation, Yatra shall reverse the discount and shall not provide an additional discount to the customer.</li>\r\n<li>All offers are subject to availability.</li>\r\n<li>The decision of Yatra.com in all matters connected with or incidental to this offer shall be final and binding.</li>\r\n<li>All purchases made by the customer at www.yatra.com shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website www.yatra.com.</li>\r\n<li>All disputes arising out of or in connection with this offer shall be subject to the exclusive jurisdiction of the court in Gurugram.</li>\r\n</ul>",
        "categories": "Travel,Domestic Flights",
        "category_array": {
          "Travel": [
            "Domestic Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/mobikwik-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fmobikwik-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "821770",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Get Flat 12% discount on International Flights Booking",
        "offer_value": "12%",
        "title": "Avail 12% discount",
        "description": "This discount is valid on International Flights Booking (On Min. Booking of &#8377;7500. On Payment via Slice Super Credit Cards only. Max. Once per user. Only on Monday, Tuesday, Thursday, Friday, Saturday, Sunday. Max. &#8377;10000 discount can be availed)",
        "code": "YTSLC",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;Thursday to Tuesday every week between&nbsp;December 2, 2021 - March 31, 2022.</li>\r\n<li>Offer valid on&nbsp;Slice super Credit Cards&nbsp;only.</li>\r\n<li>Use promo code :&nbsp;**to avail this offer.</li>\r\n<li>Valid once per user, per product, per card during the offer.</li>\r\n<li>This offer is valid only on online confirmed bookings.</li>\r\n<li>This offer is valid on selected domestic hotels only.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>This marketing program is open to holders of all slice super card's issued in India.</li>\r\n<li>The discount extended can be availed by the customers making a full purchase only through their Visa card on Yatra's website www.yatra.com (\"Website\").</li>\r\n<li>Customers have to submit the promo code \"&nbsp;***\" in the promo code field on Yatra.com's payment page and necessarily use Visa card for the transaction. The amount of discount received will reflect at the next step on the website (Yatra.com).</li>\r\n<li>Cardholders are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>Offer is only valid on the eligible BINs shared by bank. If the BIN series of the card does not match with the one provided by bank to Yatra, then the cardholder will need to approach respective Bank.Yatra shall be entitled to withhold or deny the offer to the customer.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>Discount will not be valid on cancelled tickets/bookings or for charge back transactions. Yatra Online Private Limited reserves the right to reverse the discount in case the ticket/booking is found to be cancelled later.</li>\r\n<li>This offer is not valid for travel agents. Yatra reserves the right to recover the discounted amount if such a case is brought or comes to Yatra notice.</li>\r\n<li>Offer is valid on online bookings of domestic and international flights.</li>\r\n<li>All tickets and bookings will be subject to availability at the time of booking and will be governed by the standard airline and hotel terms and conditions.</li>\r\n<li>All standard Terms and Conditions (as amended from time to time) mentioned on Yatra website would apply. In case of third party services/products, customer's sole recourse against the third party services/products being provided by third party suppliers shall be with the concerned suppliers only, and shall be subject to said supplier's own terms and conditions.</li>\r\n<li>This offer is not valid for split bookings where customer makes multiple bookings to avail multiple discounts. Yatra reserves the right to recover the discounted amount or cancel the booking if such a case is brought or comes to Yatra's notice.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>Pictures of products shown in the communication sent to the customer either through mailers or advertised on the website, are representative only and may not bear a resemblance to the actual products.</li>\r\n<li>Products offered under this program are subject to availability.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>Customers are not bound in any way to participate in the programs. Any such participation is voluntary and the same is being made purely on a 'best effort basis'.</li>\r\n<li>Yatra reserves the right to modify or change any of the terms and conditions applicable to these programs/offer at any time without any prior notice.</li>\r\n<li>Any disputes arising out of this offer shall be subject to the exclusive jurisdiction of competent courts at Gurgaon, Haryana, India only.</li>\r\n<li>This is limited period offer and both the partners can change the offer terms anytime.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,International Flights",
        "category_array": {
          "Travel": [
            "International Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/slice-super-card-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fslice-super-card-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-20",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "762020",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Cruise Holidays Packages starting at just &#8377;3999",
        "offer_value": "Hot Offer",
        "title": "Cruise Holidays Packages",
        "description": "Starting @ &#8377;3999 (Per person) only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Travel,Holidays",
        "category_array": {
          "Travel": [
            "Holidays"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/international-tour-packages/cruise-holidays-in-india-2",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Finternational-tour-packages%2Fcruise-holidays-in-india-2",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-10-05",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "739867",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Sri Lanka Packages starting at just &#8377;16999",
        "offer_value": "Save Big",
        "title": "Sri Lanka Packages",
        "description": "Starting at &#8377;16999",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Travel,Holidays",
        "category_array": {
          "Travel": [
            "Holidays"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/international-tour-packages/holidays-in-sri-lanka",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Finternational-tour-packages%2Fholidays-in-sri-lanka",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-08-20",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "825580",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Get 15% OFF on Selected Domestic Hotels Booking",
        "offer_value": "15%",
        "title": "Get Flat 15% Off",
        "description": "Valid on Selected Domestic Hotels Booking (On Min. Booking of &#8377;3500. On Payment via Yes Bank Credit Cards only. Only on Friday, Saturday. Max. &#8377;3000 discount can be availed)",
        "code": "YTTRAVEL",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;January 1 - 29, 2022 (every Friday and Saturday).</li>\r\n<li>Offer valid on&nbsp;YES BANK Credit Cards&nbsp;&nbsp;only.</li>\r\n<li>Use promo code&nbsp;***to avail this offer.</li>\r\n<li>This offer is valid once per card per product, per month during the offer period .</li>\r\n<li>Offer is valid only on confirmed online bookings.</li>\r\n<li>The hotel offer is valid on select domestic hotels only.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>This offer from Yatra and&nbsp;YES BANK is open to all residents of India holding&nbsp;YES BANK card. The discount can be availed by the customers making a full purchase only through their&nbsp;YES BANK card on Yatra's website www.yatra.com (\"Website\").</li>\r\n<li>Customers have to fill the promo code \"&nbsp;***\" in the promo code field on Yatra.com's payment page. The amount of discount received will reflect at the next step on the website (Yatra.com).</li>\r\n<li>To be eligible for the offer, cardholder is required to use his/her YES BANK&nbsp;Card for making the required booking through any of the booking mode as mentioned in the communication. For clarity purpose please note &lsquo;website bookings&rsquo; are booking which are made through the official website of Yatra i.e.&nbsp;<a href=\"http://www.yatra.com/\">www.yatra.com</a>&nbsp;or through Mobile Website i.e. m.yatra.com. Mobile App booking refers to transactions that are undertaken on the Yatra website which has been downloaded as an application to the cardholder&rsquo;s registered mobile number. Offline transactions refer to transactions which are made at the Yatra toll free number or Yatra retail outlet.</li>\r\n<li>Cardholders are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>The Cardholder needs to enter the Promo Code at the time of booking to be eligible for the offer.</li>\r\n<li>On validation of the promo code, discount will be provided upfront on the total transaction amount upon using the promotion code on&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>.</li>\r\n<li>Mobile app offer is only valid on android &amp; ios.</li>\r\n<li>Offer is not available to travel agents.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>In case of refund, the discounted amount will be deducted from the total refund due.</li>\r\n<li><a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra</a>&nbsp;reserves the right to add, alter, modify all or any of these terms and conditions, or replace wholly or in part, this offer by any other offer, whether similar to this offer or not, or to withdraw it altogether, without prior notice.</li>\r\n<li>All tickets would be subject to availability at the time of booking and will be governed by the standard airline terms and conditions. Cancellation charges / date change penalties will be applicable as per the airline rules for all tickets purchased through this promotion.</li>\r\n<li>Yatra shall not guarantee or be held responsible or liable for any product or service offered by the Airlines which is not within the control of&nbsp;<a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra.com</a>.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>All Offers are subject to availability.</li>\r\n<li>Decision of&nbsp;<a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra</a>&nbsp;in all matters connected with or incidental to this offer shall be final and binding.</li>\r\n<li>All purchases made by the customer at&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>&nbsp;shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>.</li>\r\n<li>All disputes arising out of or in connection with this offer shall be subject to the exclusive jurisdiction of the court in Gurgaon.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,Hotels",
        "category_array": {
          "Travel": [
            "Hotels"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/yes-bank-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fyes-bank-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-28",
        "end_date": "2022-01-30"
      },
      {
        "lmd_id": "821767",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "13% OFF + No Cost EMI on 3 months tenure on Domestic Flights Booking",
        "offer_value": "13%",
        "title": "Get 13% off + No Cost EMI on 3 months tenure",
        "description": "Valid on Domestic Flights Booking (Only on payment via ZestMoney wallet. Only on Monday, Tuesday, Thursday, Friday, Saturday, Sunday. Max. &#8377;2500 discount will be offered)",
        "code": "YTZEST",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;<span>Thursday to Tuesday every week between October 7, 2021 -&nbsp;</span><span>March 31, 2022</span>.</li>\r\n<li>Use promo code : ***to avail this offer.</li>\r\n<li>Flat 13% OFF&nbsp;<span>(max.&nbsp;<span>&#8377;</span>4,000)</span>&nbsp;+ No Cost EMI on 3 months tenure on domestic flights is valid till January 2, 2022.</li>\r\n<li>Book flights, hotels, Holidays and Bus on Yatra and pay with ZestMoney.</li>\r\n<li>Offer is valid on Desktop/Mobile site and App (android and iOS).</li>\r\n<li>To avail the offer, customers must opt for &ldquo;ZestMoney&rdquo; payment method on payment page and complete the payment.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>ZestMoney EMI Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>The offer is valid only for transactions made through the ZestMoney EMI payment option at Yatra checkout.</li>\r\n<li>The offer will be valid for the period of&nbsp;<span>October 7, 2021 -&nbsp;<span>March 31, 2022</span></span>.</li>\r\n<li>The offer will be valid only on Yatra App and Web.</li>\r\n<li>On mobile app, the offer is valid on Android and iOS-based devices only.</li>\r\n<li>The offer is applicable only on the three month tenure loans.</li>\r\n<li>The No Cost EMI offer is applicable on 3 months tenure only.</li>\r\n<li>This offer is valid only for existing ZestMoney customers. To sign up for ZestMoney or check your credit limit, go to www.zestmoney.in/yatra or give a missed call on 08047193665.</li>\r\n<li>The EMI will be collected from the customer on a monthly basis including interest, and the interest portion will then be refunded within 3 days.</li>\r\n<li>In case of either partial or full cancellation of the order concerned leading to refund, the refunded amount will be reduced from outstanding loan amount of the customer with ZestMoney. Any amount deducted before refund will continue to be under loan amount. In case Zero Cost EMI was applicable at time of order, it will continue to apply to the remaining outstanding amount.</li>\r\n<li>In case of any cashback related issues the customer should reach out at the following mentioned email and contact no: help@zestmoney.in, +919343422556.</li>\r\n<li>For further details on ZestMoney&rsquo;s terms and conditions, please visit https://www.zestmoney.in/terms-and-conditions/.</li>\r\n<li>All purchases made by the customer at www.yatra.com shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website www.yatra.com.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>To be eligible for the offer, user is required to use ZestMoney for making the required booking. For clarity purpose please note &lsquo;website bookings&rsquo; are booking which are made through the official website of Yatra.com i.e. www.yatra.com or through Mobile Website i.e. m.yatra.com.</li>\r\n<li>On Mobile app, the offer is valid on android and iOS based devices only.</li>\r\n<li>Users are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>This is an exclusive offer from&nbsp;ZestMoney for transactions on Yatra. Any other existing offers from&nbsp;ZestMoney will not be applicable on ZestMoney transactions on Yatra. The offer cannot be clubbed with any other offers running with Yatra.</li>\r\n<li>Offer is not available to travel agents.</li>\r\n<li>This offer is valid for resident of India only.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>In cases of refund, the amount shall be credited after the applicable deductions of cancellation, penal charges, discounts, awarded cashback voucher, if any.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement. The offer cannot be transferred or combined with any other&nbsp;ZestMoney (a) offer; (b) promotion code; (c) coupon; or (d) discount or any offers from your card issuing bank or financial instrument.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>Yatra reserves the right to add, alter, modify all or any of these terms and conditions, or replace wholly or in part, this offer by any other offer, whether similar to this offer or not, or to withdraw it altogether, without prior notice.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>All offers are subject to availability.</li>\r\n<li>ZestMoney reserves the right to employ reasonable technological and other methods to prevent abuse of the Offer terms. Further, you acknowledge that ZestMoney&rsquo;s decision to take certain actions, including limiting access to your offer, placing holds or imposing reserves, may be based on confidential criteria that is essential to our management of risk, the security of users&rsquo; accounts, comply with applicable laws and the otherwise protect the&nbsp;ZestMoney system. You agree that&nbsp;ZestMoney is under no obligation to disclose the details of its risk management or its security procedures to You.</li>\r\n<li>All the queries related to discount/cashback will be resolved in 10-15 working days, post the campaign end date.</li>\r\n<li>The decision of Yatra in all matters connected with or incidental to this offer shall be final and binding.</li>\r\n<li>All purchases made by the customer at www.yatra.com shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website www.yatra.com.</li>\r\n<li>All disputes arising out of or in connection with this offer shall be subject to the exclusive jurisdiction of the court in Gurgaon.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,Domestic Flights",
        "category_array": {
          "Travel": [
            "Domestic Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/zestmoney-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fzestmoney-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-20",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "824671",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Get &#8377;300 Off per pax + Additional &#8377;200 Cash-Back on Domestic Flights Booking",
        "offer_value": "&#8377;300 + &#8377;200",
        "title": "Get &#8377;300 Off per pax + Extra &#8377;200 cash-back",
        "description": "This discount is valid on Domestic Flights Booking (On orders using Cred Pay wallet only. Max. 2 times per user. Max. &#8377;1000 discount)",
        "code": "YTCRED",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;<span><span>between January 26 - March 31, 2022</span>.</span></li>\r\n<li>There is no minimum booking amount required to avail this offer.</li>\r\n<li>User should have the CRED app and must be logged in through the same mobile number on both Yatra.com and CRED app.</li>\r\n<li>User will get cashback in their respective credit card through which they will make the payment using CRED Pay.</li>\r\n<li>Offer valid on&nbsp;<span>CRED Pay payment menthod&nbsp;</span>only.</li>\r\n<li><span>Use promo code&nbsp;</span><span>***</span><span>to avail this offer.</span></li>\r\n<li>This offer is valid only on&nbsp;<span>both App (android) and Web</span>&nbsp;(www.yatra.com) only.</li>\r\n<li>Valid twice per user, any product, per month during the offer.</li>\r\n<li>This offer is valid on selected domestic hotels only.</li>\r\n<li>This offer is valid only on online confirmed bookings.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>User are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>User needs to enter the Promo Code at the time of booking to be eligible for the offer.</li>\r\n<li>On validation of the promo code, discount will be provided upfront on the total transaction amount upon using the promotion code on&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>.</li>\r\n<li>Offer is valid on online bookings of Domestic Flights and Domestic Hotels only.</li>\r\n<li>Offer is not available to travel agents.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>In case of refund, the discounted amount will be deducted from the total refund due.</li>\r\n<li><a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra</a>&nbsp;reserves the right to add, alter, modify all or any of these terms and conditions, or replace wholly or in part, this offer by any other offer, whether similar to this offer or not, or to withdraw it altogether, without prior notice.</li>\r\n<li>All tickets would be subject to availability at the time of booking and will be governed by the standard airline terms and conditions. Cancellation charges / date change penalties will be applicable as per the airline rules for all tickets purchased through this promotion.</li>\r\n<li>Yatra shall not guarantee or be held responsible or liable for any product or service offered by the Airlines which is not within the control of&nbsp;<a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra.</a></li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>All Offers are subject to availability.</li>\r\n<li>Decision of&nbsp;<a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra</a>&nbsp;in all matters connected with or incidental to this offer shall be final and binding.</li>\r\n<li>All purchases made by the customer at&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>&nbsp;shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>.</li>\r\n<li>All disputes arising out of or in connection with this offer shall be subject to the exclusive jurisdiction of the court in Gurgaon.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,Domestic Flights",
        "category_array": {
          "Travel": [
            "Domestic Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/credpay-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fcredpay-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "821779",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Get Flat 10% Off on Holidays Booking",
        "offer_value": "10%",
        "title": "Get 10% OFF",
        "description": "This offer is valid on Holidays Booking (On Min. Booking of &#8377;25000. On Payment via Slice Super Credit Cards only. Max. Once per user. Only on Monday, Tuesday, Thursday, Friday, Saturday, Sunday. Maximum discount of &#8377;10000 will be applicable)",
        "code": "YTSLC",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;Thursday to Tuesday every week between&nbsp;December 2, 2021 - March 31, 2022.</li>\r\n<li>Offer valid on&nbsp;Slice super Credit Cards&nbsp;only.</li>\r\n<li>Use promo code :&nbsp;**to avail this offer.</li>\r\n<li>Valid once per user, per product, per card during the offer.</li>\r\n<li>This offer is valid only on online confirmed bookings.</li>\r\n<li>This offer is valid on selected domestic hotels only.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>This marketing program is open to holders of all slice super card's issued in India.</li>\r\n<li>The discount extended can be availed by the customers making a full purchase only through their Visa card on Yatra's website www.yatra.com (\"Website\").</li>\r\n<li>Customers have to submit the promo code \"&nbsp;***\" in the promo code field on Yatra.com's payment page and necessarily use Visa card for the transaction. The amount of discount received will reflect at the next step on the website (Yatra.com).</li>\r\n<li>Cardholders are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>Offer is only valid on the eligible BINs shared by bank. If the BIN series of the card does not match with the one provided by bank to Yatra, then the cardholder will need to approach respective Bank.Yatra shall be entitled to withhold or deny the offer to the customer.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>Discount will not be valid on cancelled tickets/bookings or for charge back transactions. Yatra Online Private Limited reserves the right to reverse the discount in case the ticket/booking is found to be cancelled later.</li>\r\n<li>This offer is not valid for travel agents. Yatra reserves the right to recover the discounted amount if such a case is brought or comes to Yatra notice.</li>\r\n<li>Offer is valid on online bookings of domestic and international flights.</li>\r\n<li>All tickets and bookings will be subject to availability at the time of booking and will be governed by the standard airline and hotel terms and conditions.</li>\r\n<li>All standard Terms and Conditions (as amended from time to time) mentioned on Yatra website would apply. In case of third party services/products, customer's sole recourse against the third party services/products being provided by third party suppliers shall be with the concerned suppliers only, and shall be subject to said supplier's own terms and conditions.</li>\r\n<li>This offer is not valid for split bookings where customer makes multiple bookings to avail multiple discounts. Yatra reserves the right to recover the discounted amount or cancel the booking if such a case is brought or comes to Yatra's notice.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>Pictures of products shown in the communication sent to the customer either through mailers or advertised on the website, are representative only and may not bear a resemblance to the actual products.</li>\r\n<li>Products offered under this program are subject to availability.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>Customers are not bound in any way to participate in the programs. Any such participation is voluntary and the same is being made purely on a 'best effort basis'.</li>\r\n<li>Yatra reserves the right to modify or change any of the terms and conditions applicable to these programs/offer at any time without any prior notice.</li>\r\n<li>Any disputes arising out of this offer shall be subject to the exclusive jurisdiction of competent courts at Gurgaon, Haryana, India only.</li>\r\n<li>This is limited period offer and both the partners can change the offer terms anytime.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,Holidays",
        "category_array": {
          "Travel": [
            "Holidays"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/slice-super-card-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fslice-super-card-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-20",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "436389",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Upto 25% Discount on Travel Bookings",
        "offer_value": "25%",
        "title": "Upto 25% off",
        "description": "This coupon is applicable on Travel Bookings (On Payment via Standard Chartered Credit Cards only)",
        "code": "DIGISMART",
        "terms_and_conditions": "",
        "categories": "Travel,Domestic Flights,International Flights,Bus Bookings,Hotels,Holidays",
        "category_array": {
          "Travel": [
            "Domestic Flights",
            "International Flights",
            "Bus Bookings",
            "Hotels",
            "Holidays"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2F",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2019-09-03",
        "end_date": "2022-12-01"
      },
      {
        "lmd_id": "825579",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Get 15% OFF on Bus Booking",
        "offer_value": "15%",
        "title": "Flat 15% Off",
        "description": "This coupon is valid on Bus Booking (On Payment via Rupay Credit Cards only. Max. Once per user. Only on Friday, Saturday. Max. &#8377;500 discount is allowed)",
        "code": "YATRUPAY",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;November 13, 2021 - January 29, 2022&nbsp;(every Friday and Saturday).</li>\r\n<li>Offer valid on&nbsp;RuPay Credit Cards&nbsp;&nbsp;only.</li>\r\n<li>Use promo code&nbsp;***&nbsp;to avail this offer.</li>\r\n<li>This offer is valid once per card per product, per month during the offer period .</li>\r\n<li>Offer is valid only on confirmed online bookings.</li>\r\n<li>The hotel offer is valid on select domestic hotels only.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>This offer from Yatra and RuPay is open to all residents of India holding RuPay card. The discount can be availed by the customers making a full purchase only through their RuPay Card on Yatra's website www.yatra.com (\"Website\").</li>\r\n<li>Customers have to submit the promo code \"***\" in the promo code field and necessarily use RuPay Card for the transaction. The amount of discount received will reflect at the next step on the Yatra website.</li>\r\n<li>Offer is only valid on the eligible BINs shared by bank. If the BIN series of the card does not match with the one provided by bank to Yatra, then the cardholder will need to approach respective Bank.Yatra shall be entitled to withhold or deny the offer to the customer.</li>\r\n<li>Cardholders are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>This offer is not valid for travel agents. Yatra reserves the right to recover the discounted amount if such a case is brought or comes to Yatra notice.</li>\r\n<li>This offer is valid only on online bookings made on Yatra's website (<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>) and the customer is required to mention the promo code for all bookings on the website.</li>\r\n<li>All tickets will be subject to availability at the time of booking and will be governed by the standard airline terms and conditions.</li>\r\n<li>All standard Terms and Conditions (as amended from time to time) mentioned on Yatra website would apply. In case of third party services/products, customer's sole recourse against the third party services/products being provided by third party suppliers shall be with the concerned suppliers only, and shall be subject to said supplier's own terms and conditions.&nbsp;</li>\r\n<li>This offer is not valid for split bookings where customer makes multiple bookings to avail multiple discounts. Yatra reserves the right to recover the discounted amount or cancel the booking if such a case is brought or comes to Yatra's notice.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount&nbsp;and shall not provide additional discount&nbsp;to the customer.</li>\r\n<li>Discounts&nbsp;provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>Products offered under this program are subject to availability.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>Customers are not bound in any way to participate in the programs. Any such participation is voluntary and the same is being made purely on a 'best effort basis'.</li>\r\n<li>Yatra reserves the right to modify or change any of the terms and conditions applicable to these programs/offer at any time without any prior notice.</li>\r\n<li>Any disputes arising out of this offer shall be subject to the exclusive jurisdiction of competent courts at Gurgaon, Haryana, India only.</li>\r\n<li>This is a limited period offer and both the partners can change the offer terms anytime.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,Bus Bookings",
        "category_array": {
          "Travel": [
            "Bus Bookings"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/rupay-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Frupay-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-28",
        "end_date": "2022-01-30"
      },
      {
        "lmd_id": "734222",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Kashmir Tour Packages starting at just &#8377;12999",
        "offer_value": "Great Value",
        "title": "Kashmir Tour Packages",
        "description": "Starts for &#8377;12999 only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Travel,Holidays",
        "category_array": {
          "Travel": [
            "Holidays"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/india-tour-packages/holidays-in-kashmir",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Findia-tour-packages%2Fholidays-in-kashmir",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-08-10",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "821780",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "15% on Bus Booking",
        "offer_value": "15%",
        "title": "15%",
        "description": "This voucher is valid on Bus Booking (Only for ZestMoney wallet users. Only on Monday, Tuesday, Thursday, Friday, Saturday, Sunday. Maximum &#8377;300 discount will be offered)",
        "code": "YTZEST",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;Thursday to Tuesday every week between October 7, 2021 -&nbsp;March 31, 2022.</li>\r\n<li>Use promo code : ***to avail this offer.</li>\r\n<li>Flat 13% OFF&nbsp;(max.&nbsp;&#8377;4,000)&nbsp;+ No Cost EMI on 3 months tenure on domestic flights is valid till January 2, 2022.</li>\r\n<li>Book flights, hotels, Holidays and Bus on Yatra and pay with ZestMoney.</li>\r\n<li>Offer is valid on Desktop/Mobile site and App (android and iOS).</li>\r\n<li>To avail the offer, customers must opt for &ldquo;ZestMoney&rdquo; payment method on payment page and complete the payment.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>ZestMoney EMI Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>The offer is valid only for transactions made through the ZestMoney EMI payment option at Yatra checkout.</li>\r\n<li>The offer will be valid for the period of&nbsp;October 7, 2021 -&nbsp;March 31, 2022.</li>\r\n<li>The offer will be valid only on Yatra App and Web.</li>\r\n<li>On mobile app, the offer is valid on Android and iOS-based devices only.</li>\r\n<li>The offer is applicable only on the three month tenure loans.</li>\r\n<li>The No Cost EMI offer is applicable on 3 months tenure only.</li>\r\n<li>This offer is valid only for existing ZestMoney customers. To sign up for ZestMoney or check your credit limit, go to www.zestmoney.in/yatra or give a missed call on 08047193665.</li>\r\n<li>The EMI will be collected from the customer on a monthly basis including interest, and the interest portion will then be refunded within 3 days.</li>\r\n<li>In case of either partial or full cancellation of the order concerned leading to refund, the refunded amount will be reduced from outstanding loan amount of the customer with ZestMoney. Any amount deducted before refund will continue to be under loan amount. In case Zero Cost EMI was applicable at time of order, it will continue to apply to the remaining outstanding amount.</li>\r\n<li>In case of any cashback related issues the customer should reach out at the following mentioned email and contact no: help@zestmoney.in, +919343422556.</li>\r\n<li>For further details on ZestMoney&rsquo;s terms and conditions, please visit https://www.zestmoney.in/terms-and-conditions/.</li>\r\n<li>All purchases made by the customer at www.yatra.com shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website www.yatra.com.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>To be eligible for the offer, user is required to use ZestMoney for making the required booking. For clarity purpose please note &lsquo;website bookings&rsquo; are booking which are made through the official website of Yatra.com i.e. www.yatra.com or through Mobile Website i.e. m.yatra.com.</li>\r\n<li>On Mobile app, the offer is valid on android and iOS based devices only.</li>\r\n<li>Users are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>This is an exclusive offer from&nbsp;ZestMoney for transactions on Yatra. Any other existing offers from&nbsp;ZestMoney will not be applicable on ZestMoney transactions on Yatra. The offer cannot be clubbed with any other offers running with Yatra.</li>\r\n<li>Offer is not available to travel agents.</li>\r\n<li>This offer is valid for resident of India only.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>In cases of refund, the amount shall be credited after the applicable deductions of cancellation, penal charges, discounts, awarded cashback voucher, if any.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement. The offer cannot be transferred or combined with any other&nbsp;ZestMoney (a) offer; (b) promotion code; (c) coupon; or (d) discount or any offers from your card issuing bank or financial instrument.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>Yatra reserves the right to add, alter, modify all or any of these terms and conditions, or replace wholly or in part, this offer by any other offer, whether similar to this offer or not, or to withdraw it altogether, without prior notice.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>All offers are subject to availability.</li>\r\n<li>ZestMoney reserves the right to employ reasonable technological and other methods to prevent abuse of the Offer terms. Further, you acknowledge that ZestMoney&rsquo;s decision to take certain actions, including limiting access to your offer, placing holds or imposing reserves, may be based on confidential criteria that is essential to our management of risk, the security of users&rsquo; accounts, comply with applicable laws and the otherwise protect the&nbsp;ZestMoney system. You agree that&nbsp;ZestMoney is under no obligation to disclose the details of its risk management or its security procedures to You.</li>\r\n<li>All the queries related to discount/cashback will be resolved in 10-15 working days, post the campaign end date.</li>\r\n<li>The decision of Yatra in all matters connected with or incidental to this offer shall be final and binding.</li>\r\n<li>All purchases made by the customer at www.yatra.com shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website www.yatra.com.</li>\r\n<li>All disputes arising out of or in connection with this offer shall be subject to the exclusive jurisdiction of the court in Gurgaon.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,Bus Bookings",
        "category_array": {
          "Travel": [
            "Bus Bookings"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/zestmoney-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fzestmoney-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-20",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "821765",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Get Flat 15% Discount on Domestic Flights Booking",
        "offer_value": "15%",
        "title": "Avail Flat 15% Discount",
        "description": "This voucher is valid on Domestic Flights Booking (On Min. Booking of &#8377;3500. On Payment via Slice Super Credit Cards only. Max. Once per user. Only on Monday, Tuesday, Thursday, Friday, Saturday, Sunday. Max. discount of &#8377;2400 will be applied)",
        "code": "YTSLC",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;<span>Thursday to Tuesday every week between&nbsp;<span>December 2, 2021 - March 31, 2022</span></span>.</li>\r\n<li>Offer valid on&nbsp;<span>Slice super Credit Cards&nbsp;</span>only.</li>\r\n<li><span>Use promo code :&nbsp;</span><span>**</span><span>to avail this offer.</span></li>\r\n<li>Valid once per user, per product, per card during the offer.</li>\r\n<li>This offer is valid only on online confirmed bookings.</li>\r\n<li>This offer is valid on selected domestic hotels only.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>This marketing program is open to holders of all slice super card's issued in India.</li>\r\n<li>The discount extended can be availed by the customers making a full purchase only through their Visa card on Yatra's website www.yatra.com (\"Website\").</li>\r\n<li>Customers have to submit the promo code \"&nbsp;<span>***</span>\" in the promo code field on Yatra.com's payment page and necessarily use Visa card for the transaction. The amount of discount received will reflect at the next step on the website (Yatra.com).</li>\r\n<li>Cardholders are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>Offer is only valid on the eligible BINs shared by bank. If the BIN series of the card does not match with the one provided by bank to Yatra, then the cardholder will need to approach respective Bank.Yatra shall be entitled to withhold or deny the offer to the customer.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>Discount will not be valid on cancelled tickets/bookings or for charge back transactions. Yatra Online Private Limited reserves the right to reverse the discount in case the ticket/booking is found to be cancelled later.</li>\r\n<li>This offer is not valid for travel agents. Yatra reserves the right to recover the discounted amount if such a case is brought or comes to Yatra notice.</li>\r\n<li>Offer is valid on online bookings of domestic and international flights.</li>\r\n<li>All tickets and bookings will be subject to availability at the time of booking and will be governed by the standard airline and hotel terms and conditions.</li>\r\n<li>All standard Terms and Conditions (as amended from time to time) mentioned on Yatra website would apply. In case of third party services/products, customer's sole recourse against the third party services/products being provided by third party suppliers shall be with the concerned suppliers only, and shall be subject to said supplier's own terms and conditions.</li>\r\n<li>This offer is not valid for split bookings where customer makes multiple bookings to avail multiple discounts. Yatra reserves the right to recover the discounted amount or cancel the booking if such a case is brought or comes to Yatra's notice.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>Pictures of products shown in the communication sent to the customer either through mailers or advertised on the website, are representative only and may not bear a resemblance to the actual products.</li>\r\n<li>Products offered under this program are subject to availability.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>Customers are not bound in any way to participate in the programs. Any such participation is voluntary and the same is being made purely on a 'best effort basis'.</li>\r\n<li>Yatra reserves the right to modify or change any of the terms and conditions applicable to these programs/offer at any time without any prior notice.</li>\r\n<li>Any disputes arising out of this offer shall be subject to the exclusive jurisdiction of competent courts at Gurgaon, Haryana, India only.</li>\r\n<li>This is limited period offer and both the partners can change the offer terms anytime.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,Domestic Flights",
        "category_array": {
          "Travel": [
            "Domestic Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/slice-super-card-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fslice-super-card-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-20",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "549137",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Activities Scintillating Singapore starting at just &#8377;542",
        "offer_value": "Great Value",
        "title": "Activities Scintillating Singapore",
        "description": "Starts @ just &#8377;542",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Travel,Holidays",
        "category_array": {
          "Travel": [
            "Holidays"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/activities/search/product/Singapore",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Factivities%2Fsearch%2Fproduct%2FSingapore",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2020-06-04",
        "end_date": "2023-10-01"
      },
      {
        "lmd_id": "813147",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Get &#8377;799 Off on Domestic Hotels",
        "offer_value": "&#8377;799",
        "title": "&#8377;799 OFF",
        "description": "Valid on Domestic Hotels (On Min. Booking of &#8377;4000. Max. Once per user. Not valid on infant and group bookings. Offer valid on Pay with Rewards payment method only)",
        "code": "YTPWR",
        "terms_and_conditions": "",
        "categories": "Travel,Hotels",
        "category_array": {
          "Travel": [
            "Hotels"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/special-offers-pay-with-rewards-points",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fspecial-offers-pay-with-rewards-points",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2022-01-03",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "813146",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Avail Flat &#8377;799 OFF on International Flight",
        "offer_value": "&#8377;799",
        "title": "Avail &#8377;799 off",
        "description": "Valid on International Flight (On Min. Booking of &#8377;4000. Max. Once per user. Not valid on infant and group bookings. Offer valid on Pay with Rewards payment method only)",
        "code": "YTPWR",
        "terms_and_conditions": "",
        "categories": "Travel,International Flights",
        "category_array": {
          "Travel": [
            "International Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/special-offers-pay-with-rewards-points",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fspecial-offers-pay-with-rewards-points",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2022-01-03",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "821766",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Get Flat &#8377;799 discount per pax on Domestic Flights Booking",
        "offer_value": "&#8377;799",
        "title": "Get Flat &#8377;799 Off per pax",
        "description": "Applicable on Domestic Flights Booking (On Min. Booking of &#8377;3500. On Payment via oneCard only. Max. Once per user. Only on Monday, Tuesday, Thursday, Friday, Saturday, Sunday. Maximum discount allowed is &#8377;2400)",
        "code": "ONECARD",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;<span>October 7, 2021 - March&nbsp; 31, 2022</span>.</li>\r\n<li>Offer valid on&nbsp;<span>OneCard</span>&nbsp;only.</li>\r\n<li><span>Use promo code :&nbsp;</span><span>***</span><span>to avail this offer.</span></li>\r\n<li>Valid once per user, per product, per card, per month during the offer.</li>\r\n<li>This offer is valid only on online confirmed bookings.</li>\r\n<li>This offer is valid on selected domestic hotels only.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>This marketing program (\"Programs\") from Yatra and OneCard is open to the selected set of OneCard(\"Customer(s)\"/\"Cardholder(s)\").</li>\r\n<li>To be eligible for the offer, the cardholder is required to use his/her OneCard for making the required booking through any of the booking mode as mentioned in the communication. For clarity purpose please note &lsquo;website bookings&rsquo; are booking which are made through the official website of Yatra i.e.&nbsp;<a href=\"http://www.yatra.com/\">www.yatra.com</a>&nbsp;or through Mobile Website i.e. m.yatra.com. Mobile App booking refers to transactions that are undertaken on the Yatra website which has been downloaded as an application to the cardholder&rsquo;s registered mobile number.&nbsp;</li>\r\n<li>Cardholders are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>The discount extended can be availed by the customers making a full purchase only through their OneCard on Yatra's website&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>&nbsp;(\"Website\").</li>\r\n<li><span>Customers have to submit the promo code \"</span><span>***</span><span>\" in the promo code field on Yatra.com's payment page and necessarily use OneCard for the transaction. The amount of discount received will reflect at the next step on the website (Yatra.com).</span></li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>Discount will not be valid on cancelled tickets/bookings or for charge back transactions. Yatra reserves the right to reverse the discount in case the ticket/booking is found to be cancelled later.</li>\r\n<li>This offer is not valid for travel agents. Yatra reserves the right to recover the discounted amount if such a case is brought or comes to Yatra notice.</li>\r\n<li>This offer is valid only on online bookings made on Yatra's website (<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>) and the customer is required to mention the promo code for all bookings on the website.</li>\r\n<li>All tickets will be subject to availability at the time of booking and will be governed by the standard airline terms and conditions.</li>\r\n<li>All standard Terms and Conditions (as amended from time to time) mentioned on Yatra website would apply. In case of third party services/products, customer's sole recourse against the third party services/products being provided by third party suppliers shall be with the concerned suppliers only, and shall be subject to said supplier's own terms and conditions.</li>\r\n<li>This offer is not valid for split bookings where customer makes multiple bookings to avail multiple discounts. Yatra reserves the right to recover the discounted amount or cancel the booking if such a case is brought or comes to Yatra's notice.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>Products offered under this program are subject to availability.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>Customers are not bound in any way to participate in the programs. Any such participation is voluntary and the same is being made purely on a 'best effort basis'.</li>\r\n<li>Yatra reserves the right to modify or change any of the terms and conditions applicable to these programs/offer at any time without any prior notice.</li>\r\n<li>Any disputes arising out of this offer shall be subject to the exclusive jurisdiction of competent courts at Gurgaon, Haryana, India only.</li>\r\n<li>This is a limited period offer and both the partners can change the offer terms anytime.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,Domestic Flights",
        "category_array": {
          "Travel": [
            "Domestic Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/visa-one-card-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fvisa-one-card-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2022-01-20",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "812363",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Get Up To &#8377;20000 OFF on International Flight Booking",
        "offer_value": "&#8377;20000",
        "title": "Upto &#8377;20000 off",
        "description": "Applicable on International Flight Booking (On Min. Booking of &#8377;10000)",
        "code": "YTINTFLY",
        "terms_and_conditions": "<ul>\r\n<li>Offer is valid for online international flight bookings through Yatra.</li>\r\n<li>On Yatra App, offer is valid on Android and iOS only.</li>\r\n<li>Seats are subject to availability.</li>\r\n<li>A customer can avail the offer for one internatinal flight booking during the offer period.<span><br /></span></li>\r\n<li>Offer is applicable on all international flights from november 08, 2021 only.</li>\r\n<li>Date/flight change fees and child discount will be charged as per fare rules.</li>\r\n<li>The offer is not applicable on infant and group bookings.</li>\r\n<li>This offer cannot be clubbed with any other promotion on<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">&nbsp;www.yatra.com</a></li>\r\n<li>In case of refund, the discounted amount will be deducted from the total refund due.</li>\r\n<li>Yatra Online Pvt. Ltd. reserves the right without prior notice to add, alter, modify, all or any of these terms and conditions.</li>\r\n<li>The offer maybe replaced wholly or in part, by any other offer, whether similar or not and can be withdrawn altogether.</li>\r\n<li>Any disputes arising out of this offer shall be subject to the exclusive jurisdiction of competent courts in Gurgaon, Haryana.</li>\r\n<li>All other standard terms and conditions of Yatra.com shall apply.</li>\r\n</ul>",
        "categories": "Travel,International Flights",
        "category_array": {
          "Travel": [
            "International Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/international-flight-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Finternational-flight-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2022-01-01",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "821777",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "10% + No Cost EMI on 3 months tenure on Domestic Holidays Booking",
        "offer_value": "10%",
        "title": "10% + No Cost EMI on 3 months tenure",
        "description": "Valid on Domestic Holidays Booking (On Min. Booking of &#8377;20000. For ZestMoney wallet users only. Only on Monday, Tuesday, Thursday, Friday, Saturday, Sunday. Maximum discount of &#8377;10000 will be offered)",
        "code": "YTZEST",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;Thursday to Tuesday every week between October 7, 2021 -&nbsp;March 31, 2022.</li>\r\n<li>Use promo code : ***to avail this offer.</li>\r\n<li>Flat 13% OFF&nbsp;(max.&nbsp;&#8377;4,000)&nbsp;+ No Cost EMI on 3 months tenure on domestic flights is valid till January 2, 2022.</li>\r\n<li>Book flights, hotels, Holidays and Bus on Yatra and pay with ZestMoney.</li>\r\n<li>Offer is valid on Desktop/Mobile site and App (android and iOS).</li>\r\n<li>To avail the offer, customers must opt for &ldquo;ZestMoney&rdquo; payment method on payment page and complete the payment.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>ZestMoney EMI Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>The offer is valid only for transactions made through the ZestMoney EMI payment option at Yatra checkout.</li>\r\n<li>The offer will be valid for the period of&nbsp;October 7, 2021 -&nbsp;March 31, 2022.</li>\r\n<li>The offer will be valid only on Yatra App and Web.</li>\r\n<li>On mobile app, the offer is valid on Android and iOS-based devices only.</li>\r\n<li>The offer is applicable only on the three month tenure loans.</li>\r\n<li>The No Cost EMI offer is applicable on 3 months tenure only.</li>\r\n<li>This offer is valid only for existing ZestMoney customers. To sign up for ZestMoney or check your credit limit, go to www.zestmoney.in/yatra or give a missed call on 08047193665.</li>\r\n<li>The EMI will be collected from the customer on a monthly basis including interest, and the interest portion will then be refunded within 3 days.</li>\r\n<li>In case of either partial or full cancellation of the order concerned leading to refund, the refunded amount will be reduced from outstanding loan amount of the customer with ZestMoney. Any amount deducted before refund will continue to be under loan amount. In case Zero Cost EMI was applicable at time of order, it will continue to apply to the remaining outstanding amount.</li>\r\n<li>In case of any cashback related issues the customer should reach out at the following mentioned email and contact no: help@zestmoney.in, +919343422556.</li>\r\n<li>For further details on ZestMoney&rsquo;s terms and conditions, please visit https://www.zestmoney.in/terms-and-conditions/.</li>\r\n<li>All purchases made by the customer at www.yatra.com shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website www.yatra.com.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>To be eligible for the offer, user is required to use ZestMoney for making the required booking. For clarity purpose please note &lsquo;website bookings&rsquo; are booking which are made through the official website of Yatra.com i.e. www.yatra.com or through Mobile Website i.e. m.yatra.com.</li>\r\n<li>On Mobile app, the offer is valid on android and iOS based devices only.</li>\r\n<li>Users are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>This is an exclusive offer from&nbsp;ZestMoney for transactions on Yatra. Any other existing offers from&nbsp;ZestMoney will not be applicable on ZestMoney transactions on Yatra. The offer cannot be clubbed with any other offers running with Yatra.</li>\r\n<li>Offer is not available to travel agents.</li>\r\n<li>This offer is valid for resident of India only.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>In cases of refund, the amount shall be credited after the applicable deductions of cancellation, penal charges, discounts, awarded cashback voucher, if any.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement. The offer cannot be transferred or combined with any other&nbsp;ZestMoney (a) offer; (b) promotion code; (c) coupon; or (d) discount or any offers from your card issuing bank or financial instrument.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>Yatra reserves the right to add, alter, modify all or any of these terms and conditions, or replace wholly or in part, this offer by any other offer, whether similar to this offer or not, or to withdraw it altogether, without prior notice.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>All offers are subject to availability.</li>\r\n<li>ZestMoney reserves the right to employ reasonable technological and other methods to prevent abuse of the Offer terms. Further, you acknowledge that ZestMoney&rsquo;s decision to take certain actions, including limiting access to your offer, placing holds or imposing reserves, may be based on confidential criteria that is essential to our management of risk, the security of users&rsquo; accounts, comply with applicable laws and the otherwise protect the&nbsp;ZestMoney system. You agree that&nbsp;ZestMoney is under no obligation to disclose the details of its risk management or its security procedures to You.</li>\r\n<li>All the queries related to discount/cashback will be resolved in 10-15 working days, post the campaign end date.</li>\r\n<li>The decision of Yatra in all matters connected with or incidental to this offer shall be final and binding.</li>\r\n<li>All purchases made by the customer at www.yatra.com shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website www.yatra.com.</li>\r\n<li>All disputes arising out of or in connection with this offer shall be subject to the exclusive jurisdiction of the court in Gurgaon.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,Holidays",
        "category_array": {
          "Travel": [
            "Holidays"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/zestmoney-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fzestmoney-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-20",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "821776",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "15% off on Selected Domestic Hotels Booking",
        "offer_value": "15%",
        "title": "Flat 15% OFF",
        "description": "Valid on Selected Domestic Hotels Booking (On Min. Booking of &#8377;8000. On Payment via Slice Super Credit Cards only. Max. Once per user. Only on Monday, Tuesday, Thursday, Friday, Saturday, Sunday. Max. discount of &#8377;4000 will be applicable)",
        "code": "YTSLC",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;Thursday to Tuesday every week between&nbsp;December 2, 2021 - March 31, 2022.</li>\r\n<li>Offer valid on&nbsp;Slice super Credit Cards&nbsp;only.</li>\r\n<li>Use promo code :&nbsp;**to avail this offer.</li>\r\n<li>Valid once per user, per product, per card during the offer.</li>\r\n<li>This offer is valid only on online confirmed bookings.</li>\r\n<li>This offer is valid on selected domestic hotels only.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>This marketing program is open to holders of all slice super card's issued in India.</li>\r\n<li>The discount extended can be availed by the customers making a full purchase only through their Visa card on Yatra's website www.yatra.com (\"Website\").</li>\r\n<li>Customers have to submit the promo code \"&nbsp;***\" in the promo code field on Yatra.com's payment page and necessarily use Visa card for the transaction. The amount of discount received will reflect at the next step on the website (Yatra.com).</li>\r\n<li>Cardholders are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>Offer is only valid on the eligible BINs shared by bank. If the BIN series of the card does not match with the one provided by bank to Yatra, then the cardholder will need to approach respective Bank.Yatra shall be entitled to withhold or deny the offer to the customer.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>Discount will not be valid on cancelled tickets/bookings or for charge back transactions. Yatra Online Private Limited reserves the right to reverse the discount in case the ticket/booking is found to be cancelled later.</li>\r\n<li>This offer is not valid for travel agents. Yatra reserves the right to recover the discounted amount if such a case is brought or comes to Yatra notice.</li>\r\n<li>Offer is valid on online bookings of domestic and international flights.</li>\r\n<li>All tickets and bookings will be subject to availability at the time of booking and will be governed by the standard airline and hotel terms and conditions.</li>\r\n<li>All standard Terms and Conditions (as amended from time to time) mentioned on Yatra website would apply. In case of third party services/products, customer's sole recourse against the third party services/products being provided by third party suppliers shall be with the concerned suppliers only, and shall be subject to said supplier's own terms and conditions.</li>\r\n<li>This offer is not valid for split bookings where customer makes multiple bookings to avail multiple discounts. Yatra reserves the right to recover the discounted amount or cancel the booking if such a case is brought or comes to Yatra's notice.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>Pictures of products shown in the communication sent to the customer either through mailers or advertised on the website, are representative only and may not bear a resemblance to the actual products.</li>\r\n<li>Products offered under this program are subject to availability.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>Customers are not bound in any way to participate in the programs. Any such participation is voluntary and the same is being made purely on a 'best effort basis'.</li>\r\n<li>Yatra reserves the right to modify or change any of the terms and conditions applicable to these programs/offer at any time without any prior notice.</li>\r\n<li>Any disputes arising out of this offer shall be subject to the exclusive jurisdiction of competent courts at Gurgaon, Haryana, India only.</li>\r\n<li>This is limited period offer and both the partners can change the offer terms anytime.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,Hotels",
        "category_array": {
          "Travel": [
            "Hotels"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/slice-super-card-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fslice-super-card-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-20",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "814418",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "5% OFF + Additional 10% eCash on Bus Bookings",
        "offer_value": "5% + 10%",
        "title": "5% Off + Additional 10% eCash",
        "description": "Applicable on Bus Bookings (Max. 2 times per user. Maximum discount allowed is &#8377;200. Maximum &#8377;50 cashback is allowed)",
        "code": "BUSONYATRA",
        "terms_and_conditions": "<ul>\r\n<li>This offer is valid for online bus bookings only through Yatra.</li>\r\n<li>Each customer can avail the discount &nbsp;TWICE&nbsp;in a month.</li>\r\n<li>This offer cannot be clubbed with any other promotion or discount on Yatra.</li>\r\n<li>In case of refund, the discounted amount will be deducted from the total refund due.</li>\r\n<li>Yatra reserves the right without prior notice to add, alter, modify, all or any of these terms and conditions.</li>\r\n<li>The decision of Yatra.com in all matters in connection with or incidental to this offer will be final and binding.</li>\r\n<li>This offer cannot be exchanged for cash or any other value.</li>\r\n<li>The offer maybe replaced wholly or in part, by any other offer, whether similar or not and can be withdrawn altogether.</li>\r\n<li>Any disputes arising out of this offer shall be subject to the exclusive jurisdiction of competent courts in Gurgaon, Haryana.</li>\r\n<li>All other standard terms and conditions of Yatra shall apply.</li>\r\n</ul>",
        "categories": "Travel,Bus Bookings",
        "category_array": {
          "Travel": [
            "Bus Bookings"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/yatra-bus-offer-busonyatra",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fyatra-bus-offer-busonyatra",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-06",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "821756",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "&#8377;1000 OFF on Domestic Flights Booking",
        "offer_value": "&#8377;1000",
        "title": "Avail Flat &#8377;1000 Discount",
        "description": "This discount is applicable on Domestic Flights Booking (On Min. Booking of &#8377;5000. On Payment via Yatra SBI Credit Cards only)",
        "code": "TRAVEL",
        "terms_and_conditions": "",
        "categories": "Travel,Domestic Flights",
        "category_array": {
          "Travel": [
            "Domestic Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/yatra-sbi-credit-card",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fyatra-sbi-credit-card",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2022-01-19",
        "end_date": "2023-04-01"
      },
      {
        "lmd_id": "826096",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Get Flat 15% discount on Bus Booking",
        "offer_value": "15%",
        "title": "Flat 15% discount",
        "description": "This promotional offer is valid on Bus Booking (On Payment via Slice Super Credit Cards only. Max. Once per user. Only on Monday, Tuesday, Thursday, Friday, Saturday, Sunday. Max. discount applicable is &#8377;250)",
        "code": "YTSLC",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;Thursday to Tuesday every week between&nbsp;December 2, 2021 - March 31, 2022.</li>\r\n<li>Offer valid on&nbsp;Slice super Credit Cards&nbsp;only.</li>\r\n<li>Use promo code :&nbsp;**to avail this offer.</li>\r\n<li>Valid once per user, per product, per card during the offer.</li>\r\n<li>This offer is valid only on online confirmed bookings.</li>\r\n<li>This offer is valid on selected domestic hotels only.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>This marketing program is open to holders of all slice super card's issued in India.</li>\r\n<li>The discount extended can be availed by the customers making a full purchase only through their Visa card on Yatra's website www.yatra.com (\"Website\").</li>\r\n<li>Customers have to submit the promo code \"&nbsp;***\" in the promo code field on Yatra.com's payment page and necessarily use Visa card for the transaction. The amount of discount received will reflect at the next step on the website (Yatra.com).</li>\r\n<li>Cardholders are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>Offer is only valid on the eligible BINs shared by bank. If the BIN series of the card does not match with the one provided by bank to Yatra, then the cardholder will need to approach respective Bank.Yatra shall be entitled to withhold or deny the offer to the customer.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>Discount will not be valid on cancelled tickets/bookings or for charge back transactions. Yatra Online Private Limited reserves the right to reverse the discount in case the ticket/booking is found to be cancelled later.</li>\r\n<li>This offer is not valid for travel agents. Yatra reserves the right to recover the discounted amount if such a case is brought or comes to Yatra notice.</li>\r\n<li>Offer is valid on online bookings of domestic and international flights.</li>\r\n<li>All tickets and bookings will be subject to availability at the time of booking and will be governed by the standard airline and hotel terms and conditions.</li>\r\n<li>All standard Terms and Conditions (as amended from time to time) mentioned on Yatra website would apply. In case of third party services/products, customer's sole recourse against the third party services/products being provided by third party suppliers shall be with the concerned suppliers only, and shall be subject to said supplier's own terms and conditions.</li>\r\n<li>This offer is not valid for split bookings where customer makes multiple bookings to avail multiple discounts. Yatra reserves the right to recover the discounted amount or cancel the booking if such a case is brought or comes to Yatra's notice.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>Pictures of products shown in the communication sent to the customer either through mailers or advertised on the website, are representative only and may not bear a resemblance to the actual products.</li>\r\n<li>Products offered under this program are subject to availability.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>Customers are not bound in any way to participate in the programs. Any such participation is voluntary and the same is being made purely on a 'best effort basis'.</li>\r\n<li>Yatra reserves the right to modify or change any of the terms and conditions applicable to these programs/offer at any time without any prior notice.</li>\r\n<li>Any disputes arising out of this offer shall be subject to the exclusive jurisdiction of competent courts at Gurgaon, Haryana, India only.</li>\r\n<li>This is limited period offer and both the partners can change the offer terms anytime.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,Bus Bookings",
        "category_array": {
          "Travel": [
            "Bus Bookings"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/slice-super-card-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fslice-super-card-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-29",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "821773",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Avail Flat 20% discount on Selected Domestic Hotels Booking",
        "offer_value": "20%",
        "title": "20% Off",
        "description": "Valid on Selected Domestic Hotels Booking (On Min. Booking of &#8377;6000. On Payment via oneCard only. Max. Once per user. Only on Monday, Tuesday, Thursday, Friday, Saturday, Sunday. Maximum discount of &#8377;5000)",
        "code": "ONECARD",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;October 7, 2021 - March&nbsp; 31, 2022.</li>\r\n<li>Offer valid on&nbsp;OneCard&nbsp;only.</li>\r\n<li>Use promo code :&nbsp;***to avail this offer.</li>\r\n<li>Valid once per user, per product, per card, per month during the offer.</li>\r\n<li>This offer is valid only on online confirmed bookings.</li>\r\n<li>This offer is valid on selected domestic hotels only.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>This marketing program (\"Programs\") from Yatra and OneCard is open to the selected set of OneCard(\"Customer(s)\"/\"Cardholder(s)\").</li>\r\n<li>To be eligible for the offer, the cardholder is required to use his/her OneCard for making the required booking through any of the booking mode as mentioned in the communication. For clarity purpose please note &lsquo;website bookings&rsquo; are booking which are made through the official website of Yatra i.e.&nbsp;<a href=\"http://www.yatra.com/\">www.yatra.com</a>&nbsp;or through Mobile Website i.e. m.yatra.com. Mobile App booking refers to transactions that are undertaken on the Yatra website which has been downloaded as an application to the cardholder&rsquo;s registered mobile number.&nbsp;</li>\r\n<li>Cardholders are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>The discount extended can be availed by the customers making a full purchase only through their OneCard on Yatra's website&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>&nbsp;(\"Website\").</li>\r\n<li>Customers have to submit the promo code \"***\" in the promo code field on Yatra.com's payment page and necessarily use OneCard for the transaction. The amount of discount received will reflect at the next step on the website (Yatra.com).</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>Discount will not be valid on cancelled tickets/bookings or for charge back transactions. Yatra reserves the right to reverse the discount in case the ticket/booking is found to be cancelled later.</li>\r\n<li>This offer is not valid for travel agents. Yatra reserves the right to recover the discounted amount if such a case is brought or comes to Yatra notice.</li>\r\n<li>This offer is valid only on online bookings made on Yatra's website (<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>) and the customer is required to mention the promo code for all bookings on the website.</li>\r\n<li>All tickets will be subject to availability at the time of booking and will be governed by the standard airline terms and conditions.</li>\r\n<li>All standard Terms and Conditions (as amended from time to time) mentioned on Yatra website would apply. In case of third party services/products, customer's sole recourse against the third party services/products being provided by third party suppliers shall be with the concerned suppliers only, and shall be subject to said supplier's own terms and conditions.</li>\r\n<li>This offer is not valid for split bookings where customer makes multiple bookings to avail multiple discounts. Yatra reserves the right to recover the discounted amount or cancel the booking if such a case is brought or comes to Yatra's notice.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>Products offered under this program are subject to availability.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>Customers are not bound in any way to participate in the programs. Any such participation is voluntary and the same is being made purely on a 'best effort basis'.</li>\r\n<li>Yatra reserves the right to modify or change any of the terms and conditions applicable to these programs/offer at any time without any prior notice.</li>\r\n<li>Any disputes arising out of this offer shall be subject to the exclusive jurisdiction of competent courts at Gurgaon, Haryana, India only.</li>\r\n<li>This is a limited period offer and both the partners can change the offer terms anytime.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,Hotels",
        "category_array": {
          "Travel": [
            "Hotels"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/visa-one-card-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fvisa-one-card-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-20",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "814416",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Get Up to &#8377;500 OFF on Bus Booking",
        "offer_value": "&#8377;500",
        "title": "Up to &#8377;500 OFF",
        "description": "This offer is applicable on Bus Booking (Only UPI transaction. Extra &#8377;250 Cashback in Yatra Wallet)",
        "code": "UPIBUS",
        "terms_and_conditions": "<ul>\r\n<li>App related bookings are valid on Android &amp; iOS devices only.</li>\r\n<li>This offer cannot be clubbed with any other offer extended by Yatra as part of any other arrangement.</li>\r\n<li>The offer is not applicable where hotel stay has been split into multiple bookings to avail the offer multiple times. Yatra.com reserves the right to cancel such bookings.</li>\r\n<li>In case of a cancellation/refund, the offer amount will be deducted from the total refund due.</li>\r\n<li>Yatra Online Pvt. Ltd. (\"Yatra\") reserves the right to add, alter, modify all or any of these terms and conditions, or replace wholly or in part, this offer by any other offer, whether similar to this offer or not, or to withdraw it altogether, without prior notice.</li>\r\n<li>Yatra shall not guarantee or be held responsible or liable for any product or service offered by the hotels which is not within the control of Yatra.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>Decision of Yatra in all matters connected with or incidental to this offer shall be final and binding.</li>\r\n<li>Any disputes arising out of this offer shall be subject to the exclusive jurisdiction of competent courts in Gurgaon, Haryana.</li>\r\n<li>All other standard terms and conditions available at Yatra.com shall apply.</li>\r\n</ul>",
        "categories": "Travel,Bus Bookings",
        "category_array": {
          "Travel": [
            "Bus Bookings"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/bus-sale-upi",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fbus-sale-upi",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2022-01-06",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "669159",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Weekend Getaways Holiday Packages @ just &#8377;5999",
        "offer_value": "Great Value",
        "title": "Weekend Getaways Holiday Packages",
        "description": "Get it just at &#8377;5999",
        "code": "",
        "terms_and_conditions": "<p><span>Yatra weekend getaways are meant to rejuvenate you and renew your taste in travel with clearer skies, long drives, beautiful landscapes, scenic views and what not. Choose from the variety of weekend getaways for a quick dash to your favourite destinations. Chill and relax with family or friends and leave the rest on us. These weekend getaway packages come with exciting offers and sanitized stay options. Have a great weekend!</span></p>",
        "categories": "Travel,Holidays",
        "category_array": {
          "Travel": [
            "Holidays"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2F",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-04-09",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "720122",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Kerala Holiday Packages Booking starting at just &#8377;13199",
        "offer_value": "Hot Offer",
        "title": "Kerala Holiday Packages Booking",
        "description": "Starts from &#8377;13199",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Travel,Holidays",
        "category_array": {
          "Travel": [
            "Holidays"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/india-tour-packages/holidays-in-kerala",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Findia-tour-packages%2Fholidays-in-kerala",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-07-13",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "821772",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "20% + No Cost EMI on 3 months tenure on Domestic Hotels Booking",
        "offer_value": "20%",
        "title": "20% + No Cost EMI on 3 months tenure",
        "description": "Applicable on Domestic Hotels Booking (For ZestMoney wallet users only. Only on Monday, Tuesday, Thursday, Friday, Saturday, Sunday. Max. discount of &#8377;5000 will be applicable)",
        "code": "YTZEST",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;Thursday to Tuesday every week between October 7, 2021 -&nbsp;March 31, 2022.</li>\r\n<li>Use promo code : ***to avail this offer.</li>\r\n<li>Flat 13% OFF&nbsp;(max.&nbsp;&#8377;4,000)&nbsp;+ No Cost EMI on 3 months tenure on domestic flights is valid till January 2, 2022.</li>\r\n<li>Book flights, hotels, Holidays and Bus on Yatra and pay with ZestMoney.</li>\r\n<li>Offer is valid on Desktop/Mobile site and App (android and iOS).</li>\r\n<li>To avail the offer, customers must opt for &ldquo;ZestMoney&rdquo; payment method on payment page and complete the payment.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>ZestMoney EMI Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>The offer is valid only for transactions made through the ZestMoney EMI payment option at Yatra checkout.</li>\r\n<li>The offer will be valid for the period of&nbsp;October 7, 2021 -&nbsp;March 31, 2022.</li>\r\n<li>The offer will be valid only on Yatra App and Web.</li>\r\n<li>On mobile app, the offer is valid on Android and iOS-based devices only.</li>\r\n<li>The offer is applicable only on the three month tenure loans.</li>\r\n<li>The No Cost EMI offer is applicable on 3 months tenure only.</li>\r\n<li>This offer is valid only for existing ZestMoney customers. To sign up for ZestMoney or check your credit limit, go to www.zestmoney.in/yatra or give a missed call on 08047193665.</li>\r\n<li>The EMI will be collected from the customer on a monthly basis including interest, and the interest portion will then be refunded within 3 days.</li>\r\n<li>In case of either partial or full cancellation of the order concerned leading to refund, the refunded amount will be reduced from outstanding loan amount of the customer with ZestMoney. Any amount deducted before refund will continue to be under loan amount. In case Zero Cost EMI was applicable at time of order, it will continue to apply to the remaining outstanding amount.</li>\r\n<li>In case of any cashback related issues the customer should reach out at the following mentioned email and contact no: help@zestmoney.in, +919343422556.</li>\r\n<li>For further details on ZestMoney&rsquo;s terms and conditions, please visit https://www.zestmoney.in/terms-and-conditions/.</li>\r\n<li>All purchases made by the customer at www.yatra.com shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website www.yatra.com.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>To be eligible for the offer, user is required to use ZestMoney for making the required booking. For clarity purpose please note &lsquo;website bookings&rsquo; are booking which are made through the official website of Yatra.com i.e. www.yatra.com or through Mobile Website i.e. m.yatra.com.</li>\r\n<li>On Mobile app, the offer is valid on android and iOS based devices only.</li>\r\n<li>Users are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>This is an exclusive offer from&nbsp;ZestMoney for transactions on Yatra. Any other existing offers from&nbsp;ZestMoney will not be applicable on ZestMoney transactions on Yatra. The offer cannot be clubbed with any other offers running with Yatra.</li>\r\n<li>Offer is not available to travel agents.</li>\r\n<li>This offer is valid for resident of India only.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>In cases of refund, the amount shall be credited after the applicable deductions of cancellation, penal charges, discounts, awarded cashback voucher, if any.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement. The offer cannot be transferred or combined with any other&nbsp;ZestMoney (a) offer; (b) promotion code; (c) coupon; or (d) discount or any offers from your card issuing bank or financial instrument.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>Yatra reserves the right to add, alter, modify all or any of these terms and conditions, or replace wholly or in part, this offer by any other offer, whether similar to this offer or not, or to withdraw it altogether, without prior notice.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>All offers are subject to availability.</li>\r\n<li>ZestMoney reserves the right to employ reasonable technological and other methods to prevent abuse of the Offer terms. Further, you acknowledge that ZestMoney&rsquo;s decision to take certain actions, including limiting access to your offer, placing holds or imposing reserves, may be based on confidential criteria that is essential to our management of risk, the security of users&rsquo; accounts, comply with applicable laws and the otherwise protect the&nbsp;ZestMoney system. You agree that&nbsp;ZestMoney is under no obligation to disclose the details of its risk management or its security procedures to You.</li>\r\n<li>All the queries related to discount/cashback will be resolved in 10-15 working days, post the campaign end date.</li>\r\n<li>The decision of Yatra in all matters connected with or incidental to this offer shall be final and binding.</li>\r\n<li>All purchases made by the customer at www.yatra.com shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website www.yatra.com.</li>\r\n<li>All disputes arising out of or in connection with this offer shall be subject to the exclusive jurisdiction of the court in Gurgaon.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,Hotels",
        "category_array": {
          "Travel": [
            "Hotels"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/zestmoney-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fzestmoney-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-20",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "825576",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "10% Discount on International Flights Booking",
        "offer_value": "10%",
        "title": "Flat 10% off",
        "description": "Valid on International Flights Booking (On Min. Booking of &#8377;7500. On Payment via Rupay Credit Cards only. Max. Once per user. Only on Friday, Saturday. Maximum discount of &#8377;5000 can be availed)",
        "code": "YATRUPAY",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;November 13, 2021 - January 29, 2022&nbsp;(every Friday and Saturday).</li>\r\n<li>Offer valid on&nbsp;RuPay Credit Cards&nbsp;&nbsp;only.</li>\r\n<li>Use promo code&nbsp;***&nbsp;to avail this offer.</li>\r\n<li>This offer is valid once per card per product, per month during the offer period .</li>\r\n<li>Offer is valid only on confirmed online bookings.</li>\r\n<li>The hotel offer is valid on select domestic hotels only.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>This offer from Yatra and RuPay is open to all residents of India holding RuPay card. The discount can be availed by the customers making a full purchase only through their RuPay Card on Yatra's website www.yatra.com (\"Website\").</li>\r\n<li>Customers have to submit the promo code \"***\" in the promo code field and necessarily use RuPay Card for the transaction. The amount of discount received will reflect at the next step on the Yatra website.</li>\r\n<li>Offer is only valid on the eligible BINs shared by bank. If the BIN series of the card does not match with the one provided by bank to Yatra, then the cardholder will need to approach respective Bank.Yatra shall be entitled to withhold or deny the offer to the customer.</li>\r\n<li>Cardholders are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>This offer is not valid for travel agents. Yatra reserves the right to recover the discounted amount if such a case is brought or comes to Yatra notice.</li>\r\n<li>This offer is valid only on online bookings made on Yatra's website (<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>) and the customer is required to mention the promo code for all bookings on the website.</li>\r\n<li>All tickets will be subject to availability at the time of booking and will be governed by the standard airline terms and conditions.</li>\r\n<li>All standard Terms and Conditions (as amended from time to time) mentioned on Yatra website would apply. In case of third party services/products, customer's sole recourse against the third party services/products being provided by third party suppliers shall be with the concerned suppliers only, and shall be subject to said supplier's own terms and conditions.&nbsp;</li>\r\n<li>This offer is not valid for split bookings where customer makes multiple bookings to avail multiple discounts. Yatra reserves the right to recover the discounted amount or cancel the booking if such a case is brought or comes to Yatra's notice.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount&nbsp;and shall not provide additional discount&nbsp;to the customer.</li>\r\n<li>Discounts&nbsp;provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>Products offered under this program are subject to availability.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>Customers are not bound in any way to participate in the programs. Any such participation is voluntary and the same is being made purely on a 'best effort basis'.</li>\r\n<li>Yatra reserves the right to modify or change any of the terms and conditions applicable to these programs/offer at any time without any prior notice.</li>\r\n<li>Any disputes arising out of this offer shall be subject to the exclusive jurisdiction of competent courts at Gurgaon, Haryana, India only.</li>\r\n<li>This is a limited period offer and both the partners can change the offer terms anytime.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,International Flights",
        "category_array": {
          "Travel": [
            "International Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/rupay-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Frupay-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-28",
        "end_date": "2022-01-30"
      },
      {
        "lmd_id": "825573",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "15% OFF on Domestic Flights Booking",
        "offer_value": "15%",
        "title": "Avail 15% discount",
        "description": "This promotional offer is valid on Domestic Flights Booking (On Min. Booking of &#8377;3500. On Payment via Rupay Credit Cards only. Max. Once per user. Only on Friday, Saturday. Maximum &#8377;2000 discount is applicable)",
        "code": "YATRUPAY",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;<span><span><span>November 13, 2021 - January 29, 2022</span>&nbsp;(every Friday and Saturday</span>)</span><span>.</span></li>\r\n<li>Offer valid on&nbsp;<span>RuPay Credit Cards&nbsp;&nbsp;</span>only.</li>\r\n<li>Use promo code&nbsp;<span>***</span>&nbsp;to avail this offer.</li>\r\n<li>This offer is valid once per card per product, per month during the offer period .</li>\r\n<li>Offer is valid only on confirmed online bookings.</li>\r\n<li>The hotel offer is valid on select domestic hotels only.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>This offer from Yatra and RuPay is open to all residents of India holding RuPay card. The discount can be availed by the customers making a full purchase only through their RuPay Card on Yatra's website www.yatra.com (\"Website\").</li>\r\n<li><span>Customers have to submit the promo code \"</span><span>***</span><span>\" in the promo code field and necessarily use RuPay Card for the transaction. The amount of discount received will reflect at the next step on the Yatra website.</span></li>\r\n<li>Offer is only valid on the eligible BINs shared by bank. If the BIN series of the card does not match with the one provided by bank to Yatra, then the cardholder will need to approach respective Bank.Yatra shall be entitled to withhold or deny the offer to the customer.</li>\r\n<li>Cardholders are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>This offer is not valid for travel agents. Yatra reserves the right to recover the discounted amount if such a case is brought or comes to Yatra notice.</li>\r\n<li>This offer is valid only on online bookings made on Yatra's website (<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>) and the customer is required to mention the promo code for all bookings on the website.</li>\r\n<li>All tickets will be subject to availability at the time of booking and will be governed by the standard airline terms and conditions.</li>\r\n<li>All standard Terms and Conditions (as amended from time to time) mentioned on Yatra website would apply. In case of third party services/products, customer's sole recourse against the third party services/products being provided by third party suppliers shall be with the concerned suppliers only, and shall be subject to said supplier's own terms and conditions.&nbsp;</li>\r\n<li>This offer is not valid for split bookings where customer makes multiple bookings to avail multiple discounts. Yatra reserves the right to recover the discounted amount or cancel the booking if such a case is brought or comes to Yatra's notice.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount&nbsp;and shall not provide additional discount&nbsp;to the customer.</li>\r\n<li>Discounts&nbsp;provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>Products offered under this program are subject to availability.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>Customers are not bound in any way to participate in the programs. Any such participation is voluntary and the same is being made purely on a 'best effort basis'.</li>\r\n<li>Yatra reserves the right to modify or change any of the terms and conditions applicable to these programs/offer at any time without any prior notice.</li>\r\n<li>Any disputes arising out of this offer shall be subject to the exclusive jurisdiction of competent courts at Gurgaon, Haryana, India only.</li>\r\n<li>This is a limited period offer and both the partners can change the offer terms anytime.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,Domestic Flights",
        "category_array": {
          "Travel": [
            "Domestic Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/rupay-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Frupay-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-28",
        "end_date": "2022-01-30"
      },
      {
        "lmd_id": "821771",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "13% + No Cost EMI on 3 months tenure on International Flights Booking",
        "offer_value": "13%",
        "title": "13% + No Cost EMI on 3 months tenure",
        "description": "This discount is valid on International Flights Booking (On Min. Booking of &#8377;7000. Only on orders using ZestMoney wallet. Only on Monday, Tuesday, Thursday, Friday, Saturday, Sunday. Maximum &#8377;15000 discount will be applicable)",
        "code": "YTZEST",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;Thursday to Tuesday every week between October 7, 2021 -&nbsp;March 31, 2022.</li>\r\n<li>Use promo code : ***to avail this offer.</li>\r\n<li>Flat 13% OFF&nbsp;(max.&nbsp;&#8377;4,000)&nbsp;+ No Cost EMI on 3 months tenure on domestic flights is valid till January 2, 2022.</li>\r\n<li>Book flights, hotels, Holidays and Bus on Yatra and pay with ZestMoney.</li>\r\n<li>Offer is valid on Desktop/Mobile site and App (android and iOS).</li>\r\n<li>To avail the offer, customers must opt for &ldquo;ZestMoney&rdquo; payment method on payment page and complete the payment.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>ZestMoney EMI Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>The offer is valid only for transactions made through the ZestMoney EMI payment option at Yatra checkout.</li>\r\n<li>The offer will be valid for the period of&nbsp;October 7, 2021 -&nbsp;March 31, 2022.</li>\r\n<li>The offer will be valid only on Yatra App and Web.</li>\r\n<li>On mobile app, the offer is valid on Android and iOS-based devices only.</li>\r\n<li>The offer is applicable only on the three month tenure loans.</li>\r\n<li>The No Cost EMI offer is applicable on 3 months tenure only.</li>\r\n<li>This offer is valid only for existing ZestMoney customers. To sign up for ZestMoney or check your credit limit, go to www.zestmoney.in/yatra or give a missed call on 08047193665.</li>\r\n<li>The EMI will be collected from the customer on a monthly basis including interest, and the interest portion will then be refunded within 3 days.</li>\r\n<li>In case of either partial or full cancellation of the order concerned leading to refund, the refunded amount will be reduced from outstanding loan amount of the customer with ZestMoney. Any amount deducted before refund will continue to be under loan amount. In case Zero Cost EMI was applicable at time of order, it will continue to apply to the remaining outstanding amount.</li>\r\n<li>In case of any cashback related issues the customer should reach out at the following mentioned email and contact no: help@zestmoney.in, +919343422556.</li>\r\n<li>For further details on ZestMoney&rsquo;s terms and conditions, please visit https://www.zestmoney.in/terms-and-conditions/.</li>\r\n<li>All purchases made by the customer at www.yatra.com shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website www.yatra.com.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>To be eligible for the offer, user is required to use ZestMoney for making the required booking. For clarity purpose please note &lsquo;website bookings&rsquo; are booking which are made through the official website of Yatra.com i.e. www.yatra.com or through Mobile Website i.e. m.yatra.com.</li>\r\n<li>On Mobile app, the offer is valid on android and iOS based devices only.</li>\r\n<li>Users are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>This is an exclusive offer from&nbsp;ZestMoney for transactions on Yatra. Any other existing offers from&nbsp;ZestMoney will not be applicable on ZestMoney transactions on Yatra. The offer cannot be clubbed with any other offers running with Yatra.</li>\r\n<li>Offer is not available to travel agents.</li>\r\n<li>This offer is valid for resident of India only.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>In cases of refund, the amount shall be credited after the applicable deductions of cancellation, penal charges, discounts, awarded cashback voucher, if any.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement. The offer cannot be transferred or combined with any other&nbsp;ZestMoney (a) offer; (b) promotion code; (c) coupon; or (d) discount or any offers from your card issuing bank or financial instrument.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>Yatra reserves the right to add, alter, modify all or any of these terms and conditions, or replace wholly or in part, this offer by any other offer, whether similar to this offer or not, or to withdraw it altogether, without prior notice.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>All offers are subject to availability.</li>\r\n<li>ZestMoney reserves the right to employ reasonable technological and other methods to prevent abuse of the Offer terms. Further, you acknowledge that ZestMoney&rsquo;s decision to take certain actions, including limiting access to your offer, placing holds or imposing reserves, may be based on confidential criteria that is essential to our management of risk, the security of users&rsquo; accounts, comply with applicable laws and the otherwise protect the&nbsp;ZestMoney system. You agree that&nbsp;ZestMoney is under no obligation to disclose the details of its risk management or its security procedures to You.</li>\r\n<li>All the queries related to discount/cashback will be resolved in 10-15 working days, post the campaign end date.</li>\r\n<li>The decision of Yatra in all matters connected with or incidental to this offer shall be final and binding.</li>\r\n<li>All purchases made by the customer at www.yatra.com shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website www.yatra.com.</li>\r\n<li>All disputes arising out of or in connection with this offer shall be subject to the exclusive jurisdiction of the court in Gurgaon.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,International Flights",
        "category_array": {
          "Travel": [
            "International Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/zestmoney-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fzestmoney-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-20",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "825575",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Get 10% Discount on International Flights Booking",
        "offer_value": "10%",
        "title": "10% Off",
        "description": "This offer is applicable on International Flights Booking (On Min. Booking of &#8377;7500. On Payment via Yes Bank Credit Cards only. Only on Friday, Saturday. Max. discount of &#8377;10000 can be availed)",
        "code": "YTTRAVEL",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;January 1 - 29, 2022 (every Friday and Saturday).</li>\r\n<li>Offer valid on&nbsp;YES BANK Credit Cards&nbsp;&nbsp;only.</li>\r\n<li>Use promo code&nbsp;***to avail this offer.</li>\r\n<li>This offer is valid once per card per product, per month during the offer period .</li>\r\n<li>Offer is valid only on confirmed online bookings.</li>\r\n<li>The hotel offer is valid on select domestic hotels only.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>This offer from Yatra and&nbsp;YES BANK is open to all residents of India holding&nbsp;YES BANK card. The discount can be availed by the customers making a full purchase only through their&nbsp;YES BANK card on Yatra's website www.yatra.com (\"Website\").</li>\r\n<li>Customers have to fill the promo code \"&nbsp;***\" in the promo code field on Yatra.com's payment page. The amount of discount received will reflect at the next step on the website (Yatra.com).</li>\r\n<li>To be eligible for the offer, cardholder is required to use his/her YES BANK&nbsp;Card for making the required booking through any of the booking mode as mentioned in the communication. For clarity purpose please note &lsquo;website bookings&rsquo; are booking which are made through the official website of Yatra i.e.&nbsp;<a href=\"http://www.yatra.com/\">www.yatra.com</a>&nbsp;or through Mobile Website i.e. m.yatra.com. Mobile App booking refers to transactions that are undertaken on the Yatra website which has been downloaded as an application to the cardholder&rsquo;s registered mobile number. Offline transactions refer to transactions which are made at the Yatra toll free number or Yatra retail outlet.</li>\r\n<li>Cardholders are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>The Cardholder needs to enter the Promo Code at the time of booking to be eligible for the offer.</li>\r\n<li>On validation of the promo code, discount will be provided upfront on the total transaction amount upon using the promotion code on&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>.</li>\r\n<li>Mobile app offer is only valid on android &amp; ios.</li>\r\n<li>Offer is not available to travel agents.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>In case of refund, the discounted amount will be deducted from the total refund due.</li>\r\n<li><a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra</a>&nbsp;reserves the right to add, alter, modify all or any of these terms and conditions, or replace wholly or in part, this offer by any other offer, whether similar to this offer or not, or to withdraw it altogether, without prior notice.</li>\r\n<li>All tickets would be subject to availability at the time of booking and will be governed by the standard airline terms and conditions. Cancellation charges / date change penalties will be applicable as per the airline rules for all tickets purchased through this promotion.</li>\r\n<li>Yatra shall not guarantee or be held responsible or liable for any product or service offered by the Airlines which is not within the control of&nbsp;<a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra.com</a>.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>All Offers are subject to availability.</li>\r\n<li>Decision of&nbsp;<a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra</a>&nbsp;in all matters connected with or incidental to this offer shall be final and binding.</li>\r\n<li>All purchases made by the customer at&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>&nbsp;shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>.</li>\r\n<li>All disputes arising out of or in connection with this offer shall be subject to the exclusive jurisdiction of the court in Gurgaon.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,International Flights",
        "category_array": {
          "Travel": [
            "International Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/yes-bank-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fyes-bank-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-28",
        "end_date": "2022-01-30"
      },
      {
        "lmd_id": "815585",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Avail Up to 30% discount + Extra 15% Cash-back on Royal Orchid and Regenta Hotels",
        "offer_value": "30% + 15%",
        "title": "Avail Upto 30% Off + Additional 15% Cash back",
        "description": "This offer is valid on Royal Orchid and Regenta Hotels (Extra cashbak in Yatra Wallet)",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Travel,Hotels",
        "category_array": {
          "Travel": [
            "Hotels"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/royal-orchid-login-deal",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Froyal-orchid-login-deal",
        "image_url": "",
        "type": "Deal",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-08",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "722444",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Russia International Holiday Packages starting at just &#8377;59990",
        "offer_value": "Best Offer",
        "title": "Russia International Holiday Packages",
        "description": "Starts for just &#8377;59990",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Travel,Holidays",
        "category_array": {
          "Travel": [
            "Holidays"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/international-tour-packages/holidays-in-russia",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Finternational-tour-packages%2Fholidays-in-russia",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-07-17",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "722445",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Magical Maldives International Holiday starting at just &#8377;49990",
        "offer_value": "Hot Offer",
        "title": "Magical Maldives International Holiday",
        "description": "Starts at just &#8377;49990",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Travel,Holidays",
        "category_array": {
          "Travel": [
            "Holidays"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/international-tour-packages/holidays-in-maldives",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Finternational-tour-packages%2Fholidays-in-maldives",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-07-17",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "825506",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Up To &#8377;3700 discount on Domestic Flight Booking",
        "offer_value": "&#8377;3700",
        "title": "Up to &#8377;3700 OFF",
        "description": "Valid on Domestic Flight Booking (Max. Once per user. Not valid on EMI payment option and Travel Agents)",
        "code": "FREEFLY",
        "terms_and_conditions": "<ul>\r\n<li>This offer is valid only on confirmed domestic flight bookings through Yatra only.</li>\r\n<li>Each customer can use the code only&nbsp;<span>ONCE</span>&nbsp;during the offer period.</li>\r\n<li>This offer cannot be exchanged or clubbed with any other offer running on the website.</li>\r\n<li>The offer is not valid for Travel agents.</li>\r\n<li>In case of refund, the discounted amount will be deducted from the total refund due.</li>\r\n<li>Yatra reserves the right at any time without prior notice to add, alter, modify all or any of these terms and conditions or replace wholly or in part, this offer by any other offer, whether similar to this offer or not or to withdraw it altogether.</li>\r\n<li>The decision of Yatra in all matters in connection with or incidental to this offer would be final and binding.</li>\r\n<li>This offer cannot be exchanged for cash or any other value.</li>\r\n<li>All standard terms and conditions mentioned on Yatra.com website would apply.</li>\r\n<li>All disputes arising out of, or in connection with this offer shall be subject to exclusive jurisdiction of Court at Gurgaon.</li>\r\n</ul>",
        "categories": "Travel,Domestic Flights",
        "category_array": {
          "Travel": [
            "Domestic Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/flights-offer-freefly",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fflights-offer-freefly",
        "image_url": "",
        "type": "Code",
        "offer": "Price-Off",
        "status": "active",
        "start_date": "2022-01-27",
        "end_date": "2022-02-02"
      },
      {
        "lmd_id": "814414",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Up to 10% Off + Additional 15% eCash on Domestic Hotel Bookings",
        "offer_value": "10% + 15%",
        "title": "Upto 10% Discount + Additional 15% eCash",
        "description": "This discount is valid on Domestic Hotel Bookings (Maximum &#8377;1000 cashback will be applicable.00. Only UPI transaction. Discount will be on using ecash. Extra cashback will be credited in Yatra Wallet)",
        "code": "YTUPI22",
        "terms_and_conditions": "<ul>\r\n<li>pp related bookings are valid on Android &amp; iOS devices only.</li>\r\n<li>This offer cannot be clubbed with any other offer extended by Yatra as part of any other arrangement.</li>\r\n<li>The offer is not applicable where hotel stay has been split into multiple bookings to avail the offer multiple times. Yatra.com reserves the right to cancel such bookings.</li>\r\n<li>In case of a cancellation/refund, the offer amount will be deducted from the total refund due.</li>\r\n<li>Yatra Online Pvt. Ltd. (\"Yatra\") reserves the right to add, alter, modify all or any of these terms and conditions, or replace wholly or in part, this offer by any other offer, whether similar to this offer or not, or to withdraw it altogether, without prior notice.</li>\r\n<li>Yatra shall not guarantee or be held responsible or liable for any product or service offered by the hotels which is not within the control of Yatra.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>Decision of Yatra in all matters connected with or incidental to this offer shall be final and binding.</li>\r\n<li>Any disputes arising out of this offer shall be subject to the exclusive jurisdiction of competent courts in Gurgaon, Haryana.</li>\r\n<li>All other standard terms and conditions available at Yatra.com shall apply.</li>\r\n</ul>",
        "categories": "Travel,Hotels",
        "category_array": {
          "Travel": [
            "Hotels"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/hotel-sale-upi",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fhotel-sale-upi",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-06",
        "end_date": "2022-02-01"
      },
      {
        "lmd_id": "716675",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "North East India Holiday Packages starting at just &#8377;17999",
        "offer_value": "Great Value",
        "title": "North East India Holiday Packages",
        "description": "Starts @ &#8377;17999 (Per Person) only",
        "code": "",
        "terms_and_conditions": "",
        "categories": "Travel,Holidays",
        "category_array": {
          "Travel": [
            "Holidays"
          ]
        },
        "featured": "No",
        "url": "http://www.yatra.com/india-tour-packages/holidays-in-north-east-india",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=http%3A%2F%2Fwww.yatra.com%2Findia-tour-packages%2Fholidays-in-north-east-india",
        "image_url": "",
        "type": "Deal",
        "offer": "Offer",
        "status": "active",
        "start_date": "2021-07-06",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "825572",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "12% Discount on Domestic Flights Booking",
        "offer_value": "12%",
        "title": "Avail Flat 12% off",
        "description": "This discount is valid on Domestic Flights Booking (On Min. Booking of &#8377;2000. On Payment via Yes Bank Credit Cards only. Only on Friday, Saturday. Maximum discount of &#8377;1500 will be applicable)",
        "code": "YTTRAVEL",
        "terms_and_conditions": "<div>\r\n<div>\r\n<ul>\r\n<li>Offer validity :&nbsp;<span><span>January 1 - 29, 2022 (every Friday and Saturday</span>)</span><span>.</span></li>\r\n<li>Offer valid on&nbsp;<span>YES BANK Credit Cards&nbsp;&nbsp;</span>only.</li>\r\n<li><span>Use promo code&nbsp;</span><span>***</span><span>to avail this offer.</span></li>\r\n<li>This offer is valid once per card per product, per month during the offer period .</li>\r\n<li>Offer is valid only on confirmed online bookings.</li>\r\n<li>The hotel offer is valid on select domestic hotels only.</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<div>\r\n<h3>Terms and Conditions</h3>\r\n<div>\r\n<ul>\r\n<li>This offer from Yatra and&nbsp;YES BANK is open to all residents of India holding&nbsp;YES BANK card. The discount can be availed by the customers making a full purchase only through their&nbsp;YES BANK card on Yatra's website www.yatra.com (\"Website\").</li>\r\n<li>Customers have to fill the promo code \"&nbsp;<span>***</span>\" in the promo code field on Yatra.com's payment page. The amount of discount received will reflect at the next step on the website (Yatra.com).</li>\r\n<li>To be eligible for the offer, cardholder is required to use his/her YES BANK&nbsp;Card for making the required booking through any of the booking mode as mentioned in the communication. For clarity purpose please note &lsquo;website bookings&rsquo; are booking which are made through the official website of Yatra i.e.&nbsp;<a href=\"http://www.yatra.com/\">www.yatra.com</a>&nbsp;or through Mobile Website i.e. m.yatra.com. Mobile App booking refers to transactions that are undertaken on the Yatra website which has been downloaded as an application to the cardholder&rsquo;s registered mobile number. Offline transactions refer to transactions which are made at the Yatra toll free number or Yatra retail outlet.</li>\r\n<li>Cardholders are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>The Cardholder needs to enter the Promo Code at the time of booking to be eligible for the offer.</li>\r\n<li>On validation of the promo code, discount will be provided upfront on the total transaction amount upon using the promotion code on&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>.</li>\r\n<li>Mobile app offer is only valid on android &amp; ios.</li>\r\n<li>Offer is not available to travel agents.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>In case of refund, the discounted amount will be deducted from the total refund due.</li>\r\n<li><a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra</a>&nbsp;reserves the right to add, alter, modify all or any of these terms and conditions, or replace wholly or in part, this offer by any other offer, whether similar to this offer or not, or to withdraw it altogether, without prior notice.</li>\r\n<li>All tickets would be subject to availability at the time of booking and will be governed by the standard airline terms and conditions. Cancellation charges / date change penalties will be applicable as per the airline rules for all tickets purchased through this promotion.</li>\r\n<li>Yatra shall not guarantee or be held responsible or liable for any product or service offered by the Airlines which is not within the control of&nbsp;<a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra.com</a>.</li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>All Offers are subject to availability.</li>\r\n<li>Decision of&nbsp;<a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra</a>&nbsp;in all matters connected with or incidental to this offer shall be final and binding.</li>\r\n<li>All purchases made by the customer at&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>&nbsp;shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>.</li>\r\n<li>All disputes arising out of or in connection with this offer shall be subject to the exclusive jurisdiction of the court in Gurgaon.</li>\r\n</ul>\r\n</div>\r\n</div>",
        "categories": "Travel,Domestic Flights",
        "category_array": {
          "Travel": [
            "Domestic Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/yes-bank-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fyes-bank-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-28",
        "end_date": "2022-01-30"
      },
      {
        "lmd_id": "816793",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Flat 15% off on Domestic Flights",
        "offer_value": "15%",
        "title": "15% off",
        "description": "This offer is applicable on Domestic Flights (On Payment via KreditBee RBL Credit/Debit Cards only. Max. Once per user. Max. &#8377;1500 discount will be offered)",
        "code": "YATKRBEE",
        "terms_and_conditions": "<ul>\r\n<li>This marketing programme (\"Programs\") from Yatra and KreditBee RBL Card is open to selected set of KreditBee card customers.</li>\r\n<li>To be eligible for the offer, cardholder is required to use his/her KreditBee RBL Card for making the required booking through any of the booking mode as mentioned in the communication. For clarity purpose please note &lsquo;website bookings&rsquo; are booking which are made through the official website of Yatra i.e.&nbsp;<a href=\"http://www.yatra.com/\">www.yatra.com</a>&nbsp;or through Mobile Website i.e. m.yatra.com. Mobile App booking refers to transactions that are undertaken on the Yatra website which has been downloaded as an application to the cardholder&rsquo;s registered mobile number. Offline transactions refer to transactions which are made at the Yatra toll free number or Yatra retail outlet.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>Cardholders are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>The Cardholder needs to enter the Promo Code at the time of booking to be eligible for the offer.</li>\r\n<li>On validation of the promo code, discount will be provided upfront on the total transaction amount upon using the promotion code on&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>.</li>\r\n<li>Offer is valid on online bookings of Domestic Flights, Domestic Hotels and Bus only.</li>\r\n<li>Mobile app offer is only valid on android &amp; ios.</li>\r\n<li>Offer is not available to travel agents.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>Offer is only valid on the eligible BINs shared by bank. If the BIN series of the card does not match with the one provided by bank to Yatra, then the cardholder will need to approach respective Bank.Yatra shall be entitled to withhold or deny the offer to the customer.</li>\r\n<li>In case of refund, the discounted amount will be deducted from the total refund due.</li>\r\n<li><a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra</a>&nbsp;reserves the right to add, alter, modify all or any of these terms and conditions, or replace wholly or in part, this offer by any other offer, whether similar to this offer or not, or to withdraw it altogether, without prior notice.</li>\r\n<li>All tickets would be subject to availability at the time of booking and will be governed by the standard airline terms and conditions. Cancellation charges / date change penalties will be applicable as per the airline rules for all tickets purchased through this promotion.</li>\r\n<li>Yatra shall not guarantee or be held responsible or liable for any product or service offered by the Airlines which is not within the control of&nbsp;<a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra.</a></li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>All Offers are subject to availability.</li>\r\n<li>Decision of&nbsp;<a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra</a>&nbsp;in all matters connected with or incidental to this offer shall be final and binding.</li>\r\n<li>All purchases made by the customer at&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>&nbsp;shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>.</li>\r\n<li>All disputes arising out of or in connection with this offer shall be subject to the exclusive jurisdiction of the court in Gurgaon.</li>\r\n</ul>",
        "categories": "Travel,Domestic Flights",
        "category_array": {
          "Travel": [
            "Domestic Flights"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/kreditbee-card-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fkreditbee-card-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-11",
        "end_date": "2022-04-01"
      },
      {
        "lmd_id": "817279",
        "store": "yatra.com",
        "merchant_homepage": "https://www.yatra.com/",
        "offer_text": "Get 15% Discount on Bus Bookings",
        "offer_value": "15%",
        "title": "Flat 15% Off",
        "description": "This discount is valid on Bus Bookings (On Payment via KreditBee RBL Credit/Debit Cards only. Max. Once per user. Max. &#8377;500 discount will be applied)",
        "code": "YATKRBEE",
        "terms_and_conditions": "<ul>\r\n<li>This marketing programme (\"Programs\") from Yatra and KreditBee RBL Card is open to selected set of KreditBee card customers.</li>\r\n<li>To be eligible for the offer, cardholder is required to use his/her KreditBee RBL Card for making the required booking through any of the booking mode as mentioned in the communication. For clarity purpose please note &lsquo;website bookings&rsquo; are booking which are made through the official website of Yatra i.e.&nbsp;<a href=\"http://www.yatra.com/\">www.yatra.com</a>&nbsp;or through Mobile Website i.e. m.yatra.com. Mobile App booking refers to transactions that are undertaken on the Yatra website which has been downloaded as an application to the cardholder&rsquo;s registered mobile number. Offline transactions refer to transactions which are made at the Yatra toll free number or Yatra retail outlet.</li>\r\n<li>In case of full/partial cancellation Yatra's offer stand void and customer will not be eligible for the discount. Yatra will refund the amount after adjusting the discount and any other applicable charges and penalties.</li>\r\n<li>Cardholders are required to visit the merchant specific terms and conditions that may be applicable on bookings made through each of the modes and get acquainted and agree with the same.</li>\r\n<li>The Cardholder needs to enter the Promo Code at the time of booking to be eligible for the offer.</li>\r\n<li>On validation of the promo code, discount will be provided upfront on the total transaction amount upon using the promotion code on&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>.</li>\r\n<li>Offer is valid on online bookings of Domestic Flights, Domestic Hotels and Bus only.</li>\r\n<li>Mobile app offer is only valid on android &amp; ios.</li>\r\n<li>Offer is not available to travel agents.</li>\r\n<li>Discounts provided under the offer cannot be clubbed with any other offer or discount extended by Yatra as part of any other arrangement.</li>\r\n<li>All government levies like sales tax, TDS, any local tax, octroi etc., shall be payable by the customer as applicable at the time the respective discounts were offered.</li>\r\n<li>Offer is only valid on the eligible BINs shared by bank. If the BIN series of the card does not match with the one provided by bank to Yatra, then the cardholder will need to approach respective Bank.Yatra shall be entitled to withhold or deny the offer to the customer.</li>\r\n<li>In case of refund, the discounted amount will be deducted from the total refund due.</li>\r\n<li><a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra</a>&nbsp;reserves the right to add, alter, modify all or any of these terms and conditions, or replace wholly or in part, this offer by any other offer, whether similar to this offer or not, or to withdraw it altogether, without prior notice.</li>\r\n<li>All tickets would be subject to availability at the time of booking and will be governed by the standard airline terms and conditions. Cancellation charges / date change penalties will be applicable as per the airline rules for all tickets purchased through this promotion.</li>\r\n<li>Yatra shall not guarantee or be held responsible or liable for any product or service offered by the Airlines which is not within the control of&nbsp;<a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra.</a></li>\r\n<li>All purchases made under the program shall be subject to applicable cancellation/date change rules. In case of a cancellation, Yatra shall reverse the discount and shall not provide additional discount to the customer.</li>\r\n<li>All Offers are subject to availability.</li>\r\n<li>Decision of&nbsp;<a href=\"http://yatra.com/\" target=\"_blank\" rel=\"noopener\">Yatra</a>&nbsp;in all matters connected with or incidental to this offer shall be final and binding.</li>\r\n<li>All purchases made by the customer at&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>&nbsp;shall be governed by the standard Terms and Conditions (subject to changes) of Yatra, which includes without limitation User Agreement, Privacy Policy or any other product/service related terms and conditions appearing on Yatra&rsquo;s website&nbsp;<a href=\"http://www.yatra.com/\" target=\"_blank\" rel=\"noopener\">www.yatra.com</a>.</li>\r\n<li>All disputes arising out of or in connection with this offer shall be subject to the exclusive jurisdiction of the court in Gurgaon.</li>\r\n</ul>",
        "categories": "Travel,Bus Bookings",
        "category_array": {
          "Travel": [
            "Bus Bookings"
          ]
        },
        "featured": "No",
        "url": "https://www.yatra.com/offer/details/kreditbee-card-offers",
        "smartLink": "http://linkmydeals.com/smartlink/?account_id=11670&network=&url=https%3A%2F%2Fwww.yatra.com%2Foffer%2Fdetails%2Fkreditbee-card-offers",
        "image_url": "",
        "type": "Code",
        "offer": "Percentage-Off",
        "status": "active",
        "start_date": "2022-01-11",
        "end_date": "2022-04-01"
      }
    ]
  };

  getOffers() {
    const offersRef = collection(this.firestore, 'offers');
    return collectionData(offersRef, { idField: 'id' }) as Observable<any[]>;
  }

  getLastUpdatedOn() {
    const docRef = doc(this.firestore, 'offers/offers_last_updated_on');
    return docData(docRef, { idField: 'id' });
  }

  deleteOffers(id: string) {
    const docRef = doc(this.firestore, `offers/${id}`);
    return deleteDoc(docRef);
  }

  insertOffers(callTo: string) {
    if (callTo === 'LMD') {
      // this.http.get('http://feed.linkmydeals.com/getOffers/?API_KEY=157c964d1bd1b7bae4145ff7bec29ddc&format=json').subscribe((offers) => {
        const docRef = collection(this.firestore, 'offers');
        addDoc(docRef, this.data);
      // });
    }
  }

  updateTimestamp() {
    const docRef = doc(this.firestore, 'offers/offers_last_updated_on');
    return updateDoc(docRef, { last_updated_on: new Date() });
  }
}
