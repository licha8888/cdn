define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.bankaccount/index',
        add_url: 'system.bankaccount/add',
        edit_url: 'system.bankaccount/edit',
        delete_url: 'system.bankaccount/delete',
        export_url: 'system.bankaccount/export',
        modify_url: 'system.bankaccount/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {width:180, field: 'botnickname', title: '机器人'},
                    {width:180, field: 'bankaccount', title: '银行卡号'},
                    {width:180, field: 'bankname', title: '银行名称'},
                    {width:145, field: 'cardtype', title: '卡类型'},
                    {width:145, field: 'cardname', title: '卡名称'},
                    {width:145, field: 'area', title: '所属地区'},
                    {width:180, field: 'create_time', title: '创建时间', search_ignore: true},
                    {title: '操作', templet: ea.table.tool},

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