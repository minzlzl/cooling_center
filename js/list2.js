const listCon = document.querySelector('.list_con'),
        tabBtn = document.querySelectorAll('.tab ul li button');

fetch('./js/db/data.json')
.then(res=>{
  return res.json();
})
.then(data=>{
  // console.log(data.DATA);
  data.DATA.forEach(function(v){
    listCon.innerHTML += `
                                  <ul>
                                    <li>${v.r_area_nm}</li>
                                    <li>${v.r_detl_add}</li>
                                    <li>${v.dt_start}</li>
                                    <li>${v.dt_end}</li>
                                  </ul>
                                  `
  });
});


tabBtn.forEach(function(v){
  v.onclick = function(){
  tabBtn.forEach(function(vv){
    vv.classList.remove('btn');
  });

  // 클릭한 버튼에만 'btn' 클래스를 추가
  v.classList.add('btn');
  };
});