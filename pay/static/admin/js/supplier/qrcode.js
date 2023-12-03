define(["jquery", "easy-admin", "qrcode"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'supplier.qrcode/index',
        add_url: 'supplier.qrcode/add',
        edit_url: 'supplier.qrcode/edit',
        delete_url: 'supplier.qrcode/delete',
        export_url: 'supplier.qrcode/export',
        modify_url: 'supplier.qrcode/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {field: 'name', title: '名称'},
                    {width: 800, field: 'qrcode_url', title: '付款码', search_ignore: true},
                    {field: 'remark', title: '备注', templet: ea.table.text},
                    {field: 'status', search: 'select', selectList: ["禁用","启用"], title: '状态', templet: ea.table.switch, search_ignore: true},
                    {width: 250, title: '操作', templet: ea.table.tool, operat:[
                        [
                            {
                                class: 'layui-btn layui-btn-success layui-btn-xs',
                                text: '扫码',
                                method: 'open',
                                url: 'supplier.qrcode/scan',
                                auth: 'scan',
                            },
                        ],
                        'edit',
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
        scan: function () {
            
            new QRCode(document.getElementById("qrcode"), {
                text: qrtext,
                width: 300,
                height: 300,
                //colorDark: "#f60",
                //colorLight: "#ccc",
                correctLevel: 0 //二维码复杂性
            });

            ea.listen();
        },
    };
    return Controller;
});