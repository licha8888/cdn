define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.admin/index',
        add_url: 'system.admin/add',
        edit_url: 'system.admin/edit',
        delete_url: 'system.admin/delete',
        modify_url: 'system.admin/modify',
        export_url: 'system.admin/export',
        password_url: 'system.admin/password',
    };

    var Controller = {

        index: function () {

            ea.table.render({
                init: init,
                cols: [[
                    {field: 'username', minWidth: 80, title: '登录账户'},
                    {field: 'contact', minWidth: 80, title: '联系方式'},
                    {field: 'login_num', minWidth: 80, title: '登录次数', search_ignore: true},
                    {field: 'remark', minWidth: 80, title: '备注信息'},
                    {field: 'status', title: '状态', width: 85, search_ignore: true, templet: ea.table.switch},
                    {field: 'create_time', minWidth: 80, title: '创建时间', search_ignore: true},
                    {
                        width: 250,
                        title: '操作',
                        templet: ea.table.tool,
                        operat: [
                            'edit',
                            'delete'
                        ]
                    }
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
        password: function () {
            ea.listen();
        }
    };
    return Controller;
});