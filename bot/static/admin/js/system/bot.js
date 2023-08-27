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
                    {width:108, field: 'botid', title: '机器人ID'},
                    {width:180, field: 'botnickname', title: '机器人名字'},
                    {width:118, field: 'botusername', title: '机器人用户名'},
                    {field: 'adminname', title: '所属用户'},
                    {field: 'worktime', title: '日切时间'},
                    {field: 'showmode', title: '显示模式'},
                    {field: 'autoclear', title: '自动日切', templet: ea.table.switch, search_ignore: true},
                    {field: 'spy', title: '监控', templet: ea.table.switch, search_ignore: true},
                    {field: 'status', title: '状态', templet: ea.table.switch, search_ignore: true},
                    {width:108, field: 'create_time_text', title: '启动时间', search_ignore: true},
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