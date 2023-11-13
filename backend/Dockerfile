FROM node
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000
ENTRYPOINT ["node", "index.js"]


FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf