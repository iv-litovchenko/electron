FROM ubuntu:latest
CMD ["sleep", "infinity"]
WORKDIR /var/www/html

# Установка программ и утилит
RUN apt-get update && apt-get install -y \
    sudo \
    curl \
    wget \
    g++ \
    git \
    unzip \
    zip \
 && rm -rf /var/lib/apt/lists/*

RUN curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
RUN apt-get install -y nodejs

# Install gulp & bower
RUN npm install --global electron-forge
RUN npm install --global gulp
RUN npm install --global grunt
RUN npm install --global bower
