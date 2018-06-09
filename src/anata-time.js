(function(){
    'use strict';
    var ThTime = new Date(2018, 3, 19, 11, 6, 0); // 2018.4.19
    function updateParagraph(){
    var now = new Date();
    //var days =  (ThTime.getTime() - now.getTime()) / (1000 * 24 * 60 * 60);
    //var years = (ThTime.getTime() - now.getTime()) / (1000 * 24 * 60 * 60 * 365);
    var days = (now.getTime() - ThTime.getTime()) / (1000 * 24 * 60 * 60);
    //document.getElementById('2100-time').innerText = '2100年まで あと約' + Math.round(days) + '日。';
    //document.getElementById('2100-time').innerText = '2100年まで あと約' + Math.round(years) + '年。';
    document.getElementById('anata-time').innerText = 'あなたが生まれてから' + Math.round(days) + '日。';
 }
 setInterval(updateParagraph, 2 * 1000);
})();
