<template>
    <view>
        <!-- 头部logo-->
        <!-- <view class="UCenter-bg">
                <image :src="personalList.avatar" class="png round animation-slide-right margin-bottom-sm"
                    mode="scaleToFill" :style="[{animationDelay: '0.1s'}]"></image>
                <image src="https://static.jeecg.com/upload/test/wave_1595818053612.gif" mode="scaleToFill" class="gif-wave"></image>
            </view> -->
        <view class="padding flex text-center text-grey bg-white shadow-warp" style="margin-top: 60px;">
            <view class="flex fixed flex-sub flex-direction solid-right animation-slide-top"
                :style="[{animationDelay: '0.2s'}]">
                <view class="text-xl text-orange">{{personalList.username}}</view>
                <view class="margin-top-sm"><text class="cuIcon-people"></text> 用户</view>
            </view>

            <view class="flex flex-sub flex-direction animation-slide-top" :style="[{animationDelay: '0.2s'}]">
                <view class="text-xl text-green">{{personalList.post?personalList.post:'员工'}}</view>
                <view class="margin-top-sm"><text class="cuIcon-news"></text> 职务</view>
            </view>


        </view>
        <!-- 列表list-->
        <!-- <view class="">
            <view class="example-body" @click="open">
                <uni-datetime-picker ref="datepicker" style="z-index=9999;" v-model="dateRange" type="daterange"
                    @change="close" @maskClick="maskClick" />
            </view>
        </view> -->
        <scroll-view scroll-y="true">
            <view class="claim-area">

                <view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius">
                    <view :style="[{animationDelay: '0.1s'}]" v-for="(item,index) in claimList" :key="index">
                        <uni-card :title="item.user_name" :sub-title="item.claim_time" :extra='item.work_time'>
                            <text class="uni-body">{{item.craft_detail_id_dictText}}</text>
                        </uni-card>
                    </view>

                </view>

            </view>
        </scroll-view>
        <view class="text-xl">
            <uni-pagination :show-icon="true" @change="change" :total="queryParams.total" title="标题文字" />
        </view>

        <view class="cu-tabbar-height"></view>
    </view>
</template>

