define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'supplier.config/index',
        add_url: 'supplier.config/add',
        edit_url: 'supplier.config/edit',
        delete_url: 'supplier.config/delete',
        export_url: 'supplier.config/export',
        modify_url: 'supplier.config/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'add'],
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