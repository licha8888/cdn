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
                    {field: 'groupname', minWidth: 80, title: '群组名'},
                    {field: 'username', minWidth: 80, title: '用户名'},
                    {field: 'name', minWidth: 80, title: '名字'},
                    {width:200, field: 'url', minWidth: 80, title: '操作'},
                    {field: 'content', minWidth: 80, title: '操作内容'},
                    {field: 'ip', minWidth: 80, title: 'IP地址'},
                    {field: 'useragent', minWidth: 80, title: 'useragent'},
                    {width:155, field: 'create_time', minWidth: 80, title: '操作时间', search: 'range'},
                ]],
            });

            ea.listen();
        },
    };

    return Controller;
});