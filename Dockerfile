FROM node:20-alpine

WORKDIR /app

# Angular CLIをインストール
RUN npm install -g @angular/cli

# CMD内の [ ] には前後に必ずスペースが必要です
# また、ホスト名は 0.0.0.0 を指定します
CMD if [ ! -d "src" ]; then \
    ng new my-app --directory . --skip-install --style=scss --routing=true; \
    fi && \
    npm install && \
    ng serve --host 0.0.0.0