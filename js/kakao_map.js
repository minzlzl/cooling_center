const listCon = document.querySelector('.list_con')

fetch('./js/db/data.json')
.then(res=>{
  return res.json();
})
.then(data=>{
  // console.log(data.DATA);
  data.DATA.forEach(function(v){
    listCon.innerHTML = `
                                  <ul>
                                    <li>${v.r_area_nm}</li>
                                    <li>${v.r_detl_add}</li>
                                    <li>${v.dt_start}</li>
                                    <li>${v.dt_end}</li>
                                  </ul>
                                  `
  });
});


var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);    