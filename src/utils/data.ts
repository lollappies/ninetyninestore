import best1 from "../assets/images/landing-page/best 1.jpeg";
import best2 from "../assets/images/landing-page/best 2.jpeg";
import best3 from "../assets/images/landing-page/best 3.jpeg";
import best4 from "../assets/images/landing-page/best 4.jpeg";
import best5 from "../assets/images/landing-page/best 5.jpeg";
import best6 from "../assets/images/landing-page/best 6.jpeg";
import best7 from "../assets/images/landing-page/best 7.jpeg";
import best8 from "../assets/images/landing-page/best 8.jpeg";

import pick1 from "../assets/images/landing-page/pick 1.jpeg";
import pick2 from "../assets/images/landing-page/pick 2.jpeg";
import pick3 from "../assets/images/landing-page/pick 3.jpeg";
import pick4 from "../assets/images/landing-page/pick 4.jpeg";
import pick5 from "../assets/images/landing-page/pick 5.jpeg";
import pick6 from "../assets/images/landing-page/pick 6.jpeg";
import pick7 from "../assets/images/landing-page/pick 7.jpeg";
import pick8 from "../assets/images/landing-page/pick 8.jpeg";
import pick9 from "../assets/images/landing-page/pick 9.jpeg";
import pick10 from "../assets/images/landing-page/pick 10.jpeg";
import pick11 from "../assets/images/landing-page/pick 11.jpeg";
import pick12 from "../assets/images/landing-page/pick 12.jpeg";
import pick13 from "../assets/images/landing-page/pick 13.jpeg";
import pick14 from "../assets/images/landing-page/pick 14.jpeg";
import pick15 from "../assets/images/landing-page/pick 15.jpeg";
import pick16 from "../assets/images/landing-page/pick 16.jpeg";
import pick17 from "../assets/images/landing-page/pick 17.jpeg";
import pick18 from "../assets/images/landing-page/pick 18.jpeg";

export interface Product {
  id: string;
  name: string;
  series: string;
  price?: string;
  imageMain: string;
  imageHover: string;
  isSoldOut?: boolean;
}

export const bestsellers: Product[] = [
{
  id: 'prod_0',
  name: 'Siderope Flowbordir',
  series: 'Code SESTRA 5050 Oneseat',
  imageMain: best 1,
  imageHover: best 2,
},
{
  id: 'prod_1',
  name: 'Cream Bordir Dress',
  series: 'Code DRLFY 6080',
  imageMain: best 3,
  imageHover: best 4,
},
{
  id: 'prod_2',
  name: 'Seemivest Bordir Flow Dress',
  series: 'Code DRYN 6357',
  imageMain: best 5,
  imageHover: best 6,
},
{
  id: 'prod_3',
  name: '3 Pocky Top',
  series: 'Code TNVX 8307',
  imageMain: best 7,
  imageHover: best 8,
}];


export const ourPicks: Product[] = [
{
  id: 'prod_4',
  name: 'Flowcolour Cream Blouse',
  series: 'Code TPSHRL 9157',
  price: 'IDR 128.000',
  imageMain: pick 1,
  imageHover: pick 2,
},
{
  id: 'prod_5',
  name: 'Flow Pearlbelt Dress',
  series: 'Code DRJSW 00018',
  price: 'IDR 240.000',
  imageMain: pick 3,
  imageHover: pick 4,
},
{
  id: 'prod_6',
  name: 'Twocolors Bordir Tunic',
  series: 'Code DRYRI 9300',
  price: 'IDR 195.000',
  imageMain: pick 5,
  imageHover: pick 6,
},
{
  id: 'prod_7',
  name: 'Flow Pattern Dress',
  series: 'Code DRGNT 00137',
  price: 'IDR 185.000',
  imageMain: pick 7,
  imageHover: pick 8,
},
{
  id: 'prod_8',
  name: 'Nudes Vinesbordir Tunic',
  series: 'Code TPBAP 3178',
  price: 'IDR 146.000',
  imageMain: pick 9,
  imageHover: pick 10,
  isSoldOut: true
},
{
  id: 'prod_9',
  name: 'Flowlace Shirt',
  series: 'Code TPMGR 00020',
  price: 'IDR 149.000',
  imageMain: pick 11,
  imageHover: pick 12
},
  'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80'
},
{
  id: 'prod_10',
  name: 'Brukat Skirt',
  series: 'Code TVAVM 5069',
  price: 'IDR 139.000',
  imageMain: pick 13,
  imageHover: pick 14,
},
{
  id: 'prod_11',
  name: 'Semiouter Flowdress',
  series: 'Code DRYR 2979',
  price: 'IDR 215.000',
  imageMain: pick 15,
  imageHover: pick 16,
}];


export const allProducts = [...bestsellers, ...ourPicks];

import madiun from "../assets/images/store/madiun.jpeg";
import ponorogo from "../assets/images/store/ponorogo.jpeg";
import jombang from "../assets/images/store/jombang.jpeg";
import kediri from "../assets/images/store/kediri.jpeg";
import nganjuk from "../assets/images/store/nganjuk.jpeg";
import blitar from "../assets/images/store/blitar.jpeg";
import tulungagung from "../assets/images/store/tulungagung.jpeg";
import sidoarjo from "../assets/images/store/sidoarjo.jpeg";

export const stores = [
{
  city: 'Madiun',
  address: 'Jl. Cokroaminoto No.35',
  image: madiun,
  mapUrl: 'https://share.google/icXN4Kfm29ZtQmfe6'
},
{
  city: 'Ponorogo',
  address: 'Jl. HOS Cokroaminoto No.70',
  image: ponorogo,
  mapUrl: 'https://maps.app.goo.gl/cesmipxdXQbeGe448'
},
{
  city: 'Jombang',
  address: 'Jl. Gus Dur No.114',
  image: jombang,
  mapUrl: 'https://maps.app.goo.gl/koiHEDZ9woaLkwkB8'
},
{
  city: 'Kediri',
  address: 'Jl. Suprapto No.17',
  image: kediri,
  mapUrl: 'https://maps.app.goo.gl/L4HYbmqDQy3TpDNP7'
},
{
  city: 'Nganjuk',
  address: 'Jl. Yos Sudarso No.25',
  image: nganjuk,
  mapUrl: 'https://maps.app.goo.gl/aFenaRQ9SWj9DpiA8'
},
{
  city: 'Blitar',
  address: 'Jl. Veteran No.119',
  image: blitar,
  mapUrl: 'https://maps.app.goo.gl/mZ1jqhJDTRjxUPtS7'
},
{
  city: 'Tulungagung',
  address: 'Jl. Pangeran Diponegoro',
  image: tulungagung,
  mapUrl: 'https://maps.app.goo.gl/VRngzXrB97GWi8Zy6'
},
{
  city: 'Sidoarjo',
  address: 'Jl. Gatot Subroto',
  image: sidoarjo,
  mapUrl: 'https://maps.app.goo.gl/tDFkYco1R1EPB79r8'
}];