!function(){



    // var id=location.search.substring(1).split('=')[1];
    var sidarr=[];
    var numarr=[];

        if($.cookie('gouwusid') && $.cookie('gouwunum')){
            sidarr=$.cookie('gouwusid').split(',');
            numarr=$.cookie('gouwunum').split(',');
            $('#empty-box').hide();
            $('.have').show();
            $.each(sidarr,function(index,value){
                ajax(value,numarr[$.inArray(value,sidarr)])
            })
        }else{
            $('#empty-box').show();
            $('.have').hide();
        }
     // 上面是获取cookie函数
    function ajax(s,n){
        var clone=$('.every-list').clone(true,true);
        $.ajax({
            url:'http://localhost/js1907/xiangmu1/php/data.php',
            dataType:'json'
        }).done(function(data){
            $.each(data,function(index,value){
                if(s==value.sid){
                    clone.attr('sid',s);
                    clone.find('.row-img img').attr('src',value.imgurl.split(',')[0]);
                    clone.find('.row-name .name').html(value.title);
                    clone.find('.row-3 .xianshijia').html(value.price);
                    clone.find('.fn-count-tip input').val(n);
                    clone.find('.row-4 .red').html((value.price*n).toFixed(2));
                    clone.show();
                    $('.table-box').append(clone);
                    jiesuan()
                }  
            }) 
        })
    }
    // 上面是cook取数据渲染

    $('.table-box').on('input','.text',function(ev){
        var reg=/^\d+$/g;
        if(reg.test($(this).val())){
        }
        else{
            $(this).val(1)
        }
        xiaojie($(this))
        gaicookie();
    })
    // 键盘事件


    $('.table-box').on('blur','.text',function(ev){
        if(ev.target.className=='text'){
            if($(this).val()==""){$(this).val(1)}
            xiaojie($(this));
            gaicookie();
        }
    })
    // 表单移除焦点事件

    $('.piliangdelete').on('click',function(){
        location.reload(true)
        $('.table-box .xuankuang:visible:checked').each(function(index,value){
            var thissid=$(value).parents('.every-list').attr('sid')
            $(value).parents('.every-list').remove();
            shanchu(thissid)
        })
        jiesuan()
    })


    // 上面是更改表单值得时候的事件函数
    
    $('.table-box').on('click','.delete',function(ev){
        location.reload(true)
        if(ev.target.className=='delete')
        var thissid=$(this).parents('.every-list').attr('sid')
        $(this).parents('.every-list').remove();
        shanchu(thissid)
        jiesuan();
    })
    // 点击右侧删除按钮删除某一项数据

    $('.table-box').on('click','.jia',function(ev){
        if(ev.target.className=='jia'){
            var text=$(this).parents('.every-list').find('.text')
            var a=text.val()
            a++;
            text.val(a);
            if(a==99){text.val(99)};
            xiaojie($(this)); 
            jiesuan();
            gaicookie();
        } 
    });

    // 加箭头点击文本框数量加1

    $('.table-box').on('click','.jian',function(ev){
        if(ev.target.className=='jian'){
            var text=$(this).parents('.every-list').find('.text');
            var a=text.val();
            a--;
            text.val(a);
            if(a<=1){text.val(1)};
            xiaojie($(this));
            jiesuan();
            gaicookie();
        }  
    });
    // 加箭头点击文本框数量减1


    function shanchu(thissid){
       var newsidarr=$.grep(sidarr,function(n,i){return n!=thissid})
       var newnumarr=$.grep(numarr,function(n,i){return i!=$.inArray(thissid,sidarr)})
       console.log(newsidarr)
       console.log(newnumarr)
       $.cookie('gouwusid', newsidarr.toString(),{expires:10});
       $.cookie('gouwunum', newnumarr.toString(),{expires:10})
    }
    // 删除cookie数据函数

    function gaicookie(){
        var sidarr=[];
        var numarr=[];
        $('.every-list:visible').each(function(index,value){
            sidarr.push($(this).attr('sid'))
            numarr.push($(this).find('.text').val())
            })
        $.cookie('gouwusid', sidarr.toString(),{expires:10});
        $.cookie('gouwunum', numarr.toString(),{expires:10})
    }
   // 更改cookie数据函数




    function xiaojie(is){
        var num=$(is).parents('.every-list').find('.text').val();
        var danjia=$(is).parents('.every-list').find('.xianshijia').html();
        $(is).parents('.every-list').find('.row-4 .red').html((num*danjia).toFixed(2));
        jiesuan()
    }
    // 右侧每一项的小结算

    $('#qingdan').on('change','.xuankuang',function(ev){
        var name=$(this).parents('li').attr('class');
        var each=$('#qingdan .xuankuang:visible').each(function(index,value){$(this)})
        if(name=='title-1'||name=='f1'){
            if($(this).is(':checked')){
                $('.jisuan-main .xuankuang').prop('checked',true)
                each.prop('checked',true)
            }else{
                $('.jisuan-main .xuankuang').prop('checked',false)
                each.prop('checked',false)
            }
        }else if($('.table-box .xuankuang:visible').length==$('.table-box .xuankuang:visible:checked').length){
                $('.jisuan-main .xuankuang').prop('checked',true)
                $('#qingdan .xuankuang:visible').each(function(index,value){$(this)}).prop('checked',true)
            }else{
                $('.jisuan-main .xuankuang').prop('checked',false)
                $('#qingdan .xuankuang:visible').not($('.table-box .xuankuang:visible')).prop('checked',false)
            }
            jiesuan() 
    })

    $('.jisuan-main .xuankuang').on('change',function(){
        if($(this).prop('checked')){
            $('#qingdan .xuankuang:visible').prop('checked',true)
        }else{
            $('#qingdan .xuankuang:visible').prop('checked',false) 
        }

        jiesuan() 
    })

    //全选框控制


    function jiesuan(){
        var jianshu=0;
        var heji=0;
        $('.every-list:visible').each(function(index,value){
            // console.log($('.every-list:visible').length)
            if($(value).find('.check').prop('checked')){
                var number=Number(($(value).find('.row-4 .red').html()));
                heji+=number;
                
                var inputnum=parseInt($(value).find('.text').val());
                jianshu+=inputnum;
            }
        })
        $('.left b').html(jianshu);
        $('.zongjinum').html('￥'+heji.toFixed(2));
        $('.jiage').html('￥'+heji.toFixed(2));

        if($('.zongjinum').html()!='￥0.00'){
        $('.right-jiesuan').css({'background-color':'red'})
        }else{$('.right-jiesuan').css({'background-color':'#e1e1e1'})}
        
    }
// 封装合计总价格何总件数

}()    