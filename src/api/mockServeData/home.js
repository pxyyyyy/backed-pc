// mock 数据模拟
import Mock from 'mockjs'

// 图表数据
let List = []
export default {
    getStaticalData: () => {
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    oppo: Mock.Random.float(100, 8000, 0, 0),
                    魅族: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0)
                })
            )
        }
        return {
            code: 200,
            data: {
                // 饼图
                videoData: [
                    { name: '小米', value: 2999 },
                    { name: '华为', value: 5999 },
                    { name: '苹果', value: 3900 },
                    { name: 'oppo', value: 7988 },
                    { name: 'vivo', value: 3000 },
                ],
                // 柱形图
                userData: [
                    { date: '周一', new: 5, active: 200 },
                    { date: '周二', new: 6, active: 100 },
                    { date: '周三', new: 7, active: 400 },
                    { date: '周四', new: 8, active: 300 },
                    { date: '周五', new: 4, active: 330 },
                    { date: '周六', new: 3, active: 220 },
                    { date: '周七', new: 5, active: 560 }
                ],
                // 订单数据
                orderData: [
                    { name: 'oppo', todayBuy: 900, monthBuy: 3000, totalBuy: 22000 },
                    { name: 'vivo', todayBuy: 900, monthBuy: 3000, totalBuy: 22000 },
                    { name: '苹果', todayBuy: 900, monthBuy: 3000, totalBuy: 22000 },
                    { name: '魅族', todayBuy: 900, monthBuy: 3000, totalBuy: 22000 },
                    { name: 'oppo', todayBuy: 900, monthBuy: 3000, totalBuy: 22000 },
                    { name: 'oppo', todayBuy: 900, monthBuy: 3000, totalBuy: 22000 },
                ],
                tableData: [
                    { name: 'oppo', todayBuy: 900, monthBuy: 3000, totalBuy: 22000 },
                    { name: 'vivo', todayBuy: 900, monthBuy: 3000, totalBuy: 22000 },
                    { name: '苹果', todayBuy: 900, monthBuy: 3000, totalBuy: 22000 },
                    { name: '魅族', todayBuy: 900, monthBuy: 3000, totalBuy: 22000 },
                    { name: 'oppo', todayBuy: 900, monthBuy: 3000, totalBuy: 22000 },
                    { name: 'oppo', todayBuy: 900, monthBuy: 3000, totalBuy: 22000 },
                ]
            }
        }

    }
}