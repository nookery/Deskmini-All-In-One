
# 群晖

- [下载](https://github.com/RROrg/rr/releases/tag/24.6.3)引导镜像
- 配置虚拟机
- 创建引导磁盘

    ```bash
    qm importdisk 108 /var/lib/vz/template/iso/rr.img local-lvm
    ```

- 将磁盘分配到虚拟机，类型选：sata
- 配置虚拟机从引导磁盘启动
