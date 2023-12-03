define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.fund_account_log/index',
        add_url: 'system.fund_account_log/add',
        edit_url: 'system.fund_account_log/edit',
        delete_url: 'system.fund_account_log/delete',
        export_url: 'system.fund_account_log/export',
        modify_url: 'system.fund_account_log/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {width:105, field: 'account', title: '商户号'},
                    {width:105, field: 'account_name', title: '商户名称'},
                    {width:125, field: 'change', title: '账变金额',
                        templet:
                        function (data, option) {
                            return (data.change > 0) ? "+"+data.change : data.change
                        },
                        search_ignore: true
                    },
                    {width:300, field: 'balance', title: '商户余额', search_ignore: true, templet:
                        function (data, option) {
                            return '押款:'+data.deposit
                                + ' 入款:'+data.balance
                                + ' 余额:'+(data.balance - data.deposit);
                        },
                    },
                    {width:300, field: 'p_orderid', title: '平台单号', search_ignore: true},
                    {width:125, field: 'username', title: '操作人'},
                    {width:125, field: 'change_type', title: '账变类型',
                        search: 'select',
                        selectList: [[0, '订单入款'], [1, "后台加款"],[2, "后台扣款"],[3, "商户提款"],[4, "拒绝提款"]],
                        templet: 
                        function (data, option) {
                            var change_type =[
                                '<span class="layui-badge layui-bg-gray">订单入款</span>',
                                '<span class="layui-badge layui-bg-green">后台加款</span>',
                                '<span class="layui-badge layui-bg-blue">后台扣款</span>',
                                '<span class="layui-badge layui-bg-blue">供应商转押</span>',
                                '<span class="layui-badge layui-bg-blue">商户提款</span>',
                                '<span class="layui-badge layui-bg-blue">拒绝提款</span>',
                            ]
                            return change_type[data.change_type]
                        },
                    },
                    {width:245, field: 'create_time', title: '创建时间', search: 'range'},
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