define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.advertise/index',
        add_url: 'system.advertise/add',
        edit_url: 'system.advertise/edit',
        delete_url: 'system.advertise/delete',
        export_url: 'system.advertise/export',
        modify_url: 'system.advertise/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {width:70, field: 'row', title: '行号', search_ignore: true},
                    {width:200, field: 'title', title: '按钮标题'},
                    {width:550, field: 'url', title: '按钮链接'},
                    {field: 'status', title: '状态', templet: ea.table.switch, search_ignore: true},
                    {width: 200, field: 'create_time', title: '创建时间', search: 'range'},
                    {width: 150, title: '操作', templet: ea.table.tool},
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