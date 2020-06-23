

# 资讯类API整合

[toc]



## 微博

### 热搜榜

#### 接口地址

https://v1.alapi.cn/api/new/wbtop

#### 请求参数

| 参数名称 | 是否必选 | 参数类型 | 实例 | 说明                       |
| -------- | -------- | -------- | ---- | -------------------------- |
| `num`    | 否       | int      | 50   | 新闻数据条数，不填默认50条 |

#### 返回参数

| 参数名称       | 说明 |
| -------------- | ---- |
| `hot_word`     | 热词 |
| `hot_word_num` | 热度 |

#### 请求与返回示例

https://v1.alapi.cn/api/new/wbtop

![微博热搜榜](https://58467.oss-cn-shanghai.aliyuncs.com/api%E7%A4%BA%E4%BE%8B/%E5%BE%AE%E5%8D%9A%E7%83%AD%E6%90%9C%E6%A6%9C.png)



## 知乎

### 日报列表

#### 接口地址

https://v1.alapi.cn/api/zhihu/latest

#### 请求参数

无

#### 返回参数

#### 返回参数

| 参数名称            | 说明                            |
| ------------------- | ------------------------------- |
| `date`              | 日期                            |
| `stories`           | 日报集合                        |
| `stories.image_hue` | image_hue                       |
| `stories.title`     | 标题                            |
| `stories.hint`      | 分类作者                        |
| `stories.multipic`  | 是否多图, 布尔值                |
| `stories.images`    | 图片列表                        |
| `stories.id`        | 日报 ID                         |
| `stories.type`      | 类型                            |
| `top_stories`       | 热门日报集合，属性请参考stories |

#### 请求与返回示例

![知乎日报列表](https://58467.oss-cn-shanghai.aliyuncs.com/api%E7%A4%BA%E4%BE%8B/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5%E5%88%97%E8%A1%A8.png)



### 日报详情

#### 接口地址

https://v1.alapi.cn/api/zhihu/news

#### 请求参数

| 参数名称 | 是否必选 | 参数类型 | 示例    | 说明                     |
| -------- | -------- | -------- | ------- | ------------------------ |
| `id`     | 是       | int      | 9716101 | 即日报列表中的stories.id |

#### 返回参数

| 参数名称       | 说明           |
| -------------- | -------------- |
| `body`         | 知乎日报的内容 |
| `image_hue`    | image_hue      |
| `image_source` | 知乎图片来源   |
| `title`        | 知乎日报标题   |
| `url`          | 知乎日报地址   |
| `image`        | 知乎日报图片   |
| `share_url`    | 分享地址       |
| `images`       | 图片集合列表   |
| `css`          | css 集合列表   |
| `js`           | js 集合列表    |
| `id`           | id             |

#### 请求与返回示例

https://v1.alapi.cn/api/zhihu/news?id=9723954

![知乎日报详情](https://58467.oss-cn-shanghai.aliyuncs.com/api%E7%A4%BA%E4%BE%8B/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5%E8%AF%A6%E6%83%85.png)



## 豆瓣电影

注：豆瓣api返回的所有文字均以Unicode形式编码，需要解码

### Top250

#### 接口地址

https://douban.uieee.com/v2/movie/top250

#### 请求参数

无

#### 返回参数

注：此处只列出有用的部分参数

| 参数名称         | 说明       |
| ---------------- | ---------- |
| `rating.average` | 豆瓣评分   |
| `genres`         | 类型       |
| `title`          | 片名       |
| `avatars.name`   | 主演中文名 |
| `directors.name` | 导演中文名 |
| `pubdates`       | 上映日期   |

#### 请求与返回示例

https://douban.uieee.com/v2/movie/top250

![豆瓣Top250](https://58467.oss-cn-shanghai.aliyuncs.com/api%E7%A4%BA%E4%BE%8B/%E8%B1%86%E7%93%A3Top250.png)



### 其他榜单

注：由于豆瓣榜单api的格式都相同，以下只列出其他榜单的接口地址，请求参数、返回参数参考“Top250”。另外，考虑到豆瓣电影榜单众多而我们的项目主题并非完全是豆瓣电影榜，故个人建议可以有选择的保留一到两个榜单即可。

#### 正在热映

https://douban.uieee.com/v2/movie/in_theaters

#### 即将上映

https://douban.uieee.com/v2/movie/coming_soon

#### 本周口碑榜

https://douban.uieee.com/v2/movie/weekly

#### 新片榜

https://douban.uieee.com/v2/movie/new_movies



## 网易新闻

注：由于百度贴吧话题榜api无法找到，此项可用以替换贴吧一项。该api同时包含了新闻标题与导读，方便使用，同时也填了补新闻类榜单空缺。

### 头条列表

#### 接口地址

https://v1.alapi.cn/api/new/toutiao

#### 请求参数

| 参数名称 | 是否必选 | 参数类型 | 示例 | 说明             |
| -------- | -------- | -------- | ---- | ---------------- |
| `start`  | 否       | int      | 1    | 起始页，默认1    |
| `num`    | 否       | int      | 10   | 每页数量，默认10 |

#### 返回参数

| 参数名称 | 说明         |
| -------- | ------------ |
| `title`  | 新闻标题     |
| `digest` | 导读         |
| `docid`  | 新闻ID       |
| `pc_url` | 网页版原地址 |
| `m_url`  | 手机版原地址 |
| `imgsrc` | 封面图地址   |
| `source` | 来源         |
| `time`   | 发布时间     |

#### 请求与返回示例

https://v1.alapi.cn/api/new/toutiao

![网易头条列表](https://58467.oss-cn-shanghai.aliyuncs.com/api%E7%A4%BA%E4%BE%8B/%E7%BD%91%E6%98%93%E5%A4%B4%E6%9D%A1%E5%88%97%E8%A1%A8.png)



### 新闻详情

#### 接口地址

https://v1.alapi.cn/api/new/detail

#### 请求参数

| 参数名称 | 是否必选 | 参数类型 | 示例             | 说明                |
| -------- | -------- | -------- | ---------------- | ------------------- |
| `docid`  | 是       | string   | EQ1NGK0I0001875P | 即头条列表中的docid |

#### 返回参数

| 参数名称 | 说明     |
| -------- | -------- |
| `body`   | 正文内容 |

#### 请求与返回示例

https://v1.alapi.cn/api/new/detail?docid=FCRIUAD30001899O

![网易头条详情](https://58467.oss-cn-shanghai.aliyuncs.com/api%E7%A4%BA%E4%BE%8B/%E7%BD%91%E6%98%93%E5%A4%B4%E6%9D%A1%E8%AF%A6%E6%83%85.png)