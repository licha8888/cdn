define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.bankcard/index',
        add_url: 'system.bankcard/add',
        edit_url: 'system.bankcard/edit',
        delete_url: 'system.bankcard/delete',
        export_url: 'system.bankcard/export',
        modify_url: 'system.bankcard/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'delete', 'export'],
                cols: [[
                    {field: 'groupname', title: '群组'},
                    {field: 'operatorname', title: '添加人'},
                    {field: 'operatorusername', title: '用户名'},
                    {field: 'min', title: '最小金额'},
                    {field: 'max', title: '最大金额'},
                    {field: 'bankcard', title: '银行卡'},
                    {field: 'create_time', title: '创建时间'},
                    {title: '操作', templet: ea.table.tool},

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