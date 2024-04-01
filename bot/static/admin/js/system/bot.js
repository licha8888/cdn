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
                    {width:108, field: 'cloneid', title: '克隆ID'},
                    {field: 'botnickname', title: '机器人名字'},
                    {width:118, field: 'botusername', title: '机器人用户名'},
                    {width:118, field: 'adminname', title: '所属用户'},
                    {width:100, field: 'spy', title: '监控提示', templet: ea.table.switch, search_ignore: true},
                    {width:145, field: 'expire_time_text', title: '过期时间', templet:
                        function (data, option) {
                            return (data.expire_time_text == 0) ? '未设置' : data.expire_time_text
                        },
                        search_ignore: true
                    },
                    {width:108, field: 'create_time_text', title: '启动时间', search_ignore: true},
                    {width:105, field: 'type', title: '类型', templet: ea.table.switch, tips: '私有|公共',  search_ignore:true},
                    {width:85, field: 'status', title: '状态', templet: ea.table.switch, search_ignore: true},
                    {width:125, title: '操作', templet: ea.table.tool, operat:['edit', 'delete']}
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