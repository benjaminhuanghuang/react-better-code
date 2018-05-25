## Install
```
    npm i -g eslint
    eslint --version
```

## Create eslint config .eslintrc 


## Run eslint
```
    eslint app.js
```


## Setup ESlint for Editor
Install ESlint locally for project
```
    npm i eslint -D
```
Install extension "ESLint" for editor
## eslint 的三大通用规则
referenc: https://blog.csdn.net/txl910514/article/details/76178988

- google
```
    npm i -D eslint eslint-config-google    
```
- Airbnb
```
    npm i -D eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
```
- standard
```
    npm i -D eslint-config-standard eslint-plugin-standard eslint-plugin-promise
```

## Airbnb rule
```
    npm i -D eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
```
eslint config
```
{
    "extends": "airbnb",
}
```