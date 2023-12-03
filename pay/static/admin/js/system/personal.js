define(["jquery", "easy-admin"], function ($, ea) {
   var a = 1
    var Controller = {
        info: function () {
            ea.listen(function (data, filter, admin) {   
                
                if (filter == 'getSecret') {
                    $.get("getSecret", function (data,status){
                        $("#secret").val(data.secret)
                    })
                    return true;
                }

                if (filter == 'google_key') {
                    index = admin.msg.confirm('请提前安装好google验证器app，并配置好登陆密钥，否则将无法登陆', function () {                        
                        layer.close(index);
                        $.get("getGoogleSecret", function (data,status){
                            $("#google_key").val(data.secret)
                        })
                    });
                    
                    return true;
                }
                return data;
            });
        },
        password: function () {
            ea.listen();
        },      
    };
    return Controller;
});