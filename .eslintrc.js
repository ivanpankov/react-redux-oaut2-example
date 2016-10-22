module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": false
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "strict": 0,
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "linebreak-style": ["error", "windows"],
        "quotes": [ "error", "single"],
        "semi": ["error", "always"]
    },
    "ecmaFeatures": { 
        "experimentalObjectRestSpread": true ,
        "jsx": true
    }
};