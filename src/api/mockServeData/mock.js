import { options } from 'less';
import Mock from 'mockjs'

// 随机生成字符串

// const data = Mock.mock({
//     'string': '排序'
// })

// 生成3个 排序
// const data = Mock.mock({
//     'string|3': '排序'
// })

// 生成1-4个 排序
// const data = Mock.mock({
//     'string|1-4': '排序'
// })

// 随机生成文本
// const data = Mock.mock({
//     string: '@cword()'
// })

// 生成3个字的文本
// const data = Mock.mock({
//     // string: '@cword(3)' // 生成3个字的文本
//     string: '@cword(3,10)' // 生成3-10个字的文本
// })

// 生成标题和句子
// const data = Mock.mock({
//     // title: '@ctitle', // 生成标题
//     // sentence: '@csentence' // 生成句子
//     title: '@ctitle(6)',  //c表示生成中文
//     sentence: '@csentence(5,10)'
// })

// 生成内容(段落)
// const data = Mock.mock({
//     // content: '@cparagraph'
//     content: '@cparagraph(5)'//五句话
// })

// 生成数字
// const data = Mock.mock({
//     // 'number': 1
//     'number|1-999': 22 // 生成1 - 999的数字
// })

// 生成id
// const data = Mock.mock({
//     // id: '@increment'
//     id: '@increment(9)'
// })

// 生成身份证信息
// const data = Mock.mock({
//     name: '@cname',
//     idCrad: '@id()',
//     address: '@city(true)'
// })

// 随机生成图片
// const data = Mock.mock({
//     img_url: "@image('250x250','#fff','#000','png','Kumk')"//大小，背景色，文字色，格式，文字
// })

// 生成时间
// const data = Mock.mock({
//     date: '@date(yyyy-mm-dd HH:mm:ss)'
// })

// 生成数组
// const data = Mock.mock({
//     // 生成9个
//     'list|9': [
//         {
//             name: '@cname',
//             address: '@city(true)',
//             id: '@increment(1)'
//         }
//     ]
// })

// console.log(data, 'mockjs');



// 定义get请求
// Mock.mock('api/news', 'get', {
//     code: 200,
//     msg: '获取数据成功'
// })

// // 定义post请求
// Mock.mock('api/news', 'post', () => {
//     return {
//         code: 200,
//         msg: '获取数据成功'
//     }
// })

// Mock.mock('api/news', 'post', (a,b) => {
//     return {
//         code: 200,
//         msg: '获取数据成功'
//     }
// })


const { list } = Mock.mock({
    'list|44': [
        {
            id: '@increment',
            title: '@ctitle',
            content: "@cparagraph",
            img_url: "@image('250x250','#fff','#000','png','Kunkun')",
            add_time: '@date(yyyy-mm-dd hh:mm:ss)'
        }
    ],
})
const getQuery = (url, name) => {
    // console.log(url, name);
    const index = url.indexOf('?')
    // 有参数
    if (index !== -1) {
        // 截取参数
        const queryStrArr = url.substr(index + 1).split('&')
        for (let i = 0; i < queryStrArr.length; i++) {
            const queryArr = queryStrArr[i].split('=')
            console.log();
            if (queryArr[0] === name) {
                // console.log(queryArr[1]);
                return queryArr[1]
            }
        }
        // queryStrArr.forEach(item => {
        //     const queryArr = item.split('=')
        //     console.log();
        //     if (queryArr[0] === name) {
        //         console.log(queryArr[1]);
        //         return queryArr[1]
        //     }
        // });
    }
    return null
}
export const newList = (options) => {
    // console.log(options, 'option');
    let page = getQuery(options.url, 'page')
    const pageSize = getQuery(options.url, 'pageSize')
    // console.log(page, pageSize, 'page22');
    // 数据起始位置：(page-1)*pageSize  结束位置: page*pageSize
    const start = (page - 1) * pageSize
    const end = page * pageSize
    // 总页数
    const totalPage = Math.ceil(list.length / pageSize)
    const newList = page > totalPage ? [] : list.slice(start, end)
    // console.log(newList, 'newList');
    return Mock.mock({
        code: 200,
        data: {
            list: newList,
            total: list.length,
            totalPage: totalPage,
        },
        msg: '获取新闻列表成功'
    })
}

export default {
    newList: (options) => {
        // console.log(options, 'option');
        let page = getQuery(options.url, 'page')
        const pageSize = getQuery(options.url, 'pageSize')
        // 数据起始位置：(page-1)*pageSize  结束位置: page*pageSize
        const start = (page - 1) * pageSize
        const end = page * pageSize
        // 总页数
        const totalPage = Math.ceil(list.length / pageSize)
        const newList = page > totalPage ? [] : list.slice(start, end)
        return Mock.mock({
            code: 200,
            data: {
                list: newList,
                total: list.length,
                totalPage: totalPage,
            },
            msg: '获取新闻列表成功'
        })
    },
    add: (options) => {
        console.log(JSON.parse(options.body));
        const body = JSON.parse(options.body)
        list.unshift(Mock.mock({
            id: '@increment',
            title: body.title,
            content: body.content,
            img_url: "@image('250x250','#fff','#000','png','Kunkun')",
            add_time: '@date(yyyy-mm-dd hh:mm:ss)'
        }))
        console.log(list, 'list');
        return {
            code: 200,
            msg: "添加成功"
        }
    },
    del: (options) => {
        const body = JSON.parse(options.body)
        list.forEach((item, index) => {
            if (body.id === item.id) {
                console.log(list.splice(index, 1))
                console.log(list, 'list');
            }
        });
        return {
            code: 200,
            msg: '删除成功'
        }
    }
}

