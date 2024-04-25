define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.permanentoperator/index',
        add_url: 'system.permanentoperator/add',
        edit_url: 'system.permanentoperator/edit',
        delete_url: 'system.permanentoperator/delete',
        export_url: 'system.permanentoperator/export',
        modify_url: 'system.permanentoperator/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {width: 220, field: 'botnickname', title: '机器人'},
                    {field: 'nickname', title: '名字'},
                    {width: 300, field: 'username', title: '用户名'},
                    {width: 180, field: 'create_time', title: '创建时间', search_ignore:true},
                    {field: 'remark', title: '备注', search_ignore: true},
                    {width: 250, title: '操作', templet: ea.table.tool},
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