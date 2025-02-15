FROM node:21
WORKDIR "/opt/top-sales-dashboard"
COPY . ./
COPY package*.json .
RUN npm i
EXPOSE "3000"
CMD ["sleep", "infinity"]
