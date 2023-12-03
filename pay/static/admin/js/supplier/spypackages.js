define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'supplier.spypackages/index',
        add_url: 'supplier.spypackages/add',
        edit_url: 'supplier.spypackages/edit',
        delete_url: 'supplier.spypackages/delete',
        export_url: 'supplier.spypackages/export',
        modify_url: 'supplier.spypackages/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {field: 'name', title: '名字'},
                    {field: 'packages', title: '包名'},
                    {field: 'keyword', title: '关键字'},
                    {field: 'regex', title: '正则表达式', search_ignore: true},
                    {field: 'create_time', title: '创建时间'},
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