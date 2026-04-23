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
  imageMain: "/images/landing-page/best1.jpeg",
  imageHover: "/images/landing-page/best2.jpeg",
},
{
  id: 'prod_1',
  name: 'Cream Bordir Dress',
  series: 'Code DRLFY 6080',
  imageMain: "/images/landing-page/best3.jpeg",
  imageHover: "/images/landing-page/best4.jpeg"
},
{
  id: 'prod_2',
  name: 'Seemivest Bordir Flow Dress',
  series: 'Code DRYN 6357',
  imageMain: "/images/landing-page/best5.jpeg",
  imageHover: "/images/landing-page/best6.jpeg"
},
{
  id: 'prod_3',
  name: '3 Pocky Top',
  series: 'Code TNVX 8307',
  imageMain: "/images/landing-page/best7.jpeg",
  imageHover: "/images/landing-page/best8.jpeg"
}];


export const ourPicks: Product[] = [
{
  id: 'prod_4',
  name: 'Flowcolour Cream Blouse',
  series: 'Code TPSHRL 9157',
  price: 'IDR 128.000',
  imageMain: "/images/landing-page/pick1.jpeg",
  imageHover: "/images/landing-page/pick2.jpeg"
},
{
  id: 'prod_5',
  name: 'Flow Pearlbelt Dress',
  series: 'Code DRJSW 00018',
  price: 'IDR 240.000',
  imageMain: "/images/landing-page/pick3.jpeg",
  imageHover: "/images/landing-page/pick4.jpeg"
},
{
  id: 'prod_6',
  name: 'Twocolors Bordir Tunic',
  series: 'Code DRYRI 9300',
  price: 'IDR 195.000',
  imageMain: "/images/landing-page/pick5.jpeg",
  imageHover: "/images/landing-page/pick6.jpeg"
},
{
  id: 'prod_7',
  name: 'Flow Pattern Dress',
  series: 'Code DRGNT 00137',
  price: 'IDR 185.000',
  imageMain: "/images/landing-page/pick7.jpeg",
  imageHover: "/images/landing-page/pick8.jpeg"
},
{
  id: 'prod_8',
  name: 'Nudes Vinesbordir Tunic',
  series: 'Code TPBAP 3178',
  price: 'IDR 146.000',
  imageMain: "/images/landing-page/pick9.jpeg",
  imageHover: "/images/landing-page/pick10.jpeg",
  isSoldOut: true
},
{
  id: 'prod_9',
  name: 'Flowlace Shirt',
  series: 'Code TPMGR 00020',
  price: 'IDR 149.000',
  imageMain: "/images/landing-page/pick11.jpeg",
  imageHover: "/images/landing-page/pick12.jpeg"
},
{
  id: 'prod_10',
  name: 'Brukat Skirt',
  series: 'Code TVAVM 5069',
  price: 'IDR 139.000',
  imageMain: "/images/landing-page/pick13.jpeg",
  imageHover: "/images/landing-page/pick14.jpeg"
},
{
  id: 'prod_11',
  name: 'Semiouter Flowdress',
  series: 'Code DRYR 2979',
  price: 'IDR 215.000',
  imageMain: "/images/landing-page/pick15.jpeg",
  imageHover: "/images/landing-page/pick16.jpeg"
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
  mapUrl: 'https://maps.app.goo.gl/Kdh5TsvyMxtefDEB6'
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