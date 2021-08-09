

[TOC]

# 地理信息API

> 通过地理信息API获取你需要查询的城市信息，包括城市或POI的Location ID、坐标、行政区划关系。

## 	城市信息查询

> 天气数据是基于地理位置的数据，因此获取天气之前需要先知道具体的位置信息。使用城市搜索，可获取到该城市的基本信息，包括城市的Location ID（你需要这个ID去查询天气），多语言名称、经纬度、时区、海拔、Rank值、归属上级行政区域、所在行政区域等。
>
> 另外，城市搜索也可以帮助你在你的APP中实现模糊搜索，用户只需要输入1-2个字即可获得结果。

+ url：https://geoapi.qweather.com/v2/city/lookup?

+ parmas：
  + location
  + key
  + adm 行政区域规划
  + range 搜索范围，可设定只在某个国家范围内进行搜索，国家名称需使用[ISO 3166 所定义的国家代码](https://dev.qweather.com/docs/start/glossary#iso-3166)。
  + number 返回结果的数量，取值范围1-20，**默认返回10个结果**
  + lang  中文, **默认**`en` 英语`fr` 法语`es` 西班牙语`ja` 日语`ko` 韩语

+ query：

| `code`               | API状态码，具体含义请参考[状态码](https://dev.qweather.com/docs/start/status-code/) |
| -------------------- | ------------------------------------------------------------ |
| `location.name`      | 地区/城市名称                                                |
| `location.id`        | 地区/城市ID                                                  |
| `location.lat`       | 地区/城市纬度                                                |
| `location.lon`       | 地区/城市经度                                                |
| `location.adm2`      | 地区/城市的上级行政区划名称                                  |
| `location.adm1`      | 地区/城市所属一级行政区域                                    |
| `location.country`   | 地区/城市所属国家名称                                        |
| `location.tz`        | 地区/城市所在[时区](https://dev.qweather.com/docs/start/glossary#timezone) |
| `location.utcOffset` | 地区/城市目前与UTC时间偏移的小时数，参考[详细说明](https://dev.qweather.com/docs/start/glossary#utc-offset) |
| `location.isDst`     | 地区/城市是否当前处于[夏令时](https://dev.qweather.com/docs/start/glossary/#daylight-saving-time) `1` 表示当前处于夏令时 `0` 表示当前不是夏令时 |
| `location.type`      | 地区/城市的属性                                              |
| `location.rank`      | [地区评分](https://dev.qweather.com/docs/start/glossary#rank) |
| `location.fxLink`    | 该地区的天气预报网页链接，便于嵌入你的网站或应用             |
| `refer.sources`      | 原始数据来源，或数据源说明，**可能为空**                     |
| `refer.license`      | 数据许可或版权声明，**可能为空**                             |

## 热门城市查询

> 获取全球各个国家国家热门城市列表，通过该列表可以让用户轻松查看各国主要城市的天气状况

+ url:https://geoapi.qweather.com/v2/city/top?

+ params:

  + key
  + range 
    + `world` 全球城市范围，**默认**
    + `cn` 中国城市范围，可替换为其他国家的ISO 3166 国家代码，例如`range=us`
    + `us` 美国
    + `fr` 法国
    + `uk` 英国
    + `ru` 俄罗斯
  + number 
  + lang

+ query

  | `code`                  | API状态码，具体含义请参考[状态码](https://dev.qweather.com/docs/start/status-code/) |
  | ----------------------- | ------------------------------------------------------------ |
  | `topCityList.name`      | 地区/城市名称                                                |
  | `topCityList.id`        | 地区/城市ID                                                  |
  | `topCityList.lat`       | 地区/城市纬度                                                |
  | `topCityList.lon`       | 地区/城市经度                                                |
  | `topCityList.adm2`      | 地区/城市的上级行政区划名称                                  |
  | `topCityList.adm1`      | 地区/城市所属一级行政区域                                    |
  | `topCityList.country`   | 地区/城市所属国家名称                                        |
  | `topCityList.tz`        | 地区/城市所在[时区](https://dev.qweather.com/docs/start/glossary#timezone) |
  | `topCityList.utcOffset` | 地区/城市目前与UTC时间偏移的小时数，参考[详细说明](https://dev.qweather.com/docs/start/glossary#utc-offset) |
  | `topCityList.isDst`     | 地区/城市是否当前处于[夏令时](https://dev.qweather.com/docs/start/glossary/#daylight-saving-time) `1` 表示当前处于夏令时 `0` 表示当前不是夏令时 |
  | `topCityList.type`      | 地区/城市的属性                                              |
  | `topCityList.rank`      | [地区评分](https://dev.qweather.com/docs/start/glossary#rank) |
  | `topCityList.fxLink`    | 该地区的天气预报网页链接，便于嵌入你的网站或应用             |
  | `refer.sources`         | 原始数据来源，或数据源说明，**可能为空**                     |
  | `refer.license`         | 数据许可或版权声明，**可能为空**                             |

## POI信息搜索

> 和风天气POI查询API接口，提供POI（景点、潮汐站点、潮流站点等）的基本信息。

url：https://geoapi.qweather.com/v2/poi/lookup?

prams：

+ **location** 
+ **type** POI类型，可选择搜索某一类型的POI。
  + `scenic` 景点
  + `CSTA` 潮流站点
  + `TSTA` 潮汐站点

+ **key** 
+ **city**  选择POI所在城市，可设定只搜索在特定城市内的POI信息。城市名称可以是文字或城市的LocationID。**默认不限制特定城市**。
+ **number** 
+ **lang** 

query：

| `code`          | API状态码，具体含义请参考[状态码](https://dev.qweather.com/docs/start/status-code/) |
| --------------- | ------------------------------------------------------------ |
| `poi.name`      | POI（兴趣点）名称                                            |
| `poi.id`        | POI（兴趣点）ID                                              |
| `poi.lat`       | POI（兴趣点）纬度                                            |
| `poi.lon`       | POI（兴趣点）经度                                            |
| `poi.adm2`      | POI（兴趣点）的上级行政区划名称                              |
| `poi.adm1`      | POI（兴趣点）所属一级行政区域                                |
| `poi.country`   | POI（兴趣点）所属国家名称                                    |
| `poi.tz`        | POI（兴趣点）所在[时区](https://dev.qweather.com/docs/start/glossary#timezone) |
| `poi.utcOffset` | POI（兴趣点）目前与UTC时间偏移的小时数，参考[详细说明](https://dev.qweather.com/docs/start/glossary#utc-offset) |
| `poi.isDst`     | POI（兴趣点）是否当前处于[夏令时](https://dev.qweather.com/docs/start/glossary/#daylight-saving-time) `1` 表示当前处于夏令时 `0` 表示当前不是夏令时 |
| `poi.type`      | POI（兴趣点）的属性                                          |
| `poi.rank`      | [地区评分](https://dev.qweather.com/docs/start/glossary#rank) |
| `poi.fxLink`    | 该地区的天气预报网页链接，便于嵌入你的网站或应用             |
| `refer.sources` | 原始数据来源，或数据源说明，**可能为空**                     |
| `refer.license` | 数据许可或版权声明，**可能为空**                             |

## POI范围搜索

> 提供指定区域范围内查询所有POI信息，方便显示某一区域内的POI天气数据。

url：https://geoapi.qweather.com/v2/poi/range?

params：

+ **location** 
+ **type**
+ **key**  
+ **radius** 搜索范围，可设置搜索半径，取值范围1-50，单位：公里。**默认5公里**。
+ **number** 
+ **lang** 

query:

| `code`          | API状态码，具体含义请参考[状态码](https://dev.qweather.com/docs/start/status-code/) |
| --------------- | ------------------------------------------------------------ |
| `poi.name`      | POI（兴趣点）名称                                            |
| `poi.id`        | POI（兴趣点）ID                                              |
| `poi.lat`       | POI（兴趣点）纬度                                            |
| `poi.lon`       | POI（兴趣点）经度                                            |
| `poi.adm2`      | POI（兴趣点）的上级行政区划名称                              |
| `poi.adm1`      | POI（兴趣点）所属一级行政区域                                |
| `poi.country`   | POI（兴趣点）所属国家名称                                    |
| `poi.tz`        | POI（兴趣点）所在[时区](https://dev.qweather.com/docs/start/glossary#timezone) |
| `poi.utcOffset` | POI（兴趣点）目前与UTC时间偏移的小时数，参考[详细说明](https://dev.qweather.com/docs/start/glossary#utc-offset) |
| `poi.isDst`     | POI（兴趣点）是否当前处于[夏令时](https://dev.qweather.com/docs/start/glossary/#daylight-saving-time) `1` 表示当前处于夏令时 `0` 表示当前不是夏令时 |
| `poi.type`      | POI（兴趣点）的属性                                          |
| `poi.rank`      | [地区评分](https://dev.qweather.com/docs/start/glossary#rank) |
| `poi.fxLink`    | 该地区的天气预报网页链接，便于嵌入你的网站或应用             |
| `refer.sources` | 原始数据来源，或数据源说明，**可能为空**                     |
| `refer.license` | 数据许可或版权声明，**可能为空**                             |

# 城市天气API 

> 用途最广泛的城市级天气数据，可获取全球超过15万个城市的天气实况、预报，另外包括中国境内分钟降水数据。

## 实时天气

> 全国4000+个市县区和海外15万个城市实时天气数据，包括实时温度、体感温度、风力风向、相对湿度、大气压强、降水量、能见度、露点温度、云量等数据

url:https://devapi.qweather.com/v7/weather/now?

parmas:

+ **key** 

+ **location** 

+ **lang** 

+ **unit** 

  > [度量衡单位参数](https://dev.qweather.com/docs/start/unit)选择，例如温度选摄氏度或华氏度、公里或英里。**默认公制单位**

+ **gzip** 

  > 对API接口进行压缩，可以极大的减少API接口访问延迟，减少缓存空间，提高接口连接成功率。**默认开启gzip**

  + `m` 公制单位，**默认**
  + `i` 英制单位

query:

| `code`          | API状态码，具体含义请参考[状态码](https://dev.qweather.com/docs/start/status-code/) |
| --------------- | ------------------------------------------------------------ |
| `updateTime`    | 当前[API的最近更新时间](https://dev.qweather.com/docs/start/glossary#update-time) |
| `fxLink`        | 当前数据的响应式页面，便于嵌入网站或应用                     |
| `now.obsTime`   | 数据观测时间                                                 |
| `now.temp`      | 温度，默认单位：摄氏度                                       |
| `now.feelsLike` | 体感温度，默认单位：摄氏度                                   |
| `now.icon`      | 天气状况和图标的代码，图标可通过[天气状况和图标](https://dev.qweather.com/docs/start/icons/)下载 |
| `now.text`      | 天气状况的文字描述，包括阴晴雨雪等天气状态的描述             |
| `now.wind360`   | 风向360角度                                                  |
| `now.windDir`   | 风向                                                         |
| `now.windScale` | 风力等级                                                     |
| `now.windSpeed` | 风速，公里/小时                                              |
| `now.humidity`  | 相对湿度，百分比数值                                         |
| `now.precip`    | 当前小时累计降水量，默认单位：毫米                           |
| `now.pressure`  | 大气压强，默认单位：百帕                                     |
| `now.vis`       | 能见度，默认单位：公里                                       |
| `now.cloud`     | 云量，百分比数值                                             |
| `now.dew`       | 露点温度                                                     |
| `refer.sources` | 原始数据来源，或数据源说明，**可能为空**                     |
| `refer.license` | 数据许可或版权声明，**可能为空**                             |

## 逐天天气预报

> 全球城市未来15天天气预报，包括：日出日落、月升月落、最高最低温度、天气白天和夜间状况、风力、风速、风向、相对湿度、大气压强、降水量、降水概率、露点温度、紫外线强度、能见度等

url:

+ 3天预报
  + https://devapi.qweather.com/v7/weather/3d?
+ 7天预报
  + https://devapi.qweather.com/v7/weather/7d?

params:

+ **location** 
+ **key** 
+ **lang** 
+ **unit** 

query:

| `code`                 | API状态码，具体含义请参考[状态码](https://dev.qweather.com/docs/start/status-code/) |
| ---------------------- | ------------------------------------------------------------ |
| `updateTime`           | 当前[API的最近更新时间](https://dev.qweather.com/docs/start/glossary#update-time) |
| `fxLink`               | 当前数据的响应式页面，便于嵌入网站或应用                     |
| `daily.fxDate`         | 预报日期                                                     |
| `daily.sunrise`        | 日出时间                                                     |
| `daily.sunset`         | 日落时间                                                     |
| `daily.moonrise`       | 月升时间                                                     |
| `daily.moonset`        | 月落时间                                                     |
| `daily.moonPhase`      | 月相名称                                                     |
| `daily.tempMax`        | 预报当天最高温度                                             |
| `daily.tempMin`        | 预报当天最低温度                                             |
| `daily.iconDay`        | 预报白天天气状况的图标代码，图标可通过[天气状况和图标](https://dev.qweather.com/docs/start/icons/)下载 |
| `daily.textDay`        | 预报白天天气状况文字描述，包括阴晴雨雪等天气状态的描述       |
| `daily.iconNight`      | 预报夜间天气状况的图标代码，图标可通过[天气状况和图标](https://dev.qweather.com/docs/start/icons/)下载 |
| `daily.textNight`      | 预报晚间天气状况文字描述，包括阴晴雨雪等天气状态的描述       |
| `daily.wind360Day`     | 预报白天风向360角度                                          |
| `daily.windDirDay`     | 预报白天风向                                                 |
| `daily.windScaleDay`   | 预报白天风力等级                                             |
| `daily.windSpeedDay`   | 预报白天风速，公里/小时                                      |
| `daily.wind360Night`   | 预报夜间风向360角度                                          |
| `daily.windDirNight`   | 预报夜间当天风向                                             |
| `daily.windScaleNight` | 预报夜间风力等级                                             |
| `daily.windSpeedNight` | 预报夜间风速，公里/小时                                      |
| `daily.precip`         | 预报当天总降水量，默认单位：毫米                             |
| `daily.uvIndex`        | 紫外线强度指数                                               |
| `daily.humidity`       | 相对湿度，百分比数值                                         |
| `daily.pressure`       | 大气压强，默认单位：百帕                                     |
| `daily.vis`            | 能见度，默认单位：公里                                       |
| `daily.cloud`          | 云量，百分比数值                                             |
| `refer.sources`        | 原始数据来源，或数据源说明，**可能为空**                     |
| `refer.license`        | 数据许可或版权声明，**可能为空**                             |

## 逐小时天气预报

> 全球城市未来168小时逐小时天气预报，包括：温度、天气状况、风力、风速、风向、相对湿度、大气压强、降水概率、露点温度、云量

url:https://devapi.qweather.com/v7/weather/24h?

params:

+ **location** 
+ **key** 
+ **lang** 
+ **unit** 

query

| `code`             | API状态码，具体含义请参考[状态码](https://dev.qweather.com/docs/start/status-code/) |
| ------------------ | ------------------------------------------------------------ |
| `updateTime`       | 当前[API的最近更新时间](https://dev.qweather.com/docs/start/glossary#update-time) |
| `fxLink`           | 当前数据的响应式页面，便于嵌入网站或应用                     |
| `hourly.fxTime`    | 预报时间                                                     |
| `hourly.temp`      | 温度，默认单位：摄氏度                                       |
| `hourly.icon`      | 天气状况和图标的代码，图标可通过[天气状况和图标](https://dev.qweather.com/docs/start/icons/)下载 |
| `hourly.text`      | 天气状况的文字描述，包括阴晴雨雪等天气状态的描述             |
| `hourly.wind360`   | 风向360角度                                                  |
| `hourly.windDir`   | 风向                                                         |
| `hourly.windScale` | 风力等级                                                     |
| `hourly.windSpeed` | 风速，公里/小时                                              |
| `hourly.humidity`  | 相对湿度，百分比数值                                         |
| `hourly.precip`    | 当前小时累计降水量，默认单位：毫米                           |
| `hourly.pop`       | 逐小时预报降水概率，百分比数值，**可能为空**                 |
| `hourly.pressure`  | 大气压强，默认单位：百帕                                     |
| `hourly.cloud`     | 云量，百分比数值                                             |
| `hourly.dew`       | 露点温度                                                     |
| `refer.sources`    | 原始数据来源，或数据源说明，**可能为空**                     |
| `refer.license`    | 数据许可或版权声明，**可能为空**                             |

# 天气指数API

> 获取全球城市的天气指数，包括穿衣、运动、洗车、紫外线等16类指数。

url:

## 天气生活指数

> 和风天气生活指数API接口为中国和海外城市提供详细的生活指数实况和预报数据，包括：
>
> - 中国生活指数：舒适度指数、洗车指数、穿衣指数、感冒指数、运动指数、旅游指数、紫外线指数、空气污染扩散条件指数、空调开启指数、过敏指数、太阳镜指数、化妆指数、晾晒指数、交通指数、钓鱼指数、防晒指数
> - 海外生活指数：运动指数、洗车指数、紫外线指数、钓鱼指数

url:https://devapi.qweather.com/v7/indices/1d?

params:

+ **location** 

+ **key**

+ **type** 

  > 生活指数的类型ID，包括洗车指数、穿衣指数、钓鱼指数等。可以一次性获取多个类型的生活指数，多个类型用英文`,`分割。例如`type=3,5`。具体生活指数的ID和等级参考[生活指数常量](https://dev.qweather.com/docs/api/indices/#indices-constant)。各项生活指数并非适用于所有城市。

+ **lang**

query

| 参数             | 描述                                                         |
| :--------------- | :----------------------------------------------------------- |
| `code`           | API状态码，具体含义请参考[状态码](https://dev.qweather.com/docs/start/status-code/) |
| `updateTime`     | 当前[API的最近更新时间](https://dev.qweather.com/docs/start/glossary#update-time) |
| `fxLink`         | 当前数据的响应式页面，便于嵌入网站或应用                     |
| `daily.date`     | 预报日期                                                     |
| `daily.type`     | 生活指数类型ID                                               |
| `daily.name`     | 生活指数类型的名称                                           |
| `daily.level`    | 生活指数预报等级                                             |
| `daily.category` | 生活指数预报级别名称                                         |
| `daily.text`     | 生活指数预报的详细描述，**可能为空**                         |
| `refer.sources`  | 原始数据来源，或数据源说明，**可能为空**                     |
| `refer.license`  | 数据许可或版权声明，**可能为空**                             |

生活指数常量:

> 生活指数等级仅供参考，等级有可能会进行调整。当选择`type=0`时，不能再选择其他指数

| 名称                 | TYPE | 级别名称(对应等级数值)                                       |
| :------------------- | :--- | :----------------------------------------------------------- |
| 全部生活指数         | 0    |                                                              |
| 运动指数             | 1    | 适宜(1)、较适宜(2)、较不宜(3)                                |
| 洗车指数             | 2    | 适宜(1)、较适宜(2)、较不宜(3)、不宜(4)                       |
| 穿衣指数             | 3    | 寒冷(1)、冷(2)、较冷(3)、较舒适(4)、舒适(5)、热(6)、炎热(7)  |
| 钓鱼指数             | 4    | 适宜(1)、较适宜(2)、不宜(3)                                  |
| 紫外线指数           | 5    | 最弱(1)、弱(2)、中等(3)、强(4)、很强(5)                      |
| 旅游指数             | 6    | 适宜(1)、较适宜(2)、一般(3)、较不宜(4)、不适宜(5)            |
| 花粉过敏指数         | 7    | 极不易发(1)、不易发(2)、较易发(3)、易发(4)、极易发(5)        |
| 舒适度指数           | 8    | 舒适(1)、较舒适(2)、较不舒适(3)、很不舒适(4)、极不舒适(5)、不舒适(6)、非常不舒适(7) |
| 感冒指数             | 9    | 少发(1)、较易发(2)、易发(3)、极易发(4)                       |
| 空气污染扩散条件指数 | 10   | 优(1)、良(2)、中(3)、较差(4)、很差(5)                        |
| 空调开启指数         | 11   | 长时间开启(1)、部分时间开启(2)、较少开启(3)、开启制暖空调(4) |
| 太阳镜指数           | 12   | 不需要(1)、需要(2)、必要(3)、很必要(4)、非常必要(5)          |
| 化妆指数             | 13   | 保湿(1)、保湿防晒(2)、去油防晒(3)、防脱水防晒(4)、去油(5)、防脱水(6)、防晒(7)、滋润保湿(8) |
| 晾晒指数             | 14   | 极适宜(1)、适宜(2)、基本适宜(3)、不太适宜(4)、不宜(5)、不适宜(6) |
| 交通指数             | 15   | 良好(1)、较好(2)、一般(3)、较差(4)、很差(5)                  |
| 防晒指数             | 16   | 弱(1)、较弱(2)、中等(3)、强(4)、极强(5)                      |

# 灾害预警API

> 获取各国官方极端天气预警及其他灾害预警信息。

## 天气灾害预警

> 和风天气灾害预警API接口支持全国3240个市县区天气灾害预警，预警类型和级别包括：
>
> - 预警种类：台风、暴雨、暴雪、寒潮、大风、沙尘暴、高温、干旱、雷电、冰雹、霜冻、大雾、霾、道路结冰、寒冷、灰霾、雷雨大风、森林火险、降温、道路冰雪、干热风、低温、冰冻、空气重污染、海上大雾、雷暴大风、持续低温、浓浮尘、龙卷风、低温冻害、海上大风、低温雨雪冰冻、强对流、臭氧、大雪、强降雨、强降温、雪灾、森林（草原）火险、雷暴、严寒、沙尘、海上雷雨大风、海上雷电、海上台风。
> - 预警级别：白色（仅限广东省内）、蓝色、黄色、橙色、红色
>
> 灾害预警API可以获取指定城市的极端天气预警数据，也可以获取一个国家内当前发生极端天气的城市列表。

### url:https://devapi.qweather.com/v7/warning/now?

### params:

+ **location** 

+ **key**

+ **lang** 

  > 多语言设置，本数据**仅支持中文和英文**。

  + `zh` 中文, **默认**
  + `en` 英语

### query

| 参数                | 描述                                                         |
| :------------------ | :----------------------------------------------------------- |
| `code`              | API状态码，具体含义请参考[状态码](https://dev.qweather.com/docs/start/status-code/) |
| `updateTime`        | 当前[API的最近更新时间](https://dev.qweather.com/docs/start/glossary#update-time) |
| `fxLink`            | 当前数据的响应式页面，便于嵌入网站或应用                     |
| `warning.id`        | 本条预警的唯一标识，可判断本条预警是否已经存在               |
| `warning.sender`    | 预警发布单位，**可能为空**                                   |
| `warning.pubTime`   | 预警发布时间                                                 |
| `warning.title`     | 预警信息标题                                                 |
| `warning.startTime` | 预警开始时间，**可能为空**                                   |
| `warning.endTime`   | 预警结束时间，**可能为空**                                   |
| `warning.status`    | 预警状态，**可能为空** `active` 预警中或首次预警 `update` 预警信息更新 `cancel` 取消预警 |
| `warning.level`     | 预警等级                                                     |
| `warning.type`      | 预警类型ID                                                   |
| `warning.typeName`  | 预警类型名称                                                 |
| `warning.text`      | 预警详细文字描述                                             |
| `warning.related`   | 与本条预警相关联的预警ID，当预警状态为cancel或update时返回。**可能为空** |
| `refer.sources`     | 原始数据来源，或数据源说明，**可能为空**                     |
| `refer.license`     | 数据许可或版权声明，**可能为空**                             |

### 预警等级 

> 并非所有预警的最低或最高等级是蓝色或红色，例如霾预警只有黄色和橙色等级

| Level | LevelId | 备注                 |
| :---- | :------ | :------------------- |
| 白色  | 5       | 最低等级，仅限广东省 |
| 蓝色  | 4       | 最低等级             |
| 黄色  | 3       |                      |
| 橙色  | 2       |                      |
| 红色  | 1       | 最高等级             |

### 预警类型 

> 预警类型ID和预警类型名称有可能会变更，请以API返回为准

| Type  | TypeName         |
| :---- | :--------------- |
| 11B01 | 台风             |
| 11B02 | 龙卷风           |
| 11B03 | 暴雨             |
| 11B04 | 暴雪             |
| 11B05 | 寒潮             |
| 11B06 | 大风             |
| 11B07 | 沙尘暴           |
| 11B08 | 低温冻害         |
| 11B09 | 高温             |
| 11B10 | 热浪             |
| 11B11 | 干热风           |
| 11B12 | 下击暴流         |
| 11B13 | 雪崩             |
| 11B14 | 雷电             |
| 11B15 | 冰雹             |
| 11B16 | 霜冻             |
| 11B17 | 大雾             |
| 11B18 | 低空风切变       |
| 11B19 | 霾               |
| 11B20 | 雷雨大风         |
| 11B21 | 道路结冰         |
| 11B22 | 干旱             |
| 11B23 | 海上大风         |
| 11B24 | 高温中暑         |
| 11B25 | 森林火险         |
| 11B26 | 草原火险         |
| 11B27 | 冰冻             |
| 11B28 | 空间天气         |
| 11B29 | 重污染           |
| 11B30 | 低温雨雪冰冻     |
| 11B31 | 强对流           |
| 11B32 | 臭氧             |
| 11B33 | 大雪             |
| 11B34 | 寒冷             |
| 11B35 | 连阴雨           |
| 11B36 | 渍涝风险         |
| 11B37 | 地质灾害气象风险 |
| 11B38 | 强降雨           |
| 11B39 | 强降温           |
| 11B40 | 雪灾             |
| 11B41 | 森林（草原）火险 |
| 11B42 | 医疗气象         |
| 11B43 | 雷暴             |
| 11B44 | 停课信号         |
| 11B45 | 停工信号         |
| 11B46 | 海上风险         |
| 11B47 | 春季沙尘天气     |
| 11B48 | 降温             |
| 11B49 | 台风暴雨         |
| 11B50 | 严寒             |
| 11B51 | 沙尘             |
| 11B52 | 海上雷雨大风     |
| 11B53 | 海上大雾         |
| 11B54 | 海上雷电         |
| 11B55 | 海上台风         |
| 11B56 | 低温             |
| 11B57 | 道路冰雪         |

## 天气预警城市列表

> 获取当前中国发生天气预警的城市列表

### url:https://devapi.qweather.com/v7/warning/list?

### parmas:

+ **range** 

  > 选择指定的国家，目前仅支持中国。例如`range=cn`

+ **key** 

### query

| `code`                      | API状态码，具体含义请参考[状态码](https://dev.qweather.com/docs/start/status-code/) |
| --------------------------- | ------------------------------------------------------------ |
| `updateTime`                | 当前[API的最近更新时间](https://dev.qweather.com/docs/start/glossary#update-time) |
| `warningLocList.locationId` | 当前国家预警的LocationID                                     |
| `refer.sources`             | 原始数据来源，或数据源说明，**可能为空**                     |
| `refer.license`             | 数据许可或版权声明，**可能为空**                             |

# 历史数据API

> 获取最近10天天气和空气质量数据

## 历史天气

> 获取最近10天的天气历史数据
>
> 例如今天是12月30日，最多可获取12月20日至12月29日的天气历史数据。

### url:https://datasetapi.qweather.com/v7/historical/weather?

params:

+ **location** 

+ **date** 

  > 选择日期，最多可选择最近10天（不包含今天）的数据。日期格式为yyyyMMdd，例如 `date=20200531`

+ **key** 

+ **lang** 

+ **unit** 

### query

| 参数                      | 描述                                                         |
| :------------------------ | :----------------------------------------------------------- |
| `code`                    | API状态码，具体含义请参考[状态码](https://dev.qweather.com/docs/start/status-code/) |
| `fxLink`                  | 当前数据的响应式页面，便于嵌入网站或应用                     |
| `weatherDaily.date`       | 当天日期                                                     |
| `weatherDaily.sunrise`    | 当天日出时间                                                 |
| `weatherDaily.sunset`     | 当天日落时间                                                 |
| `weatherDaily.moonrise`   | 当天月升时间                                                 |
| `weatherDaily.moonset`    | 当天月落时间                                                 |
| `weatherDaily.moonPhase`  | 当天月相名称                                                 |
| `weatherDaily.tempMax`    | 当天最高温度                                                 |
| `weatherDaily.tempMin`    | 当天最低温度                                                 |
| `weatherDaily.precip`     | 当天总降水量，默认单位：毫米                                 |
| `weatherHourly.time`      | 当天时间                                                     |
| `weatherHourly.temp`      | 当天每小时温度，默认单位：摄氏度                             |
| `weatherHourly.icon`      | 当天每小时天气状况图标的代码，图标可通过[天气状况和图标](https://dev.qweather.com/docs/start/icons/)下载 |
| `weatherHourly.text`      | 当天每小时天气状况的文字描述，包括阴晴雨雪等天气状态的描述   |
| `weatherHourly.wind360`   | 当天每小时风向360角度                                        |
| `weatherHourly.windDir`   | 当天每小时风向                                               |
| `weatherHourly.windScale` | 当天每小时风力                                               |
| `weatherHourly.windSpeed` | 当天每小时风速，公里/小时                                    |
| `weatherHourly.humidity`  | 当天每小时相对湿度，百分比数值                               |
| `weatherHourly.precip`    | 当天每小时累计降水量，默认单位：毫米                         |
| `weatherHourly.pressure`  | 大气压强，默认单位：百帕                                     |
| `refer.sources`           | 原始数据来源，或数据源说明，**可能为空**                     |
| `refer.license`           | 数据许可或版权声明，**可能为空**                             |

## 历史空气质量

> 获取最近10天的中国空气质量历史数据

例如今天是12月30日，最多可获取12月20日至12月29日的空气质量历史数据。

### url:https://datasetapi.qweather.com/v7/historical/air?

### params:

+ **location** 
+ **date** 
+ **key** 
+ **lang** 

### query

| 参数                 | 描述                                                         |
| :------------------- | :----------------------------------------------------------- |
| `code`               | API状态码，具体含义请参考[状态码](https://dev.qweather.com/docs/start/status-code/) |
| `fxLink`             | 当前数据的响应式页面，便于嵌入网站或应用                     |
| `airHourly.pubTime`  | 空气质量数据发布时间                                         |
| `airHourly.aqi`      | 空气质量指数                                                 |
| `airHourly.level`    | 空气质量指数等级                                             |
| `airHourly.category` | 空气质量指数级别                                             |
| `airHourly.primary`  | 空气质量的主要污染物，空气质量为优时，返回值为`NA`           |
| `airHourly.pm10`     | PM10                                                         |
| `airHourly.pm2p5`    | PM2.5                                                        |
| `airHourly.no2`      | 二氧化氮                                                     |
| `airHourly.so2`      | 二氧化硫                                                     |
| `airHourly.co`       | 一氧化碳                                                     |
| `airHourly.o3`       | 臭氧                                                         |
| `refer.sources`      | 原始数据来源，或数据源说明，**可能为空**                     |
| `refer.license`      | 数据许可或版权声明，**可能为空**                             |

