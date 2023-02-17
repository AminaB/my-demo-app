## install nodejs

sudo mkdir -p /usr/local/lib/nodejs

sudo tar -xJvf node-v14.4.0-linux-x64.tar.xz -C /usr/local/lib/nodejs

export PATH=/usr/local/lib/nodejs/node-node-v14.4.0-linux-x64/bin:$PATH

## install angular cli
npm install -g @angular/cli@latest

## create project
ng new my-demo-app --strict-no

## bootstrap
npm install --save bootstrap@3

## run project
ng serve

## generate component
ng g c servers
