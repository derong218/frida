#!/bin/bash
# while true; do
#   /data/local/tmp/frida-inject -f "com.l1c7960735.f7681e3b22" -s /data/local/tmp/h.js
#   sleep 1
# done


#!/bin/bash

wait_with_cancel() {
  echo "等待10秒钟... (按任意键停止)"
  for i in $(seq 10 -1 1); do
    read -t 1 -n 1 key
    if [ $? -eq 0 ]; then
      echo -e "\n脚本已停止"
      exit 0
    fi
    echo -n "$i "
  done
  echo ""
}
while true; do
  echo "运行耗时指令..."
  #ping -c 4 google.com  # 替换为你要运行的耗时指令
  /data/local/tmp/frida-inject -f "com.l1c7960735.f7681e3b22" -s /data/local/tmp/h.js
  wait_with_cancel
done
