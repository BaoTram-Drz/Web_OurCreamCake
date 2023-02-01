
$(function () {

    $('#buyCakeForm').submit(function(){
 
        var number    = $.trim($('#soluong').val());
        var phone       = $.trim($('#sdt').val());
        var address     = $.trim($('#diachi').val());
        var note     = $.trim($('#ghichu').val());
        var filter = /^[0-9-+]+$/;

        var flag = true;
        
        
        if (number == '' ){
            $('#message').text('Bạn quên nhập số lượng');
            flag = false;
        }
        else if (phone == '' ){
            $('#message').text('Bạn quên nhập số điện thoại');
            flag = false;
        }
        else if (!filter.test(phone) || phone.length != 10 || phone[0] != 0) {
            $('#message').text('Số điện thoại của bạn bị sai');
            flag = false;
        }
        else if (address =='' ){
            $('#message').text('Bạn quên nhập địa chỉ');
            flag = false;
        }
        else{
            alert('Bạn đã gửi thành công');
        }
        return flag;
    });
});


