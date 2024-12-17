# DeskMini 310 All In One

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

## PVE

PVE 直接控制 DeskMini 的硬件，是最底层的系统。

### 安装 PVE

- DeskMini 连接好显示器和键盘、鼠标
- 在电脑中，下载 [PVE](https://www.proxmox.com/en/downloads)
- 在电脑中，使用 [Ventory](https://www.ventoy.net/cn/index.html) 制作U盘启动盘
- 在电脑中，将下载好的PVE镜像文件（ISO）复制到U盘的根目录下
- DeskMini 插入U盘，重启，选择U盘启动
- DeskMini 进入PVE安装界面
- DeskMini 在网卡选择界面，选择 DeskMini 的内置网卡
- PVE 安装完成
- 记 PVE 的 IP 地址为：IP-PVE
- 以下设备不再使用，可以拔掉
  - DeskMini的显示器
  - DeskMini的键盘
  - DeskMini的鼠标
  - U盘

### 管理 PVE

- 用网线A连接电脑的网口和 DeskMini 的内置网口
- 配置电脑的IP地址为 IP-PVE 的同一网段
- 在电脑中，打开浏览器，输入 IP-PVE:8006 进入 PVE 管理界面

## OpenWrt

### 安装 OpenWrt

- DeskMini 前置 USB 接口连接 USB 网卡
- 网线B连接 USB 网卡和墙上的网口

### 配置 OpenWrt

#### 配置互联网

电脑的配置：

- IP：192.168.14.28
- 网关：192.168.14.39
- DNS：114.114.114.114

#### 测试网络

此时电脑应该能通过有线网卡上网。  

如果不能，`系统->启动项->mwan3` 点击停止和第一个启动按钮，让其处于已禁用状态。  

## 群晖

- [下载](https://github.com/RROrg/rr/releases/tag/24.6.3)引导镜像
- 配置虚拟机
- 创建引导磁盘

    ```bash
    qm importdisk 108 /var/lib/vz/template/iso/rr.img local-lvm
    ```

- 将磁盘分配到虚拟机，类型选：sata
- 配置虚拟机从引导磁盘启动

## 黑苹果

### 准备

- 制作恢复镜像

    ```shell
    git clone https://github.com/thenickdude/OSX-KVM.git
    ./fetch-macOS-v2.py
    ```

- 确保 BaseSystem.dmg 制作完成

### 安装

使用这个项目<https://github.com/luchina-gabriel/OSX-PROXMOX>



网络问题导致下载失败的解决思路：  

改`tools/macrecovery.py`,下载BaseSystem.dmg代码改成sleep 20秒，在这20内将手动下载好的BaseSystem.dmg放到/mnt/APPLE/com.apple.recovery.boot目录下。

有用的命令：

```bash
rm -rf /var/lib/vz/template/iso/recovery-sonoma.iso
tail -f ~/OSX-PROXMOX/logs/crt-recovery-sonoma.log
# 挂载物理第二个硬盘
ls /dev/disk/by-id/
```

## 问题

pve无法联网

打开PVE的网络选项卡，网关填OpenWRT的IP地址，应用配置

## 参考资料

- <https://www.bilibili.com/video/BV1bc411v7A3/?spm_id_from=333.337.search-card.all.click>
- 生成磁盘

  ```bash
  qm importdisk 100 /var/lib/vz/template/iso/istoreos-22.03.6-2024052410-x86-64-squashfs-combined.img local-lvm
  ```
