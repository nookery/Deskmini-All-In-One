# 简介

这篇文章记录了我将 DeskMini 310 改装成一台运行PVE、OpenWRT、群晖等多个大型软件的电脑的整个过程。  

在此之前，它运行黑苹果，作为一台工作用的主力机。因为CPU有些落后而被Mac mini M2 Pro替代。  

这里记录了它运行黑苹果的情况：  
<https://github.com/nookery/Hackintosh-DeskMini-H310>

按照本文操作，最终的成果是：

- DeskMini 可以安装多个虚拟机，如：Ubuntu、Windows、macOS(不太好用)
- DeskMini 安装了群晖的操作系统，当作NAS使用
- DeskMini 安装了 OpenWRT，相当于一个路由器
- DeskMini 一个网口用来给自己联网，一个网口用来让另一台电脑联网
- 以上系统是同时在运行的

## 硬件

- DeskMini 310 主机 + 显示器 + 键盘 + 鼠标
- USB网卡，型号为：Corechip SR9900 USB2.0 to Fast Ethernet Adapter
- 两根网线，命名为网线A和网线B
- U盘
- 一台可正常使用的电脑，下文简称为：电脑

## 参考资料

- <https://www.bilibili.com/video/BV1bc411v7A3/?spm_id_from=333.337.search-card.all.click>