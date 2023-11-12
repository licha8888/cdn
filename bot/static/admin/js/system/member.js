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
                    {width:225, field: 'groupname', title: '群组名'},
                    {width:135, field: 'nickname', title: '名字'},
                    {width:195, field: 'username', title: '用户名'},
                    {field: 'remark', title: '备注说明', templet: ea.table.text, search_ignore: true},
                    {width:165, field: 'create_time', title: '创建时间', search: 'range', search_ignore: true},
                    {width:115, title: '操作', templet: ea.table.tool},
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