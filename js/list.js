const elUl = document.querySelector('.list_con ul');

fetch('./js/db/data.json')
.then(res=>{
  return res.json();
})
.then(data=>{
  // console.log(data.DATA);
  data.DATA.forEach(function(v){
    elUl.innerHTML = `
                            <li>${v.r_area_nm}</li>
                            <li>${v.r_detl_add}</li>
                            <li>${v.dt_start}</li>
                            <li>${v.dt_end}</li>
                            `
  });
});

