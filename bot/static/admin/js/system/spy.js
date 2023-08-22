define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.spy/index',
        add_url: 'system.spy/add',
        edit_url: 'system.spy/edit',
        delete_url: 'system.spy/delete',
        export_url: 'system.spy/export',
        modify_url: 'system.spy/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {field: 'groupname', title: '群名称'},
                    {field: 'operatorusername', title: '操作人用户名'},
                    {field: 'operatorname', title: '操作人名字', search_ignore: true},
                    {field: 'operate', title: '执行操作'},
                    {field: 'remark', title: '操作数据', search_ignore: true},
                    {field: 'create_time', title: '时间', search_ignore: true},
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