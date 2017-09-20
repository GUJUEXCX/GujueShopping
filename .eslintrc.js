module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "wx": false,
        "App": false,
        "Page": false,
        "getApp": false
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        // 缩进风格：2空格
        "indent": [
            "error",
            2
        ],
        // 换行风格LF
        "linebreak-style": [
            "warn",
            "unix"
        ],
        // 单引号定义字符串
        "quotes": [
            "error",
            "single"
        ],
        // 行末禁用分号
        "semi": [
            "error",
            "never"
        ],
        // 强制使用===
        "eqeqeq": [
            "error", 
            "always"
        ],
        // 数组中括号前后禁用空格
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        // 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
        "comma-style": [
            "error",
            "last"
        ],
        // 禁止在计算属性内使用空格
        "computed-property-spacing": [
            "error", 
            "never"
        ],
        // 函数名或function关键字与函数括号之间必须有空格
        "space-before-function-paren": [
            "error",
            "always"
        ],
        // 圆括号内禁止使用空格
        "space-in-parens": [
            "error",
            "never"
        ],
        // 一元操作符两端必须有空格
        "space-unary-ops": [
            "error",
            {
              "words": true,
              "nonwords": false,
            }
        ],
        // 注释符后必须有空格
        "spaced-comment": [
            "error",
            "always"
        ],
        // 运算符两端必须由空格
        "space-infix-ops": "error",
        // 块级代码必须用大括号包裹
        "curly": "error",
        // console语句警告
        "no-console": "warn",
        // 单行块代码大括号内禁用空格
        "block-spacing": "error",
        // one true brace style大括号风格
        "brace-style": "error",
        // 强制驼峰命名法
        "camelcase": "error",
        // 要求在逗号后使用一个或者多个空格
        "comma-spacing": "error",
        // 要求在关键字之前、之后至少有一个空格
        "keyword-spacing": "error",
        // 块语句至少有一个前置空格
        "space-before-blocks": "error",
    }
};