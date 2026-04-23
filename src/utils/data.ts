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
import dress1 from "../assets/images/dress/dress1.jpeg";
import dress2 from "../assets/images/dress/dress2.jpeg";
import dress3 from "../assets/images/dress/dress3.jpeg";
import dress4 from "../assets/images/dress/dress4.jpeg";
import dress5 from "../assets/images/dress/dress5.jpeg";
import dress6 from "../assets/images/dress/dress6.jpeg";
import dress7 from "../assets/images/dress/dress7.jpeg";
import dress8 from "../assets/images/dress/dress8.jpeg";
import dress9 from "../assets/images/dress/dress9.jpeg";
import dress10 from "../assets/images/dress/dress10.jpeg";
import dress11 from "../assets/images/dress/dress11.jpeg";
import dress12 from "../assets/images/dress/dress12.jpeg";
import dress13 from "../assets/images/dress/dress13.jpeg";
import dress14 from "../assets/images/dress/dress14.jpeg";
import dress15 from "../assets/images/dress/dress15.jpeg";
import dress16 from "../assets/images/dress/dress16.jpeg";
import dress17 from "../assets/images/dress/dress17.jpeg";
import dress18 from "../assets/images/dress/dress18.jpeg";
import dress19 from "../assets/images/dress/dress19.jpeg";
import dress20 from "../assets/images/dress/dress20.jpeg";

// BLOUSE
import blouse1 from "../assets/images/blouse/blouse1.jpeg";
import blouse2 from "../assets/images/blouse/blouse2.jpeg";
import blouse3 from "../assets/images/blouse/blouse3.jpeg";
import blouse4 from "../assets/images/blouse/blouse4.jpeg";
import blouse5 from "../assets/images/blouse/blouse5.jpeg";
import blouse6 from "../assets/images/blouse/blouse6.jpeg";
import blouse7 from "../assets/images/blouse/blouse7.jpeg";
import blouse8 from "../assets/images/blouse/blouse8.jpeg";
import blouse9 from "../assets/images/blouse/blouse9.jpeg";
import blouse10 from "../assets/images/blouse/blouse10.jpeg";
import blouse11 from "../assets/images/blouse/blouse11.jpeg";
import blouse12 from "../assets/images/blouse/blouse12.jpeg";
import blouse13 from "../assets/images/blouse/blouse13.jpeg";
import blouse14 from "../assets/images/blouse/blouse14.jpeg";
import blouse15 from "../assets/images/blouse/blouse15.jpeg";
import blouse16 from "../assets/images/blouse/blouse16.jpeg";
import blouse17 from "../assets/images/blouse/blouse17.jpeg";
import blouse18 from "../assets/images/blouse/blouse18.jpeg";
import blouse19 from "../assets/images/blouse/blouse19.jpeg";
import blouse20 from "../assets/images/blouse/blouse20.jpeg";

// Tunic
import tunic1 from "../assets/images/tunic/tunic1.jpeg";
import tunic2 from "../assets/images/tunic/tunic2.jpeg";
import tunic3 from "../assets/images/tunic/tunic3.jpeg";
import tunic4 from "../assets/images/tunic/tunic4.jpeg";
import tunic5 from "../assets/images/tunic/tunic5.jpeg";
import tunic6 from "../assets/images/tunic/tunic6.jpeg";
import tunic7 from "../assets/images/tunic/tunic7.jpeg";
import tunic8 from "../assets/images/tunic/tunic8.jpeg";
import tunic9 from "../assets/images/tunic/tunic9.jpeg";
import tunic10 from "../assets/images/tunic/tunic10.jpeg";
import tunic11 from "../assets/images/tunic/tunic11.jpeg";
import tunic12 from "../assets/images/tunic/tunic12.jpeg";
import tunic13 from "../assets/images/tunic/tunic13.jpeg";
import tunic14 from "../assets/images/tunic/tunic14.jpeg";
import tunic15 from "../assets/images/tunic/tunic15.jpeg";
import tunic16 from "../assets/images/tunic/tunic16.jpeg";
import tunic17 from "../assets/images/tunic/tunic17.jpeg";
import tunic18 from "../assets/images/tunic/tunic18.jpeg";
import tunic19 from "../assets/images/tunic/tunic19.jpeg";
import tunic20 from "../assets/images/tunic/tunic20.jpeg";

