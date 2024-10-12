# Poet's Inn - Official Website
Welcome to the official repository of Poet's Inn, a tranquil homestay nestled in the beautiful Pahalgam Valley, Kashmir. This project contains the front-end code for the hotel’s website, which provides information about rooms, amenities, and other features of the inn, with easy navigation and a seamless booking experience.

## Table of Contents
1. Project Overview
2. Technologies Used
3. Installation
4. Building the Project
5. Deployment
6. SSL Setup

### Project Overview

This website is designed to provide potential guests with all the information they need about Poet's Inn, including available rooms, amenities, and the surrounding area's natural beauty. It also allows visitors to book rooms and inquire about availability directly from the website.

### Technologies Used
- React.js: Front-end framework used to create the website's user interface.
- Nginx: Web server used for hosting.
- Certbot: Used to generate SSL certificates for HTTPS support.
- Amazon EC2: Hosting server.

### Installation
Prerequisites
Node.js (v18.20.2 or higher)
NPM (comes with Node.js)
Nginx installed on your server
Certbot for SSL certificate generation
Clone the repository

```
git clone https://github.com/your-username/poetsinn.git
cd poetsinn
```

#### Install dependencies
```
npm install
```

### Building the Project
To create a production-ready build of the project, run the following command:

```npm run build```
This will generate static files in the build/ directory.

### Deployment
Copy build files to server
After generating the build files, copy them to your server's web directory. For example:

```scp -r build/ ec2-user@65.1.91.70:/home/ec2-user/webserver/ ```
#### Nginx Configuration
Update your Nginx configuration to serve the static files. Example configuration:
nginx
```
server {
    listen       80;
    server_name  poetsinn.in www.poetsinn.in;

    location /.well-known/acme-challenge/ {
        root /home/ec2-user/webserver;
    }

    location / {
        root   /home/ec2-user/webserver;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    error_page 404 /404.html;
    location = /404.html {}

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/poetsinn.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/poetsinn.in/privkey.pem;
}

```

### SSL Setup
To secure the website with HTTPS, install Certbot and generate SSL certificates for the domain:


``` sudo certbot --nginx -d poetsinn.in -d www.poetsinn.in ```
Once SSL is enabled, update Nginx to redirect HTTP traffic to HTTPS.




