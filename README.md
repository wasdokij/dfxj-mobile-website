1）通用的的git提交流程：

第一步：git status，查看本地git仓库状态
第二步：git add *
第三步：git commit -m "your comment"
第四步：git pull origin master (或者origin的其它分支)
第五步（重要）：git checkout [<commit>] -- gulpfile.js (恢复gulpfile.js至你的本地版本）
第六步：解决冲突,然后 git add * => git commit -m "your merge comment"
第七步：git push origin master (或者origin的其它分支)

2) 解除git对某个文件的版本控制：

在第四步以后，第六步之前执行：

git rm --cached -rf src/css/maps
rm src/css/maps

git rm --cached -rf src/tmp
rm src/tmp