<template name="home">
    <view>
        <scroll-view>
            <view class="text-xs prod-detail">
                <uni-collapse ref="collapse">
                    <uni-collapse-item :open="true"  title="产品详情">
                        <view class="content">
                            <uni-card>
                                <uni-list>
                                    <uni-list-item>
                                        <template v-slot:body>
                                            <text>生产编号：</text>
                                        </template>
                                        <template v-slot:footer>
                                            <text>{{craftInfo.prod_no}}</text>
                                        </template>
                                    </uni-list-item>
                                    <uni-list-item>
                                        <template v-slot:body>
                                            <text>产品名称：</text>
                                        </template>
                                        <template v-slot:footer>
                                            <text>{{craftInfo.prod_name}}</text>
                                        </template>
                                    </uni-list-item>
                                    <uni-list-item>
                                        <template v-slot:body>
                                            <text>产品图号：</text>
                                        </template>
                                        <template v-slot:footer>
                                            <text>{{craftInfo.prod_fig_no}}</text>
                                        </template>
                                    </uni-list-item>
                                    <uni-list-item>
                                        <template v-slot:body>
                                            <text>材料牌号：</text>
                                        </template>
                                        <template v-slot:footer>
                                            <text>{{craftInfo.matel_no}}</text>
                                        </template>
                                    </uni-list-item>
                                    <uni-list-item>
                                        <template v-slot:body>
                                            <text>零部件件号：</text>
                                        </template>
                                        <template v-slot:footer>
                                            <text>{{craftInfo.part_nos}}</text>
                                        </template>
                                    </uni-list-item>
                                </uni-list>
                            </uni-card>
                        </view>
                    </uni-collapse-item>
                </uni-collapse>
            </view>

            <view>
                <view>
                    <view class="animation-slide-bottom solid" :style="[{animationDelay: (index + 1)*0.05 + 's'}]"
                        v-for="(item,index) in craftInfo.wkt_craft_detail" :key="index" @click="confirm(item)">
                        <uni-card :is-shadow="false">
                            <uni-row :gutter="20">
                                <uni-col :span='1'>
                                    <view class="text-xl cuIcon-write"></view>
                                </uni-col>
                                <uni-col :span='18'>
                                    <view class="text-xl text-cut bg-white" style="width: 250px;">
                                        {{item.proc_content}}
                                    </view>
                                </uni-col>
                                <uni-col class="center" :span='5'>
                                    <view class="center text-xl ">
                                        <text class="quota">{{item.time_quota}}</text>
                                        <text class="quota text-lg">小时</text>
                                    </view>
                                </uni-col>
                            </uni-row>


                        </uni-card>
                    </view>
                </view>
            </view>
        </scroll-view>
        <view class="cu-tabbar-height margin-top"></view>
    </view>
</template>

<script>
    import api  from '@/api/api'
    export default {
        name: 'process',
        data() {
            return {
                value: ['0'],
                prodId: null,
                processList: [],
                claimTime: 0,
                accordionVal: '1',
                form: {
                    prodId: null,
                    part_no: null
                },
                craftInfo: {}
            }
        },
        onLoad(option) {
            let params = this.$Route.query
            this.form = params
        },
        mounted() {
            // this.prodId = this.$Router.query.prodId;
            // console.log('AAAAAAAA$$$')
            // console.log(this.prodId)
            
            api.getCraftDetail(this.form.prodId).then(res => {
                this.craftInfo = res.data.result
            })
            
            // this.processList = [{
            //         id: '1638792896847101953',
            //         proc_content: "确认材质，领料",
            //         time_quota: 0.3
            //     },
            //     {
            //         id: '1638793361404018689',
            //         proc_content: "数控等离子下料，去毛刺",
            //         time_quota: 1.5
            //     },
            //     {
            //         id: '1638795404730515458',
            //         proc_content: "按照φ2140mm的尺寸编程，标记移植",
            //         time_quota: 0.0
            //     },
            //     {
            //         id: '1638796460495552513',
            //         proc_content: "按图纸LBW2210.04-03A冲压成型，交货需提供材质证明、合格证",
            //         time_quota: 0.0
            //     },
            //     {
            //         id: '1638796750582005761',
            //         proc_content: "外观及尺寸按照标准HG/T25198-2010及图纸进行验收",
            //         time_quota: 0.0
            //     }
            // ];
        },
        methods: {
            confirm(item) {
                if (item.time_quota <= 0) {
                    this.$tip.toast('此工序工时为0，不用录入！')
                    return
                }
                this.goPage('claim', {
                    'process': item,
                    "part_no": this.form.part_no
                })
            },
            goPage(page, params) {
                this.$Router.push({
                    name: page,
                    params: params
                })
            }
        }
    }
</script>

<style scoped>
    .item {
        margin-top: 50rpx;
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

    .prod-detail {
        margin-top: 60rpx;
    }

    .content {
        /* padding: 15px; */
    }
</style>
