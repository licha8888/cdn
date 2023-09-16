define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.owner/index',
        add_url: 'system.owner/add',
        edit_url: 'system.owner/edit',
        delete_url: 'system.owner/delete',
        export_url: 'system.owner/export',
        modify_url: 'system.owner/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {width: 150, field: 'botnickname', title: '授权机器人'},
                    {width: 150, field: 'nickname', title: '名字'},
                    {width: 150, field: 'username', title: '用户名'},
                    {width: 95, field: 'grantcount', title: '剩余授权'},
                    {width: 95, field: 'granttype', title: '用户类型', 
                        templet: function (data, option) {
                            var type = [
                                '<span class="layui-badge layui-bg-gray">试用</span>',
                                '<span class="layui-badge layui-bg-green">授权</span>',
                                '<span class="layui-badge layui-bg-blue">付费</span>',
                            ];
                            return type[data.granttype];
                        },
                    },
                    {width: 150, field: 'grantnickname', title: '授权人'},
                    {width: 180, field: 'create_time_text', title: '创建时间', search_ignore:true},
                    {width: 180, field: 'expire_time_text', title: '过期时间', search_ignore:true},
                    {width: 80, field: 'billstatus', title: '记账', templet: ea.table.switch, tips: '开|关',  search_ignore:true},
                    {field: 'remark', title: '备注', templet: ea.table.text, search_ignore:true},
                    {width: 200, title: '操作', templet: ea.table.tool, operat:['edit', [
                            {
                                //easy-admin.js L563 tool 方法下，参考 edit 的参数设置
                                //这里 templet: ea.table.tool 意思就是用 tool 方法进行渲染 operat 是参数
                                class: 'layui-btn layui-btn-normal layui-btn-xs',
                                method: 'open',
                                field: 'id',
                                text: '授权',
                                title: '授权权限人',
                                url: 'system.owner/grant',
                                auth: 'period',
                            },
                            {
                                class: 'layui-btn layui-btn-normal layui-btn-xs',
                                text: '15天',
                                title: '有效期延长15天吗？',
                                method: 'get',
                                url: 'system.owner/period?month=half',
                                auth: 'period',
                            },
                            {
                                class: 'layui-btn layui-btn-normal layui-btn-xs',
                                text: '一月',
                                title: '有效期延长一个月吗？',
                                method: 'get',
                                url: 'system.owner/period?month=1',
                                auth: 'period',
                            },
                            /*
                            {
                                class: 'layui-btn layui-btn-danger layui-btn-xs',
                                text: '停用',
                                title: '确定停用此用户吗？',
                                method: 'get',
                                url: 'system.owner/disable',
                                auth: 'period',
                            },
                            */
                        ]
                    ]},
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
        grant: function () {
            ea.listen();
        },
    };
    return Controller;
});