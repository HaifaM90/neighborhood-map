# neighborhood-map
this project is build using [Knockout](http://knockoutjs.com/ "knockout")  js framework which have strong points on filtering. also it's has integration with google maps api and foursquare api for more information

## Component  

1. places.js contain the following
..1. foursquare api clientId & clientSecret values which related to my account
..2. array of my favs places
⋅⋅3. places menu slider function.

2. map.js contain the following
⋅⋅1. initMap function to draw our map.
⋅⋅2. add marker function which responsible for click listener and animation
⋅⋅3. getMoreInfo function which async function to use ajax and connect to foursquare api to get more information related to specific place

3. app.js , it's the ModelView of Knockout and contain the following
⋅⋅1.  observable array of locations
⋅⋅2. computed function for filtering
