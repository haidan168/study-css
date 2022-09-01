const selectDiv = document.getElementsByClassName("select")[0];
document.getElementsByClassName("select")[0].addEventListener('click',(e) => {
  const option = document.getElementsByClassName("select-options")[0];
  if(e.target.nodeName === 'DIV'){   
    if(option.style.display === 'inline'){
      option.style.display = 'none';
    }else{
      option.style.display = 'inline';
    }
  }
  if(e.target.nodeName === 'LI'){
    const p = document.getElementsByClassName('selected-val')[0];
    p.innerText = e.target.innerText;
    option.style.display = 'none';
  }
});