// Outer
import outer1 from "../assets/images/outer/outer1.jpeg";
import outer2 from "../assets/images/outer/outer2.jpeg";
import outer3 from "../assets/images/outer/outer3.jpeg";
import outer4 from "../assets/images/outer/outer4.jpeg";
import outer5 from "../assets/images/outer/outer5.jpeg";
import outer6 from "../assets/images/outer/outer6.jpeg";
import outer7 from "../assets/images/outer/outer7.jpeg";
import outer8 from "../assets/images/outer/outer8.jpeg";
import outer9 from "../assets/images/outer/outer9.jpeg";
import outer10 from "../assets/images/outer/outer10.jpeg";
import outer11 from "../assets/images/outer/outer11.jpeg";
import outer12 from "../assets/images/outer/outer12.jpeg";
import outer13 from "../assets/images/outer/outer13.jpeg";
import outer14 from "../assets/images/outer/outer14.jpeg";
import outer15 from "../assets/images/outer/outer15.jpeg";
import outer16 from "../assets/images/outer/outer16.jpeg";
import outer17 from "../assets/images/outer/outer17.jpeg";
import outer18 from "../assets/images/outer/outer18.jpeg";
import outer19 from "../assets/images/outer/outer19.jpeg";
import outer20 from "../assets/images/outer/outer20.jpeg";

// Sweater
import sweater1 from "../assets/images/sweater/sweater1.jpeg";
import sweater2 from "../assets/images/sweater/sweater2.jpeg";
import sweater3 from "../assets/images/sweater/sweater3.jpeg";
import sweater4 from "../assets/images/sweater/sweater4.jpeg";
import sweater5 from "../assets/images/sweater/sweater5.jpeg";
import sweater6 from "../assets/images/sweater/sweater6.jpeg";
import sweater7 from "../assets/images/sweater/sweater7.jpeg";
import sweater8 from "../assets/images/sweater/sweater8.jpeg";
import sweater9 from "../assets/images/sweater/sweater9.jpeg";
import sweater10 from "../assets/images/sweater/sweater10.jpeg";
import sweater11 from "../assets/images/sweater/sweater11.jpeg";
import sweater12 from "../assets/images/sweater/sweater12.jpeg";
import sweater13 from "../assets/images/sweater/sweater13.jpeg";
import sweater14 from "../assets/images/sweater/sweater14.jpeg";
import sweater15 from "../assets/images/sweater/sweater15.jpeg";
import sweater16 from "../assets/images/sweater/sweater16.jpeg";
import sweater17 from "../assets/images/sweater/sweater17.jpeg";
import sweater18 from "../assets/images/sweater/sweater18.jpeg";
import sweater19 from "../assets/images/sweater/sweater19.jpeg";
import sweater20 from "../assets/images/sweater/sweater20.jpeg";

// Pants
import pants1 from "../assets/images/pants/pants1.jpeg";
import pants2 from "../assets/images/pants/pants2.jpeg";
import pants3 from "../assets/images/pants/pants3.jpeg";
import pants4 from "../assets/images/pants/pants4.jpeg";
import pants5 from "../assets/images/pants/pants5.jpeg";
import pants6 from "../assets/images/pants/pants6.jpeg";
import pants7 from "../assets/images/pants/pants7.jpeg";
import pants8 from "../assets/images/pants/pants8.jpeg";
import pants9 from "../assets/images/pants/pants9.jpeg";
import pants10 from "../assets/images/pants/pants10.jpeg";
import pants11 from "../assets/images/pants/pants11.jpeg";
import pants12 from "../assets/images/pants/pants12.jpeg";
import pants13 from "../assets/images/pants/pants13.jpeg";
import pants14 from "../assets/images/pants/pants14.jpeg";
import pants15 from "../assets/images/pants/pants15.jpeg";
import pants16 from "../assets/images/pants/pants16.jpeg";
import pants17 from "../assets/images/pants/pants17.jpeg";
import pants18 from "../assets/images/pants/pants18.jpeg";
import pants19 from "../assets/images/pants/pants19.jpeg";
import pants20 from "../assets/images/pants/pants20.jpeg";

