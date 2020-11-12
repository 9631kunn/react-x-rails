import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  font: 18px 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic',sans-serif;
}
a{
  text-decoration: none;
}
ul{
  padding-inline-start: 20px;
}
input[type="text"] {
  border: none;
  border-radius: 0;
  outline: none;
}
button{
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}
`;

export default globalStyle;