<script>
    import api from '@/api/api'
    export default {
        name: "people",
        data() {
            return {
                personalList: {
                    avatar: '',
                    realname: '',
                    username: '',
                    post: ''
                },
                dateRange: [Date.now() - 2 * 24 * 60 * 60 * 1000, Date.now()],
                positionUrl: '/sys/position/list',
                departUrl: '/sys/user/userDepartList',
                userUrl: '/sys/user/queryById',
                postUrl: '/sys/position/queryByCode',
                userId: '',
                id: '',
                pickerShow: true,
                queryParams: {
                    current: 1,
                    total: 0,
                    pageSize: 10
                },
                claimList: [{
                    name: "小李",
                    processName: "按照φ2140mm的尺寸编程，标记移植",
                    workTime: 1.5,
                    createTime: "2023-03-25 10:23:49"
                }, {
                    name: "小李",
                    processName: "按照φ2140mm的尺寸编程，标记移植",
                    workTime: 1.5,
                    createTime: "2023-03-25 10:23:49"
                }, {
                    name: "小李",
                    processName: "按照φ2140mm的尺寸编程，标记移植",
                    workTime: 1.5,
                    createTime: "2023-03-25 10:23:49"
                }, {
                    name: "小李",
                    processName: "按照φ2140mm的尺寸编程，标记移植",
                    workTime: 1.5,
                    createTime: "2023-03-25 10:23:49"
                }, {
                    name: "小李",
                    processName: "按照φ2140mm的尺寸编程，标记移植",
                    workTime: 1.5,
                    createTime: "2023-03-25 10:23:49"
                }, {
                    name: "小李",
                    processName: "按照φ2140mm的尺寸编程，标记移植",
                    workTime: 1.5,
                    createTime: "2023-03-25 10:23:49"
                }, {
                    name: "小李",
                    processName: "按照φ2140mm的尺寸编程，标记移植",
                    workTime: 1.5,
                    createTime: "2023-03-25 10:23:49"
                }, {
                    name: "小李",
                    processName: "按照φ2140mm的尺寸编程，标记移植",
                    workTime: 1.5,
                    createTime: "2023-03-25 10:23:49"
                }, {
                    name: "小李",
                    processName: "按照φ2140mm的尺寸编程，标记移植",
                    workTime: 1.5,
                    createTime: "2023-03-25 10:23:49"
                }, {
                    name: "小李",
                    processName: "按照φ2140mm的尺寸编程，标记移植",
                    workTime: 1.5,
                    createTime: "2023-03-25 10:23:49"
                }, {
                    name: "小李",
                    processName: "按照φ2140mm的尺寸编程，标记移植",
                    workTime: 1.5,
                    createTime: "2023-03-25 10:23:49"
                }, {
                    name: "小李",
                    processName: "按照φ2140mm的尺寸编程，标记移植",
                    workTime: 1.5,
                    createTime: "2023-03-25 10:23:49"
                }]
            };
        },
        watch: {
            cur: {
                immediate: true,
                handler() {
                    console.log('watch', this.cur)
                    this.userId = this.$store.getters.userid;
                    this.load()
                },
            },
            // range(newval) {
            //     console.log('范围选:', this.range);
            // },
        },
        mounted() {
            this.getClaimList()
        },
        methods: {
            scan() {
                console.log("进来了")
                // #ifndef H5
                uni.scanCode({
                    success: function(res) {
                        console.log('条码res：' + res);
                        console.log('条码类型：' + res.scanType);
                        console.log('条码内容：' + res.result);
                    }
                });
                // #endif
                // #ifdef H5
                this.$tip.alert("暂不支持")
                // #endif
            },
            load() {
                if (!this.userId) {

                    return;
                }
                this.$http.get(this.userUrl, {
                    params: {
                        id: this.userId
                    }
                }).then(res => {
                    console.log("res", res)
                    if (res.data.success) {
                        let perArr = res.data.result
                        let avatar = (perArr.avatar && perArr.avatar.length > 0) ? api.getFileAccessHttpUrl(
                            perArr.avatar) : '/static/avatar_boy.png'
                        this.personalList.avatar = avatar
                        this.personalList.realname = perArr.realname
                        this.personalList.username = perArr.username
                        this.personalList.depart = perArr.departIds
                        this.getpost(perArr.post)
                    }
                }).catch(err => {
                    console.log(err);
                });

            },
            getpost(code) {
                if (!code || code.length == 0) {
                    this.personalList.post = '员工'
                    return false;
                }
                this.$http.get(this.postUrl, {
                    params: {
                        code: code
                    }
                }).then(res => {
                    console.log("postUrl", res)
                    if (res.data.success) {
                        this.personalList.post = res.data.result.name
                    }
                }).catch(err => {
                    console.log(err);
                });
            },
            maskClick() {
                console.log("maskClick....")
            },
            open() {
                console.log('open隐藏tabbar...')
                if (!this.pickerShow) {
                    this.pickerShow = true
                } else {
                    // document.getElementById("tabbar").style.visibility = "hidden"
                    // uni.createSelectorQuery()select("#tabbar").style.visibility = "hidden"
                    this.$refs.datepicker.show()
                }
            },
            close() {
                console.log('close显示tabbar...')
                // document.getElementById("tabbar").style.visibility = "visible"
                // uni.createSelectorQuery().select("#tabbar").style.visibility = "visible"
                this.pickerShow = false
            },
            getClaimList() {
                api.getClaimList(this.queryParams).then(res => {
                    this.claimList = res.data.result.records
                    this.queryParams.total = res.data.result.total
                })
            },
            change(e) {
                console.log(e)
                this.queryParams.current = e.current
                
                this.getClaimList()
            }
        }
    }
</script>

<style>
    .claim-area {
        height: 70vh;
    }

    .user-info {}

    .UCenter-bg {
        /* #ifdef MP-WEIXIN */
        background-image: url('https://static.jeecg.com/upload/test/blue_1595818030310.png');
        /* #endif */
        /* #ifndef MP-WEIXIN */
        /* #endif */
        background-size: cover;
        height: 400rpx;
        display: flex;
        justify-content: center;
        padding-top: 40rpx;
        overflow: hidden;
        position: relative;
        flex-direction: column;
        align-items: center;
        color: #fff;
        font-weight: 300;
        text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    }

    .UCenter-bg text {
        opacity: 0.8;
    }

    .UCenter-bg image {
        width: 200rpx;
        height: 200rpx;
    }

    .UCenter-bg .gif-wave {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        z-index: 99;
        mix-blend-mode: screen;
        height: 100rpx;
    }

    map,
    .mapBox {
        left: 0;
        z-index: 99;
        mix-blend-mode: screen;
        height: 100rpx;
    }

    map,
    .mapBox {
        width: 750rpx;
        height: 300rpx;
    }
</style>
