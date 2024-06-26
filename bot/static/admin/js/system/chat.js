define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.chat/index',
        add_url: 'system.chat/add',
        edit_url: 'system.chat/edit',
        delete_url: 'system.chat/delete',
        export_url: 'system.chat/export',
        modify_url: 'system.chat/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {width:220, field: 'groupname', title: '群名称'},
                    {width:120, field: 'botnickname', title: '机器人',
                        search: 'select', selectList: //fieldAlias的作用是指定 select 变量的名字
                            function () {
                                botidlist = []
                                Object.entries(botlist).forEach(([key, value]) => {
                                    botidlist.push([key, value]);
                                })
                                return botidlist
                            }
                    },
                    {width:150, field: 'operatorname', title: '发送人'},
                    {field: 'content', title: '消息内容', templet: ea.table.text},
                    {width:165, field: 'create_time', title: '发送时间', search: 'range'},
                    {width:80, field: 'marked', title: '关注', templet: ea.table.switch, search: 'select', selectList: [[0, "未关注"], [1, "已关注"]],},
                    {width: 65, title: '操作', templet: ea.table.tool, operat: ['edit']},
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