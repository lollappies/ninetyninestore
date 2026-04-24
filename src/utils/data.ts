// ===== CATEGORY TYPE =====
export type Category =
  | 'dress'
  | 'blouse'
  | 'tunic'
  | 'outer'
  | 'sweater'
  | 'pants'
  | 'skirt';

  // ===== PRODUCT TYPE =====
export interface Product {
  id: string;
  name: string;
  series: string;
  price?: string;
  imageMain: string;
  imageHover: string;
  category: Category;
  isSoldOut?: boolean;
}

// ===== BESTSELLERS =====
export const bestsellers: Product[] = [
{
  id: 'prod_0',
  name: 'Siderope Flowbordir',
  series: 'Code SESTRA 5050 Oneseat',
  imageMain: "/images/landing-page/best1.jpeg",
  imageHover: "/images/landing-page/best2.jpeg",
  category: 'outer'
},
{
  id: 'prod_1',
  name: 'Cream Bordir Dress',
  series: 'Code DRLFY 6080',
  imageMain: "/images/landing-page/best3.jpeg",
  imageHover: "/images/landing-page/best4.jpeg",
  category: 'dress'
},
{
  id: 'prod_2',
  name: 'Seemivest Bordir Flow Dress',
  series: 'Code DRYN 6357',
  imageMain: "/images/landing-page/best5.jpeg",
  imageHover: "/images/landing-page/best6.jpeg",
  category: 'dress'
},
{
  id: 'prod_3',
  name: '3 Pocky Top',
  series: 'Code TNVX 8307',
  imageMain: "/images/landing-page/best7.jpeg",
  imageHover: "/images/landing-page/best8.jpeg",
  category: 'outer'
}];

// ===== OUR PICKS =====
export const ourPicks: Product[] = [
{
  id: 'prod_4',
  name: 'Flowcolour Cream Blouse',
  series: 'Code TPSHRL 9157',
  price: 'IDR 128.000',
  imageMain: "/images/landing-page/pick1.jpeg",
  imageHover: "/images/landing-page/pick2.jpeg",
  category: 'blouse'
},
{
  id: 'prod_5',
  name: 'Flow Pearlbelt Dress',
  series: 'Code DRJSW 00018',
  price: 'IDR 240.000',
  imageMain: "/images/landing-page/pick3.jpeg",
  imageHover: "/images/landing-page/pick4.jpeg",
  category: 'dress'
},
{
  id: 'prod_6',
  name: 'Twocolors Bordir Tunic',
  series: 'Code DRYRI 9300',
  price: 'IDR 195.000',
  imageMain: "/images/landing-page/pick5.jpeg",
  imageHover: "/images/landing-page/pick6.jpeg",
  category: 'tunic'
},
{
  id: 'prod_7',
  name: 'Flow Pattern Dress',
  series: 'Code DRGNT 00137',
  price: 'IDR 185.000',
  imageMain: "/images/landing-page/pick7.jpeg",
  imageHover: "/images/landing-page/pick8.jpeg",
  category: 'dress'
},
{
  id: 'prod_8',
  name: 'Nudes Vinesbordir Tunic',
  series: 'Code TPBAP 3178',
  price: 'IDR 146.000',
  imageMain: "/images/landing-page/pick9.jpeg",
  imageHover: "/images/landing-page/pick10.jpeg",
  category: 'tunic',
  isSoldOut: true
},
{
  id: 'prod_9',
  name: 'Flowlace Shirt',
  series: 'Code TPMGR 00020',
  price: 'IDR 149.000',
  imageMain: "/images/landing-page/pick11.jpeg",
  imageHover: "/images/landing-page/pick12.jpeg",
  category: 'blouse'
},
{
  id: 'prod_10',
  name: 'Brukat Skirt',
  series: 'Code TVAVM 5069',
  price: 'IDR 139.000',
  imageMain: "/images/landing-page/pick13.jpeg",
  imageHover: "/images/landing-page/pick14.jpeg",
  category: 'skirt'
},
{
  id: 'prod_11',
  name: 'Semiouter Flowdress',
  series: 'Code DRYR 2979',
  price: 'IDR 215.000',
  imageMain: "/images/landing-page/pick15.jpeg",
  imageHover: "/images/landing-page/pick16.jpeg",
  category: 'dress'
}];

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

