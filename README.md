[![gkatemplatew](https://user-images.githubusercontent.com/10385585/28489021-a9cc83aa-6eea-11e7-8c1b-4bb326bb9fe9.png)](https://github.com/joeyguo/gka)

## gka-tpl-studiojs

<a href="https://www.npmjs.org/package/gka-tpl-studiojs"><img src="https://img.shields.io/npm/v/gka-tpl-studiojs.svg?style=flat"></a>
<a href="https://github.com/joeyguo/gka-tpl-studiojs#license"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>

[gka](https://github.com/joeyguo/gka) 文件生成模板，一键式图片资源优化，生成 [studiojs](https://github.com/gkajs/studiojs) (canvas) 序列帧动画文件。

- 输出 studiojs 动画文件
- 结合 -uc 支持 `相同帧图片复用`✓ `空白裁剪优化`✓ (可选) 
- 默认开启 `开启合图优化`✓

[示例预览](https://gkajs.github.io/gka-tpl-studiojs/example/gka.html)、 [示例代码](https://github.com/gkajs/gka-tpl-studiojs/tree/master/example)

# Install

```sh
$ npm i gka -g               # install gka

（已内置）$ npm i gka-tpl-studiojs -g  # install gka-tpl-studiojs
```

# Usage

```sh
$ gka <dir> -t studiojs [options]
```

# Example

```sh
$ gka E:\gka-test\img -t studiojs
```

<table>
    <thead>
        <tr><th>Before</th><th>After</th></tr>
    </thead>
    <tbody>
        <tr>
            <td><pre><code>
./img
├── hello-01.png
├── hello-02.png
├── hello-03.png
├── hello-04.png
├── hello-05.png
└── ...
</code></pre></td>
<td><pre><code>
./gka-hello
└── gka.html
└── data.js
└── img
    └── sprites.png
</code></pre></td>
        </tr>
    </tbody>
</table>

# Links

- [https://github.com/joeyguo/gka](https://github.com/joeyguo/gka)
- [https://github.com/gkajs/studiojs](https://github.com/gkajs/studiojs)


