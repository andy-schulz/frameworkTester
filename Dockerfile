FROM node:12-alpine

ARG http_proxy=""
ARG https_proxy=""

ENV https_proxy ${https_proxy}
ENV http_proxy ${http_proxy}

RUN mkdir -p /framework_tester

WORKDIR /framework_tester

COPY ./app /framework_tester
RUN if [ -z "$https_proxy" ] ; then echo no https proxy set ; else npm config set https-proxy ${https_proxy} ; fi
RUN if [ -z "$http_proxy" ] ; then echo no http proxy set ; else npm config set proxy ${http_proxy} ; fi

RUN npm install

EXPOSE 3000

CMD ["npm","start"]
