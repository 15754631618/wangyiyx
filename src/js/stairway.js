let $loutinav = $('#loutinav'); //获取楼梯
let $loutinavli = $('#loutinav li');
let $louceng = $('#main .louti');
//1.拖动滚动条，显示隐藏楼梯

$(window).on('scroll', function() {
    let $topvalue = $(this).scrollTop(); //滚动条的top值
    if ($topvalue >= 800) {
        $loutinav.show();
    } else {
        $loutinav.hide();
    }

    //4.触发滚轮，对应的楼梯天类名active,获取每一个楼层的top值。
    $louceng.each(function(index, element) { //element:每一层楼也就是每一个#main .louti
        let $loucenttop = $(element).offset().top + $(element).height() / 2; //每个楼层的top值
        if ($loucenttop > $topvalue) { //楼层的top值>滚动条的top
            $loutinavli.eq(index).addClass('active').siblings().removeClass('active'); //给满足条件的第一个添加类。
            return false; //满足一次就终止循环
        }
    });
});
//2.左侧楼梯添加点击事件

$loutinavli.not('.last').on('click', function() {
    //当前的楼梯添加类active;
    $(this).addClass('active').siblings().removeClass('active');
    //获取每一个和当前楼梯对应的楼层的top值。
    let $top = $louceng.eq($(this).index()).offset().top //$(this).index():当前点击楼梯的li的索引
    $('html,body').animate({
        scrollTop: $top
    });
});

//3.回到顶部
$('.last').on('click', function() {
    $('html,body').animate({
        scrollTop: 0
    });
});