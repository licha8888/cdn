define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.botlog/index',
        add_url: 'system.botlog/add',
        edit_url: 'system.botlog/edit',
        delete_url: 'system.botlog/delete',
        export_url: 'system.botlog/export',
        modify_url: 'system.botlog/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {width:85, field: 'botusername', title: '用户名'},
                    {width:125, field: 'botnickname', title: '名字'},
                    {width:105, field: 'label', title: '标记'},
                    {field: 'content', title: '内容'},
                    {width:165, field: 'create_time', title: '创建时间', search: 'range'},
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