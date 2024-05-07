define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.spy/index',
        add_url: 'system.spy/add',
        edit_url: 'system.spy/edit',
        delete_url: 'system.spy/delete',
        export_url: 'system.spy/export',
        modify_url: 'system.spy/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {width:165, field: 'group.groupname', title: '群名称'},
                    {width:165, field: 'operatorname', title: '操作人'},
                    {width:95, field: 'operate', title: '操作', 
                        search: 'select', 
                        selectList: [
                            ['改名字', "改名字"],
                            ['改群名称', "改群名称"],
                            ['主动进群', "主动进群"],
                            ['主动退群', "主动退群"],
                            ['拉人进群', "拉人进群"],
                            ['踢人出群', "踢人出群"],
                        ],
                    },
                    {width:165, field: 'operatedname', title: '被操作人'},
                    {field: 'remark', title: '备注', search_ignore: true},
                    {width:165, field: 'create_time', title: '时间', search: 'range'},
                    {width:65, title: '操作', templet: ea.table.tool, operat:['edit']},
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