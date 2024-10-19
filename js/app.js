function displayClassNames() {
    // coworkerList 클래스를 가진 모든 ul 요소를 선택
    var coworkerLists = document.querySelectorAll(".coworkerList");

    // 각 ul 요소에 대해 반복문 실행
    coworkerLists.forEach(function (ul) {
        // 클래스 이름을 <p>로 출력


        var classItem = document.createElement("p");
        classItem.textContent = "클래스 이름: " + ul.className; // 클래스 이름 설정
        document.body.appendChild(classItem); // body에 <p> 요소 추가
    });
}

const myInfor = document.querySelector(".my-infor");
const skillInfor = document.querySelector(".skill-infor");

const myTitle = ['About Me', 'CHANNEL', '자격증'];
let myDeta = [['2006.05.19'], ['부산컴퓨터과학고등학교졸업예정'], ['깃허브'], ['컴퓨터활용능력2급']];
const skillTitle = ['FrontEnd', 'Framework', 'BackEnd', 'DB', 'Server', 'Tools', '프로그래밍언어들', 'Collaboration Design & Document'];
let skillData = [['HTML, CSS, JAVASCRIPT'], ['Node.js, React.js, Next.js'], ['미공개'], ['MongoDB, MySQL'],
['Apache, Apache tomcat'], ['VSCODE, 이클립스, DEV C++'], ['C언어, JAVA'], ['노션, 깃허브, 피그마, 파워포인트, 엑셀, 한글']];

//my
let myContent = '';
for(let i = 0; i < 3; i++){
    if (i < 1) { 
        myContent += '<div><h3>' + myTitle[i] + '</h3><p>' + myDeta[i] + '</p><br><p>' + myDeta[i+1] + '</p></div>';
    } else {
        myContent += '<div><h3>' + myTitle[i] + '</h3><p>' + myDeta[i+1] + '</p></div>';
    }
}
myInfor.innerHTML = myContent; 

//skill
let skillContent = '';
for(let j = 0; j < 8; j++){
    skillContent += '<div><h3>' + skillTitle[j] + '</h3><p>' + skillData[j] + '</p></div>';
}
skillInfor.innerHTML = skillContent;

/* 
<h1>Loop & Array</h1>
<script>
    var coworkers = ['egoing', 'leezche', 'duru', 'taeho'];
</script>
<h2>Co workers</h2>
<ul>
    <script>
        var i = 0;
        while(i < coworkers.length){
            document.write('<li><a href="http://a.com/'+coworkers[i]+'">'+coworkers[i]+'</a></li>');
            i = i + 1;
        }
    </script>
</ul>
*/