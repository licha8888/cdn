define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.data/index',
        add_url: 'system.data/add',
        edit_url: 'system.data/edit',
        delete_url: 'system.data/delete',
        export_url: 'system.data/export',
        modify_url: 'system.data/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'add',
                    /*[{
                        class: "layui-btn layui-btn-sm layui-btn-success",
                        url: "system.data/addsecrect",
                        icon: "fa fa-plus",
                        title: "生成密钥",
                    }],
                    */
                ],
                cols: [[
                    {field: 'config_name', title: '名称'},
                    {field: 'name', title: '标识'},
                    {field: 'value', title: '数据'},
                    {field: 'remark', title: '备注', templet: ea.table.text, search_ignore: true},
                    {field: 'create_time', title: '创建时间', search_ignore: true},
                    {width: 250, title: '操作', templet: ea.table.tool, operat:['edit', 'delete']},
                ]],
            });

            ea.listen();
        },
        add: function () {
            ea.listen(function (data, filter) {
                if (filter == 'getSecret')
                {
                    $.get("getSecret", function (data,status){
                        $("#value").val(data.secret)
                    })
                    return true;
                }
                return data;
            });
        },
        edit: function () {
            ea.listen(function (data, filter) {
                if (filter == 'getSecret')
                {
                    $.get("getSecret", function (data,status){
                        $("#value").val(data.secret)
                    })
                    return true;
                }
                return data;
            });
        },
    };
    return Controller;
});