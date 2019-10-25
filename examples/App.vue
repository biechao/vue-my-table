<template>
  <div id="app">
    <div class="demo">
      <div class="demo_label">Use local datetime:</div> 
      <div class="demo_picker">
        <vueMyTable :param="local_param"></vueMyTable>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {vueMyTable} from './../packages/index'
export default {
  name: 'app',
  components: {
    vueMyTable
  },
  data(){
    return {
      local_param:{
        columns:[
          {
            index:"id",isCheckbox:true
          },
          {
            index:"id",isDetailRow:true
          },
          {
            index:"name",label:"Name",sortable:true,width:30
          },
          {
            index:"sender",label:"Sender",sortable:true,width:30
          },
          {
            index:"comments",label:"comments",sortable:false,width:38
          }
        ],
        dataSet:[
          {
            id:1,name:"aaa",sender:"aaa@domain.com","comments":"this is a test"
          },
          {
            id:2,name:"bbb",sender:"bbb@domain.com","comments":"this is a test"
          },
          {
            id:4,name:"ccc",sender:"ccc@domain.com","comments":"this is a test"
          }
          ,{
            id:4,name:"ddd",sender:"ddd@domain.com","comments":"this is a test"
          }
          ,{
            id:5,name:"eee",sender:"eee@domain.com","comments":"this is a test"
          }
          ,{
            id:6,name:"fff",sender:"fff@domain.com","comments":"this is a test"
          }
          ,{
            id:7,name:"ggg",sender:"ggg@domain.com","comments":"this is a test"
          }
          ,{
            id:9,name:"hhh",sender:"hhh@domain.com","comments":"this is a test"
          }
          ,{
            id:10,name:"iii",sender:"hhh@domain.com","comments":"this is a test"
          }
          ,{
            id:11,name:"jjj",sender:"hhh@domain.com","comments":"this is a test"
          }
          ,{
            id:12,name:"kkk",sender:"hhh@domain.com","comments":"this is a test"
          }
          ,{
            id:13,name:"lll",sender:"hhh@domain.com","comments":"this is a test"
          }
          ,{
            id:14,name:"mmm",sender:"hhh@domain.com","comments":"this is a test"
          }
          ,{
            id:15,name:"nnn",sender:"hhh@domain.com","comments":"this is a test"
          }
          ,{
            id:16,name:"ooo",sender:"hhh@domain.com","comments":"this is a test"
          }
          ,{
            id:17,name:"ppp",sender:"hhh@domain.com","comments":"this is a test"
          }
          ,{
            id:18,name:"qqq",sender:"hhh@domain.com","comments":"this is a test"
          }
        ],
        sortOrder:"asc",
        sortColumn:"name",
        height:200,
        detailRowComponentName:"col-detail"  
      }
    }
  },
  methods:{
    reloadTable(){
      this.local_param.reloadFlag = !this.local_param.reloadFlag;
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  text-align: left;
  .demo{
    .demo_label{
      display:inline-block;
      margin-right:5px;
      line-height:32px;
    }
    .demo_picker{
      display:inline-block;
      width:100%;
    }
    .demo_notes{
      font-style:italic;
      color:green;
      margin-left:20px;
    }
  }
}
</style>
