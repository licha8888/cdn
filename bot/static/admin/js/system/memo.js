define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.memo/index',
        add_url: 'system.memo/add',
        edit_url: 'system.memo/edit',
        delete_url: 'system.memo/delete',
        export_url: 'system.memo/export',
        modify_url: 'system.memo/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {width:220, field: 'groupname', title: '群名称'},
                    {width:150, field: 'nickname', title: '备注人'},
                    {field: 'memo', title: '备注', templet: ea.table.text},
                    {width:165, field: 'create_time', title: '备注时间', search: 'range'},
                    {width:85, field: 'status', title: '状态', search_ignore: true, templet:
                        function (data, option) {
                            var status = [
                                '<span class="layui-badge layui-bg-gray">已删除</span>',
                                '<span class="layui-badge layui-bg-green">正常</span>',
                            ]
                            return status[data.status];
                        },
                    },
                    {width: 150, title: '操作', templet: ea.table.tool},
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