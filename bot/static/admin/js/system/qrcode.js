define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.qrcode/index',
        add_url: 'system.qrcode/add',
        edit_url: 'system.qrcode/edit',
        delete_url: 'system.qrcode/delete',
        export_url: 'system.qrcode/export',
        modify_url: 'system.qrcode/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {field: 'title', title: '名称'},
                    {field: 'code', title: '编码'},
                    {field: 'qrcodeimage', title: '二维码', templet: ea.table.image, search_ignore: true},
                    {field: 'remark', title: '备注', templet: ea.table.text},
                    {field: 'status', title: '状态', templet: ea.table.switch, search_ignore: true},
                    {field: 'create_time', title: '创建时间', search_ignore: true},
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