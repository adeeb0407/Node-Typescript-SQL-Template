# Node-Typescript-SQL-Template
# AWS ec2 NodeJS App Deployment Procedure

Install nodejs version 16

```
sudo yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -
sudo yum install -y nodejs
```

Install git and pull the repo

```
sudo yum install -y git
git clone https://github.com/sam-meech-ward-bci...
```
Create a service file

```sh
sudo vim /etc/systemd/system/NodeServer.service
```

```
[Unit]
Description=My Node Server
After=multi-user.target

[Service]
ExecStart=/usr/bin/node /home/ec2-user/lotr/server.js
Restart=always
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=my-node-server
User=ec2-user
EnvironmentFile=/home/ec2-user/lotr/app.env

[Install]
WantedBy=multi-user.target
```

start the service

```sh
sudo systemctl enable NodeServer.service
sudo systemctl start NodeServer.service
```

Check logs of the App

```
sudo /var/log/messages
```

#Reverse Proxy with Ningix

```
sudo amazon-linux-extras install nginx1 -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

```
sudo vim /etc/nginx/nginx.conf
```

```
server {
  location / {
        proxy_pass http://localhost:8080;
  }
}
```

#alternative
`https://www.youtube.com/watch?v=adQDNRZ59r0`
