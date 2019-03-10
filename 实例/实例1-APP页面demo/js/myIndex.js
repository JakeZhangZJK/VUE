window.onload = function () {
  new Vue({
    el:'#my', // 挂载元素
    data:{ // 数据
      categorys:[{'icon':'icon-shenghuo','title':'在线咨询'},
        {'icon':'icon-jiaoyu','title':'产品介绍'},
        {'icon':'icon-11','title':'活动动态'},
        {'icon':'icon-jiazheng','title':'限时抢购'},
        {'icon':'icon-jiajujiafang','title':'今日秒杀'},
        {'icon':'icon-licai','title':'领取优惠'}],
      imgArray: ['img/banner1.jpg',
        'img/banner2.jpg',
        'img/banner3.jpg',
        'img/banner4.jpg',
        'img/banner5.jpg'],
      num:0,
    },


    methods:{
      autoPlay:function(){
        this.num ++;
        if (this.num >= this.imgArray.length){
          this.num =0;
        }
      },
      play:function () {
        setInterval(this.autoPlay,2000);
      }


    },
    mounted:function () {// 挂载完成  生命周期
      this.play();
    }
  });
}
