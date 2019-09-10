// var timer = null;
// timer = setInterval(() => {
//     console.log(1);
// })
! function($) {
    //渲染商品列表
    $.ajax({
        url: 'http://localhost/js1907/xiangmu1/php/taobaodata.php',
        dataType: 'json'
    }).done(function(piclist) {
        let $strhtml = '<ul>';
        $.each(piclist, function(index, value) {
            $strhtml += `
            <li>
                <a href="details.html?sid=${value.sid}">
                    <img src="${value.url}">
                    <h4>${value.titile}</h4>
                    <p>${value.price}</p>
                </a>
            </li>
            `;
        });
        $strhtml += '</ul>';

        $('.goodslist').html($strhtml);
    });
}(jQuery);