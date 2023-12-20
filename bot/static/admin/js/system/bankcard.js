define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.bankcard/index',
        add_url: 'system.bankcard/add',
        edit_url: 'system.bankcard/edit',
        delete_url: 'system.bankcard/delete',
        export_url: 'system.bankcard/export',
        modify_url: 'system.bankcard/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {field: 'id', title: 'ID'},
                    {field: 'category.name', title: '所属分类', templet:
                        function (data, option) {
                            if (data.category === undefined || data.category === null) {
                                return '未分类';
                            }
                            return data.category.name
                        },
                    },
                    {field: 'operatorname', title: '添加人'},
                    {field: 'bankname', title: '银行'},
                    {field: 'accountno', title: '卡号'},
                    {field: 'accountname', title: '姓名'},
                    {field: 'min', title: '金额', templet:
                        function (data, option) {
                            if (data.min == data.max) {
                                return data.min
                            } else {
                                return data.min + "-" + data.max
                            }
                        },
                        search_ignore: true
                    },
                    {field: 'chedui', title: '车队'},
                    {width:165, field: 'create_time', title: '创建时间'},
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