# ts-test
TypeScriptの勉強


## webpackを用いて統合されたindex.jsを出力する場合
- 今回はdistに出力するよう設定済み
    - バラバラなtsから一気に1つのindex.jsに出力できる
- 大規模プロジェクトだとより複雑になるが、出力設定を柔軟に記述可能
    - misskeyも参考に

```
npm run build
```

## typescriptをjavascriptにだけすればいい場合
- 今回はsrcに出力するよう設定済み
    - tsconfigを参照

```
npm tsc
```
