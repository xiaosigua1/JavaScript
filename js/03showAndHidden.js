/**
 * Created by С���� on 2017/9/11.
 */

/*��ʶjQuery(function(){
    �����ǵ�����ƶ���li���棬div�е�ͼƬ��ʾ
    $("li").mouseover(function(){
        //$(this).children("div").css({"display":"block"});
        $(this).children("div").show();
    }).mouseout(function(){����Ƴ�
        //$(this).children("div").css({"display":"none"});
        $(this).children("div").hide();
    })
})*/

$(function(){
    /*�����¼� ����������Ƴ�������*/
    $("li").hover(function(){//mouseover
        $(this).children("div").show();
    },function(){ //mouseout
        $(this).children("div").hide();
    })
})