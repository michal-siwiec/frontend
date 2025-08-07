FROM node:18.0.0

# SETUP SSH
RUN apt-get update
RUN apt-get install -y openssh-server
RUN mkdir -p /root/.ssh
ARG SSH_PUB_KEY
RUN echo "$SSH_PUB_KEY" > /root/.ssh/authorized_keys

# APP INSTALLATION
WORKDIR /budoman-front
COPY . /budoman-front/
RUN npm install

# START THE CONTAINER
ENTRYPOINT ["/bin/sh", "-c", "chmod u+x /budoman-front/bin/container-startup.sh && /budoman-front/bin/container-startup.sh"]
