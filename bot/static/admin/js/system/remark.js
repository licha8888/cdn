define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.remark/index',
        add_url: 'system.remark/add',
        edit_url: 'system.remark/edit',
        delete_url: 'system.remark/delete',
        export_url: 'system.remark/export',
        modify_url: 'system.remark/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {field: 'group.groupname', title: '群组'},
                    {field: 'nickname', title: '名字'},
                    {field: 'remark', title: '备注', templet: ea.table.text},
                    {field: 'create_time', title: '创建时间', search_ignore: true},
                    {width: 120, title: '操作', templet: ea.table.tool},

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