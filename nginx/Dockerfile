# Use the official Nginx base image
FROM nginx:latest

# The Angular app's build artifacts are copied into the NGINX container
COPY /app/dist/peakvisor /usr/share/nginx/html

# Copy your custom Nginx configuration file
COPY default.conf /etc/nginx/conf.d