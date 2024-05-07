define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.attendance/index',
        add_url: 'system.attendance/add',
        edit_url: 'system.attendance/edit',
        delete_url: 'system.attendance/delete',
        export_url: 'system.attendance/export',
        modify_url: 'system.attendance/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {field: 'groupname', title: '群组名称'},
                    {field: 'botnickname', title: '机器人名字'},
                    {field: 'username', title: '用户名'},
                    {field: 'nickname', title: '名字'},
                    {field: 'type', title: '类型'},
                    {field: 'remark', title: '备注', templet: ea.table.text},
                    {width:165, field: 'create_time', title: '考勤时间'},
                    {width: 125, title: '操作', templet: ea.table.tool},
                ]],
            });

            ea.listen();
        },
        add: function () {
            ea.listen();
        },
        edit: function () {
            ea.listen();
        },
    };
    return Controller;
});