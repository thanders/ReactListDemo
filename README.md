### Relevant Shell commands

#### Committing build files to a gh-pages branch
Add build folder and commit

'git add build && git commit -m "Initial dist subtree commit"'

create a subtree and push it to remote repository

'git subtree push --prefix build origin gh-pages'


#### Installing gh-pages package and pushing React build files to gh-pages repository
Install gh-pages package 'npm install --save gh-pages'
Publish to predefined branch 'npm run deploy'

#### Deleting local and remote branches
Delete local branch 'git branch -D gh-pages'
Delete remote branch 'git push origin --delete gh-pages'

Remove build folder from added files 'git reset -- build/'
