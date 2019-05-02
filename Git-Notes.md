Some git notes 

For committing changes your branch 

git add .
git commit -m 'Your commit message here'
git push origin 'Your-branch'  

For fetching changes from upstream 
'Repeatable commands'
git fetch upstream
git checkout master // Switch to the master branch
git rebase upstream/master or git merge upstream master 
git checkout "Your-branch' // Switch back to your git branch for further editing

git merge master 'Your-branch'

See this stack overflow article for more details.
Please run the repeatable commands above before submitting a pull request.
If you are worried about losing your own work you can stash your changes with git stash before running the 3 repeatable commands above.
Then run git stash pop when you wish to restore your work.
https://help.github.com/en/articles/syncing-a-fork
https://www.gun.io/blog/how-to-github-fork-branch-and-pull-request

The difference bewteen a fork and a clone
https://github.community/t5/Support-Protips/The-difference-between-forking-and-cloning-a-repository/ba-p/1372

The difference bewteen git merge and git rebase
https://github.community/t5/Support-Protips/The-difference-between-forking-and-cloning-a-repository/ba-p/1372

To learn more about writing READ.ME's in markdown
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet