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

function baseAxios(type, url, config, cb, errCb) {
    axios[type](url, config).then(function (response) {
        if (cb) cb(response);
    }).catch(function (error) {
        if (error) errCb(error);
    })
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

export function getInitialState() {
    return {
        bankCards: {
            data: [],
            status: 0,
            info: '',
            totalRows: 0
        },

    }
}

export function assignData(obj, data) {
    Object.keys(data).forEach(function (key) {
        obj[key] = deepClone(data[key]);
    });
}