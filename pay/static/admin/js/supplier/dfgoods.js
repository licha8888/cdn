define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'supplier.dfgoods/index',
        add_url: 'supplier.dfgoods/add',
        edit_url: 'supplier.dfgoods/edit',
        delete_url: 'supplier.dfgoods/delete',
        export_url: 'supplier.dfgoods/export',
        modify_url: 'supplier.dfgoods/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {field: 'machineid', title: '机号'},
                    {field: 'imei', title: 'IMEI'},
                    {field: 'amount', title: '金额'},
                    {width: 100, field: 'type', title: '商品类型', templet:
                        function (data, option) {
                            var goods_type =[
                                '<span class="layui-badge layui-bg-green">未知类型</span>',
                                '<span class="layui-badge layui-bg-green">点卡</span>',
                            ]
                            return goods_type[data.type]
                        },
                        search: 'select', 
                        selectList: [[1, "点卡"]],
                    },
                    {width: 650, field: 'goods', title: '商品内容', search_ignore: true},
                    {width: 200, field: 'create_time', title: '创建时间', search: 'range'},
                    {width: 150, title: '操作', templet: ea.table.tool},

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