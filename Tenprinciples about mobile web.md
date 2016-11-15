#Ten principles on Best practices of MobileWeb
#Design for one Web
    保证在不同的终端，同一个URI下一致的体验
    榨干设备能力，提供进阶功能
    通过合理的手段绕过缺陷
    在模拟器和真机上测试
#Rely on Web standards
    create documents that validate to published format grammars
    Send content in a format known by th e Device
    where possible, send a content in a preferred format
    Ensure that the content is encoded using a character encoding known to be supported  by the target Device
    Indicate in the response the character encoding beding used
    使用CSS
    使用标记语言展示文档流结构
    提供跳出错误的提示
#Stay away from  know hazards
    No Popups
    嵌套表格
    不要用表格定位
    不要用grapics填充空间
    不要使用frames
    除非你知道设备支持这种方式不要使用 image map
#Be Cautious of Device limitations
    不要默认cookie可用
    不要默认objects 和植入的脚本可用
    不要默认表格可用
    如果可以就采用其他方式来实现表格展示
    有效地组织文档流，放置CSS样式表加载不了的时候依然是可读的
    保证文本在颜色失效的情况下依然可读。
#Optimize navigation
    在页首提供一个更小的导航
    Provide consistent navigation mechanisms
    Clearly identify the target of each link
    Note the target file 除非你知道终端设备支持它
    Access Keys
    保证入口URI短小精悍
    防止页面上出现太多链接
#Check graphics and colors
    Image Resizing
    Large graphics
    Images specify size
    Non-text alternatives
    Color contrast
    Background Image Readability
    定位和测量
        不要使用px和绝对定位
#Keep it small||保持文件的短小

#Use netWorks sparingly||吝啬地使用网路

#Help&Guide user input||提示用户输入

#Think of users on the go||从用户角度思考问题
