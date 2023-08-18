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
                    {width: 260, field: 'groupname', title: '群名称'},
                    {width: 110, field: 'date', title: '日期', search: 'range'},
                    {width: 90, field: 'depositcount', title: '入款笔数', templet:
                        function (data, option) {                            
                            return data.depositcount + " / " + data.adjustdepositcount
                        },
                        search_ignore: true
                    },
                    {width: 90, field: 'withdrawcount', title: '下发笔数', templet:
                        function (data, option) {                            
                            return data.withdrawcount + " / " + data.adjustwithdrawcount
                        },
                        search_ignore: true
                    },
                    {width: 115, field: 'totaldeposit', title: '总入款', search_ignore: true},
                    {width: 115, field: 'totalwithdraw', title: '总下发', search_ignore: true},
                    {width: 115, field: 'shouldwithdraw', title: '应下发', search_ignore: true},
                    {width: 60, field: 'fee', title: '费率', search_ignore: true},
                    {width: 90, field: 'usdt', title: '美元汇率', search_ignore: true},                    
                    {field: 'remark', title: '备注', templet: ea.table.text},
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