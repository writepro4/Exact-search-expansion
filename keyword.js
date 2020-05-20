javascript: function naver_keycnt() {
    var head = document.getElementsByTagName('head')[0];
    var jScript;
    jScript = document.createElement('script');
    jScript.language = 'javascript';
    jScript.src = 'https://www.ryo.co.kr/asset/bookmarklet/naver_keycnt.js';
    jScript.type = 'text/javascript';
    head.appendChild(jScript);
}
naver_keycnt();