// Skirt
import skirt1 from "../assets/images/skirt/skirt1.jpeg";
import skirt2 from "../assets/images/skirt/skirt2.jpeg";
import skirt3 from "../assets/images/skirt/skirt3.jpeg";
import skirt4 from "../assets/images/skirt/skirt4.jpeg";
import skirt5 from "../assets/images/skirt/skirt5.jpeg";
import skirt6 from "../assets/images/skirt/skirt6.jpeg";
import skirt7 from "../assets/images/skirt/skirt7.jpeg";
import skirt8 from "../assets/images/skirt/skirt8.jpeg";
import skirt9 from "../assets/images/skirt/skirt9.jpeg";
import skirt10 from "../assets/images/skirt/skirt10.jpeg";
import skirt11 from "../assets/images/skirt/skirt11.jpeg";
import skirt12 from "../assets/images/skirt/skirt12.jpeg";
import skirt13 from "../assets/images/skirt/skirt13.jpeg";
import skirt14 from "../assets/images/skirt/skirt14.jpeg";
import skirt15 from "../assets/images/skirt/skirt15.jpeg";
import skirt16 from "../assets/images/skirt/skirt16.jpeg";
import skirt17 from "../assets/images/skirt/skirt17.jpeg";
import skirt18 from "../assets/images/skirt/skirt18.jpeg";
import skirt19 from "../assets/images/skirt/skirt19.jpeg";
import skirt20 from "../assets/images/skirt/skirt20.jpeg";

