define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.currency/index',
        add_url: 'system.currency/add',
        edit_url: 'system.currency/edit',
        delete_url: 'system.currency/delete',
        export_url: 'system.currency/export',
        modify_url: 'system.currency/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {field: 'title', title: '货币名称'},
                    {field: 'label', title: '货币标识'},
                    {field: 'rate', title: '汇率', search_ignore:true},
                    {field: 'type', title: '种类', templet: ea.table.switch, tips: '货币|主网',  search_ignore:true},
                    {field: 'update_time', title: '更新时间', search_ignore:true},
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