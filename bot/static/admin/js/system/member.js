define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.member/index',
        add_url: 'system.member/add',
        edit_url: 'system.member/edit',
        delete_url: 'system.member/delete',
        export_url: 'system.member/export',
        modify_url: 'system.member/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {field: 'userid', title: '用户ID', search_ignore: true},
                    {field: 'username', title: '用户名'},
                    {field: 'nickname', title: '名字'},
                    {field: 'remark', title: '备注说明', templet: ea.table.text},
                    {width:180, field: 'create_time', title: '创建时间', search: 'range'},
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