// ===== ALL PRODUCTS =====
export const category: Product[] = [
  // ===== DRESS =====
  {
    id: 'dress_1',
    name: 'Flow Dress',
    series: 'Code DR001',
    imageMain: dress1,
    imageHover: dress2,
    category: 'dress'
  },
  {
    id: 'dress_2',
    name: 'Elegant Dress',
    series: 'Code DR002',
    imageMain: dress3,
    imageHover: dress4,
    category: 'dress'
  },
  {
    id: 'dress_3',
    name: 'Soft Lace Dress',
    series: 'Code DR003',
    imageMain: dress5,
    imageHover: dress6,
    category: 'dress'
  },
  {
    id: 'dress_4',
    name: 'Daily Dress',
    series: 'Code DR004',
    imageMain: dress7,
    imageHover: dress8,
    category: 'dress'
  },
    {
    id: 'dress_5',
    name: 'Flow Dress',
    series: 'Code DR005',
    imageMain: dress9,
    imageHover: dress10,
    category: 'dress'
  },
  {
    id: 'dress_6',
    name: 'Elegant Dress',
    series: 'Code DR006',
    imageMain: dress11,
    imageHover: dress12,
    category: 'dress'
  },
  {
    id: 'dress_7',
    name: 'Soft Lace Dress',
    series: 'Code DR007',
    imageMain: dress13,
    imageHover: dress14,
    category: 'dress'
  },
  {
    id: 'dress_8',
    name: 'Daily Dress',
    series: 'Code DR008',
    imageMain: dress15,
    imageHover: dress16,
    category: 'dress'
 },
  {
    id: 'dress_9',
    name: 'Soft Lace Dress',
    series: 'Code DR009',
    imageMain: dress17,
    imageHover: dress18,
    category: 'dress'
  },
  {
    id: 'dress_10',
    name: 'Daily Dress',
    series: 'Code DR010',
    imageMain: dress19,
    imageHover: dress20,
    category: 'dress'
  },

  // ===== BLOUSE =====
  {
    id: 'blouse_1',
    name: 'Soft Blouse',
    series: 'Code BL001',
    imageMain: blouse1,
    imageHover: blouse2,
    category: 'blouse'
  },
  {
    id: 'blouse_2',
    name: 'Elegant Blouse',
    series: 'Code BL002',
    imageMain: blouse3,
    imageHover: blouse4,
    category: 'blouse'
  },
  {
    id: 'blouse_3',
    name: 'Flow Blouse',
    series: 'Code BL003',
    imageMain: blouse5,
    imageHover: blouse6,
    category: 'blouse'
  },
  {
    id: 'blouse_4',
    name: 'Daily Blouse',
    series: 'Code BL004',
    imageMain: blouse7,
    imageHover: blouse8,
    category: 'blouse'
  },
   {
    id: 'blouse_5',
    name: 'Soft Blouse',
    series: 'Code BL005',
    imageMain: blouse9,
    imageHover: blouse10,
    category: 'blouse'
  },
  {
    id: 'blouse_6',
    name: 'Elegant Blouse',
    series: 'Code BL006',
    imageMain: blouse11,
    imageHover: blouse12,
    category: 'blouse'
  },
  {
    id: 'blouse_7',
    name: 'Flow Blouse',
    series: 'Code BL007',
    imageMain: blouse13,
    imageHover: blouse14,
    category: 'blouse'
  },
  {
    id: 'blouse_8',
    name: 'Daily Blouse',
    series: 'Code BL008',
    imageMain: blouse15,
    imageHover: blouse16,
    category: 'blouse'
  },
  {
    id: 'blouse_9',
    name: 'Flow Blouse',
    series: 'Code BL009',
    imageMain: blouse17,
    imageHover: blouse18,
    category: 'blouse'
  },
  {
    id: 'blouse_10',
    name: 'Daily Blouse',
    series: 'Code BL010',
    imageMain: blouse19,
    imageHover: blouse20,
    category: 'blouse'
  },

  // ===== TUNIC =====
  {
    id: 'tunic_1',
    name: 'Flow Tunic',
    series: 'Code TN001',
    imageMain: tunic1,
    imageHover: tunic2,
    category: 'tunic'
  },
  {
    id: 'tunic_2',
    name: 'Elegant Tunic',
    series: 'Code TN002',
    imageMain: tunic3,
    imageHover: tunic4,
    category: 'tunic'
  },
   {
    id: 'tunic_3',
    name: 'Flow Tunic',
    series: 'Code TN003',
    imageMain: tunic5,
    imageHover: tunic6,
    category: 'tunic'
  },
  {
    id: 'tunic_4',
    name: 'Elegant Tunic',
    series: 'Code TN004',
    imageMain: tunic7,
    imageHover: tunic8,
    category: 'tunic'
  },
   {
    id: 'tunic_5',
    name: 'Flow Tunic',
    series: 'Code TN005',
    imageMain: tunic9,
    imageHover: tunic10,
    category: 'tunic'
  },
  {
    id: 'tunic_6',
    name: 'Elegant Tunic',
    series: 'Code TN006',
    imageMain: tunic11,
    imageHover: tunic12,
    category: 'tunic'
  },
   {
    id: 'tunic_7',
    name: 'Flow Tunic',
    series: 'Code TN007',
    imageMain: tunic13,
    imageHover: tunic14,
    category: 'tunic'
  },
  {
    id: 'tunic_8',
    name: 'Elegant Tunic',
    series: 'Code TN008',
    imageMain: tunic15,
    imageHover: tunic16,
    category: 'tunic'
  },
   {
    id: 'tunic_9',
    name: 'Flow Tunic',
    series: 'Code TN009',
    imageMain: tunic17,
    imageHover: tunic18,
    category: 'tunic'
  },
  {
    id: 'tunic_10',
    name: 'Elegant Tunic',
    series: 'Code TN010',
    imageMain: tunic19,
    imageHover: tunic20,
    category: 'tunic'
  },

    // ===== OUTER =====
  {
    id: 'outer_1',
    name: 'Flow Outer',
    series: 'Code OT001',
    imageMain: outer1,
    imageHover: outer2,
    category: 'outer'
  },
    {
    id: 'outer_2',
    name: 'Flow Outer',
    series: 'Code OT002',
    imageMain: outer3,
    imageHover: outer4,
    category: 'outer'
  },
    {
    id: 'outer_3',
    name: 'Flow Outer',
    series: 'Code OT003',
    imageMain: outer5,
    imageHover: outer6,
    category: 'outer'
  },
    {
    id: 'outer_4',
    name: 'Flow Outer',
    series: 'Code OT004',
    imageMain: outer7,
    imageHover: outer8,
    category: 'outer'
  },
    {
    id: 'outer_5',
    name: 'Flow Outer',
    series: 'Code OT005',
    imageMain: outer9,
    imageHover: outer10,
    category: 'outer'
  },
    {
    id: 'outer_6',
    name: 'Flow Outer',
    series: 'Code OT006',
    imageMain: outer11,
    imageHover: outer12,
    category: 'outer'
  },
    {
    id: 'outer_7',
    name: 'Flow Outer',
    series: 'Code OT007',
    imageMain: outer13,
    imageHover: outer14,
    category: 'outer'
  },
    {
    id: 'outer_8',
    name: 'Flow Outer',
    series: 'Code OT008',
    imageMain: outer15,
    imageHover: outer16,
    category: 'outer'
  },
    {
    id: 'outer_9',
    name: 'Flow Outer',
    series: 'Code OT009',
    imageMain: outer17,
    imageHover: outer18,
    category: 'outer'
  },
    {
    id: 'outer_10',
    name: 'Flow Outer',
    series: 'Code OT010',
    imageMain: outer19,
    imageHover: outer20,
    category: 'outer'
  },

  // ===== SWEATER =====
 {
    id: 'sweater_1',
    name: 'Brukat Sweater',
    series: 'Code SW001',
    imageMain: sweater1,
    imageHover: sweater2,
    category: 'sweater'
  },
   {
    id: 'sweater_2',
    name: 'Brukat Sweater',
    series: 'Code SW002',
    imageMain: sweater3,
    imageHover: sweater4,
    category: 'sweater'
  },
   {
    id: 'sweater_3',
    name: 'Brukat Sweater',
    series: 'Code SW003',
    imageMain: sweater5,
    imageHover: sweater6,
    category: 'sweater'
  },
   {
    id: 'sweater_4',
    name: 'Brukat Sweater',
    series: 'Code SW004',
    imageMain: sweater7,
    imageHover: sweater8,
    category: 'sweater'
  },
   {
    id: 'sweater_5',
    name: 'Brukat Sweater',
    series: 'Code SW005',
    imageMain: sweater9,
    imageHover: sweater10,
    category: 'sweater'
  },
   {
    id: 'sweater_6',
    name: 'Brukat Sweater',
    series: 'Code SW006',
    imageMain: sweater11,
    imageHover: sweater12,
    category: 'sweater'
  },
   {
    id: 'sweater_7',
    name: 'Brukat Sweater',
    series: 'Code SW007',
    imageMain: sweater13,
    imageHover: sweater14,
    category: 'sweater'
  },
   {
    id: 'sweater_8',
    name: 'Brukat Sweater',
    series: 'Code SW008',
    imageMain: sweater15,
    imageHover: sweater16,
    category: 'sweater'
  },
   {
    id: 'sweater_9',
    name: 'Brukat Sweater',
    series: 'Code SW009',
    imageMain: sweater17,
    imageHover: sweater18,
    category: 'sweater'
  },
   {
    id: 'sweater_10',
    name: 'Brukat Sweater',
    series: 'Code SW010',
    imageMain: sweater19,
    imageHover: sweater20,
    category: 'sweater'
  },

  // ===== PANTS =====
 {
    id: 'pants_1',
    name: 'Brukat Pants',
    series: 'Code PT001',
    imageMain: pants1,
    imageHover: pants2,
    category: 'pants'
  },
   {
    id: 'pants_2',
    name: 'Brukat Pants',
    series: 'Code PT002',
    imageMain: pants3,
    imageHover: pants4,
    category: 'pants'
  },
   {
    id: 'pants_3',
    name: 'Brukat Pants',
    series: 'Code PT003',
    imageMain: pants5,
    imageHover: pants6,
    category: 'pants'
  },
   {
    id: 'pants_4',
    name: 'Brukat Pants',
    series: 'Code PT004',
    imageMain: pants7,
    imageHover: pants8,
    category: 'pants'
  },
   {
    id: 'pants_5',
    name: 'Brukat Pants',
    series: 'Code PT005',
    imageMain: pants9,
    imageHover: pants10,
    category: 'pants'
  },
   {
    id: 'pants_6',
    name: 'Brukat Pants',
    series: 'Code PT006',
    imageMain: pants11,
    imageHover: pants12,
    category: 'pants'
  },
   {
    id: 'pants_7',
    name: 'Brukat Pants',
    series: 'Code PT007',
    imageMain: pants13,
    imageHover: pants14,
    category: 'pants'
  },
   {
    id: 'pants_8',
    name: 'Brukat Pants',
    series: 'Code PT008',
    imageMain: pants15,
    imageHover: pants16,
    category: 'pants'
  },
   {
    id: 'pants_9',
    name: 'Brukat Pants',
    series: 'Code PT009',
    imageMain: pants17,
    imageHover: pants18,
    category: 'pants'
  },
   {
    id: 'pants_10',
    name: 'Brukat Pants',
    series: 'Code PT010',
    imageMain: pants19,
    imageHover: pants20,
    category: 'pants'
  },

  // ===== SKIRT =====
  {
    id: 'skirt_1',
    name: 'Brukat Skirt',
    series: 'Code SK001',
    imageMain: skirt1,
    imageHover: skirt2,
    category: 'skirt'
  },
   {
    id: 'skirt_2',
    name: 'Brukat Skirt',
    series: 'Code SK002',
    imageMain: skirt3,
    imageHover: skirt4,
    category: 'skirt'
  },
   {
    id: 'skirt_3',
    name: 'Brukat Skirt',
    series: 'Code SK003',
    imageMain: skirt5,
    imageHover: skirt6,
    category: 'skirt'
  },
   {
    id: 'skirt_4',
    name: 'Brukat Skirt',
    series: 'Code SK004',
    imageMain: skirt7,
    imageHover: skirt8,
    category: 'skirt'
  },
   {
    id: 'skirt_5',
    name: 'Brukat Skirt',
    series: 'Code SK005',
    imageMain: skirt9,
    imageHover: skirt10,
    category: 'skirt'
  },
   {
    id: 'skirt_6',
    name: 'Brukat Skirt',
    series: 'Code SK006',
    imageMain: skirt11,
    imageHover: skirt12,
    category: 'skirt'
  },
   {
    id: 'skirt_7',
    name: 'Brukat Skirt',
    series: 'Code SK007',
    imageMain: skirt13,
    imageHover: skirt14,
    category: 'skirt'
  },
   {
    id: 'skirt_8',
    name: 'Brukat Skirt',
    series: 'Code SK008',
    imageMain: skirt15,
    imageHover: skirt16,
    category: 'skirt'
  },
   {
    id: 'skirt_9',
    name: 'Brukat Skirt',
    series: 'Code SK009',
    imageMain: skirt17,
    imageHover: skirt18,
    category: 'skirt'
  },
   {
    id: 'skirt_10',
    name: 'Brukat Skirt',
    series: 'Code SK010',
    imageMain: skirt19,
    imageHover: skirt20,
    category: 'skirt'
  },

];
export const allProducts = category;