// ===== IMPORT IMAGES =====
// DRESS
import dress1 from "../assets/images/dress/dress1.jpg";
import dress2 from "../assets/images/dress/dress2.jpg";
import dress3 from "../assets/images/dress/dress3.jpg";
import dress4 from "../assets/images/dress/dress4.jpg";
import dress5 from "../assets/images/dress/dress5.jpg";
import dress6 from "../assets/images/dress/dress6.jpg";
import dress7 from "../assets/images/dress/dress7.jpg";
import dress8 from "../assets/images/dress/dress8.jpg";
import dress9 from "../assets/images/dress/dress9.jpg";
import dress10 from "../assets/images/dress/dress10.jpg";
import dress11 from "../assets/images/dress/dress11.jpg";
import dress12 from "../assets/images/dress/dress12.jpg";
import dress13 from "../assets/images/dress/dress13.jpg";
import dress14 from "../assets/images/dress/dress14.jpg";
import dress15 from "../assets/images/dress/dress15.jpg";
import dress16 from "../assets/images/dress/dress16.jpg";
import dress17 from "../assets/images/dress/dress17.jpg";
import dress18 from "../assets/images/dress/dress18.jpg";
import dress19 from "../assets/images/dress/dress19.jpg";
import dress20 from "../assets/images/dress/dress20.jpg";

// BLOUSE
import blouse1 from "../assets/images/blouse/blouse1.jpg";
import blouse2 from "../assets/images/blouse/blouse2.jpg";
import blouse3 from "../assets/images/blouse/blouse3.jpg";
import blouse4 from "../assets/images/blouse/blouse4.jpg";
import blouse5 from "../assets/images/blouse/blouse5.jpg";
import blouse6 from "../assets/images/blouse/blouse6.jpg";
import blouse7 from "../assets/images/blouse/blouse7.jpg";
import blouse8 from "../assets/images/blouse/blouse8.jpg";
import blouse9 from "../assets/images/blouse/blouse9.jpg";
import blouse10 from "../assets/images/blouse/blouse10.jpg";
import blouse11 from "../assets/images/blouse/blouse11.jpg";
import blouse12 from "../assets/images/blouse/blouse12.jpg";
import blouse13 from "../assets/images/blouse/blouse13.jpg";
import blouse14 from "../assets/images/blouse/blouse14.jpg";
import blouse15 from "../assets/images/blouse/blouse15.jpg";
import blouse16 from "../assets/images/blouse/blouse16.jpg";
import blouse17 from "../assets/images/blouse/blouse17.jpg";
import blouse18 from "../assets/images/blouse/blouse18.jpg";
import blouse19 from "../assets/images/blouse/blouse19.jpg";
import blouse20 from "../assets/images/blouse/blouse20.jpg";

// Tunic
import tunic1 from "../assets/images/tunic/tunic1.jpg";
import tunic2 from "../assets/images/tunic/tunic2.jpg";
import tunic3 from "../assets/images/tunic/tunic3.jpg";
import tunic4 from "../assets/images/tunic/tunic4.jpg";
import tunic5 from "../assets/images/tunic/tunic5.jpg";
import tunic6 from "../assets/images/tunic/tunic6.jpg";
import tunic7 from "../assets/images/tunic/tunic7.jpg";
import tunic8 from "../assets/images/tunic/tunic8.jpg";
import tunic9 from "../assets/images/tunic/tunic9.jpg";
import tunic10 from "../assets/images/tunic/tunic10.jpg";
import tunic11 from "../assets/images/tunic/tunic11.jpg";
import tunic12 from "../assets/images/tunic/tunic12.jpg";
import tunic13 from "../assets/images/tunic/tunic13.jpg";
import tunic14 from "../assets/images/tunic/tunic14.jpg";
import tunic15 from "../assets/images/tunic/tunic15.jpg";
import tunic16 from "../assets/images/tunic/tunic16.jpg";
import tunic17 from "../assets/images/tunic/tunic17.jpg";
import tunic18 from "../assets/images/tunic/tunic18.jpg";
import tunic19 from "../assets/images/tunic/tunic19.jpg";
import tunic20 from "../assets/images/tunic/tunic20.jpg";

