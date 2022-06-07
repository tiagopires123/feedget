npm install -Y
npm i typescript @types/node ts-node-dev -D
npx tsc --init
npm i express
npm i -D @types/express
npm i prisma -D
npm i @prisma/client
npx prisma init
npx prisma migrate dev (ou deploy)
npx prisma studio (visualizar tabela do banco)
npm install nodemailer
npm install @types/nodemailer -D
npm install jest -D
npx jest --init
npm install ts-node -D
npm i -D jest @swc/core @swc/jest
npm i @types/jest -D
npm i cors
npm i @types/cors -D
npx tsc (converte o typescript para js criando a pasta dist)
npx prisma migrate deploy && npm run start (start command no Railway para quando for criar as tabelas do banco e dar start)