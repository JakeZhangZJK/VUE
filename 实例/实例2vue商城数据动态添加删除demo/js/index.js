window.onload = function(){
    new Vue({   //构建vue实例
        el:'#my',    //挂载元素  element
        data:{   //数据
            name:'abc',
            age:18,
            arr:[1,2,3,4,5],
            obj:{msg:'123'},
            lists:[{name:'手机',state:'0'},
                    {name:'衣服2',state:'1'},
                    {name:'包包3',state:'2'},
                    {name:'化妆品',state:'0'}]
        },
        methods:{   //方法
            add:function(){
                if(!this.name) return;
                this.lists.unshift({name:this.name,state:'未采购'});
                this.name='';
            },
            del:function(index){
                this.lists.splice(index,1);  //index 位置   1个数
            }
        },
        filters:{   //过滤器    文本格式    管道 
            stateFilter:function(type){   //list.state
                // if(type =='0'){
                //     return '未采购'
                // }else {
                //     return '已采购'
                // }
                switch(type){
                    case '0':
                        return '未采购';
                    case '1':
                        return '正在采购';
                    case '2':
                        return '已采购';
                    default :
                        return '未采购';
                }
            }
        }
    })
};
