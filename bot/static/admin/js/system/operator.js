define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.operator/index',
        add_url: 'system.operator/add',
        edit_url: 'system.operator/edit',
        delete_url: 'system.operator/delete',
        export_url: 'system.operator/export',
        modify_url: 'system.operator/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {width: 220, field: 'groupname', title: '群名称'},
                    {width: 300, field: 'username', title: '用户名'},
                    {field: 'nickname', title: '名字'},
                    {width: 180, field: 'create_time', title: '创建时间', search_ignore:true},
                    {field: 'remark', title: '备注', search_ignore: true},
                    {width: 250, title: '操作', templet: ea.table.tool},
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