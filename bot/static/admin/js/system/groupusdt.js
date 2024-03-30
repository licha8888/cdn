define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.groupusdt/index',
        add_url: 'system.groupusdt/add',
        edit_url: 'system.groupusdt/edit',
        delete_url: 'system.groupusdt/delete',
        export_url: 'system.groupusdt/export',
        modify_url: 'system.groupusdt/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {type: 'checkbox'},                    {field: 'id', title: 'id'},                    {field: 'groupid', title: '所属群ID'},                    {field: 'groupname', title: '群名称'},                    {field: 'userid', title: '发送人id'},                    {field: 'username', title: '发送人用户名'},                    {field: 'nickname', title: '发送人名字'},                    {field: 'usdt', title: 'TRC20钱包地址'},                    {field: 'create_time', title: '创建时间'},                    {width: 250, title: '操作', templet: ea.table.tool},
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