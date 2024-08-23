# Use a imagem oficial do Node.js, versão 20
FROM node:20

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos package.json e package-lock.json (se existir) para o contêiner
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto para o contêiner
COPY . .

# Exponha a porta em que o aplicativo React será servido
EXPOSE 3000

# Defina o comando padrão para iniciar o aplicativo
CMD ["npm", "start"]
