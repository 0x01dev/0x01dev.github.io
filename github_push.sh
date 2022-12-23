
npm run build

git add . && git commit -a -m "update"
ssh-add -D && ssh-add ~/.ssh/0x01dev@github && git push
