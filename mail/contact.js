$(function () {

    $('#contactForm').submit(function(){
        var name    = $.trim($('#name').val());
        var email       = $.trim($('#email').val());
        var subject     = $.trim($('#subject').val());
        var message     = $.trim($('#message').val());
        
        var filter = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        
        var flag = true;
        
        if (name == '' ){
            $('#success').text('Bạn quên nhập tên');
            flag = false;
        }
        else if (email == '' ){
            $('#success').text('Bạn quên nhập email');
            flag = false;
        }
        else if (!filter.test(email)) {
            $('#success').text('Email của bạn bị sai');
            flag = false;
        }
        else if (subject =='' ){
            $('#success').text('Bạn quên nhập Tiêu đề');
            flag = false;
        }
        else if (message =='' ){
            $('#success').text('Bạn quên nhập lời nhắn');
            flag = false;
        }
        else{
            alert('Bạn đã gửi thành công');
        }
        return flag;        
    });
});
