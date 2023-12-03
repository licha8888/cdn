define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'supplier.spycontent/index',
        export_url: 'supplier.spycontent/export',
        modify_url: 'supplier.spycontent/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {width:80, field: 'machineid', title: '机号'},
                    {width:100, field: 'label', title: '标识'},
                    {width:200, field: 'imei', title: 'IMEI'},
                    {width:650, field: 'content', title: '内容'},
                    {field: 'amount', title: '匹配金额'},
                    {field: 'status', title: '匹配状态', templet:
                        function (data, option) {
                            var status_type = [
                                '<span class="layui-badge layui-bg-blue">匹配失败</span>',
                                '匹配成功',
                                ''
                            ];
                            return status_type[data.status];
                        },
                        search: 'select',
                        selectList: [[0, '匹配失败'], [1, '匹配成功']],
                    },
                    {width:185, field: 'create_time', title: '创建时间', search: 'range'},
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