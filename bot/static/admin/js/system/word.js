define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.word/index',
        add_url: 'system.word/add',
        edit_url: 'system.word/edit',
        delete_url: 'system.word/delete',
        export_url: 'system.word/export',
        modify_url: 'system.word/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {field: 'content', title: '内容'},
                    {width:285, field: 'md5', title: 'MD5'},
                    {width:165, field: 'create_time', title: '创建时间'},
                    {width:125, title: '操作', templet: ea.table.tool},

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