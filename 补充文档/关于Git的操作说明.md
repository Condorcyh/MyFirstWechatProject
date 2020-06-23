目前暂定分为news、list、my这几块，同时也是各个分支的名字

下面以任务为开发news的组员为例，说明步骤（命令行）

1. 复制仓库地址：https://github.com/theNiuBee/WxProject.git

2. 新建空白文件夹，右键`git bash here`

3. 执行命令`git clone https://github.com/theNiuBee/WxProject.git`，将远端仓库中的文件克隆至本地

4. 为远程仓库取别名：

   执行命令`git remote add [wxproject] https://github.com/theNiuBee/WxProject.git`

   [ ]中的内容随意，最好是方便记住的名称，这样以后就能用这个名称来代替仓库地址

5. 新建news分支并切换，执行命令`git checkout -b news`

6. 打开微信开发者工具，导入该项目，进行开发

7. 例如当某一阶段开发结束后，将本地的对news分支的开发推送到远端仓库，执行以下命令（在news分支下，若不是则执行命令`git checkout news`进行切换）

   `git add`

   `git commit -m "[操作人姓名]: 对news分支进行修改-添加了xxx功能"`（注意这里的commit规范）

   `git push [wxproject] news`

8. 若某功能开发完毕，需要提交组员进行审核，确认无bug后，允许合并到master分支，合并命令如下：

   `git checkout master`（切换到master分支）

   `git merge news`（将news分支合并到master）

   `git push wxproject master`

9. 每当master分支进行更新，所有组员**一定要进行拉取更新**，拉取命令如下：

   `git checkout master`（切换到master分支）

   `git pull [wxproject] master`

   对本地master的更新不影响本地正在开发的其他分支
   
   一定要及时对本地的master进行更新！否则产生冲突会比较麻烦
   
10. 对master分支更新过后，你本地正在开发的某个分支却没有更新，所以现在就要更新你本地正在开发的分支，以my分支为例，步骤如下：

   切换到my分支：`git checkout my`

   执行合并命令，将master分支合并过来：`git merge master`，然后会出现下面的情况

   <img src="https://i.loli.net/2020/05/20/DBht5TylszoUNVv.png" alt="0.PNG" style="zoom: 50%;" />

   注意它这里并不是merge失败，而是需要我们输入一个commit信息，来便于我们以后查询

   我们按ctrl+i进入编辑模式，其实要输入的信息已经帮我们自动写好了，就是最上面的黄字部分，现在我们只需要保存退出就行了，按下ctrl+i后直接输入`:wq`，如图：

   <img src="https://i.loli.net/2020/05/20/3BHxEYLVbvurDWc.png" alt="2.png" style="zoom:50%;" />

   这样，merge就成功了，本地的my分支上也有了master的更新

11. 若是auto-merge失败，那就去找它指出的有冲突的文件，手动解决即可

