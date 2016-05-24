FROM alpine:3.1

# Update
RUN apk add --update nodejs

# Install app dependencies
COPY package.json /src/package.json
RUN cd /src; npm install

# Bundle app source
COPY . /src
RUN cd /src;

EXPOSE  3000

CMD ["npm", "start"]