define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.bill/index',
        add_url: 'system.bill/add',
        edit_url: 'system.bill/edit',
        delete_url: 'system.bill/delete',
        export_url: 'system.bill/export',
        modify_url: 'system.bill/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {width: 220, field: 'groupname', title: '群名称'},
                    {field: 'replyname', title: '回复人', search_ignore: true},
                    {field: 'operatorname', title: '操作人', search_ignore: true},
                    {field: 'billtype', title: '类型', templet:
                        function (data, option) {
                            var billtype = {
                                'deposit':'<span class="layui-badge layui-bg-green">入款</span>',
                                'withdraw': '<span class="layui-badge layui-bg-blue">下发</span>',
                                'adjust_deposit': '<span class="layui-badge layui-bg-gray">入款修正</span>',
                                'adjust_withdraw': '<span class="layui-badge layui-bg-gray">下发修正</span>',
                            };
                            return billtype[data.billtype];
                        },
                        selectList: [['deposit', '入款'], ['withdraw', '下发'], ['adjust_deposit', '入款修正'], ['adjust_withdraw', '下发修正']],
                        search_ignore: true,
                    },
                    {field: 'rmb', title: '金额', templet:
                        function (data, option) {
                            return parseFloat(data.rmb)
                        },
                        search_ignore: true
                    },
                    {field: 'rate', title: '汇率', templet:
                        function (data, option) {
                            return parseFloat(data.rate)
                        },
                        search_ignore: true
                    },
                    {field: 'usdt', title: 'USDT', templet:
                        function (data, option) {
                            return parseFloat(data.usdt)
                        },
                        search_ignore: true
                    },
                    {field: 'fee', title: '费率', templet:
                        function (data, option) {
                            return parseFloat(data.fee)
                        },
                        search_ignore: true
                    },
                    {width: 165, field: 'create_time', title: '时间', search: 'range'},
                    {field: 'remark', title: '备注', templet: ea.table.text},
                    {width: 100, title: '操作', templet: ea.table.tool, operat:['edit']},
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