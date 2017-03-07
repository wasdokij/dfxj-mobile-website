<template>
<div class="bg-white wgd-wrap">
    <div class="notkiong-tip ui-whitespace padding-t-15">
        <div class="logo font32"><i class="ui-icon ui-icon-warn-lg"></i></div>
        <div class="padding-t-15 padding-b-15">
            <p class="notking-info text-center font16px ui-txt-info">您没有身份证信息，请先提交身份证信息</p>
        </div>
    </div>
    <div class="ui-btn-wrap">
        <!--<p class="jump text-center" style="display:block;padding:10px 0;">页面自动 <a id="href" href="javascript:history.back(-1);">跳转</a> 等待时间： <b id="wait">3</b></p>-->
            <button class="ui-btn-lg ui-btn-danger" onclick="location.href='/xiaojin/mine/identity'">确定</button>
    </div>

</div>
</template>