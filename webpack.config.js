module.exports = {
  entry: "./front/application.tsx",//エントリーポイント
  mode: "development", //ソースマップを有効化
  output: {
    path: `${__dirname}/app/assets/javascripts/`,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        //tsxも解釈する.一応、jsxも残しておく
        test: /\.(js|jsx|tsx)$/,
        use: [
          {
            loader: "ts-loader",//tsを利用する
            options: {
              //env指定でES5に変換
              //modules:falseでimport文をcomonJSに変換しない
              //reactをつけてJSXを解釈させる
              presets: [["env", {"modules": false}], "react"]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  //拡張子を省いたimport先モジュールのファイルを解決
  resolve: {
    extensions:[".js", ".jsx", ".ts", "tsx", ".json"]
  }
};