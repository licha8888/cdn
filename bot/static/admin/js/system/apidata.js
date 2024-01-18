define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.apidata/index',
        add_url: 'system.apidata/add',
        edit_url: 'system.apidata/edit',
        delete_url: 'system.apidata/delete',
        export_url: 'system.apidata/export',
        modify_url: 'system.apidata/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {field: 'type', title: '数据类型'},
                    {field: 'userid', title: '用户ID'},
                    {field: 'nickname', title: '用户名'},
                    {field: 'chatid', title: 'chatid'},
                    {field: 'messageid', title: 'messageid'},
                    {field: 'lasttime', title: '最后时间'},
                    {width:165, field: 'create_time', title: '创建时间'},
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