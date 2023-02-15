## install nodejs

udo mkdir -p /usr/local/lib/nodejs

sudo tar -xJvf node-v14.4.0-linux-x64.tar.xz -C /usr/local/lib/nodejs

export PATH=/usr/local/lib/nodejs/node-node-v14.4.0-linux-x64/bin:$PATH

## install angular cli
npm install -g @angular/cli@latest

## create project
ng nem my-demo-app --strict-no

## bootstrap
npm install --save bootstrap@3
