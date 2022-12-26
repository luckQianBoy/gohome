<template>
    <!--回家-->
    <div v-if="showFlag">
        <el-row :gutter="20" type="flex" justify="center" style="margin-bottom: 50px">
            <el-col :span="20">
                <div style="width: 100%;">
                    <span>北京时间: {{beijingTime}} </span>
                </div>
            </el-col>
        </el-row>
        <el-row style="margin-bottom: 50px">
            <div>
                <el-statistic ref="statistic" @finish="hilarity" format="HH:mm:ss" :value="goOffWork" title="下班倒计时："
                              time-indices></el-statistic>
            </div>
        </el-row>
    </div>
    <el-row :gutter="20" style="margin-bottom: 50px" type="flex" justify="center" v-else-if="!showFlag">

        <!--<div>-->
        <!--<span>已加班时长: {{counter}} </span>-->
        <!--</div>-->
        <el-col :span="10">
            <div style="color: brown;font-size: 80px">还在加班？</div>
            <el-image
                    style="width: 500px; height: 400px;margin-right: 10px"
                    :src="url"
                    :fit="fit"></el-image>
            <el-image
                    style="width: 500px; height: 400px"
                    :src="url2"
                    :fit="fit"></el-image>
            <div style="font-size: 50px">劳动法了解一下？</div>
            <el-link type="primary" style="font-size: 30px" href="http://www.npc.gov.cn/npc/c30834/201901/ffad2d4ae4da4585a041abf66e74753c.shtml">劳动法</el-link>&nbsp;&nbsp;
            <el-link type="primary" style="font-size: 30px" href="http://s.yingle.com/ld/271435.html">最新广州市各劳动仲裁委员会地址及咨询电话名单一览</el-link>&nbsp;&nbsp;
            <div style="font-size: 50px">垃圾公司提桶跑路，换个电子厂继续打螺丝</div>
            <div>
                <el-link type="success" style="font-size: 30px" href="https://www.zhipin.com/guangzhou/">BOSS直聘</el-link>&nbsp;&nbsp;
                <el-link type="success" style="font-size: 30px" href="https://www.zhaopin.com/">智联招聘</el-link>&nbsp;&nbsp;
                <el-link type="success" style="font-size: 30px" href="https://www.51job.com/">前程无忧</el-link>&nbsp;&nbsp;
            </div>

        </el-col>



    </el-row>
</template>

<script>
    export default {
        name: "GoHome",
        data() {
            return {
                //北京时间
                beijingTime: '',

                goOffWork: Date.now() + (new Date().setHours(18, 0, 0) - Date.now()),

                counter: '',
                //倒计时显示切换
                showFlag: true,
                //图片url
                url: '/img001.jpeg',
                url2:'/img002.jpg'
            }
        },

        created() {
        },

        mounted() {
            let _this = this; //声明一个变量指向vue实例this,保证作用域一致
            this.timer = setInterval(function () {
                _this.beijingTime = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
            }, 1000);

        },
        beforeDestroy() {
            if (this.timer) {
                clearInterval(this.timer);//在vue实例销毁钱，清除我们的定时器
            }
        },
        methods: {
            hilarity() {
                //倒计时已经达到 关闭倒计时
                this.showFlag = false;
            },


        },
    }
</script>

<style scoped>

</style>