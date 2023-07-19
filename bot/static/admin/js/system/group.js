define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.group/index',
        add_url: 'system.group/add',
        edit_url: 'system.group/edit',
        delete_url: 'system.group/delete',
        export_url: 'system.group/export',
        modify_url: 'system.group/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {width: 150, field: 'groupname', title: '群名称'},
                    {width: 75, field: 'category.name', title: '群分类', templet:
                        function (data, option) {
                            return data.category ? data.category.name : '未分类'
                        },
                    },
                    {field: 'ownernickname', title: '权限人'},
                    {field: 'botnickname', title: '机器人'},
                    {width: 90, field: 'depositcount', title: '入款笔数', templet:
                        function (data, option) {                            
                            return data.depositcount // + " / " + data.adjustdepositcount
                        },
                        search_ignore: true
                    },
                    {width: 90, field: 'withdrawcount', title: '下发笔数', templet:
                        function (data, option) {                            
                            return data.withdrawcount //+ " / " + data.adjustwithdrawcount
                        },
                        search_ignore: true
                    },
                    {width: 90, field: 'totaldeposit', title: '总入款', templet:
                        function (data, option) {
                            return parseInt(data.totaldeposit)
                        },
                        search_ignore: true},
                    {width: 90, field: 'totalwithdraw', title: '总下发', templet:
                        function (data, option) {
                            return parseInt(data.totalwithdraw)
                        },
                        search_ignore: true},
                    {width: 90, field: 'shouldwithdraw', title: '应下发', templet:
                        function (data, option) {
                            return parseInt(data.totaldeposit)
                        },
                        search_ignore: true},
                    {width: 60, field: 'fee', title: '费率', templet:
                        function (data, option) {
                            return parseInt(data.fee)
                        },
                        search_ignore: true},
                    {width: 90, field: 'usdt', title: '美元汇率', templet:
                        function (data, option) {
                            return parseInt(data.usdt)
                        },
                        search_ignore: true},
                    //{width: 95, field: 'status', title: '状态', templet: ea.table.switch, tips: '正常|禁用', templet: ea.table.switch, search_ignore: true},
                    {width: 180, field: 'update_time_text', title: '更新时间', search: 'range'},
                    {title: '操作', templet: ea.table.tool, operat:[
                        [
                            {
                                auth: 'bill',
                                class: 'layui-btn layui-btn-normal layui-btn-xs',
                                text: '查看账单',
                                method: 'blank',
                                url: function (data) {
                                    return data.bill_url
                                },
                            },
                        ],
                        'edit',
                    ]},
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