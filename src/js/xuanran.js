// const subquestion = document.querySelector('#subquestion'); //问题提交按钮
// const title = document.querySelector('#title'); //标题
// const description = document.querySelector('#description') //问题描述
// const resolve = document.querySelector('#resolve')

// //点击提交问题按钮->数据传给后端
// subquestion.onclick = function() {
//         //判断值是否为空
//         if (title.value !== '' && description.value !== '') { //都不等于空，用ajax传值
//             ajax({
//                 type: 'post',
//                 url: 'http://localhost/js1907/lianxi/php/getdata.php',
//                 data: { //发给后端(封装的ajax)
//                     question_title: title.value,
//                     question_description: description.value,
//                     question_resolve: resolve.value,
//                 },
//             }).then(function() {
//                 //location.reload(true)
//             });
//         } else {
//             alert('标题和描述不能为空')
//         }
//     }
//渲染到页面

//     ajax({
//         type: 'get',
//         url: 'http://localhost/js1907/xiangmu/project.html',
//         detaType: 'json',
//     }).then(function(d) {
//         let strhtml = '';
//         for (let value of d) {
//             strhtml += `
//         <div class="pic-one"><img src="${value.imgurl}" alt=""></div>
//             `;
//         }
//         questionlist.innerhtml += strhtml; //赋值
//         $('[ pic-one]').popover(); //获取元素，添加popover效果
//     })

// $.ajax({
//     type: "get",
//     url: "http://localhost/js1907/xiangmu/php/data.php",
//     data: "json",
//     success: function(d) {
//         let strhtml = '';
//         for (let value of d) {
//             strhtml += `
//                         <div class="pic-one"><img src="${value.imgurl}" alt=""></div>
//                             `;
//         }
//         $('pic').append(strhtml); //获取元素，添加popover效果
//     }
// });


// $.ajax({
//     type: 'get',
//     url: 'http://localhost/js1907/xiangmu1/php/data.php',
//     dataType: 'json',
//     success: function(d) {
//         var html1 = '';
//         // console.log(d)
//         $.each(d, function(index, value) {
//             // console.log(value)
//             if (value.value == "one") {
//                 html1 += `
//                 <div class="pic-one pic-1 wenan-style"><img src="${value.imgurl}" alt=""></div>
//                 `;
//             }
//         });
//         $('.pic').append(html1);
//     }
// });


// $.ajax({
//     type: 'get',
//     url: 'http://localhost/js1907/xiangmu1/php/data.php',
//     dataType: 'json',
//     success: function(d) {
//         var html1 = '';
//         // console.log(d)
//         $.each(d, function(index, value) {
//             // console.log(value)
//             if (value.value == "xuan") {
//                 html1 += `
//                 <div class="pic-one pic-o"><img src="${value.imgurl}" alt=""></div>
//                 `;
//             }
//         });
//         $('.pic').append(html1);
//     }
// });





// $.ajax({
//     type: 'get',
//     url: 'http://localhost/js1907/xiangmu1/php/data.php',
//     dataType: 'json',
//     success: function(d) {
//         var html1 = '';
//         // console.log(d)
//         $.each(d, function(index, value) {
//             // console.log(value)
//             if (value.value == "small") {
//                 html1 += `
//                 <div class="pic-two pic-c">
//                                 <img src="${value.imgurl}" alt="">
//                             </div> 
//                 `;
//             }
//         });
//         $('.pic').append(html1);
//     }
// });



// d = d.filter（e=>e.imgurl.indexOf('?')!==-1）
// let $sid = location.search.substring(1).split('=')[1];



let $sid = location.search.substring(1).split('=')[1];
$.ajax({
    url: 'http://localhost/js1907/xiangmu1/php/data.php',
    data: {
        sid: $sid
    },
    dataType: 'json'
}).done(function(d) {
    var html = ''
    $.each(d, function(index, value) {
        html += `<li>
        <a href="http://localhost/js1907/xiangmu1/xiangqing.html?sid=${value.sid}"><img src="${value.imgurl.split(',')[0]}" alt="">${value.title}</a>
        <p>${value.price}</p>
    </li>`
    });
    $('.louti ul').html(html);
});

// 登录注册
! function() {
    // if ($.cookie('cookieusername') && $.cookie('cookiepassword')) {
    //     var name = $.cookie('cookieusername');
    //     var pass = $.cookie('cookiepassword');
    //     $('.text').val(name);
    //     $('.pass').val(pass);
    //     $('.chenkbox').prop('checked', true)
    // }
    // 上面是检测cookie存不存在然后确认选中框
    $('.btn-primary').on('click', function() {
            // console.log($('.user').val(), $('.pass').val());
            // return;
            $.ajax({
                type: 'post',
                dataType: 'json',
                // contentType: 'application/x-www-form-urlencoded;charset=utf-8',
                url: 'http://localhost/js1907/xiangmu1/php/denglu.php',
                data: {
                    user: $('.user').val(),
                    pass: $('.pass').val()
                }
            }).done(function(data) {
                console.log(data, 999)
                    // if (!data) {
                    //     alert('账号或密码错误')
                    // } else {
                    //     if ($('.chenkbox').is(':checked')) {
                    //         $.cookie('cookieusername', $('.text').val(), { expires: 10 })
                    //         $.cookie('cookiepassword', $('.pass').val(), { expires: 10 })
                    //     } else {
                    //         $.cookie('cookieusername', null, { expires: -1 });
                    //         $.cookie('cookiepassword', null, { expires: -1 });
                    //     }
                    //     location.href = 'http://10.31.161.226/Aproject/src/index.html';
                    // }
            })
        })
        // 上面是提交正确和失败的样式；；
    $('.login-mode-icon a').on('click', function() {
        $(this).hide().siblings('.login-mode-icon a').show();
        $('.information-top').eq($(this).index()).hide().siblings('.information-top').show();
        $('.login-mode-title .title').eq($(this).index()).hide().siblings('.login-mode-title .title').show();
    })


}()

//