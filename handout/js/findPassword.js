'use strict';

var vm = new Vue ({
    el: '#HolePage',
    data: {
        userMail : '',
        code : '',
        codePic : ''
    },
    ready() {
        // console.log(1);
        setTimeout(function(){
            document.getElementsByTagName('body')[0].style.height = window.innerHeight+'px';  
        },20); 
    },
    methods: {
        send : function (){
            window.location.href ='../view/index.html'
        }
    }
})