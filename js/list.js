const listCon = document.querySelector('.list_con'),
        topBtn = document.querySelector('.top');

function topBtnClick(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
};
topBtn.addEventListener("click",topBtnClick);


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

