/**
 * Created by navy on 2017/6/1.
 */
/*
 * eyebrow-bar button section
 * the mouse moves in the moving style Settings
 * */
'use strict';
(function($){
    var apiParams = {
        api: 'Alabama',
        count: 10
    };

    $(".btn-default").click(function () {
        this.style.color = "#fff";
        $(".btn-default").mouseover(function () {
            this.style.backgroundColor = "#27c3a3";
        }).mouseout(function () {
            this.style.backgroundColor = "#1ab394";
        })
    });

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
    $(".btn-start").on('click',function(){
        $(".btn-start").mouseover(function () {
            this.style.backgroundColor = "#27c3a3";
        }).mouseout(function () {
            this.style.backgroundColor = "#1ab394";
        });
        //Jquery 对象有 length 属性
        var greenCount=  $('.green').length;
        var redCount=    $('.red').length;

        //this is splicing copying zhe retrieved value to the textbox
        $('.inputCount').val("成功通过的数据有:" + greenCount + ',失败的数据有:'+ redCount);
    });

    //数据接口选择
    $(".api-title").on('change',function (event) {
        var $target = $(event.target);
        apiParams.api = $target.val();
        if(apiParams.count == 10) {
            switch (apiParams.api){
                case 'Alabama':
                    data.listBody = alListBody_10;
                    break;
                case 'Alaska':
                    data.listBody = akListBody_10;
                    break;
                case 'Arizona':
                    data.listBody = azListBody_10;
                    break;
                case 'Arkansas':
                    data.listBody = arListBody_10;
                    break;
            }
        }else if(apiParams.count == 5) {
            switch (apiParams.api){
                case 'Alabama':
                    data.listBody = alListBody_5_f;
                    break;
                case 'Alaska':
                    data.listBody = akListBody_5_f;
                    break;
                case 'Arizona':
                    data.listBody = azListBody_5_f;
                    break;
                case 'Arkansas':
                    data.listBody = arListBody_5_f;
                    break;
            }
        }
        // data.listBody = listBody_10;
        dataShow();
        $(".pagination-2").hide();
    });

    //数据条数据选择
    $(".form-control").on('change',function (event) {
        var $target = $(event.target);
        if($target.val() == 5) {
            apiParams.count = 5;
            switch (apiParams.api){
                case 'Alabama':
                    data.listBody = alListBody_5_f;
                    break;
                case 'Alaska':
                    data.listBody = akListBody_5_f;
                    break;
                case 'Arizona':
                    data.listBody = azListBody_5_f;
                    break;
                case 'Arkansas':
                    data.listBody = arListBody_5_f;
                    break;
            }
            // data.listBody = listBody_5_f;
            dataShow();
            $(".pagination").show();
            $(".pagination-2").show();

        }else if($target.val() == 10) {
            apiParams.count = 10;
            switch (apiParams.api){
                case 'Alabama':
                    data.listBody = alListBody_10;
                    break;
                case 'Alaska':
                    data.listBody = akListBody_10;
                    break;
                case 'Arizona':
                    data.listBody = azListBody_10;
                    break;
                case 'Arkansas':
                    data.listBody = arListBody_10;
                    break;
            }
            // data.listBody = listBody_10;
            dataShow();
            // $(".pagination-2").hide();
            $(".pagination").hide();
        }
    });
    //分页选择
    $(".pagination").on('click',function (event) {
        var $target = $(event.target);
        console.log($target);
        if( $target.parent().is('.pagination-1')){
            switch (apiParams.api){
                case 'Alabama':
                    data.listBody = alListBody_5_f;
                    break;
                case 'Alaska':
                    data.listBody = akListBody_5_f;
                    break;
                case 'Arizona':
                    data.listBody = azListBody_5_f;
                    break;
                case 'Arkansas':
                    data.listBody = arListBody_5_f;
                    break;
            }
            // data.listBody = listBody_5_f;
            dataShow();
        }else if($target.parent().is('.pagination-2')){
            switch (apiParams.api){
                case 'Alabama':
                    data.listBody = alListBody_5_l;
                    break;
                case 'Alaska':
                    data.listBody = akListBody_5_l;
                    break;
                case 'Arizona':
                    data.listBody = azListBody_5_l;
                    break;
                case 'Arkansas':
                    data.listBody = arListBody_5_l;
                    break;
            }
            // data.listBody = listBody_5_l;
            dataShow();
        }
    });
    function dataShow() {
        //Render the tbody
        var strBody = template('tempBody',data);
        $("#editable tbody").html(strBody);
    }
    dataShow();

    //Render the thead
    var strHead = template("tempHead",data);
    $("#editable thead tr").html(strHead);

    function update_tab_item(dev_id,dev_progress,resultsss) {
        for(var i = 0; i < data.listBody.length; i++){
            var dev_id = data.listBody[i].id;
            var dev_progress = data.listBody[i].progress;
            var resultsss = data.listBody[i].result;
        }
        dataShow();
    }
    update_tab_item();
})(jQuery);