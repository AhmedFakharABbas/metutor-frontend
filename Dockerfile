FROM node:12.22.8 as build
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm install
COPY . /app
RUN sed -i 's#http://160.153.255.132:8000/#https://backend.eshapsough.com/#g' /app/src/environments/environment.prod.ts
RUN sed -i 's#http://160.153.255.132:4200#https://frontend.eshapsough.com#g' /app/src/environments/environment.prod.ts
RUN sed -i 's#http://160.153.255.132:8000/#https://backend.eshapsough.com/#g' /app/src/environments/environment.ts
RUN sed -i 's#http://localhost:4200#https://frontend.eshapsough.com#g' /app/src/environments/environment.ts
RUN npm run build --prod
RUN mv /app/dist/metutors /app/dist/html
FROM nginx:1.20.0 as statics
COPY --from=build /app/dist/html /usr/share/nginx/html
RUN chmod 777 /usr/share/nginx/html -R
RUN sed -i 's#index  index.html index.htm;#index  index.html index.htm; try_files $uri $uri/ /index.html;#g' /etc/nginx/conf.d/default.conf
