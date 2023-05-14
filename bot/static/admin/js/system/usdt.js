define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.usdt/index',
        add_url: 'system.usdt/add',
        edit_url: 'system.usdt/edit',
        delete_url: 'system.usdt/delete',
        export_url: 'system.usdt/export',
        modify_url: 'system.usdt/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {width:340, field: 'from_address', title: 'from_address'},
                    {field: 'quant', title: 'quant', templet: 
                        function (data, option) {
                            return data.quant / 1000000
                        }, search_ignore: true
                    },
                    {width:165, field: 'create_time', title: '转账时间', search: 'range'},
                    {field: 'orderid', title: '匹配订单ID'},
                    {field: 'username', title: '用户名'},
                    {field: 'nickname', title: '名字'},
                    {field: 'status', title: '状态', search: 'select', selectList: [[0, "未匹配"], [1, "已匹配"]],
                        templet: function (data, option) {
                            var status = [
                                '<span class="layui-badge layui-bg-gray">未匹配</span>',
                                '<span class="layui-badge layui-bg-blue">已匹配</span>',
                            ];
                            return status[data.status];
                        },
                    },
                    {width: 75, title: '操作', templet: ea.table.tool, operat:['edit']},
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