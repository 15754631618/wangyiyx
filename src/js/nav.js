// var jujia = {
//     // 夏凉好物: [{
//     //     img: 'aa',
//     //     title: '床上用品',
//     //     value: ['夏凉热卖', '主题床品', '北欧原木', '餐厨系列']
//     // }],
//     夏凉好物: ['夏凉热卖', '主题床品', '北欧原木', '餐厨系列'],
//     床上用品: ['床品件套', '被枕盖毯', '床垫床褥'],
//     家居饰品: ['抱枕靠垫', '家饰', '居家布艺'],
//     家具家装: ['客餐厅家具', '卧室家具', '办公书房家具', '小件家具', '灯具', '地毯窗帘'],
//     收纳日用: ['收纳', '晾晒除味', '毛巾浴巾', '居家拖鞋', '家庭医疗'],
//     厨房用品: ['锅具', '餐厨配件', '刀剪砧板'],
//     餐具水具: ['餐具', '水具杯壶', '茶咖酒具'],
//     宠物生活: ['宠物食品', '宠物用品']
// }
// var fushi = {
//     当季热销: ['夏凉热卖', '主题床品', '北欧原木', '餐厨系列'],
//     男装: ['床品件套', '被枕盖毯', '床垫床褥'],
//     女装: ['抱枕靠垫', '家饰', '居家布艺'],
//     居家内衣: ['客餐厅家具', '卧室家具', '办公书房家具', '小件家具', '灯具', '地毯窗帘'],
//     鞋靴: ['收纳', '晾晒除味', '毛巾浴巾', '居家拖鞋', '家庭医疗'],
//     箱包: ['锅具', '餐厨配件', '刀剪砧板'],
//     首饰配件: ['餐具', '水具杯壶', '茶咖酒具'],
//     系列特辑: ['宠物食品', '宠物用品']
// }
// $('.list').on('mouseover', function(ev) {
//     let str = this.getAttribute('name');
//     var element = ''
//     $.each(window[str], (i, val) => {
//         element += `<div style="float: left">
//                     <h3 class='aa'>${i}</h3>
//                     <ul>
//                 `
//         for (let i = 0; i < val.length; i++) {
//             element += `<li>${val[i]}</li>`
//         }
//         element += `</ul></div>`
//     })
//     console.log(element)
//     $('.hover-list').html(element).show()

// })
// $('.hover-list').on('mouseleave', () => {
//     $('.hover-list').hide()
// })


var jujia = {
    夏凉好物: [
        { src: 'https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png', title: '夏凉热卖' },
        { src: 'https://yanxuan.nosdn.127.net/5a165042f413da1d6a01a25de0a65952.png', title: '主题床品' },
        { src: 'https://yanxuan.nosdn.127.net/bef3b6ec3a1d1b8ec3476ec2d5aa7a3a.png', title: '北欧原木' },
        { src: 'https://yanxuan.nosdn.127.net/3fc9015f3ccebba3f34b06024b923a98.png', title: '餐厨系列' }
    ],
    床上用品: [
        { src: 'https://yanxuan.nosdn.127.net/8a1c3b2d2d713f7da64acacedebe47e8.png', title: '夏凉热卖' },
        { src: 'https://yanxuan.nosdn.127.net/8a1c3b2d2d713f7da64acacedebe47e8.png', title: '夏凉热卖' },
        { src: 'https://yanxuan.nosdn.127.net/8a1c3b2d2d713f7da64acacedebe47e8.png', title: '夏凉热卖' },
        { src: 'https://yanxuan.nosdn.127.net/8a1c3b2d2d713f7da64acacedebe47e8.png', title: '夏凉热卖' },
        { src: 'https://yanxuan.nosdn.127.net/8a1c3b2d2d713f7da64acacedebe47e8.png', title: '夏凉热卖' }
    ],
    家居饰品: [
        { src: 'https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png', title: '夏凉热卖' },
        { src: 'https://yanxuan.nosdn.127.net/5a165042f413da1d6a01a25de0a65952.png', title: '主题床品' },
        { src: 'https://yanxuan.nosdn.127.net/bef3b6ec3a1d1b8ec3476ec2d5aa7a3a.png', title: '北欧原木' },
        { src: 'https://yanxuan.nosdn.127.net/3fc9015f3ccebba3f34b06024b923a98.png', title: '餐厨系列' }
    ],
    夏凉好物D: [
        { src: 'https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png', title: '夏凉热卖' },
        { src: 'https://yanxuan.nosdn.127.net/5a165042f413da1d6a01a25de0a65952.png', title: '主题床品' },
        { src: 'https://yanxuan.nosdn.127.net/bef3b6ec3a1d1b8ec3476ec2d5aa7a3a.png', title: '北欧原木' },
        { src: 'https://yanxuan.nosdn.127.net/3fc9015f3ccebba3f34b06024b923a98.png', title: '餐厨系列' }
    ],
    床上用品S: [
        { src: 'https://yanxuan.nosdn.127.net/8a1c3b2d2d713f7da64acacedebe47e8.png', title: '夏凉热卖' },
        { src: 'https://yanxuan.nosdn.127.net/8a1c3b2d2d713f7da64acacedebe47e8.png', title: '夏凉热卖' },
        { src: 'https://yanxuan.nosdn.127.net/8a1c3b2d2d713f7da64acacedebe47e8.png', title: '夏凉热卖' },
        { src: 'https://yanxuan.nosdn.127.net/8a1c3b2d2d713f7da64acacedebe47e8.png', title: '夏凉热卖' },
        { src: 'https://yanxuan.nosdn.127.net/8a1c3b2d2d713f7da64acacedebe47e8.png', title: '夏凉热卖' }
    ],
    家居饰品D: [
        { src: 'https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png', title: '夏凉热卖' },
        { src: 'https://yanxuan.nosdn.127.net/5a165042f413da1d6a01a25de0a65952.png', title: '主题床品' },
        { src: 'https://yanxuan.nosdn.127.net/bef3b6ec3a1d1b8ec3476ec2d5aa7a3a.png', title: '北欧原木' },
        { src: 'https://yanxuan.nosdn.127.net/3fc9015f3ccebba3f34b06024b923a98.png', title: '餐厨系列' }
    ]
}

// $.each(jujia, (index, val) => {
//     let element = `<div style=float-left>
//     <h3>${i}</h3>
//     `
//     let str = '';
//     val.forEach(e => {
//         element += `<div>
//     < img src=${e.src} />
//     <span>${e.title}</span>
//     </div>`
//     })
//     element += '</div>'
// })



$('.list').on('mouseover', function(ev) {
    let str = this.getAttribute('name');
    var element = ''
    $.each(window[str], (i, val) => {
        element += `<div style="float: left">
                    <h3 class='aa'>${i}</h3>
                    <ul>
                `

        val.forEach(e => {
            element += `<li>
                <img src='${e.src}' />
                <span>${e.title}</span>
                </li>`
        })
        element += '</ul></div>'
    })
    $('.hover-list').html(element).show()

})
$('.hover-list').on('mouseleave', () => {
    $('.hover-list').hide()
})