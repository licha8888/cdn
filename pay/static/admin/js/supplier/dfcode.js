define(["jquery", "easy-admin", "qrcode"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'supplier.dfcode/index',
        add_url: 'supplier.dfcode/add',
        edit_url: 'supplier.dfcode/edit',
        delete_url: 'supplier.dfcode/delete',
        export_url: 'supplier.dfcode/export',
        modify_url: 'supplier.dfcode/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {width: 80, field: 'machineid', title: '机号'},
                    {field: 'imei', title: 'IMEI'},
                    {width: 80, field: 'amount', title: '金额', search_ignore: true},
                    {width: 300, field: 'orderid', title: '单号'},
                    {field: 'qrcode_url', title: '付款码', search_ignore: true},
                    {field: 'remark', title: '备注', templet: 
                        function (data, option) {
                            if (data.remark == '') {
                                remark = ''
                            } else if (data.remark.indexOf('手动挂码') != -1) {
                                remark = '<span class="layui-badge layui-bg-green">'+data.remark+'</span>'
                            } else {
                                remark = '<span class="layui-badge layui-bg-gray">'+data.remark+'</span>'
                            }
                            return remark;
                        },
                        search_ignore: true},
                    {width: 120, field: 'status', templet:
                        function (data, option) {
                            var status_type =[
                                '<span class="layui-badge layui-bg-gray">禁用</span>',
                                '<span class="layui-badge layui-bg-green">未使用</span>',
                                '<span class="layui-badge layui-bg-cyan">已占用</span>',
                                '<span class="layui-badge layui-bg-blue">已支付</span>',
                                '<span class="layui-badge layui-bg-gray">已过期</span>',
                                '<span class="layui-badge layui-bg-red">被支付</span>',
                            ]
                            return status_type[data.status]
                        },
                        search: 'select', 
                        selectList: [[0, "禁用"],[1, "未使用"],[2, "已占用"],[3, "已支付"],[3, "已过期"]],
                        title: '状态'
                    },
                    {width: 180, field: 'create_time', title: '创建时间', search: 'range'},
                    {width: 180, field: 'update_time', title: '更新时间', search: 'range'},
                    {width: 180, title: '操作', templet: ea.table.tool, operat:[
                        [
                            {
                                class: 'layui-btn layui-btn-success layui-btn-xs',
                                text: '扫码',
                                method: 'open',
                                url: 'supplier.dfcode/scan',
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