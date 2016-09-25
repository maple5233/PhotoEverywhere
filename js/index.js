'use strict';

var vm = new Vue ({
    el: '#HolePage',
    data: {
        loginMail : '',
        loginPassword : '',
        registMail : '',
        registPassword : ''
    },
    ready() {
        // console.log(1);
        setTimeout(function(){
            document.getElementsByTagName('body')[0].style.height = window.innerHeight+'px';  
        },20); 
    },
    methods: {
        login : function() {
            window.location.href = "personalphoto.html";
        },
        regist : function() {
            window.alert('注册成功!')
            window.location.href ='../view/index.html'
        }
    }
})