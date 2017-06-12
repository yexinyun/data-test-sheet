/**
 * Created by navy on 2017/6/1.
 */

/*
 * eyebrow-bar button section
 * the mouse moves in the moving style Settings
 * */
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
/*
*teh page minimizes the Settings for maximum closing
* */

/*minimizes*/
$(".glyphicon-minus").click(function () {
    $(".win").removeClass("max").addClass("min");
    $(".min-bar").css("opacity",1);
});

/*maximize*/
$(".min-bar").click(function () {
    $(".min-bar").css("opacity",0);
     $(".win").removeClass("min").addClass("max");
});

/*zoom in and zoom out*/


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
    /*the scale of the page,and so on*/
    /*
     *Highlight the line in the selected line
     * */
    $("tbody tr").click(function () {
        $(".table-striped > tbody > tr:nth-of-type(odd)").css("background-color","none");
        $(this).addClass("sl").siblings().removeClass("sl");
        $(this).find("tr").attr("checked",true);
    });
    $(".btn-start").on('click',function(){

        //the jequery object has length attribute
       var greenCount=  $('.green').length;
       var redCount=    $('.red').length;

       //this is splicing copying zhe retrieved value to the textbox
       $('.inputCount').val("成功通过的数据有:" + greenCount + ',失败的数据有:'+ redCount);
    });
    //theselection of drop-down box show
    $(".form-control").on('change',function (event) {
        var $target = $(event.target);
        if($target.val() == 5) {
            data.listBody = listBody_5_f;
            dataShow();
            // $(".pagination-2").show();
            $(".pagination").show();

        }else if($target.val() == 10) {
            data.listBody = listBody_10;
            dataShow();
            // $(".pagination-2").hide();
            // $(".next").hide();
            $(".pagination").hide();
            
        }
    });
    //pageing option
    $(".pagination").on('click',function (event) {
        var $target = $(event.target);
        if( $target.parent().is('.pagination-1')){
            data.listBody = listBody_5_f;
            dataShow();
        }else if($target.parent().is('.pagination-2') || $target.parent().is('.next')){
            data.listBody = listBody_5_l;
            dataShow();
        }
    })
});

//Table date
var data  ={
    listBody:[
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
    listHead:['序号','测试项目','测试编号','测试进度','测试结果']
};
var listBody_10 = [
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
];
var listBody_5_f = [
    {num:"1",item:"FPAG IO口的测试",id:"1",progress:1,result:1},
    {num:"2",item:"CAN1口通讯测试",id:"1",progress:0.5},
    {num:"3",item:"CAN2口通讯测试",id:"1",progress:0.2},
    {num:"4",item:"DAC_ADC输出输入测试",id:"1",progress:1,result:0},
    {num:"5",item:"485总线通信测试",id:"1",progress:0.5}
];
var listBody_5_l = [
    {num:"6",item:"-GPIO 通断测试(ON/OFF)",id:"1",progress:0.1},
    {num:"7",item:"-GPIO(继电器控件J1)",id:"1",progress:0.9},
    {num:"8",item:"编码器测试",id:"1",progress:0.7},
    {num:"9",item:"-GPIO(FPGA_IO)",id:"1",progress:0.3}
];


function dataShow() {
    //Render the tbody
    var strBody = template('tempBody',data);
    $("#editable tbody").html(strBody);
}
dataShow();
//Render the thead
var strHead = template("tempHead",data);
$("#editable thead tr").html(strHead);
})(jQuery);