// Outer
import outer1 from "../assets/images/outer/outer1.jpg";
import outer2 from "../assets/images/outer/outer2.jpg";
import outer3 from "../assets/images/outer/outer3.jpg";
import outer4 from "../assets/images/outer/outer4.jpg";
import outer5 from "../assets/images/outer/outer5.jpg";
import outer6 from "../assets/images/outer/outer6.jpg";
import outer7 from "../assets/images/outer/outer7.jpg";
import outer8 from "../assets/images/outer/outer8.jpg";
import outer9 from "../assets/images/outer/outer9.jpg";
import outer10 from "../assets/images/outer/outer10.jpg";
import outer11 from "../assets/images/outer/outer11.jpg";
import outer12 from "../assets/images/outer/outer12.jpg";
import outer13 from "../assets/images/outer/outer13.jpg";
import outer14 from "../assets/images/outer/outer14.jpg";
import outer15 from "../assets/images/outer/outer15.jpg";
import outer16 from "../assets/images/outer/outer16.jpg";
import outer17 from "../assets/images/outer/outer17.jpg";
import outer18 from "../assets/images/outer/outer18.jpg";
import outer19 from "../assets/images/outer/outer19.jpg";
import outer20 from "../assets/images/outer/outer20.jpg";

// Sweater
import sweater1 from "../assets/images/sweater/sweater1.jpg";
import sweater2 from "../assets/images/sweater/sweater2.jpg";
import sweater3 from "../assets/images/sweater/sweater3.jpg";
import sweater4 from "../assets/images/sweater/sweater4.jpg";
import sweater5 from "../assets/images/sweater/sweater5.jpg";
import sweater6 from "../assets/images/sweater/sweater6.jpg";
import sweater7 from "../assets/images/sweater/sweater7.jpg";
import sweater8 from "../assets/images/sweater/sweater8.jpg";
import sweater9 from "../assets/images/sweater/sweater9.jpg";
import sweater10 from "../assets/images/sweater/sweater10.jpg";
import sweater11 from "../assets/images/sweater/sweater11.jpg";
import sweater12 from "../assets/images/sweater/sweater12.jpg";
import sweater13 from "../assets/images/sweater/sweater13.jpg";
import sweater14 from "../assets/images/sweater/sweater14.jpg";
import sweater15 from "../assets/images/sweater/sweater15.jpg";
import sweater16 from "../assets/images/sweater/sweater16.jpg";
import sweater17 from "../assets/images/sweater/sweater17.jpg";
import sweater18 from "../assets/images/sweater/sweater18.jpg";
import sweater19 from "../assets/images/sweater/sweater19.jpg";
import sweater20 from "../assets/images/sweater/sweater20.jpg";

// Pants
import pants1 from "../assets/images/pants/pants1.jpg";
import pants2 from "../assets/images/pants/pants2.jpg";
import pants3 from "../assets/images/pants/pants3.jpg";
import pants4 from "../assets/images/pants/pants4.jpg";
import pants5 from "../assets/images/pants/pants5.jpg";
import pants6 from "../assets/images/pants/pants6.jpg";
import pants7 from "../assets/images/pants/pants7.jpg";
import pants8 from "../assets/images/pants/pants8.jpg";
import pants9 from "../assets/images/pants/pants9.jpg";
import pants10 from "../assets/images/pants/pants10.jpg";
import pants11 from "../assets/images/pants/pants11.jpg";
import pants12 from "../assets/images/pants/pants12.jpg";
import pants13 from "../assets/images/pants/pants13.jpg";
import pants14 from "../assets/images/pants/pants14.jpg";
import pants15 from "../assets/images/pants/pants15.jpg";
import pants16 from "../assets/images/pants/pants16.jpg";
import pants17 from "../assets/images/pants/pants17.jpg";
import pants18 from "../assets/images/pants/pants18.jpg";
import pants19 from "../assets/images/pants/pants19.jpg";
import pants20 from "../assets/images/pants/pants20.jpg";

