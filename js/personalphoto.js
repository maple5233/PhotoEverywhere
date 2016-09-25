'use strict';

var vm = new Vue ({
    el: '#HolePage',
    data: {
        self : true,
        pics : [{
            src : '../images/personal-index/gril.jpg',
            title : '梦中的伊甸园',
            author :'MissMio兔兔纸',
            describe : 'photo by：肉肉ROME\n这是一枚预告^_^ 油画里的我哈哈哈\n这是一枚预告^_^ 油画里的我哈哈哈\n这是一枚预告^_^ 油画里的我哈哈哈\n这是一枚预告^_^ 油画里的我哈哈哈\n这是一枚预告^_^ 油画里的我哈哈哈\n这是一枚预告^_^ 油画里的我哈哈哈\n这是一枚预告^_^ 油画里的我哈哈哈\n这是一枚预告^_^ 油画里的我哈哈哈\n这是一枚预告^_^ 油画里的我哈哈哈\n这是一枚预告^_^ 油画里的我哈哈哈\n这是一枚预告^_^ 油画里的我哈哈哈\n这是一枚预告^_^ 油画里的我哈哈哈\n这是一枚预告^_^ 油画里的我哈哈哈\n这是一枚预告^_^ 油画里的我哈哈哈\n这是一枚预告^_^ 油画里的我哈哈哈\n这是一枚预告^_^ 油画里的我哈哈哈',
            hot : 139,
            like : true
        },{
            src : '../images/personal-index/gril.jpg',
            title : '梦中的伊甸园',
            author :'MissMio兔兔纸',
            describe : 'photo by：肉肉ROME\n这是一枚预告^_^ 油画里的我哈哈哈',
            hot : 139,
            like : true
        },{
            src : '../images/personal-index/gril.jpg',
            title : '梦中的伊甸园',
            author :'MissMio兔兔纸',
            describe : 'photo by：肉肉ROME\n这是一枚预告^_^ 油画里的我哈哈哈',
            hot : 139,
            like : true
        }
        ]
    },
    ready() {
        // console.log(1);
        setTimeout(function(){
            document.getElementsByTagName('body')[0].style.height = window.innerHeight+'px';  
        },20); 
    },
    methods: {
        changeLike : function (index,event) {
            this.pics[ index ].like = ! this.pics[ index ].like ;
        },
        showPic : function (index) {
            window.location.href = this.pics[ index ].src;
        },
        changeToSelf : function (self) {
            this.self = self;
        },
        goSetting : function (){

        },
        logout : function () {
            window.location.href = '../view/index.html';
        }
    }
})