window.onload = function(){
	new Vue({       //构建一个vue实例
        el:'#my',  //element  挂载元素
        data:{      //数据  键值对  obj
            name:'sonia',
            age:20,
            msg:'hello world',
            mark:0,
            arr:['a','b','c'],
            imgArray: ['img/banner1.jpg',  
		        'img/banner2.jpg',  
		        'img/banner3.jpg',  
		        'img/banner4.jpg',
		        'img/banner5.jpg'],
		     categorys:[{'icon':'icon-shenghuo','title':'在线咨询'},
		     {'icon':'icon-jiaoyu','title':'产品介绍'},
		     {'icon':'icon-11','title':'活动动态'},
		     {'icon':'icon-jiazheng','title':'限时抢购'},
		     {'icon':'icon-jiajujiafang','title':'今日秒杀'},
		     {'icon':'icon-licai','title':'领取优惠'}]
        },
        mounted:function(){   //挂载完成   生命周期
           this.play();  
        },
        methods: {  
		    autoPlay:function(){  
		      this.mark++;  
		      if (this.mark === this.imgArray.length) { //当遍历到最后一张图片置零  
		        this.mark = 0  
		      }  
		    },  
		    play:function(){  
		      setInterval(this.autoPlay, 2000)  
		    }
		},   
    })
}