define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.groupcat/index',
        add_url: 'system.groupcat/add',
        edit_url: 'system.groupcat/edit',
        delete_url: 'system.groupcat/delete',
        export_url: 'system.groupcat/export',
        modify_url: 'system.groupcat/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {field: 'name', title: '分类名称'},
                    {field: 'remark', title: '备注', templet: ea.table.text},
                    {field: 'create_time', title: '创建时间', search:'range'},
                    {width: 250, title: '操作', templet: ea.table.tool, operat:[
                        'edit',
                        [
                            {
                                auth: 'grouplist',
                                class: 'layui-btn layui-btn-normal layui-btn-xs',
                                text: '编辑群组',
                                method: 'open',
                                url: 'system.groupcat/grouplist',
                            },
                        ],
                        'delete',
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
    };
    return Controller;
});