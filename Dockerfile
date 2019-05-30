FROM 12-alpine

RUN mkdir -p /framework_tester

WORKDIR /framework_tester

COPY ./app /framework_tester

RUN npm install

EXPOSE 3000

CMD ["npm","start"]