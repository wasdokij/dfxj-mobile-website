import axios from 'axios';
// 银行卡列表
const bankCardList = '/oriental_treasure/UserBank/myBankCardList';
// 是否实名
const isCertification = '/oriental_treasure/UserRealInfo/showInfo';
// 添加银行卡
const addBankCard = '/oriental_treasure/UserBank/addBankCard';
// 编辑银行卡
const editBankCard = '/oriental_treasure/UserBank/editMyBankCard';
// 删除银行卡
const deleteBankCard = '/oriental_treasure/UserBank/delMyBankCard';
// 获取验证码
const verifyCode = '/oriental_treasure/register_and_login/sendPhoneCode';
// 身份认证第一步，提交姓名身份证号手机号验证码
const userInfoForID = '/oriental_treasure/UserRealInfo/index';
// 身份证照片
const photoUrl = '/oriental_treasure/UserRealInfo/uploadIdCard'; // type: id_card头像面, id_card_back国徽面
// 确认提交身份证照片
const confirmPhotoUrl = '/oriental_treasure/UserRealInfo/comfirmIdCard';
// 拿到微信JS SDK配置
const wxConfig = '/oriental_treasure/Wechat/getJssdkInfo';

function baseAxios(type, url, config, cb, errCb) {
    axios[type](url, config).then(function (response) {
        if (cb) cb(response);
    }).catch(function (error) {
        if (error) errCb(error);
    })
}

export function uploadPhoto(config, cb, errCb) {
    baseAxios('post', photoUrl, config, cb, errCb);
}

export function confirmPhoto(cb, errCb) {
    baseAxios('get', confirmPhotoUrl, {}, cb, errCb);
}

export function getWXConfig(config, cb, errCb) {
    baseAxios('post', wxConfig, config, cb, errCb);
}

export function isCert(cb, errCb) {
    baseAxios('get', isCertification, {}, cb, errCb);
}

export function getCard(cb, errCb) {
    baseAxios('get', bankCardList, {}, cb, errCb);
}

export function addCard(config, cb, errCb) {
    baseAxios('post', addBankCard, config, cb, errCb);
}

export function editCard(config, cb, errCb) {
    baseAxios('post', editBankCard, config, cb, errCb);
}

export function deleteCard(config, cb, errCb) {
    baseAxios('post', deleteBankCard, config, cb, errCb);
}

export function getVerifyCode(config, cb, errCb) {
    baseAxios('post', verifyCode, config, cb, errCb);
}

export function signInID(config, cb, errCb) {
    baseAxios('post', userInfoForID, config, cb, errCb);
}

export function layerOpen(res) {
    if (res.status === 0) {
        layer.open({
            content: res.info,
            btn: '知道了'
        })
    }
}

export function getInitialBankCardList() {
    return {
        data: [],
        status: 0,
        info: '',
        totalRows: 0
    }
}

export function getInitialCardAddingForm() {
    return {
        bank_name: '',
        bank_card_no: '',
        verify_code: '',
        counting: false,
        countingNum: 60,
        cellphone: '',
        dialogShow: false,
        message: ''
    }
}