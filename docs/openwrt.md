
# OpenWrt

## 安装 OpenWrt

![OpenWRT-2](/images/openwrt-2.png)

- DeskMini 前置 USB 接口连接 USB 网卡
- 网线B连接 USB 网卡和墙上的网口

## 配置 OpenWrt

### 配置互联网

![OpenWRT-1](/images/openwrt-1.png)

电脑的配置：

- IP：192.168.14.28
- 网关：192.168.14.39
- DNS：114.114.114.114

### 测试网络

此时电脑应该能通过有线网卡上网。  

如果不能，`系统->启动项->mwan3` 点击停止和第一个启动按钮，让其处于已禁用状态。  
