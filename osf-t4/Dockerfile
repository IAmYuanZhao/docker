# 设置基础镜像 

FROM nginx:1.10.3
# 定义作者

MAINTAINER yuanzhao <me@osalien.com>

# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面

COPY dist/  /usr/share/nginx/html/
COPY www-osalien-com-3007.conf /etc/nginx/nginx.conf
