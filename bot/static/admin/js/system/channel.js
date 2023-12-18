define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.channel/index',
        add_url: 'system.channel/add',
        edit_url: 'system.channel/edit',
        delete_url: 'system.channel/delete',
        export_url: 'system.channel/export',
        modify_url: 'system.channel/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {field: 'operatorname', title: '操作人'},
                    {field: 'code', title: '支付通道'},
                    {field: 'min', title: '最小金额', search_ignore: true},
                    {field: 'max', title: '最大金额', search_ignore: true},
                    {field: 'fix', title: '固定金额'},
                    {field: 'create_time', title: '创建时间', search_ignore: true},
                    {width: 250, title: '操作', templet: ea.table.tool},

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