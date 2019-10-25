<template>
    <div>
        <b>Name:</b> {{rowData.name}}<br/>
        <b>Sender:</b> {{rowData.sender}}<br/>
        <b>comments:</b> {{rowData.name}}<br/>
        <b>backend data:</b> {{backend_data}}<br/>
    </div>
</template>
<script>
export default {
    name: "colDetail",
    data() {
        return {
            backend_data:""
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
            this.backend_data= "this is data from backend service";
        }
    }
};
</script>