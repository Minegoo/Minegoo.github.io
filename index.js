

// const root = document.getElementById('root')

// //mount就是讲我们的App挂载到root这样一个根节点中去
// new Vue({ 
//     render: (h) => h(App) 

// }).$mount(root)
var ul = document.getElementsByTagName('ul')[0];
        ul.setAttribute('class', 'animation');
        var timer = setInterval(function () {
            ul.removeAttribute('class');
            setTimeout(function () {
                ul.setAttribute('class', 'animation');
            }, 200)

        }, 4000)
