//bring my places
var clientId= "2IVBS3CZ2D4P5HOADKAT22XW2Y2SRA1UGSQVP5YWTKW4F41Q";
var clientSecret ="VVP1A5PIHN5IAL3AGPPILHCWIH1VTTO1SWGDP0FXFZKTOJ13";

var places = [{
  // 1st
  name: 'Carrefour Exit 5',
  id: '4d3058737791224b942ad042',
  cords: {
    lat: 24.771426,
    lng: 46.668536
  },
  marker: null
},
{
  // 2ed
  name: 'Tea Club',
  id: '55c521c5498ec3041f3e2377',
  cords: {
    lat: 24.790296,
    lng: 46.6586259
  },
  marker: null
} ,
{
  // 3ed
  name: 'Ladies Fitness Time',
  id: '58f720b2772fbc40c9d9053d',
  cords: {
    lat: 24.773690,
    lng: 46.666970
  },
  marker: null
},
{
  // 4th
  name: 'Caribou Coffee',
  id: '4b746318f964a5204ed92de3',
  cords: {
    lat: 24.746051,
    lng: 46.660231
  },
  marker: null
} ,
{
  // 5th
  name: 'Tamkeen Technologies',
  id: '5250ec7c11d23ec08a085a5d',
  cords: {
    lat: 24.708144,
    lng: 46.678583
  },
  marker: null
},
{
  // 6th
  name: 'BIOTIC',
  id: '582cb636001d870b94082d1b',
  cords: {
    lat: 24.736227,
    lng: 46.694924
  },
  marker: null
}
];

$('.menu-icon-link').on('click', function() {
  $('body').toggleClass('hidden-part');
});

var fallBack = function() {
    $('.message').html('There is somthing wents wrong try again later');
};
