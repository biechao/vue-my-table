<template>
    <div>
        <a href="javascript:void(0)" @click.stop="callback">{{rowData.comments}}</a>
    </div>
</template>
<script>
export default {
    name: "comments",
    data() {
        return {
           
        };
    },
    props:{
        rowData:{
            type:Object,
            default:{}
        }
    },
    methods:{
        callback(){
            alert("Do anything you want here!");
        }
    }
};
</script>