// Skirt
import skirt1 from "../assets/images/skirt/skirt1.jpg";
import skirt2 from "../assets/images/skirt/skirt2.jpg";
import skirt3 from "../assets/images/skirt/skirt3.jpg";
import skirt4 from "../assets/images/skirt/skirt4.jpg";
import skirt5 from "../assets/images/skirt/skirt5.jpg";
import skirt6 from "../assets/images/skirt/skirt6.jpg";
import skirt7 from "../assets/images/skirt/skirt7.jpg";
import skirt8 from "../assets/images/skirt/skirt8.jpg";
import skirt9 from "../assets/images/skirt/skirt9.jpg";
import skirt10 from "../assets/images/skirt/skirt10.jpg";
import skirt11 from "../assets/images/skirt/skirt11.jpg";
import skirt12 from "../assets/images/skirt/skirt12.jpg";
import skirt13 from "../assets/images/skirt/skirt13.jpg";
import skirt14 from "../assets/images/skirt/skirt14.jpg";
import skirt15 from "../assets/images/skirt/skirt15.jpg";
import skirt16 from "../assets/images/skirt/skirt16.jpg";
import skirt17 from "../assets/images/skirt/skirt17.jpg";
import skirt18 from "../assets/images/skirt/skirt18.jpg";
import skirt19 from "../assets/images/skirt/skirt19.jpg";
import skirt20 from "../assets/images/skirt/skirt20.jpg";

