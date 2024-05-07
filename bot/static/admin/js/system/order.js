define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.order/index',
        add_url: 'system.order/add',
        edit_url: 'system.order/edit',
        delete_url: 'system.order/delete',
        export_url: 'system.order/export',
        modify_url: 'system.order/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {width: 240, field: 'group.groupname', title: '群组名称'},
                    {width: 250, field: 'orderid', title: '订单编号'},
                    {width: 90, field: 'code', title: '支付通道'},
                    {field: 'order_amount', title: '订单金额'},
                    {field: 'amount', title: '实付金额'},
                    {width: 250, field: 'p_orderid', title: '平台单号'},
                    {width: 90, field: 'status', title: '订单状态', templet: ea.table.switch,
                        templet: function (data, option) {
                            var type = [
                                '<span class="layui-badge layui-bg-gray">未支付</span>',
                                '<span class="layui-badge layui-bg-blue">已支付</span>',
                                '<span class="layui-badge layui-bg-gray">创建失败</span>',
                            ];
                            return type[data.status];
                        },
                    },
                    {width: 165, field: 'create_time', title: '创建时间'},
                    {width: 115, title: '操作', templet: ea.table.tool},

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