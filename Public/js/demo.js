/**
 * Created by yangyu on 2017/6/14.
 */

layui.define(['laypage', 'layer', 'form', 'pagesize'], function (exports) {


    //实例化一个表格控件对象
    var thisTable = Table_Layui;
    function SelectDataByPageIndex(PageIndex) {
        //每次查询获得的数据集--当前页的数据
        var Data = [
            { Name: "张三", Sex: "1", Age: "15" },
            { Name: "李四", Sex: "1", Age: "18" },
            { Name: "王五", Sex: "1", Age: "26" },
            { Name: "韩梅梅", Sex: "0", Age: "16" }
        ];
        thisTable.SumDateCounte = 100;//总数据的行数
        thisTable.data = Data;
        thisTable.PageIndex = PageIndex;//当前页码
        thisTable.CreateTableFrame();//创建table

    }

    //编辑方法
    function Edit(index) {
        var json = Table_Layui.GetRowData(index);
        alert("有数据集了，自己处理编辑事件哦");

    }

    //删除方法
    function Delete(index) {
        var json = Table_Layui.GetRowData(index);
        alert("我要放大招了，小心点！");
    }
    //表格控件初始化设置
    function TableOnit() {
        thisTable.TablePanel = "Table";
        thisTable.Edit = Edit;
        thisTable.Delete = Delete;
        thisTable.SelectDataByPageIndex = SelectDataByPageIndex;
        thisTable.Column = [
            { txtName: "姓名", ValueCode: "Name", width: 80 },
            { txtName: "性别",
                ValueCode: "Sex",
                width: 80,
                ValueDeal: function (value) {
                    if (value == 0) {
                        return "女";
                    } else {
                        return "男";
                    }
                    return value;
                }
            },
            { txtName: "年龄", ValueCode: "Age", width: 80 }
        ];
    }

    TableOnit(); //初始化表格
    SelectDataByPageIndex(1);//初始化查询
    exports();
});