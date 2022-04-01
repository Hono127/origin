
var calc = () => {
  // inputタグに記載された数字を取得
  const gettall = document.getElementById('tall').value;
  // 入力された文字列を数値に変換する
  // gettall = Number(gettall);
  const getweight = document.getElementById('weight').value;
  // 入力された文字列を数値に変換する
  // getweight = Number(getweight);
  const getyears = document.getElementById('years').value;
  // 入力された文字列を数値に変換する
  // getyears = Number(getyears);
  var menz_calc = (10 * getweight) + (6.25 * gettall) - (5 * getyears) + 5;
  // 女性の計算パターン
  var woman_calc = (10 * getweight) + (6.25 * gettall) - (5 * getyears) - 161;
  // 基礎代謝の表示場所の取得
  var metabo = document.getElementById('basalmetabo');
  const metaboDispNone = document.querySelector('#basalmetabo');
  // formタグのid「gend」を取得
  const getSelectButton = document.getElementById('gend');
  // fromタグ配下のラジオボタンの「name」の値を取得
  const radioNodeList = getSelectButton.cr1;
  // inputタグの「value」を取得
  const selectedGender = radioNodeList.value;
  const dispNone = document.querySelector('#alert1');
  // 性別欄が選択されていない場合の注意表示
  if (selectedGender === "") {
    dispNone.classList.remove('disp-none');
  } else {
    dispNone.classList.add('disp-none');
  }
  // valueの値の判定
if(selectedGender == "woman") {
  metabo.innerHTML = `あなたの1日の消費カロリー（基礎代謝）は${woman_calc}kcalです。`;
} else {
  metabo.innerHTML = `あなたの1日の消費カロリー（基礎代謝）は${menz_calc}kcalです。`;
}
  // 身長、体重、年齢のいずれかが空欄の場合の処理
if (gettall == "" || getweight == "" || getyears == "") {
  metabo.innerHTML = `空欄になっている項目があります。`;
  metabo.style.color ='#F00'
} else {
  metabo.style.color ='#000'
}
// const getRadioValue = document.maleFemale.elements['cr1'].value;
// const maleFemaleBox = document.getElementById('gend');
// getSelectButton.elements[1].checked = true;
// if(document.maleFemale.elements['cr1'].checked){
//   alert(document.maleFemale.elements[i].value + "が選択されました。");
// }


//消費カロリー計算式
  var lowActiveMenz = menz_calc * 1.2;
  var normalActiveMenz = menz_calc * 1.55;
  var HardActiveMenz = menz_calc * 1.725;

  var lowActiveWoman = menz_calc * 1.2;
  var normalActiveWoman = menz_calc * 1.55;
  var HardActiveWoman = menz_calc * 1.725;
  const btn2 = document.getElementById('btn2');
  btn2.addEventListener('click', () => {
    alert(lowActiveMenz);
  })
};

// 1ヶ月摂取しつづければの話
 var calorieIntake = lowActiveMenz - (240 * 2);