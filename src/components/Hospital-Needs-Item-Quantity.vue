<template>
<div>
    <p style="font-size=12px;margin-bottom:2px;"><i>{{itemName}}</i></p>           
    <b-progress type="is-success" :value="receivedDonation" :max="totalDonationNeeded" size="is-medium" show-value>{{receivedDonation}} / {{totalDonationNeeded}}</b-progress>
</div>
</template>
<script>
export default {
    data(){
        return{}
    },
    props:{
        itemName:String,
        receivedDonation:Number,
        totalDonationNeeded:Number
    }
}
</script>