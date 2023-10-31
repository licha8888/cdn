define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.message/index',
        add_url: 'system.message/add',
        edit_url: 'system.message/edit',
        delete_url: 'system.message/delete',
        export_url: 'system.message/export',
        modify_url: 'system.message/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'add', 'export'],
                cols: [[
                    {field: 'cate_text', title: '群类型', search_ignore: true},
                    {field: 'content', title: '消息内容'},
                    {width:165, field: 'sendtime_text', title: '发送时间', search: 'range'},
                    {width:115, field: 'status', title: '状态', templet:
                        function (data, option) {
                            var status = {
                                '0':'<span class="layui-badge layui-bg-green">未发送</span>',
                                '1': '<span class="layui-badge layui-bg-blue">已发送</span>',
                                '2': '<span class="layui-badge layui-bg-gray">已取消</span>',
                            };
                            return status[data.status];
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