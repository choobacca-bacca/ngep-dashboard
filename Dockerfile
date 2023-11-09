FROM node:18-alpine

WORKDIR /ngep-dashboard/

COPY public/ /ngep-dashboard/public
COPY src/ /ngep-dashboard/src
COPY package.json /ngep-dashboard/
COPY tsconfig.json /ngep-dashboard/

RUN npm install
CMD ["npm", "start"]