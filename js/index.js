/**
 * Created by navy on 2017/6/1.
 */

/*
 * eyebrow-bar button section
 * the mouse moves in the moving style Settings

 * */
'use strict';
(function($){
    $(".btn-default").click(function () {
        this.style.color = "#fff";
        $(".btn-default").mouseover(function () {
            this.style.backgroundColor = "#27c3a3";
        }).mouseout(function () {
            this.style.backgroundColor = "#1ab394";
        })
    });

$('.dropup').mousedown(function () {
    $(this).addClass("open");
});
// /*
// *teh page minimizes the Settings for maximum closing
// * */
//
// /*minimizes*/
// $(".glyphicon-minus").click(function () {
//     $(".win").removeClass("max").addClass("min");
//     $(".min-bar").css("opacity",1);
// });
//
// /*maximize*/
// $(".min-bar").click(function () {
//     $(".min-bar").css("opacity",0);
//      $(".win").removeClass("min").addClass("max");
// });
//
// /*zoom in and zoom out*/


/*close*/
$(".glyphicon-remove").click(function () {
   $(".win").remove();
});


/*
*main btn-start section
* the mouse moves in the moving style Settings
 */
$(".btn-start").click(function () {
    $(".btn-start").mouseover(function () {
        this.style.backgroundColor = "#27c3a3";
    }).mouseout(function () {
        this.style.backgroundColor = "#1ab394";
    })
});


$(function () {
    /*
     *点击表单行高亮的显示设置
     * */
    $("tbody tr").click(function () {
        $(".table-striped > tbody > tr:nth-of-type(odd)").css("background-color","none");
        $(this).addClass("sl").siblings().removeClass("sl");
        $(this).find("tr").attr("checked",true);
    });
    $(".btn-start").on('click',function(){

        //the jequery 函数有length属性
       var greenCount=  $('.green').length;
       var redCount=    $('.red').length;

       //测试结果在文本框显示
       $('.inputCount').val("成功通过的数据有:" + greenCount + ',失败的数据有:'+ redCount);
    });


    //nav底部下拉框选项卡的选择
    $('.easyui-combobox').on('change',function (event) {
        var $target = $(event.target);
        if($target.val() == "AL"){
            dataAlabama.alListBody = alListBody_10;
                    dataShow1();
            //下拉框页面的选择
            // $(".form-control").on('change',function (event) {
            //     var $target = $(event.target);
            //     if($target.val() == 5) {
            //         dataAlabama.alListBody = alListBody_5_f;
            //         dataShow1();
            //         $(".pagination").show();
            //
            //     }else if($target.val() == 10) {
            //         dataAlabama.alListBody = alListBody_10;
            //         dataShow1();
            //         $(".pagination").hide();
            //     }
            // });
            // //右下角页数的展示
            // $(".pagination").on('click',function (event) {
            //     var $target = $(event.target);
            //     if( $target.parent().is('.pagination-1')){
            //         dataAlabama.alListBody = alListBody_5_f;
            //         dataShow1();
            //     }else if($target.parent().is('.pagination-2') || $target.parent().is('.next')){
            //         dataAlabama.alListBody = alListBody_5_l;
            //         dataShow1();
            //     }
            // });
        }else if($target.val() == "AK"){
            dataAkabama.akListBody == akListBody_10;
            dataShow2();
        }else if($target.val() == "AZ"){
            dataAzabama.azListBody = azListBody_10;
            dataShow3();
        }else if($target.val() == "AR"){
            dataArabama.arListBody = arListBody_10;
            dataShow4();
        }
    });
});

    //AL接口数据
    var dataAlabama ={
        alListBody:[
            {num:"1",item:"FPAG IO口的测试",id:"1",progress:1,result:1},
            {num:"2",item:"CAN1口通讯测试",id:"1",progress:0.5},
            {num:"3",item:"CAN2口通讯测试",id:"1",progress:0.2},
            {num:"4",item:"DAC_ADC输出输入测试",id:"1",progress:1,result:0},
            {num:"5",item:"485总线通信测试",id:"1",progress:0.5},
            {num:"6",item:"-GPIO 通断测试(ON/OFF)",id:"1",progress:0.1},
            {num:"7",item:"-GPIO(继电器控件J1)",id:"1",progress:0.9},
            {num:"8",item:"编码器测试",id:"1",progress:0.7},
            {num:"9",item:"-GPIO(FPGA_IO)",id:"1",progress:0.3}
            // {num:"10",item:"1",id:"1",progress:0.1},
        ],
        // listFoot:['Rendering engine','Browser','Platform(s)','Engine version','CSS grade','Text result'],
        alListHead:['序号','测试项目','测试编号','测试进度','测试结果']
    };
    var alListBody_10 = [
        {num:"1",item:"FPAG IO口的测试",id:"1",progress:0.2},
        {num:"2",item:"CAN1口通讯测试",id:"1",progress:0.5},
        {num:"3",item:"CAN2口通讯测试",id:"1",progress:0.2},
        {num:"4",item:"DAC_ADC输出输入测试",id:"1",progress:1,result:0},
        {num:"5",item:"485总线通信测试",id:"1",progress:0.5},
        {num:"6",item:"-GPIO 通断测试(ON/OFF)",id:"1",progress:1,result:1},
        {num:"7",item:"-GPIO(继电器控件J1)",id:"1",progress:0.9},
        {num:"8",item:"编码器测试",id:"1",progress:1,result:1},
        {num:"9",item:"-GPIO(FPGA_IO)",id:"1",progress:0.3}
// {num:"10",item:"1",id:"1",progress:0.1},
    ];
    var alListBody_5_f = [
        {num:"1",item:"FPAG IO口的测试",id:"1",progress:0.2},
        {num:"2",item:"CAN1口通讯测试",id:"1",progress:0.5},
        {num:"3",item:"CAN2口通讯测试",id:"1",progress:0.2},
        {num:"4",item:"DAC_ADC输出输入测试",id:"1",progress:1,result:0},
        {num:"5",item:"485总线通信测试",id:"1",progress:0.5}
    ];
    var alListBody_5_l = [
        {num:"6",item:"-GPIO 通断测试(ON/OFF)",id:"1",progress:1,result:1},
        {num:"7",item:"-GPIO(继电器控件J1)",id:"1",progress:0.9},
        {num:"8",item:"编码器测试",id:"1",progress:1,result:1},
        {num:"9",item:"-GPIO(FPGA_IO)",id:"1",progress:0.3}
    ];

    //AK接口数据
    var dataAkabama ={
        akListBody:[
            {num:"1",item:"FPAG IO口的测试",id:"1",progress:0.2},
            {num:"2",item:"CAN1口通讯测试",id:"1",progress:0.5},
            {num:"3",item:"CAN2口通讯测试",id:"1",progress:0.2},
            {num:"4",item:"DAC_ADC输出输入测试",id:"1",progress:1,result:0},
            {num:"5",item:"485总线通信测试",id:"1",progress:0.5},
            {num:"6",item:"-GPIO 通断测试(ON/OFF)",id:"1",progress:1,result:1},
            {num:"7",item:"-GPIO(继电器控件J1)",id:"1",progress:0.9},
            {num:"8",item:"编码器测试",id:"1",progress:1,result:1},
            {num:"9",item:"-GPIO(FPGA_IO)",id:"1",progress:0.3}
            // {num:"10",item:"1",id:"1",progress:0.1},
        ],
        // listFoot:['Rendering engine','Browser','Platform(s)','Engine version','CSS grade','Text result'],
        akListHead:['序号','测试项目','测试编号','测试进度','测试结果']
    };
    var akListBody_10 = [
        {num:"1",item:"FPAG IO口的测试",id:"1",progress:0.2},
        {num:"2",item:"CAN1口通讯测试",id:"1",progress:0.5},
        {num:"3",item:"CAN2口通讯测试",id:"1",progress:0.2},
        {num:"4",item:"DAC_ADC输出输入测试",id:"1",progress:1,result:0},
        {num:"5",item:"485总线通信测试",id:"1",progress:0.5},
        {num:"6",item:"-GPIO 通断测试(ON/OFF)",id:"1",progress:1,result:1},
        {num:"7",item:"-GPIO(继电器控件J1)",id:"1",progress:0.9},
        {num:"8",item:"编码器测试",id:"1",progress:1,result:1},
        {num:"9",item:"-GPIO(FPGA_IO)",id:"1",progress:0.3}
// {num:"10",item:"1",id:"1",progress:0.1},
    ];
    var akListBody_5_f = [
        {num:"1",item:"FPAG IO口的测试",id:"1",progress:0.2},
        {num:"2",item:"CAN1口通讯测试",id:"1",progress:0.5},
        {num:"3",item:"CAN2口通讯测试",id:"1",progress:0.2},
        {num:"4",item:"DAC_ADC输出输入测试",id:"1",progress:1,result:0},
        {num:"5",item:"485总线通信测试",id:"1",progress:0.5}
    ];
    var akListBody_5_l = [
        {num:"6",item:"-GPIO 通断测试(ON/OFF)",id:"1",progress:1,result:1},
        {num:"7",item:"-GPIO(继电器控件J1)",id:"1",progress:0.9},
        {num:"8",item:"编码器测试",id:"1",progress:1,result:1},
        {num:"9",item:"-GPIO(FPGA_IO)",id:"1",progress:0.3}
    ];

//     //AZ接口数据
    var dataAzabama ={
        azListBody:[
            {num:"1",item:"FPAG IO口的测试",id:"1",progress:1,result:1},
            {num:"2",item:"CAN1口通讯测试",id:"1",progress:0.5},
            {num:"3",item:"CAN2口通讯测试",id:"1",progress:0.2},
            {num:"4",item:"DAC_ADC输出输入测试",id:"1",progress:1,result:0},
            {num:"5",item:"485总线通信测试",id:"1",progress:0.5},
            {num:"6",item:"-GPIO 通断测试(ON/OFF)",id:"1",progress:0.1},
            {num:"7",item:"-GPIO(继电器控件J1)",id:"1",progress:0.9},
            {num:"8",item:"编码器测试",id:"1",progress:1,result:0},
            {num:"9",item:"-GPIO(FPGA_IO)",id:"1",progress:0.3}
            // {num:"10",item:"1",id:"1",progress:0.1},
        ],
        // listFoot:['Rendering engine','Browser','Platform(s)','Engine version','CSS grade','Text result'],
        azListHead:['序号','测试项目','测试编号','测试进度','测试结果']
    };
    var azListBody_10 = [
        {num:"1",item:"FPAG IO口的测试",id:"1",progress:1,result:1},
        {num:"2",item:"CAN1口通讯测试",id:"1",progress:0.5},
        {num:"3",item:"CAN2口通讯测试",id:"1",progress:0.2},
        {num:"4",item:"DAC_ADC输出输入测试",id:"1",progress:1,result:0},
        {num:"5",item:"485总线通信测试",id:"1",progress:0.5},
        {num:"6",item:"-GPIO 通断测试(ON/OFF)",id:"1",progress:0.1},
        {num:"7",item:"-GPIO(继电器控件J1)",id:"1",progress:0.9},
        {num:"8",item:"编码器测试",id:"1",progress:1,result:0},
        {num:"9",item:"-GPIO(FPGA_IO)",id:"1",progress:0.3},
        {num:"10",item:"1",id:"1",progress:0.1}
    ];
    var azListBody_5_f = [
        {num:"1",item:"FPAG IO口的测试",id:"1",progress:1,result:1},
        {num:"2",item:"CAN1口通讯测试",id:"1",progress:0.5},
        {num:"3",item:"CAN2口通讯测试",id:"1",progress:0.2},
        {num:"4",item:"DAC_ADC输出输入测试",id:"1",progress:1,result:0},
        {num:"5",item:"485总线通信测试",id:"1",progress:0.5}
    ];
    var azListBody_5_l = [
        {num:"6",item:"-GPIO 通断测试(ON/OFF)",id:"1",progress:0.1},
        {num:"7",item:"-GPIO(继电器控件J1)",id:"1",progress:0.9},
        {num:"8",item:"编码器测试",id:"1",progress:1,result:0},
        {num:"9",item:"-GPIO(FPGA_IO)",id:"1",progress:0.3}
    ];

//     //AR接口数据
    var dataArabama ={
        arListBody:[
            {num:"1",item:"FPAG IO口的测试",id:"1",progress:1,result:1},
            {num:"2",item:"CAN1口通讯测试",id:"1",progress:1,result:1},
            {num:"3",item:"CAN2口通讯测试",id:"1",progress:0.2},
            {num:"4",item:"DAC_ADC输出输入测试",id:"1",progress:1,result:0},
            {num:"5",item:"485总线通信测试",id:"1",progress:0.5},
            {num:"6",item:"-GPIO 通断测试(ON/OFF)",id:"1",progress:0.1},
            {num:"7",item:"-GPIO(继电器控件J1)",id:"1",progress:1,result:1},
            {num:"8",item:"编码器测试",id:"1",progress:0.7},
            {num:"9",item:"-GPIO(FPGA_IO)",id:"1",progress:0.3}
            // {num:"10",item:"1",id:"1",progress:0.1},
        ],
        // listFoot:['Rendering engine','Browser','Platform(s)','Engine version','CSS grade','Text result'],
        arListHead:['序号','测试项目','测试编号','测试进度','测试结果']
    };
    var arListBody_10 = [
        {num:"1",item:"FPAG IO口的测试",id:"1",progress:1,result:1},
        {num:"2",item:"CAN1口通讯测试",id:"1",progress:1,result:1},
        {num:"3",item:"CAN2口通讯测试",id:"1",progress:0.2},
        {num:"4",item:"DAC_ADC输出输入测试",id:"1",progress:1,result:0},
        {num:"5",item:"485总线通信测试",id:"1",progress:0.5},
        {num:"6",item:"-GPIO 通断测试(ON/OFF)",id:"1",progress:0.1},
        {num:"7",item:"-GPIO(继电器控件J1)",id:"1",progress:1,result:1},
        {num:"8",item:"编码器测试",id:"1",progress:0.7},
        {num:"9",item:"-GPIO(FPGA_IO)",id:"1",progress:0.3}
// {num:"10",item:"1",id:"1",progress:0.1},
    ];
    var arListBody_5_f = [
        {num:"1",item:"FPAG IO口的测试",id:"1",progress:1,result:1},
        {num:"2",item:"CAN1口通讯测试",id:"1",progress:1,result:1},
        {num:"3",item:"CAN2口通讯测试",id:"1",progress:0.2},
        {num:"4",item:"DAC_ADC输出输入测试",id:"1",progress:1,result:0},
        {num:"5",item:"485总线通信测试",id:"1",progress:0.5}
    ];
    var arListBody_5_l = [
        {num:"6",item:"-GPIO 通断测试(ON/OFF)",id:"1",progress:0.1},
        {num:"7",item:"-GPIO(继电器控件J1)",id:"1",progress:1,result:1},
        {num:"8",item:"编码器测试",id:"1",progress:0.7},
        {num:"9",item:"-GPIO(FPGA_IO)",id:"1",progress:0.3}
    ];

    function dataShow1() {
    //渲染到tbody
    var strBody = template('tempBody',dataAlabama);
    $("#editable tbody").html(strBody);
}
    dataShow1();

    function dataShow2() {
        //渲染到tbody
        var strBody = template('tempBody',dataAkabama);
        $("#editable tbody").html(strBody);
    }
    dataShow2();

    function dataShow3() {
        //渲染到tbody
        var strBody = template('tempBody',dataAzabama);
        $("#editable tbody").html(strBody);
    }
    dataShow3();

    function dataShow4() {
        //渲染到tbody
        var strBody = template('tempBody',dataAzabama);
        $("#editable tbody").html(strBody);
    }
    dataShow4();



    //渲染到thead
    var strHead = template("tempHead",dataAlabama);
    $("#editable thead tr").html(strHead);
    
    })(jQuery);


