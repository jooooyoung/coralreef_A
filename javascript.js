document.addEventListener('DOMContentLoaded', startFn);

function startFn()
{
    //console.log("loaded!!!");

    let menu = document.querySelectorAll("#menus ul li"); //5개
    //console.log(menu);
    let contents = document.querySelectorAll("#content > section");
    console.log(contents);

    
    let scrollPos = 0;
    let targetScrollPos;
    let nowScrollPos = pageYOffset //현재위치값

    let scrollAni;

    console.log(nowScrollPos);

    window.addEventListener('scroll', scrollFn);

    function scrollFn()
    {
        nowScrollPos = pageYOffset
        scrollPos = nowScrollPos;
        //console.log(nowScrollPos);
    }


    for(let i = 0; i < menu.length; i++)
    {
        menu[i].addEventListener('click', 
        
        function()
        {
            let index = this.getAttribute('clickVal');
            //console.log(index);

            targetScrollPos = contents[index].offsetTop; //페이지의 현재어느위치에 있을지
            
            scrollAni = requestAnimationFrame(moveTo);
        }

        );
    }

    function moveTo()
    {
        scrollPos += (targetScrollPos - nowScrollPos) * 0.5;
        window.scroll(0, scrollPos);

        if(Math.abs(targetScrollPos - scrollPos) <= 1)
        {
            window.scroll;(0, targetScrollPos);
            cancelAnimationFrame(scrollAni);
        }
        else
        {
            scrollAni = requestAnimationFrame(moveTo);
        }
    } 
}

// 메뉴바 색상 고정 //
window.addEventListener('load', function() {
    var menuItems = document.querySelectorAll('#menulist li');
  
    menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
        menuItems.forEach(function(item) {
          item.classList.remove('active');
        });
        
        this.classList.add('active');
        var menuBar = document.getElementById('menuBar');
        menuBar.classList.add('active');
      });
    });
});

/*
var whiteCircle = document.querySelector('.white-circle');
var squareBox = document.querySelector('.square-box');

whiteCircle.addEventListener('click', function() {
  if (squareBox.style.display === 'none') {
    squareBox.style.display = 'block';
  } else {
    squareBox.style.display = 'none';
  }
});
*/