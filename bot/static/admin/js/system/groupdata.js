define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.groupdata/index',
        add_url: 'system.groupdata/add',
        edit_url: 'system.groupdata/edit',
        delete_url: 'system.groupdata/delete',
        export_url: 'system.groupdata/export',
        modify_url: 'system.groupdata/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {field: 'groupname', title: '群名称'},
                    {width: 150, field: 'date', title: '日期', search: 'range'},
                    {width: 120, field: 'depositcount', title: '入款笔数', templet:
                        function (data, option) {                            
                            return data.depositcount + " / " + data.adjustdepositcount
                        },
                        search_ignore: true
                    },
                    {width: 120, field: 'withdrawcount', title: '下发笔数', templet:
                        function (data, option) {                            
                            return data.withdrawcount + " / " + data.adjustwithdrawcount
                        },
                        search_ignore: true
                    },
                    {width: 135, field: 'totaldeposit', title: '总入款', templet:
                        function (data, option) {
                            return parseFloat(data.totaldeposit)
                        },
                        search_ignore: true
                    },
                    {width: 135, field: 'totalwithdraw', title: '总下发', templet:
                        function (data, option) {
                            return parseFloat(data.totalwithdraw)
                        },
                        search_ignore: true
                    },
                    {width: 135, field: 'shouldwithdraw', title: '应下发', templet:
                        function (data, option) {
                            return parseFloat(data.shouldwithdraw)
                        },
                        search_ignore: true
                    },
                    {width: 60, field: 'fee', title: '费率', templet:
                        function (data, option) {
                            return parseFloat(data.fee)
                        },
                        search_ignore: true
                    },
                    {width: 90, field: 'usdt', title: '美元汇率', templet:
                        function (data, option) {
                            return parseFloat(data.usdt)
                        },
                        search_ignore: true
                    },
                    {width:115, title: '操作', templet: ea.table.tool},
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