// ===== ALL PRODUCTS =====
export const category: Product[] = [
  // ===== DRESS =====
  {
    id: 'dress_1',
    name: 'Semivest Brukat Dress',
    series: 'Code DRYN 9213',
    price: 'IDR 225.000',
    imageMain: dress1,
    imageHover: dress2,
    category: 'dress'
  },
  {
    id: 'dress_2',
    name: 'Flowbrukat Raya Dress',
    series: 'Code DRIWK 00047',
    price: 'IDR 189.000',
    imageMain: dress3,
    imageHover: dress4,
    category: 'dress'
  },
  {
    id: 'dress_3',
    name: 'Semivest Rope Dress',
    series: 'Code DRARK 00231',
    price: 'IDR 169.000',
    imageMain: dress5,
    imageHover: dress6,
    category: 'dress'
  },
  {
    id: 'dress_4',
    name: 'Flowbrukat Outer Dress',
    series: 'Code DRSBI 00040',
    price: 'IDR 325.000',
    imageMain: dress7,
    imageHover: dress8,
    category: 'dress'
  },
    {
    id: 'dress_5',
    name: 'Wrinkle Rope Dress',
    series: 'Code DRKMC 00142',
    price: 'IDR 119.000',
    imageMain: dress9,
    imageHover: dress10,
    category: 'dress'
  },
  {
    id: 'dress_6',
    name: 'White Bordir Brukat Dress',
    series: 'Code DRKNZF 00111',
    price: 'IDR 250.000',
    imageMain: dress11,
    imageHover: dress12,
    category: 'dress'
  },
  {
    id: 'dress_7',
    name: 'Pearlbelt Dress',
    series: 'Code DRMSTL 6436',
    price: 'IDR 215.000',
    imageMain: dress13,
    imageHover: dress14,
    category: 'dress'
  },
  {
    id: 'dress_8',
    name: 'Flowbordir Dress',
    series: 'Code DRCRSD 00015',
    price: 'IDR 215.000',
    imageMain: dress15,
    imageHover: dress16,
    category: 'dress'
 },
  {
    id: 'dress_9',
    name: 'Brukat Outer Plain Dress',
    series: 'Code DRNDN 00045',
    price: 'IDR 220.000',
    imageMain: dress17,
    imageHover: dress18,
    category: 'dress'
  },
  {
    id: 'dress_10',
    name: 'Blastvest Dress',
    series: 'Code DRMKU 1603',
    price: 'IDR 178.000',
    imageMain: dress19,
    imageHover: dress20,
    category: 'dress'
  },

  // ===== BLOUSE =====
  {
    id: 'blouse_1',
    name: 'Whitelace Collar Embos Blouse',
    series: 'Code TPFVR 00839',
    price: 'IDR 136.000',
    imageMain: blouse1,
    imageHover: blouse2,
    category: 'blouse'
  },
  {
    id: 'blouse_2',
    name: 'Twocolour Katbol Blouse',
    series: 'Code DRJSMR 3959',
    price: 'IDR 156.000',
    imageMain: blouse3,
    imageHover: blouse4,
    category: 'blouse'
  },
  {
    id: 'blouse_3',
    name: 'Sidepleated Blouse',
    series: 'Code TPSVN 00803',
    price: 'IDR 146.000',
    imageMain: blouse5,
    imageHover: blouse6,
    category: 'blouse'
  },
  {
    id: 'blouse_4',
    name: 'Flow Motive Blouse',
    series: 'Code TPLYY 00778',
    price: 'IDR 156.000',
    imageMain: blouse7,
    imageHover: blouse8,
    category: 'blouse'
  },
   {
    id: 'blouse_5',
    name: 'Colourvest 2in1 Blouse',
    series: 'Code TPDVA 00615',
    price: 'IDR 129.000',
    imageMain: blouse9,
    imageHover: blouse10,
    category: 'blouse'
  },
  {
    id: 'blouse_6',
    name: 'Sideramp Plain Blouse',
    series: 'Code PTMNT 00509',
    price: 'IDR 115.000',
    imageMain: blouse11,
    imageHover: blouse12,
    category: 'blouse'
  },
  {
    id: 'blouse_7',
    name: 'Flowbordir Lace Blouse',
    series: 'Code TPMGR 00020',
    price: 'IDR 149.000',
    imageMain: blouse13,
    imageHover: blouse14,
    category: 'blouse'
  },
  {
    id: 'blouse_8',
    name: 'Siderope Bordir Blouse',
    series: 'Code TMLVM 5505',
    price: 'IDR 106.000',
    imageMain: blouse15,
    imageHover: blouse16,
    category: 'blouse'
  },
  {
    id: 'blouse_9',
    name: 'Threebt White Blouse',
    series: 'Code TNCD 9241',
    price: 'IDR 139.000',
    imageMain: blouse17,
    imageHover: blouse18,
    category: 'blouse'
  },
  {
    id: 'blouse_10',
    name: 'Lovepattern Sleeve Blouse',
    series: 'Code TPMKA 1912',
    price: 'IDR 111.000',
    imageMain: blouse19,
    imageHover: blouse20,
    category: 'blouse'
  },

  // ===== TUNIC =====
  {
    id: 'tunic_1',
    name: 'Leafbordir Tunic',
    series: 'Code TPINS 0070',
    price: 'IDR 139.000',
    imageMain: tunic1,
    imageHover: tunic2,
    category: 'tunic'
  },
  {
    id: 'tunic_2',
    name: 'Embroydery Tunic',
    series: 'Code DRGJY 00771',
    price: 'IDR 198.000',
    imageMain: tunic3,
    imageHover: tunic4,
    category: 'tunic'
  },
   {
    id: 'tunic_3',
    name: 'Flowbordir Crepe Bordir Tunic',
    series: 'Code DRFVR 00477',
    price: 'IDR 186.000',
    imageMain: tunic5,
    imageHover: tunic6,
    category: 'tunic'
  },
  {
    id: 'tunic_4',
    name: 'Bordir Colour Tunic',
    series: 'Code TPSCL 00117',
    price: 'IDR 159.000',
    imageMain: tunic7,
    imageHover: tunic8,
    category: 'tunic'
  },
   {
    id: 'tunic_5',
    name: 'Cream Flow Tunic',
    series: 'Code TPINS 00702',
    price: 'IDR 159.000',
    imageMain: tunic9,
    imageHover: tunic10,
    category: 'tunic'
  },
  {
    id: 'tunic_6',
    name: 'Whiteflow Bordir Tunic',
    series: 'Code TPALN 3650',
    price: 'IDR 165.000',
    imageMain: tunic11,
    imageHover: tunic12,
    category: 'tunic'
  },
   {
    id: 'tunic_7',
    name: 'Pleatedkrah Tunic',
    series: 'Code TNJMCL 00244',
    price: 'IDR 169.000',
    imageMain: tunic13,
    imageHover: tunic14,
    category: 'tunic'
  },
  {
    id: 'tunic_8',
    name: 'Creamflower Bordir Tunic',
    series: 'Code DRYRI 00256',
    price: 'IDR 205.000',
    imageMain: tunic15,
    imageHover: tunic16,
    category: 'tunic'
  },
   {
    id: 'tunic_9',
    name: 'Siderampflow Bordir Tunic',
    series: 'Code TNSHRL 4766',
    price: 'IDR 149.000',
    imageMain: tunic17,
    imageHover: tunic18,
    category: 'tunic'
  },
  {
    id: 'tunic_10',
    name: 'Nudes Vi Nesbordir Tunic',
    series: 'Code TPBAP 3178',
    price: 'IDR 146.000',
    imageMain: tunic19,
    imageHover: tunic20,
    category: 'tunic',
    isSoldOut: true
  },

    // ===== OUTER =====
  {
    id: 'outer_1',
    name: 'Ribbonbt Vest Outer',
    series: 'Code TPCLS 9494',
    price: 'IDR 110.000',
    imageMain: outer1,
    imageHover: outer2,
    category: 'outer'
  },
    {
    id: 'outer_2',
    name: 'Plaincolour Outer',
    series: 'TPCNDS 00762',
    price: 'IDR 139.000',
    imageMain: outer3,
    imageHover: outer4,
    category: 'outer'
  },
    {
    id: 'outer_3',
    name: 'Sidebt Vest Outer',
    series: 'Code TPLCL 00683',
    price: 'IDR 69.000',
    imageMain: outer5,
    imageHover: outer6,
    category: 'outer'
  },
    {
    id: 'outer_4',
    name: '2in1 Plain Shirt & Outer',
    series: 'Code TPCNG 6695',
    price: 'IDR 146.000',
    imageMain: outer7,
    imageHover: outer8,
    category: 'outer'
  },
    {
    id: 'outer_5',
    name: 'Pearlbt Korean Outer',
    series: 'Code DRMRF 12',
    price: 'IDR 136.000',
    imageMain: outer9,
    imageHover: outer10,
    category: 'outer'
  },
    {
    id: 'outer_6',
    name: 'Sleeveless Stripe Outer',
    series: 'Code TPCLS 4819',
    price: 'IDR 95.000',
    imageMain: outer11,
    imageHover: outer12,
    category: 'outer'
  },
    {
    id: 'outer_7',
    name: 'Bluestripe Outer',
    series: 'Code TNJSMR 7453',
    price: 'IDR 136.000',
    imageMain: outer13,
    imageHover: outer14,
    category: 'outer'
  },
    {
    id: 'outer_8',
    name: 'Stripe Sleeve Outer',
    series: 'Code TPJML 9191',
    price: 'IDR 133.000',
    imageMain: outer15,
    imageHover: outer16,
    category: 'outer'
  },
    {
    id: 'outer_9',
    name: 'Ruffle Sleeveless Tunic',
    series: 'DRNTN 6045',
    price: 'IDR 175.000',
    imageMain: outer17,
    imageHover: outer18,
    category: 'outer'
  },
    {
    id: 'outer_10',
    name: 'Katbol Semivest Outer',
    series: 'TPLA 4089',
    price: 'IDR 118.000',
    imageMain: outer19,
    imageHover: outer20,
    category: 'outer'
  },

  // ===== SWEATER =====
 {
    id: 'sweater_1',
    name: 'Stripe Zipper Sweater',
    series: 'Code TPMISC 7601',
    price: 'IDR 139.000',
    imageMain: sweater1,
    imageHover: sweater2,
    category: 'sweater'
  },
   {
    id: 'sweater_2',
    name: 'Braidpattern Cardi Sweater',
    series: 'Code TNFLML 4205',
    price: 'IDR 139.000',
    imageMain: sweater3,
    imageHover: sweater4,
    category: 'sweater'
  },
   {
    id: 'sweater_3',
    name: 'Printmotif Sweater',
    series: 'Code TPKNB 00442',
    price: 'IDR 136.000',
    imageMain: sweater5,
    imageHover: sweater6,
    category: 'sweater'
  },
   {
    id: 'sweater_4',
    name: 'Shouldbutton Knit Sweater',
    series: 'Code TPHBE 00793',
    price: 'IDR 136.000',
    imageMain: sweater7,
    imageHover: sweater8,
    category: 'sweater'
  },
   {
    id: 'sweater_5',
    name: 'Sideribbon Cardi Sweater',
    series: 'Code TPLYN 00826',
    price: 'IDR 128.000',
    imageMain: sweater9,
    imageHover: sweater10,
    category: 'sweater'
  },
   {
    id: 'sweater_6',
    name: 'Stripe Motif Knit Sweater',
    series: 'Code TPMCHL 00692',
    price: 'IDR 144.000',
    imageMain: sweater11,
    imageHover: sweater12,
    category: 'sweater'
  },
   {
    id: 'sweater_7',
    name: 'Stripe Motive Knit Sweater',
    series: 'Code TPKM 8217',
    price: 'IDR 136.000',
    imageMain: sweater13,
    imageHover: sweater14,
    category: 'sweater'
  },
   {
    id: 'sweater_8',
    name: 'Silverlove BT Sweater',
    series: 'Code TPKM 6020',
    price: 'IDR 139.000',
    imageMain: sweater15,
    imageHover: sweater16,
    category: 'sweater'
  },
   {
    id: 'sweater_9',
    name: 'Stripe Krah Sweater',
    series: 'Code TPKM 7394',
    price: 'IDR 156.000',
    imageMain: sweater17,
    imageHover: sweater18,
    category: 'sweater'
  },
   {
    id: 'sweater_10',
    name: 'Goldbt Batwing Sweater',
    series: 'Code SKSHR 3076',
    price: 'IDR 149.000',
    imageMain: sweater19,
    imageHover: sweater20,
    category: 'sweater'
  },

  // ===== PANTS =====
 {
    id: 'pants_1',
    name: 'Plaincolour Cargo Pants',
    series: 'Code SKJML 8620',
    price: 'IDR 129.000',
    imageMain: pants1,
    imageHover: pants2,
    category: 'pants'
  },
   {
    id: 'pants_2',
    name: '3BT Scuba Pants',
    series: 'Code PTMSTL 7445',
    price: 'IDR 99.000',
    imageMain: pants3,
    imageHover: pants4,
    category: 'pants'
  },
   {
    id: 'pants_3',
    name: 'PLaincolour Scuba Cutbray Pants',
    series: 'Code PTMSTL 7445',
    price: 'IDR 99.000',
    imageMain: pants5,
    imageHover: pants6,
    category: 'pants'
  },
   {
    id: 'pants_4',
    name: '3Plain Scuba Pants',
    series: 'Code TPMCFN 00788',
    price: 'IDR 99.000',
    imageMain: pants7,
    imageHover: pants8,
    category: 'pants'
  },
   {
    id: 'pants_5',
    name: 'Scuba Cutbray Pants',
    series: 'Code PTMSTL 7445',
    price: 'IDR 99.000',
    imageMain: pants9,
    imageHover: pants10,
    category: 'pants'
  },
   {
    id: 'pants_6',
    name: 'Plain Jeans Pants',
    series: 'Code PTNWJ 00073',
    price: 'IDR 186.000',
    imageMain: pants11,
    imageHover: pants12,
    category: 'pants'
  },
   {
    id: 'pants_7',
    name: 'Plaincolour Pants',
    series: 'Code TPSDP 2463',
    price: 'IDR 108.000',
    imageMain: pants13,
    imageHover: pants14,
    category: 'pants'
  },
   {
    id: 'pants_8',
    name: 'Rubberwaist SoftJeans Pants',
    series: 'Code TPJML 1671',
    price: 'IDR 113.000',
    imageMain: pants15,
    imageHover: pants16,
    category: 'pants'
  },
   {
    id: 'pants_9',
    name: 'Twopocket Cullote Pants',
    series: 'Code TPJOI 00720',
    price: 'IDR 156.000',
    imageMain: pants17,
    imageHover: pants18,
    category: 'pants'
  },
   {
    id: 'pants_10',
    name: 'Blackbelt Scuba Pants',
    series: 'Code PT010',
    price: 'IDR 146.000',
    imageMain: pants19,
    imageHover: pants20,
    category: 'pants'
  },

  // ===== SKIRT =====
  {
    id: 'skirt_1',
    name: 'Brukat Skirt',
    series: 'Code TNAVM 5069',
    price: 'IDR 139.000',
    imageMain: skirt1,
    imageHover: skirt2,
    category: 'skirt'
  },
   {
    id: 'skirt_2',
    name: 'Colourflow Bordir Skirt',
    series: 'Code TPASG 00536',
    price: 'IDR 139.000',
    imageMain: skirt3,
    imageHover: skirt4,
    category: 'skirt'
  },
   {
    id: 'skirt_3',
    name: 'Rubber Waist Tutu Skirt',
    series: 'Code TPCC 5545',
    price: 'IDR 99.000',
    imageMain: skirt5,
    imageHover: skirt6,
    category: 'skirt'
  },
   {
    id: 'skirt_4',
    name: 'Flow Bordir Skirt',
    series: 'Code TPMXG 0079',
    price: 'IDR 166.000',
    imageMain: skirt7,
    imageHover: skirt8,
    category: 'skirt'
  },
   {
    id: 'skirt_5',
    name: 'Tinnyflow Bordir Skirt',
    series: 'Code TPPMGR 00020',
    price: 'IDR 149.000',
    imageMain: skirt9,
    imageHover: skirt10,
    category: 'skirt'
  },
   {
    id: 'skirt_6',
    name: 'Ribbon Accent Skirt',
    series: 'Code PTHBE 7145',
    price: 'IDR 139.000',
    imageMain: skirt11,
    imageHover: skirt12,
    category: 'skirt'
  },
   {
    id: 'skirt_7',
    name: 'Brukat Skirt',
    series: 'Code TNAVM 5069',
    price: 'IDR 139.000',
    imageMain: skirt13,
    imageHover: skirt14,
    category: 'skirt'
  },
   {
    id: 'skirt_8',
    name: 'Korean Bordir Skirt',
    series: 'Code TNASG 00032',
    price: 'IDR 166.000',
    imageMain: skirt15,
    imageHover: skirt16,
    category: 'skirt'
  },
   {
    id: 'skirt_9',
    name: 'Flow Bordir Skirt',
    series: 'Code DRAVM 3526 ',
    price: 'IDR 156.000',
    imageMain: skirt17,
    imageHover: skirt18,
    category: 'skirt'
  },
   {
    id: 'skirt_10',
    name: 'Flow Bordir Skirt',
    series: 'Code TNGLR 1773',
    price: 'IDR 178.000',
    imageMain: skirt19,
    imageHover: skirt20,
    category: 'skirt'
  },
];

