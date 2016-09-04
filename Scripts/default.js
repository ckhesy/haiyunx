/**
 * Created by admin on 2016/6/6.
 */
$(function(){
    $('#firstType').on('change' , function(){
        var obj = $(this);
        $.post(obj.data('url'),{id:obj.val()},function(data){
            $('.type2').html('');
            $('.type2').append(data);
        })
    });
    $('#firstType').change();

    $('#applyMember').on('click',function() {
        var obj = $(this);
        var str = strContent = '';
        $.post($('#dealData').val(),$('#infoSet').serialize(),function(code) {

            if (code  == '-1') {
                alert('请填写联系人姓名');
            } else if (code == '-2') {
                alert('请填写联系人电话');
            } else if (code == '-3') {
                alert('请填写公司名称');
            } else if (code.lastIndexOf('1') >= '1') {
                alert('邮件发送成功');
            } else if (code.lastIndexOf('1') == '-1'){
                alert("邮件发送失败,请联系客服");
            }
        })
    });
});
