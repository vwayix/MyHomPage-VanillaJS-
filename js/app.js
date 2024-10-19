const myInfor = document.querySelector(".my-infor");
const skillInfor = document.querySelector(".skill-infor");

const myTitle = ['About Me', 'CHANNEL', '자격증'];
let myData = [['2006.05.19'], ['부산컴퓨터과학고등학교졸업예정'], ['깃허브'], ['컴퓨터활용능력2급']];

const skillTitle = {
    flex1: ['FrontEnd', 'Framework'],
    flex2: ['BackEnd', 'DB', 'Server'],
    flex3: ['Tools', '프로그래밍언어들', 'Collaboration Design & Document']
};
let skillData = {
    flex1: ['HTML, CSS, JAVASCRIPT', 'Node.js, React.js, Next.js'],
    flex2: ['미공개', 'MongoDB, MySQL', 'Apache, Apache tomcat'],
    flex3: ['VSCODE, 이클립스, DEV C++', 'C언어, JAVA', '노션, 깃허브, 피그마, 파워포인트, 엑셀, 한글']
};

//myInfor
let myContent = '';
for (let i = 0; i < 3; i++) {
    if (i < 1) {
        myContent += '<div><h3>' + myTitle[i] + '</h3><p>' + myData[i] + '</p><br><p>' + myData[i + 1] + '</p></div>';
    } else {
        myContent += '<div><h3>' + myTitle[i] + '</h3><p>' + myData[i + 1] + '</p></div>';
    }
}
myInfor.innerHTML = myContent;

//skillInfor
for (var i = 1; i <= 3; i++) {
    var newDiv = document.createElement('div');
    newDiv.className = 'flex' + i;
    var skillContent = '';
    switch (newDiv.className) {
        case 'flex1':
            for (j = 0; j < 2; j++) {
                skillContent += '<div><h3>' + skillTitle['flex' + i][j] + '</h3><p>' + skillData['flex' + i][j] + '</p></div>';
            }
            newDiv.innerHTML = skillContent;
            skillInfor.appendChild(newDiv);
            break;
        case 'flex2':
        case 'flex3':
            for (j = 0; j < 3; j++) {
                skillContent += '<div><h3>' + skillTitle['flex' + i][j] + '</h3><p>' + skillData['flex' + i][j] + '</p></div>';
            }
            newDiv.innerHTML = skillContent;
            skillInfor.appendChild(newDiv);
        default:
    }
}
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