const listCon = document.querySelector('.list_con');
const tabBtn = document.querySelectorAll('.tab ul li button'),
        topBtn = document.querySelector('.top');

let allData; // 모든 데이터를 저장할 변수

// 데이터를 불러와서 화면에 표시하는 함수
function displayData(data) {
  listCon.innerHTML = ''; // 기존 데이터 초기화

  data.forEach(function (v) {
    listCon.innerHTML += `
      <ul>
        <li>${v.r_area_nm}</li>
        <li>${v.r_detl_add}</li>
        <li>${v.dt_start}</li>
        <li>${v.dt_end}</li>
      </ul>
    `;
  });
}

// 데이터를 불러오고 초기 화면에 강남구 데이터만 표시
fetch('./js/db/data.json')
  .then(res => res.json())
  .then(data => {
    allData = data.DATA; // 모든 데이터 저장
    
    // 강남구 데이터만 필터링하여 표시
    const gangnamData = allData.filter(function (item) {
      return item.r_detl_add.includes("강남구");
    });

    displayData(gangnamData); // 강남구 데이터 표시
  });

// 탭 버튼 클릭 이벤트 처리
tabBtn.forEach(function (v) {
  v.addEventListener('click', function () {
    tabBtn.forEach(function (vv) {
      vv.classList.remove('btn');
    });

    v.classList.add('btn'); // 클릭한 버튼에 'btn' 클래스 추가

    const selectedArea = v.textContent; // 클릭한 버튼의 텍스트 (예: "강남구")

    // 선택한 지역이 데이터의 'r_area_nm' 또는 'r_detl_add' 중 하나에 포함되어 있는 데이터 필터링
    const filteredData = allData.filter(function (item) {
      return item.r_detl_add.includes(selectedArea);
    });

    displayData(filteredData); // 필터링된 데이터 표시
  });
});

function topBtnClick(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
};
topBtn.addEventListener("click",topBtnClick);