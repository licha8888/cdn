define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.bot/index',
        add_url: 'system.bot/add',
        edit_url: 'system.bot/edit',
        delete_url: 'system.bot/delete',
        export_url: 'system.bot/export',
        modify_url: 'system.bot/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {field: 'botid', title: '机器人ID'},
                    {field: 'botusername', title: '机器人用户名'},
                    {field: 'botnickname', title: '机器人名字'},
                    {field: 'create_time', title: '启动时间', search_ignore: true},
                    {field: 'status', title: '状态', templet: ea.table.switch, search_ignore: true},
                    {field: 'remark', title: '备注说明', templet: ea.table.text, search_ignore: true},
                    {title: '操作', templet: ea.table.tool, operat:['edit']}
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