/**
 * Created by С���� on 2017/9/11.
 */

    /*�﷨�� $("ѡ����")   ��������  */

/*Ѱ��ҳ����name����ֵ��haha��Ԫ��*/
$("[name='haha']").click(function(){
    $("#myDiv").css({"height":50,"width":50,"background":"red"});
    /*css(json��ʽ)*/
})


/*js��д*/
function changeDiv(){
    document.getElementById("myDiv").style.height="50px";
    document.getElementById("myDiv").style.width="50px";
    document.getElementById("myDiv").style.backgroundColor="pink";
}

