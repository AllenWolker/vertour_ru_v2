# pull official base image
FROM node:14-alpine as react-build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY . .
RUN npm --verbose install
RUN npm run build
# add app
FROM nginx:stable-alpine
# Копируем билд из ступени сборки "build-stage" в директорию образа /usr/share/nginx/html
COPY --from=react-build /app/build /usr/share/nginx/html
# Копируем конфиг nginx в директорию образа /etc/nginx/nginx.conf (Напишем его позже)
COPY nginx.conf /etc/nginx/nginx.conf
# Открываем 80 порт
EXPOSE 80
# Указываем команду, поднимающую nginx при запуске контейнера
CMD ["nginx", "-g", "daemon off;"]
