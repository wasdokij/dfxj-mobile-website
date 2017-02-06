<template>
    <div>
        <div class="discover-message-top margin-b-20">
            <div class="ui-whitespace k-justify-flex margin-b-15">
                <div class="message-nav-btn return-btn">1</div>
                <div class="message-nav-btn filtrate-btn font14" @click="showModal = true">筛选</div>
            </div>
            <div class="k-box-align ui-whitespace line-h-12 font40">
                提醒
                <div class="discover-message-count margin-l-10 font18">1</div>
            </div>
        </div>
        <!--<discover-message-list></discover-message-list>-->
        <discover-message-filtrate v-if="showModal" @start="showModal = true"  @close="showModal = false"></discover-message-filtrate>
    </div>
</template>
<style>
</style>
<script>
    import DiscoverMessageList from 'components/discover/discover-message-list.vue';
        import DiscoverMessageFiltrate from 'components/discover/discover-message-filtrate.vue';
    export default{
        data(){
            return{
               showModal: false
            }
        },
        components:{
            DiscoverMessageList,DiscoverMessageFiltrate
        }
    }
</script>
