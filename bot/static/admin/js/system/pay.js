define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.pay/index',
        add_url: 'system.pay/add',
        edit_url: 'system.pay/edit',
        delete_url: 'system.pay/delete',
        export_url: 'system.pay/export',
        modify_url: 'system.pay/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {field: 'id', title: '订单ID'},
                    {field: 'username', title: '用户名'},
                    {field: 'nickname', title: '名字'},
                    {field: 'period', title: '周期', search_ignore: true,
                        templet: function (data, option) {
                            return ['15天', '一个月', '三个月'][data.period];
                        },
                    },
                    {field: 'quant', title: '金额', search_ignore: true, templet:
                        function (data, option) {                            
                            return data.quant / 1000
                        },
                    },
                    {field: 'create_time', title: '创建时间', search_ignore: true},
                    {field: 'status', title: '状态', search: 'select',selectList: [[0, "未支付"], [1, "已支付"], [2, "已过期"]],
                        templet: function (data, option) {
                            var status = [
                                '<span class="layui-badge layui-bg-blue">未支付</span>',
                                '<span class="layui-badge layui-bg-green">已支付</span>',
                                '<span class="layui-badge layui-bg-gray">已过期</span>',
                            ];
                            return status[data.status];
                        },
                    },
                    {width: 250, title: '操作', templet: ea.table.tool, operat:['edit']},
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