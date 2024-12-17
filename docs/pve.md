# PVE

PVE 直接控制 DeskMini 的硬件，是最底层的系统。

## 安装 PVE

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

## 管理 PVE

- 用网线A连接电脑的网口和 DeskMini 的内置网口
- 配置电脑的IP地址为 IP-PVE 的同一网段
- 在电脑中，打开浏览器，输入 IP-PVE:8006 进入 PVE 管理界面

## 问题

pve无法联网

打开PVE的网络选项卡，网关填OpenWRT的IP地址，应用配置

## 参考资料

- 生成磁盘

  ```bash
  qm importdisk 100 /var/lib/vz/template/iso/istoreos-22.03.6-2024052410-x86-64-squashfs-combined.img local-lvm
  ```
