export const backgroundMap = {
    1: '注册用户',
    2: '微股东',
    3: '银卡VIP',
    4: '金卡VIP'
};
export const styleMap = {
    1: { background: '#fff', color: '#000', border: '1px solid #dadada'},
    2: { background: '#f75c5c', color: '#fff'},
    3: { background: '#dadada', color: '#fff'},
    4: { background: '#ffc234', color: '#fff'},
};
export const searchTypeMap = {
    'default': '手机号/姓名/昵称',
    0: '搜索全部',
    1: '搜索注册用户',
    2: '搜索合格微股东',
    3: '搜索银卡VIP',
    4: '搜索金卡VIP'
};
export function bindFastClick() {
    // 启动fastclick
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function(){
            FastClick.attach(document.body);
        }, false);
    }
}
