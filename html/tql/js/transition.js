
    function fn (ig){
      return document.getElementById(ig)
    };

  (function(){
      var box = document.querySelector('.box')
      var mask = fn('mask')
      var bigbox = fn('bigbox')
      var bigimg = fn('goodbigmg')

      box.onmouseover = function(){
          mask.style.display = 'block'
          bigbox.style.display = 'block'
      }

      box.onmouseout = function(){
          mask.style.display = 'none'
          bigbox.style.display = 'none'
      }

      box.onmousemove = function(e){
      e = e || window.event
      var longx = e.pageX - box.offsetLeft
      var longy = e.pageY - box.offsetTop
        
          longx = longx - mask.offsetWidth / 2
          longy = longy - mask.offsetHeight / 2

          longx = longx < 0 ? 0 : longx
          longy = longy < 0 ? 0 : longy
          longx = longx > box.offsetWidth - mask.offsetWidth ? box.offsetWidth - mask.offsetWidth : longx
          longy = longy > box.offsetHeight - mask.offsetHeight ? box.offsetHeight - mask.offsetHeight : longy

          mask.style.left = longx + 'px'
          mask.style.top = longy + 'px'
        
        var maskMax = box.offsetWidth - mask.offsetWidth;  
        var bigMax = bigimg.offsetWidth - bigbox.offsetWidth
        
        var bx = longx*bigMax/maskMax
        var by = longy*bigMax/maskMax
        bigimg.style.left = - bx + 'px'
        bigimg.style.top =  - by + 'px'
      }
  })();

    
    