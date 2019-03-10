window.onload = function () {
  new Vue({
    el: '#my', //挂载元素
    data:{//数据
      checkAll:{name:'全选',check:false},
      lists:[{name:'华为',check:false},
        {name:'三星',check:false},
        {name:'苹果',check:false},
        {name:'小米',check:false},
        {name:'vivo',check:false},
        {name:'OPPO',check:false},
        {name:'锤子手机',check:false},
        {name:'联想',check:false}]

    },
    methods:{//方法
      checkAllChange:function () {
        // var self = this;
        // self.lists.forEach(function(item){
        //     item.check = self.checkAll.check;
        // });
        this.lists.forEach(item =>{//箭头函数方式
            item.check = this.checkAll.check;
        });
      },
      curChange:function () {
        //状态为true的数组
        var curTrue = this.lists.filter(function (item) {
          return item.check ==  true;//返回lists中状态为true的数组
        });
      /*  if (curTrue.length == this.lists.length){
          this.checkAll.check = true;
        } else {
          this.checkAll.check = false;
        }*/
        //将if else 换成三目运算符
        curTrue.length == this.lists.length ? this.checkAll.check = true:this.checkAll.check = false;
      }

    }


  });
}
