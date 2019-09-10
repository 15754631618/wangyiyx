// window.onload = function fn() {
const $banner = $('.banner'); //大盒子
const $img = $('.scroll .img'); //移动的图片
const $btn = $('.btn span'); //按钮
const $prev = $('.prev'); //左箭头
const $next = $('.next'); //右箭头
let $qindex = 0; //前一个索引
let $index = 0; //当前索引


//按钮点击事件
$btn.on('click', function() {
    $index = $(this).index(); //当前点击的索引赋值给当前索引
    $(this).addClass('hover').siblings().removeClass('hover'); //原点加hover方法 显示、隐藏
    if ($index > $qindex) {
        $img.eq($index).css({
            left: $img.width()
        })
        $img.eq($index).animate({
            left: 0
        })
        $img.eq($qindex).animate({
            left: -$img.width()
        })
        $qindex = $index;
    } else if ($index < $qindex) {
        $img.eq($index).css({
            left: -$img.width()
        })
        $img.eq($index).animate({
            left: 0
        })
        $img.eq($qindex).animate({
            left: $img.width()
        })
        $qindex = $index;
    }
});


//左右箭头显示隐藏
$banner.hover(function() {
    $('.next,.prev').show()
}, function() {
    $('.next,.prev').hide();
})

//右侧按钮
$next.on('click', function() {
    if ($index === 5) {
        $index = 0;
        $btn.eq($index).addClass('hover').siblings().removeClass('hover');
        $img.eq($index).css({
            left: $img.width()
        })
        $img.eq($index).animate({
            left: 0
        })
        $img.eq($qindex).animate({
            left: -$img.width()
        })
        $qindex = $index
    } else if ($index < 5) {
        $index++;
        $btn.eq($index).addClass('hover').siblings().removeClass('hover');
        $img.eq($index).css({
            left: $img.width()
        })
        $img.eq($index).animate({
            left: 0
        })
        $img.eq($qindex).animate({
            left: -$img.width()
        })
        $qindex = $index
    }

})

//左侧按钮
$prev.on('click', function() {
        if ($index === 0) {
            $index = 5;
            $btn.eq($index).addClass('hover').siblings().removeClass('hover');
            $img.eq($index).css({
                left: $img.width()
            })
            $img.eq($index).animate({
                left: 0
            })
            $img.eq($qindex).animate({
                left: -$img.width()
            })
            $qindex = $index
        } else if ($index > 0) {
            $index--;
            $btn.eq($index).addClass('hover').siblings().removeClass('hover');
            $img.eq($index).css({
                left: $img.width()
            })
            $img.eq($index).animate({
                left: 0
            })
            $img.eq($qindex).animate({
                left: -$img.width()
            })
            $qindex = $index
        }

    })
    // }