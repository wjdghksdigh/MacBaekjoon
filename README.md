<h1 align="center">  backjoonStudy 🧑🏻‍💻 - Mac 진행용</h1>
<br><br>
<h2> node.js로 백준 알고리즘 풀이 제출 ✍🏼 </h2>
<h3> javascript로 풀 수 없어 node.js로 제출하기 <h3>
  <p> 모듈을 추가해주면 문제풀기가 가능하다</p>
<br>
<p> 1️⃣ fs 모듈 추가하기 </p>
<p>
const fs = require("fs"); <br>
const input = fs.readFileSync("/dev/stdin").toString().split(' '); <br>
</p>
<p>문자열로 받아온 데이터를 ' '공백을 기준으로 나누어서 input에 배열로 저장하는 코드 </p>
<p>2️⃣ 문제 풀기 - 모듈을 추가 해주면 js로 문제 풀이가 가능하다 </p>
<p>
const fs = require("fs"); <br>

const input = fs.readFileSync("/dev/stdin").toString().split(' '); <br>
const arr = []; <br>

for(let i=0; i<input.length;i++){ <br>
    arr.push(parseInt(input[i],10)); <br>
}

const a = arr[0]; <br>
const b = arr[1]; <br>


console.log(a+b);   <br>
</p>
<p> 3️⃣ 위 코드는 이렇게도 변한 가능 </p>
<p>
const fs = require("fs"); <br>
const [a,b] = fs.readFileSync("/dev/stdin").toString().split(' ').map(v=>parseInt(v,10)); <br>
console.log(a+b); <br>
</p>
  
  
  
