// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()//连接数据库
const _ = db.command
 
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const lessons = db.collection('lessons')//选取数据库

  let lessonid = wxContext.OPENID+event.lessonDay+"_"+event.lessonTime
 
  try{
    return await lessons.doc(lessonid).update({
        data: {
            lesssonLength: event.lesssonLength,
            lessonInfo: event.lessonInfo
        },
        success: res => {
            console.log("修改成功" + res)
        },
        fail: err=>{
            console.log("修改失败"+err)
        }
    })
  }catch(e){
      console.log(e)
  }

  
}