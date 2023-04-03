<template name="home">
    <view>
        <scroll-view>
            <view class="center">
                <view class="container">

                    <view class="animation-slide-bottom solid">

                        <view class="process-des">
                            <uni-card title="工序描述" :extra="process.time_quota">
                                <template v-slot:title>
                                    <uni-row>
                                        <uni-row :gutter="20">
                                            <uni-col :span="16">
                                                <view class="text-xl">
                                                    工序描述
                                                </view>
                                            </uni-col>
                                            <uni-col :span="8">
                                                <view class="text-xl" style="color: red;">
                                                    {{process.time_quota}} 额定工时
                                                </view>
                                            </uni-col>
                                        </uni-row>
                                    </uni-row>
                                </template>
                                <text class="uni-body text-lg">{{process.proc_content}}</text>
                            </uni-card>
                        </view>

                        <view>
                            <uni-card>
                                <uni-forms label-position="top">
                                    <uni-forms-item>
                                        <label class="label-2-text" for="claim">
                                            <view class="text-xl" style="color: black;margin-bottom: 20px;">
                                                <strong>认领工时</strong>
                                            </view>
                                        </label>
                                        <view class="text-xsl">
                                            <uni-easyinput name='claim' :inputBorder="true" class="uni-input"
                                                type="digit" :maxlength='5' required v-model="form.work_time"
                                                placeholder="请输入认领时长"></uni-easyinput>
                                        </view>
                                        <view class="text-sm"><text>输入框中是剩余工时</text></view>

                                    </uni-forms-item>
                                </uni-forms>
                                <view class="uni-form-item uni-column" style="margin-top: 50upx;">
                                    <uni-row :gutter="20">
                                        <uni-col :span="6" :offset="6">
                                            <view>
                                                <button type="default" plain="true" @click="cancel">取消</button>
                                            </view>
                                        </uni-col>
                                        <uni-col :span="6">
                                            <view>
                                                <button type="primary" plain="true" @click="submit">提交</button>
                                            </view>
                                        </uni-col>
                                    </uni-row>
                                </view>

                            </uni-card>

                        </view>

                    </view>
                </view>

                <view>
                    <uni-popup ref="popup" type="dialog">
                        <uni-popup-dialog type="warn" content="确认提交吗?" title='警告' :duration="2000" :before-close="true"
                            @close="close" @confirm="confirm"></uni-popup-dialog>
                    </uni-popup>

                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script>
    import api from '@/api/api'
    export default {
        name: 'process',
        data() {
            return {
                process: null,
                processList: [],
                claimTime: null,
                form: {
                    claim_time: null,
                    part_no: null,
                    // claim_time: new Date(),
                    work_time: 0,
                    user_id: null,
                    user_name: null
                },
                partLeftTime: 0
            }
        },
        onLoad(option) {
            let params = this.$Route.query
            this.process = params.process
            this.form.part_no = params.part_no
            this.form.work_time = this.process.time_quota
            this.form.craft_detail_id = this.process.id
            this.form.user_id = this.$store.getters.userid
            this.form.user_name = this.$store.getters.username
            console.log(params)
        },
        mounted() {
            // console.log("初始值")
            // this.form.claim_time = this.process.time_quota
            // console.log(this.claimTime)
            api.getPartLeftTime(this.form.craft_detail_id, this.form.part_no).then(res => {
                this.partLeftTime = res.data.result
                if (this.partLeftTime >= 0) {
                    this.form.work_time = this.partLeftTime
                }
            })
        },
        methods: {
            formSubmit: function(e) {
                console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
                var formdata = e.detail.value
                uni.showModal({
                    content: '表单数据内容：' + JSON.stringify(formdata),
                    showCancel: false
                });
            },
            formReset: function(e) {
                this.claimTime = null
            },
            open() {
                this.$refs.popup.open()
            },
            close() {
                this.$refs.popup.close()
            },
            confirm(value) {
                this.form.claim_time = this.formatDate(new Date, 'yyyy-MM-dd hh:mm:ss')
                api.saveClaim(this.form).then(res => {
                    this.$tip.success('提交成功!')
                    this.goPage('people', {})
                    this.$refs.popup.close()
                })
            },
            goPage(page, params) {
                this.$Router.push({
                    name: page,
                    params
                })
            },
            cancel() {
                this.formReset()
                this.$Router.back(1)
            },
            submit() {
                api.validateLeftTime(this.form.craft_detail_id, this.form.part_no, this.form.work_time).then(res => {
                    if (! res.data.result) {
                        this.$tip.alert(res.data.message)
                        return
                    }
                })
                if (this.form.work_time <= 0) {
                    this.$tip.alert(`输入工时非法`)
                    return;
                }
                if (this.form.work_time > this.partLeftTime) {
                    this.$tip.alert(`可选工时为${this.partLeftTime}`)
                    return;
                }
                this.open()

            },
            formatDate(date, fmt) {
                var o = {
                    "M+": date.getMonth() + 1, //月份
                    "d+": date.getDate(), //日
                    "h+": date.getHours(), //小时
                    "m+": date.getMinutes(), //分
                    "s+": date.getSeconds(), //秒
                    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
                    "S": date.getMilliseconds() //毫秒
                };
                if (/(y+)/.test(fmt))
                    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" +
                            o[k]).length)));
                return fmt;
            },
        }
    }
</script>

<style scoped>
    .item {
        margin-top: 150px;
        color: rebeccapurple;
    }

    .center {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .quota {
        color: #e54d42;
    }

    .uni-form-item .title {
        padding: 20rpx 0;
    }

    .process-des {
        margin-top: 200upx;
    }
</style>
