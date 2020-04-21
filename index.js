

// const root = document.getElementById('root')

// //mount就是讲我们的App挂载到root这样一个根节点中去
// new Vue({ 
//     render: (h) => h(App) 

// }).$mount(root)
var ul = document.getElementsByTagName('ul')[0];
        ul.setAttribute('class', 'animation');
        var timer0 = setInterval(function () {
            ul.removeAttribute('class');
            setTimeout(function () {
                ul.setAttribute('class', 'animation');
            }, 200)

        }, 4000)
        // 旋转盒子
        init();
        function init() {
            var oimg = document.getElementsByClassName('box')[0].children;
            // var oimg = box.children()
            var len = oimg.length;
            console.log("len",oimg)
            var odeg = 360 / len;
            for (var i = 0; i < len; i++) {
                oimg[i].style.transform = 'rotateY(' + i * odeg + 'deg) translateZ(300px)';
                oimg[i].style.transition = 'transform 1s ' + (len - 1 - i) * 0.1 + 's';
            }
        }
        var obody = document.getElementsByTagName('body')[0];
        var obox = document.getElementsByClassName('box')[0];
        var movX = -10;
        var movY = 0;
        var timer;
        var disX;
        var disY;
        obody.onmousedown = function (e) {
            clearInterval(timer);
            var e = e || window.event;
            var firX = e.clientX;
            var firY = e.clientY;
            var lasX,
                lasY;


            obody.onmousemove = function (e) {
                var e = e || window.event;
                lasX = e.clientX;
                lasY = e.clientY;
                disY = lasX - firX;
                disX = lasY - firY;
                movX -= disX * 0.2;
                movY += disY * 0.2;
                obox.style.transform = 'rotateX(' + movX + 'deg) rotateY(' + movY + 'deg)';
                obox.style.cursor = 'move';
                firX = lasX;
                firY = lasY;
            }
            obody.onmouseup = function () {
                this.onmousemove = '';
                timer = setInterval(function () {
                    disX *= 0.98;
                    disY *= 0.98;
                    movX -= disX * 0.2;
                    movY += disY * 0.2;
                    obox.style.transform = 'rotateX(' + movX + 'deg) rotateY(' + movY + 'deg)'
                    console.log(11);
                    if (Math.abs(disX) < 0.1 && Math.abs(disY) < 0.1) {
                        clearInterval(timer);
                    }
                }, 20);

            }

            return false;
        }
