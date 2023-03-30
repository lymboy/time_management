<template name="home">
    <view>
        <scroll-view>
            <view class="center">
                <view class="container">
                    <button type="primary" plain="true" class="scan" @click="scan">
                        <strong>扫描二维码</strong>
                    </button>
                </view>

            </view>
        </scroll-view>
        <view class="cu-tabbar-height margin-top"></view>
    </view>
</template>

<script>
    import socket from '@/common/js-sdk/socket/socket.js'
    export default {
        name: 'home',
        props: {
            cur: String,
        },
        data() {
            return {
                swiperList: [],
                msgCount: 0,
                dot: {
                    mailHome: false
                }
            }
        },
        methods: {
            initMenu() {},
            scan() {
                // let prodId = null;
                // let part_no = null

                // #ifndef H5
                uni.scanCode({
                    success: (res) => {
                        if (!this.validate(res.result)) {
                            this.$tip.alert("二维码不正确")
                            return;
                        }
                        let ret = res.result.split("$")
                        let prodId = ret[0]
                        let part_no = ret[1]
                        this.goPage('process', {
                            'prodId': prodId,
                            "part_no": part_no
                        })
                    }
                });
                // #endif
                // #ifdef H5
                this.$tip.alert("暂不支持")
                // #endif

            },
            goPage(page, params) {
                this.$Router.push({
                    name: page,
                    params: params
                })
            },
            /**
             * 校验二维码扫描出来的结果是否合法
             * @param {Object} result
             */
            validate(result) {
                console.log(result)
                if (!result) {
                    return false;
                }
                if (typeof(result) == 'string') {
                    if (result.indexOf("$") == -1) {
                        return false
                    }
                    return true
                }
                return false
            }
        },
    }
</script>

<style scoped>
    .cu-list.grid>.cu-item {
        padding: 0px 0px;
    }

    .line2-icon {
        width: 60px;
        height: 60px;
    }

    .center {
        flex: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .container {
        margin-top: 200upx;
    }

    .scan {
        border: 10px;
    }
</style>
