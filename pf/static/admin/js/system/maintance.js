define(["jquery", "easy-admin"], function ($, ea) {
    var Controller = {
        index: function () {
            ea.listen(function (data, filter, admin) {

                //想要调用 admin.msg.confirm 方法，但是没有 admin 参数

                //看 easy_admin.js 首先发现了 layer.msg，然后发现里面是通过 admin.msg 调用 layer.msg
                //再看里面按钮的 ajax 调用是用的 admin.request
                //那把 admin 变量引用出来就可以了，直接用 admin 变量说不存在
                //再看 ea.listen 是把闭包函数传进去，在listen 参数 preposeCallback 调用这个闭包函数时
                //在里面把 admin 变量传递给闭包就可以了
                
                if (filter == 'clearCode') {
                    index = admin.msg.confirm('确认删除代码缓存吗？', function () {
                        layer.close(index);
                        admin.request.get({url:"clearCode"}, function (res,status){
                            admin.msg.success(res.msg)
                        })
                    });
                    return true
                }
                
                if (filter == 'clearSession') {
                    index = admin.msg.confirm('确认清除用户 Session 吗？', function () {
                        layer.close(index);
                        admin.request.get({url:"clearSession"}, function (res,status){
                            admin.msg.success(res.msg)
                        })
                    });
                    return true
                }
                
                if (filter == 'clearRedis') {
                    index = admin.msg.confirm('确认清除 Redis 缓存码？', function () {
                        layer.close(index);
                        admin.request.get({url:"clearRedis"}, function (res,status){
                            admin.msg.success(res.msg)
                        })
                    });
                    return true
                }

                if (filter == 'debugSwitch') {
                    admin.request.get({url:"debugSwitch"}, function (res,status){
                        $("#debugSwitch").text(res.data.switch ? "调试开关已打开" : "调试开关已关闭")
                        admin.msg.success(res.msg)
                    })
                    return true
                }

                if (filter == 'staticCDN') {
                    $("#staticPath").val('https://cdn.jsdelivr.net/gh/licha8888/cdn@2.2/pay/static')
                    return true
                }

                if (filter == 'staticLocal') {
                    $("#staticPath").val('/static')
                    return true
                } 

                if (filter == 'staticSet') {
                    admin.request.post({
                        url: "staticSet",
                        data: {"static_path":$("#staticPath").val()},
                    }, function (res) {
                        admin.msg.success(res.msg)
                    })
                    return true
                }
                                
                if (filter == 'testOrder') {
                    index = admin.msg.confirm('确认提交测试订单吗？', function () {
                        layer.close(index);
                        
                        admin.request.post({
                            url: "testOrder",
                            data: {
                                "account":$("#account").val(),
                                "code":$("#code").val(),
                                "amount":$("#amount").val(),
                                "notifyUrl":$("#notifyUrl").val(),
                            },
                        }, function (res) {
                            admin.msg.success(res.msg)
                        })
                    });
                    return true
                }
                                
                if (filter == 'dfcallback') {
                    index = admin.msg.confirm('确认代付回调吗？', function () {
                        layer.close(index);
                        
                        admin.request.post({
                            url: "dfCallback",
                            data: {
                                "imei":$("#imei").val(),
                                "goods":$("#goods").val(),
                            },
                        }, function (res) {
                            admin.msg.success(res.msg)
                        })
                    });
                    return true
                }
                
                return data
            })
        },
    }
    return Controller
});