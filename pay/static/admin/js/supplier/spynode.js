define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'supplier.spynode/index',
        add_url: 'supplier.spynode/add',
        add_title: '导入IMEI',
        edit_url: 'supplier.spynode/edit',
        delete_url: 'supplier.spynode/delete',
        export_url: 'supplier.spynode/export',
        modify_url: 'supplier.spynode/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'add', 'export', [{
                    class: 'layui-btn layui-btn-sm layui-btn-danger',
                    icon: 'fa fa-trash-o',
                    auth : 'amount',
                    url: 'supplier.spynode/amount',
                    method: 'open',
                    title: '额度分配',
                }]],
                cols: [[
                    {field: 'machineid', title: '机号'},
                    {field: 'imei', title: 'IMEI'},
                    {field: 'label', title: '标识'},
                    {field: 'amount', title: '分配金额'},
                    {field: 'create_time', title: '创建时间', search_ignore: true},
                    {field: 'update_time', title: '更新时间', search_ignore: true},
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
        amount: function () {
            ea.listen();
        },
    };
    return Controller;
});