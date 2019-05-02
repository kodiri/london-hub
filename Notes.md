Some git notes 


git add .
git commit -m 'Your commit message here'
git push origin "steves-input"  

git fetch upstream
git checkout master
git rebase upstream/master or git merge upstream master
See this stack overflow article for more details.
Please run the repeatable commands above before submitting a pull request.
If you are worried about losing your own work you can stash your changes with git stash before running the 3 repeatable commands above.
Then run git stash pop when you wish to restore your work.
https://help.github.com/en/articles/syncing-a-fork
https://www.gun.io/blog/how-to-github-fork-branch-and-pull-request
