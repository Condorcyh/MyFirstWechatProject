// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database() //连接数据库
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    const lessons = db.collection('lessons') //选取数据库

    try {
        return await lessons.add({
            data: {
                openid: wxContext.OPENID,
                lessonid: wxContext.OPENID+event.lessonDay+"_"+event.lessonTime,
                lessonDay: event.lessonDay,
                lessonTime: event.lessonTime,
                lessonLength: event.lessonLength,
                lessonInfo: event.lessonInfo
            },
            success: res => {
                console.log("添加成功" + res)
            },
            fail: err=>{
                console.log("添加失败"+err)
            }
        })
    } catch (e) {
        console.log(e)
    }


}