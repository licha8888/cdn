define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'supplier.dfphrase/index',
        add_url: 'supplier.dfphrase/add',
        edit_url: 'supplier.dfphrase/edit',
        delete_url: 'supplier.dfphrase/delete',
        export_url: 'supplier.dfphrase/export',
        modify_url: 'supplier.dfphrase/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {field: 'platform', title: '平台'},
                    {field: 'shop', title: '店铺'},
                    {field: 'keyword', title: '关键词'},
                    {field: 'amount', title: '金额'},
                    {field: 'remark', title: '备注', templet: ea.table.text, search_ignore: true},
                    {field: 'status', search: 'select', selectList: ["禁用","启用"], title: '状态', templet: ea.table.switch, search_ignore: true},
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