const assert = require("assert");
const aim = require("../src/Job.js");

//---------------------------------------------
// it("説明", function () {
//     assert.strictEqual(testFunc(),expectedResult,"オプションエラーメッセージ")
// })
//---------------------------------------------
// strictEqual以外にもある(参考にしたqiita記事より)
// // 2つの引数の内容が末端まで完全に一致していたら成功
// assert.deepEqual({hoge: 'hage'}, {hoge: 'fuge'});
// // この例ではテスト失敗

// // 2つの引数の内容が末端まで同一でなければ成功
// assert.notDeepEqual({hoge: 'hage'}, {hoge: 'hage'});
// // この例ではテスト失敗

// // 最初と第3引数を、第2引数の演算子で比較し、trueならば成功
// assert.operator(-1, '<', 3);
// // この例ではテスト成功

// // 第1引数が、第2引数を基準とした第3引数の絶対値内に収まっていれば成功
// assert.closeTo(2.5, 3, 0.5);
// // この例ではテスト成功

it('JobTypeが適切なら同じ値をgetできる', function () {
    assert.strictEqual((new aim.Job("自営業",21,18,24)).getType(), "自営業");
});

it('salaryが適切なら平均値を取得できる', function () {
    assert.strictEqual((new aim.Job("自営業",21,18,24)).avgSalary, 21);
});

it('salaryが無ければ0を返す', function () {
    assert.strictEqual((new aim.Job("学生")).avgSalary, 0);
});
//---------------------------------------------