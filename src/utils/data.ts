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
  imageMain:
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
  imageHover:
  'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=80'
},
{
  id: 'prod_1',
  name: 'Cream Bordir Dress',
  series: 'Code DRLFY 6080',
  imageMain:
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80',
  imageHover:
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80'
},
{
  id: 'prod_2',
  name: 'Seemivest Bordir Flow Dress',
  series: 'Code DRYN 6357',
  imageMain:
  'https://images.unsplash.com/photo-1550639525-c97d455acf70?w=600&q=80',
  imageHover:
  'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=600&q=80'
},
{
  id: 'prod_3',
  name: '3 Pocky Top',
  series: 'Code TNVX 8307',
  imageMain:
  'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=600&q=80',
  imageHover:
  'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&q=80'
}];


export const ourPicks: Product[] = [
{
  id: 'prod_4',
  name: 'Flowcolour Cream Blouse',
  series: 'Code TPSHRL 9157',
  price: 'IDR 128.000',
  imageMain:
  'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80',
  imageHover:
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&q=80'
},
{
  id: 'prod_5',
  name: 'Flow Pearlbelt Dress',
  series: 'Code DRJSW 00018',
  price: 'IDR 240.000',
  imageMain:
  'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=600&q=80',
  imageHover:
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80'
},
{
  id: 'prod_6',
  name: 'Twocolors Bordir Tunic',
  series: 'Code DRYRI 9300',
  price: 'IDR 195.000',
  imageMain:
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
  imageHover:
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80'
},
{
  id: 'prod_7',
  name: 'Flow Pattern Dress',
  series: 'Code DRGNT 00137',
  price: 'IDR 185.000',
  imageMain:
  'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=80',
  imageHover:
  'https://images.unsplash.com/photo-1550639525-c97d455acf70?w=600&q=80'
},
{
  id: 'prod_8',
  name: 'Nudes Vinesbordir Tunic',
  series: 'Code TPBAP 3178',
  price: 'IDR 146.000',
  imageMain:
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
  imageHover:
  'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=600&q=80',
  isSoldOut: true
},
{
  id: 'prod_9',
  name: 'Flowlace Shirt',
  series: 'Code TPMGR 00020',
  price: 'IDR 149.000',
  imageMain:
  'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=600&q=80',
  imageHover:
  'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80'
},
{
  id: 'prod_10',
  name: 'Brukat Skirt',
  series: 'Code TVAVM 5069',
  price: 'IDR 139.000',
  imageMain:
  'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&q=80',
  imageHover:
  'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=600&q=80'
},
{
  id: 'prod_11',
  name: 'Semiouter Flowdress',
  series: 'Code DRYR 2979',
  price: 'IDR 215.000',
  imageMain:
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&q=80',
  imageHover:
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80'
}];


export const allProducts = [...bestsellers, ...ourPicks];

export const stores = [
{
  city: 'Madiun',
  address: 'Jl. Cokroaminoto No.35',
  image:
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
  mapUrl: 'https://share.google/icXN4Kfm29ZtQmfe6'
},
{
  city: 'Ponorogo',
  address: 'Jl. HOS Cokroaminoto No.70',
  image:
  'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80',
  mapUrl: 'https://maps.app.goo.gl/cesmipxdXQbeGe448'
},
{
  city: 'Jombang',
  address: 'Jl. Gus Dur No.114',
  image:
  'https://images.unsplash.com/photo-1581515302716-698602b33480?w=600&q=80',
  mapUrl: 'https://maps.app.goo.gl/koiHEDZ9woaLkwkB8'
},
{
  city: 'Kediri',
  address: 'Jl. Suprapto No.17',
  image:
  'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=600&q=80',
  mapUrl: 'https://maps.app.goo.gl/L4HYbmqDQy3TpDNP7'
},
{
  city: 'Nganjuk',
  address: 'Jl. Yos Sudarso No.25',
  image:
  'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80',
  mapUrl: 'https://maps.app.goo.gl/aFenaRQ9SWj9DpiA8'
},
{
  city: 'Blitar',
  address: 'Jl. Veteran No.119',
  image:
  'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=600&q=80',
  mapUrl: 'https://maps.app.goo.gl/mZ1jqhJDTRjxUPtS7'
},
{
  city: 'Tulungagung',
  address: 'Jl. Pangeran Diponegoro',
  image:
  'https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=600&q=80',
  mapUrl: 'https://maps.app.goo.gl/VRngzXrB97GWi8Zy6'
},
{
  city: 'Sidoarjo',
  address: 'Jl. Gatot Subroto',
  image:
  'https://images.unsplash.com/photo-1555529902-5261145633bf?w=600&q=80',
  mapUrl: 'https://maps.app.goo.gl/tDFkYco1R1EPB79r8'
}];