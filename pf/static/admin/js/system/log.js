define(["jquery", "easy-admin"], function ($, ea) {


    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.log/index',
    };

    var Controller = {
        index: function () {
            var util = layui.util;
            ea.table.render({
                init: init,
                toolbar: ['refresh'],
                cols: [[
                    {field: 'month', title: '日志月份', hide: true, search: 'time', timeType: 'month', searchValue: util.toDateString(new Date(), 'yyyy-MM')},
                    {width:120, field: 'admin.username', minWidth: 80, title: '后台用户'},
                    {width:120, field: 'method', minWidth: 80, title: '请求方法', search: false},
                    {width:350, field: 'url', minWidth: 80, title: '路由地址'},
                    {field: 'content', minWidth: 80, title: '操作内容'},
                    {width:140, field: 'ip', minWidth: 80, title: 'IP地址'},
                    {width:200, field: 'create_time', minWidth: 80, title: '创建时间', search: 'range'},
                ]],
            });

            ea.listen();
        },
    };

    return Controller;
});