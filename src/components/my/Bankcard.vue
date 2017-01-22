<template>
    <div class="ui-dialog show">
        <div class="ui-dialog-cnt padding-t-80 pos-ret">
            <div class="ui-dialog-bd">
                <span class="font18 dis-blk">请先开通实名验证</span>
                <span class="font14 txt-color-4a">你的账户未实名验证，无法操作此步骤，请先前往实名验证</span>
            </div>
            <div class="ui-dialog-ft" >
                <button type="button" data-role="button" >去开通</button>
            </div>
            <div class="ui-dialog-ft">
                <button type="button" data-role="button" class="txt-color-red" onclick="s1()">关闭</button>
            </div>
            <span class="dis-blk id-alert"></span>
        </div>
    </div>
</template>