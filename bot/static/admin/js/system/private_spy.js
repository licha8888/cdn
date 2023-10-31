define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.private_spy/index',
        add_url: 'system.private_spy/add',
        edit_url: 'system.private_spy/edit',
        delete_url: 'system.private_spy/delete',
        export_url: 'system.private_spy/export',
        modify_url: 'system.private_spy/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {field: 'username', title: '用户名', search_ignore: true},
                    {field: 'name', title: '名字'},
                    {field: 'botnickname', title: '机器人'},
                    {field: 'content', title: '聊天内容'},
                    {field: 'create_time', title: '操作时间', search: 'range', search_ignore: true},
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