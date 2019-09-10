!function (){
   var id = location.search.substring(1).split('=')[1];
    var sidarr=[];
var numarr=[];
$.ajax({
    url: 'http://localhost/js1907/xiangmu1/php/xiangqingye.php',
    dataType: 'json',
    data:{sid:id},
    success: function(d) {
      
       var arr = d.imgurl.split(',')
        var html = '';
        $(".xiao").attr("src", arr[0])
        $(".da").attr("src", arr[0])
        $(".price").html(`￥${d.price}`)
        $(".title").html(d.title)
        $.each(arr, function(index, value) {
            // console.log(value.imgurl.split(",").join(''));
            html += `<li>
            <img src="${value}" alt="">
        </li>`
        });

        // console.log(d)
        $('#list ul').append(html);
    }
});


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

function cookie(){
    if($.cookie('gouwusid') && $.cookie('gouwunum')){
        sidarr=$.cookie('gouwusid').split(',');
        numarr=$.cookie('gouwunum').split(',');
    }
 }
 // 上面是获取cookie函数
 
 
 $('.gouwuche').on('click',function(ev){
    //  console.log(ev)
    // location.reload(true);
    var num=parseInt($('.num input').val());
    cookie()
    if($.inArray(id,sidarr)!=-1){
        var linshi=parseInt(numarr[$.inArray(id,sidarr)]);
        numarr[$.inArray(id,sidarr)]=num+linshi;
        $.cookie('gouwunum',numarr,{expires:10})
    }else{
        sidarr.push(id);
        numarr.push(num)
        $.cookie('gouwusid',sidarr.toString(),{expires:10});
        $.cookie('gouwunum',numarr.toString(),{expires:10})
    }
 })

 
 $('.jia').on('click', ev => { //加
    cookie()
    let val = Number($('#count').val());
    val++
    $('#count').val(val)
});
$('.jian').on('click', ev => { //减
    let val = Number($('#count').val());
    val--
    if (val <= 1) {
        val = 1
    }
    $('#count').val(val)
})
}()
