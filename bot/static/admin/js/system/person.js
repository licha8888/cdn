define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.person/index',
        add_url: 'system.person/add',
        edit_url: 'system.person/edit',
        delete_url: 'system.person/delete',
        export_url: 'system.person/export',
        modify_url: 'system.person/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {width:220, field: 'group.groupname', title: '群组名称'},
                    {field: 'nickname', title: '名字'},
                    {field: 'username', title: '用户名'},
                    {width:180, field: 'create_time', title: '创建时间', search: 'range'},
                    {width:180, field: 'update_time', title: '活跃时间', search: 'range'},
                    {field: 'remark', title: '备注说明', templet: ea.table.text},
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