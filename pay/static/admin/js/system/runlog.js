define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.runlog/index',
        export_url: 'system.runlog/export',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh'],
                cols: [[
                    {field: 'account', title: '所属用户', width: 150},
                    {field: 'label', title: '日志标识', width: 150},
                    {field: 'content', title: '日志内容'},
                    {field: 'create_time', title: '日志时间', search: 'range', width: 200},
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