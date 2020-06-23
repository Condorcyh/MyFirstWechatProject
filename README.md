# 互联网计算大作业说明文档

## 项目介绍

名称：柯基校园助手

<br>

开发团队：

​	组长：李振羽

​	组员：车一晗、廖兰宇、陆志晗、纳思彧

<br>

## 更新日志

| 修改人员       | 修改日期  | 修改内容                                 | 草稿版本号 |
| -------------- | --------- | ---------------------------------------- | ---------- |
| 车一晗         | 2020.5.15 | 说明文档编写                             | 0.0        |
| 车一晗         | 2020.5.16 | 项目框架编写                             | 1.0        |
| 车一晗         | 2020.5.17 | 提交规范文档编写                         | 1.0        |
| 陆志晗         | 2020.5.17 | API文档提交                              | 1.0        |
| 车一晗         | 2020.5.19 | 天气功能实现                             | 1.1        |
| 车一晗         | 2020.5.26 | README文档更新-添加功能点                | 1.2        |
| 李振羽         | 2020.5.26 | 清单功能开发完毕                         | 1.2        |
| 陆志晗，纳思彧 | 2020.6.19 | news功能开发完毕                         | 1.3        |
| 车一晗         | 2020.6.19 | 课程表部分功能开发完毕                   | 1.4        |
| 车一晗         | 2020.6.22 | videos分支改名为list                     | 1.4        |
| 车一晗         | 2020.6.22 | 修复天气背景图片在手机上显示不完全的问题 | 1.4.1      |
| 车一晗         | 2020.6.23 | 收尾工作，最终版本形成                   | 2.0        |



<br>

## 参考文档

1. 微信官方开发者文档：https://developers.weixin.qq.com/miniprogram/dev/framework/
2. 微信小程序选项卡页面切换：https://www.jianshu.com/p/823a78d08e56
3. 和风天气API说明：https://dev.heweather.com/
4. 小程序demo参考：https://github.com/justjavac/awesome-wechat-weapp
5. 云开发数据库和云函数操作：https://blog.csdn.net/weixin_38604274/article/details/92406807



<br>

## 功能说明

### OfficialVersion1.0

计划如下功能：

1. 集成了新浪微博、知乎、百度贴吧、豆瓣的热榜，让用户无需打开每个app即可快速了解到所有的当天最新的新闻和热帖
2. 用户对感兴趣的新闻可以进行收藏，也可以分享到朋友圈
3. 小程序能够请求获取用户微信账号的头像和ID
4. 用户可以查看当地的天气（需要在用户允许的情况下获取所在位置）

<br>

### OfficialVersion2.0

除1.0设计的功能之外，添加或更改了如下功能：

1. 更新天气功能：实现查找全国任意地区的天气
2. 添加任务清单功能，用户可以添加一天内的计划安排，方便用户更好地管理安排时间
3. 百度贴吧改成网易

<br>

### OfficialVersion3.0

除2.0增加的功能之外，添加了如下功能：

1. 增加课程表功能：用户可以编辑自己的课程表进行上传
2. 增加云相册功能：用户可以上传自己手机相册中的图片

<br>

### OfficialVersion4.0

除3.0增加的功能之外，更改了以下功能：

1. 删去新闻收藏功能和分享到朋友圈功能

<br>

### OfficialVersion最终版

除4.0增加的功能之外，更改了以下功能：

1. 删去云相册功能

最终版所有功能总结如下：

1. 快速查看新浪微博、知乎、网易、豆瓣的热榜热帖
2. 任务清单
3. 天气查看
4. 课程表（增删改查）

<br>

## 开发说明

1. 本项目GitHub仓库地址：https://github.com/theNiuBee/WxProject.git

2. 本项目在交由组员进行正式开发后，会有master主分支和其他若干分支，举例如下：

   <img src="https://i.loli.net/2020/05/15/1qtdG46JnOzrvpS.png" alt="项目分支" style="zoom: 50%;" />

   组员可以在开发过程中自己创建分支，关于分支的操作在补充文档中另外两个文档《Git分支》和《关于Git的操作说明》中将会详细介绍

3. 开发过程中若遇到技术问题，查看文档或者博客后解决，请将其地址填写在参考文档下，便于其他组员排雷

4. 当某个分支开发完成后，**先交由小组其他组员审核**，没有问题后再merge到master主分支，**并由负责开发组员填写本文档开始处的开发者日志**

5. 每位组员在提交自己的更新到master后，一定要**提醒其他组员及时pull**，避免产生不必要的冲突

<br>

## 开发过程中使用的API

1. 天气API：https://free-api.heweather.net，详见补充文档《和风天气状况代码和图标文档》
2. 另详见补充文档《API整合》
