define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.messagelock/index',
        add_url: 'system.messagelock/add',
        edit_url: 'system.messagelock/edit',
        delete_url: 'system.messagelock/delete',
        export_url: 'system.messagelock/export',
        modify_url: 'system.messagelock/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {type: 'checkbox'},
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