// JavaScript Document
// 35.660913, 139.722709

function initialize() {
    "use strict";
    var latlng = new google.maps.LatLng(35.660913,139.722709);
    var myOptions = {
      zoom: 18, /*拡大比率*/
      center: latlng, /*表示枠内の中心点*/
      mapTypeId: google.maps.MapTypeId.ROADMAP/*表示タイプの指定*/
    };
    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
  
   var styleOptions = [
    {
      "stylers":  [
        { "invert_lightness": true },
        { "saturation": -56 },
        { "hue": "#ff002b" },
        { "lightness": 16 }
      ]
    }
  ];
    var styledMapOptions = { name: 'Pieere Carre' };
    var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
    map.mapTypes.set('sample', sampleType);
    map.setMapTypeId('sample');
    
    /*マーカーの設置*/
    var markerOptions = {
      position: latlng,/*表示場所と同じ位置に設置*/
      map: map,
      title: '株式会社WEB企画'/*マーカーのtitle*/
    };
    var marker = new google.maps.Marker(markerOptions);
  }
  window.addEventListener("load",initialize());
  