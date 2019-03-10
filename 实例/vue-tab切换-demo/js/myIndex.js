window.onload = function () {
  new Vue({
    el:'#my',//挂载元素
    data:{// 数据
        title:['在线咨询','产品介绍','活动动态','限时抢购'],
        content:['内容1','内容二','内容san','内容四'],
      num:0,
      num2:1,
        lists:[{title:'a',content:'AAA'},
        {title:'b',content:'BBB'},
        {title:'c',content:'CCC'},
        {title:'d',content:'DDD'}]

    },
    methods:{// 方法
      play:function (i) {
        this.num = i;
      }
    }
  })
}