export const saleProducts: Product[] = [
  {
    id: 'sale2',
    name: 'Shouldbutton Knittop',
    series: 'Code TPHBE 00793',
    imageMain: '/images/sale/sale2.jpg',
    imageHover: '/images/sale/sale2.jpg',
    category: 'sweater'
  },
  {
    id: 'sale3',
    name: 'Twopocket Cullote',
    series: 'Code TPJOI 00720',
    imageMain: '/images/sale/sale3.jpg',
    imageHover: '/images/sale/sale3.jpg',
    category: 'pants'
  },
  {
    id: 'sale5',
    name: 'Twocolors Bordir',
    series: 'Code SETGJY 00772',
    imageMain: '/images/sale/sale5.jpg',
    imageHover: '/images/sale/sale5.jpg',
    category: 'tunic'
  },
  {
    id: 'sale6',
    name: 'Twocolors Bordir Skirt',
    series: 'Code SETGJY 00775',
    imageMain: '/images/sale/sale6.jpg',
    imageHover: '/images/sale/sale6.jpg',
    category: 'skirt'
  },
  {
    id: 'sale8',
    name: 'Stripevest Browntop',
    series: 'Code TPBAP 4380',
    imageMain: '/images/sale/sale8.jpg',
    imageHover: '/images/sale/sale8.jpg',
    category: 'outer'
  },
  {
    id: 'sale9',
    name: 'Colour Flow Bordir Skirt',
    series: 'Code TPASG 00536',
    imageMain: '/images/sale/sale9.jpg',
    imageHover: '/images/sale/sale9.jpg',
    category: 'skirt'
  },
  {
    id: 'sale11',
    name: 'Stripe Knit Top',
    series: 'Code TPMCHL 00692',
    imageMain: '/images/sale/sale11.jpg',
    imageHover: '/images/sale/sale11.jpg',
    category: 'sweater'
  },
  {
    id: 'sale12',
    name: 'Scuba Cutbray',
    series: 'Code PTMSTL 7445',
    imageMain: '/images/sale/sale12.jpg',
    imageHover: '/images/sale/sale12.jpg',
    category: 'pants'
  },
];
export const allProducts = [...bestsellers, ...ourPicks, ...category, ...saleProducts];