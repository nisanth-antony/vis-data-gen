FROM nginx
COPY dist/iso_poc_sms /usr/share/nginx/html

EXPOSE 80