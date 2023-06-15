/*
このファイルはJavaScriptのコードを記述するものです。
 */
// headerファイルの読み込み
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  })

//footerファイルの読み込み
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  })