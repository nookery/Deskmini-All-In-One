
# 黑苹果

## 准备

- 制作恢复镜像

    ```shell
    git clone https://github.com/thenickdude/OSX-KVM.git
    ./fetch-macOS-v2.py
    ```

- 确保 BaseSystem.dmg 制作完成

## 安装

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
