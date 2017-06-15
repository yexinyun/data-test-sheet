/**
 * Created by hyl on 2017/6/13.
 */
/**
 * Created by hyl on 2017/6/13.
 */

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
    listHead:['序号','测试项目','测试编号','测试进度','测试结果','测试按钮']
};
var listBody_10 = [ {num:"1",item:"FPAG IO口的测试",id:"1",progress:1,result:1},
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

/*-----AL接口数据------*/
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
    alListHead:['序号','测试项目','测试编号','测试进度','测试结果','测试按钮']
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

/*-----------AK接口数据------------*/
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
    akListHead:['序号','测试项目','测试编号','测试进度','测试结果','测试按钮']
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
/*---------------------AZ接口数据-------------------*/
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
    azListHead:['序号','测试项目','测试编号','测试进度','测试结果','测试按钮']
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

/*---------------------AR接口数据------------------*/
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
    arListHead:['序号','测试项目','测试编号','测试进度','测试结果','测试按钮']
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