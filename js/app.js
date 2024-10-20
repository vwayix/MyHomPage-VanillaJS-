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
        myContent = '<div><h3>' + myTitle[i] + '</h3><p>' + myData[i] + '</p><br><p>' + myData[i + 1] + '</p></div>';
    } else {
        myContent = '<div><h3>' + myTitle[i] + '</h3><p>' + myData[i + 1] + '</p></div>';
    }
    myInfor.innerHTML = myContent;
}
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

/*<div class="scroll-array">
    <div class="scroll-item">
        <img></img>
        <p>제목</p>
    </div>
    <div class="scroll-item">
        <img></img>
        <p>제목</p>
    </div>
    <div class="scroll-item">
        <img></img>
        <p>제목</p>
    </div>
    <div class="scroll-item">
        <img></img>
        <p>제목</p>
    </div>
    <div class="scroll-item">
        <img></img>
        <p>제목</p>
    </div>
</div>*/


/*div에 scroll-array인 클래스이름을 만들고 O
안에 여러개의 div에 scroll-item인 클래스 만들건데 
그안에 img, p태그를 만드는데 여러개 만들거니까
조건을 배열의 크기만큼 반복해서 만들기 
*/
const scrollContainer = bluebox.querySelector('.scroll-container');

pjDiv.className = 'scroll-array';

let content = {
    bluebox: [['이미지주소', '이미지주소', '이미지주소', '이미지주소', '이미지주소'], ['제목', '제목', '제목', '제목', '제목']],
    greenbox: [['이미지주소', '이미지주소', '이미지주소', '이미지주소', '이미지주소'], ['제목', '제목', '제목', '제목', '제목']],
    graybox: [['이미지주소', '이미지주소', '이미지주소', '이미지주소', '이미지주소'], ['제목', '제목', '제목', '제목', '제목']]
}
const boxName = [content['bluebox'], content['greenbox'], content['graybox']];

for(let i=1; i<=3; i++){
    const pjDiv = document.createElement('div');
    pjDiv.className = boxName[i];
switch (pjDiv.className) {
    case content['bluebox']:
        for (let i = 0; i < tageImg.length; i++) {
            const pjItem = document.createElement('div');
            pjItem.className = 'scroll-item';
        
            // img 태그 생성
            const img = document.createElement('img');
            img.src = content['bluebox'][i][i];
        
            // p 태그 생성
            const p = document.createElement('p');
            p.textContent = content['bluebox'][i][i];
        
            // pjItem에 img와 p 태그 추가
            pjItem.appendChild(img);
            pjItem.appendChild(p);
        
            // pjDiv에 pjItem 추가
            pjDiv.appendChild(pjItem);
            
        }
        break;
    case content['greenbox']:
        for (let i = 0; i < tageImg.length; i++) {
            const pjItem = document.createElement('div');
            pjItem.className = 'scroll-item';
        
            // img 태그 생성
            const img = document.createElement('img');
            img.src = content['greenbox'][i][i];
        
            // p 태그 생성
            const p = document.createElement('p');
            p.textContent = content['greenbox'][i][i];
        
            // pjItem에 img와 p 태그 추가
            pjItem.appendChild(img);
            pjItem.appendChild(p);
        
            // pjDiv에 pjItem 추가
            pjDiv.appendChild(pjItem);
        }
        break;
    case content['graybox']:
        for (let i = 0; i < tageImg.length; i++) {
            const pjItem = document.createElement('div');
            pjItem.className = 'scroll-item';
        
            // img 태그 생성
            const img = document.createElement('img');
            img.src = content['greenbox'][i][i];
        
            // p 태그 생성
            const p = document.createElement('p');
            p.textContent = content['greenbox'][i][i];
        
            // pjItem에 img와 p 태그 추가
            pjItem.appendChild(img);
            pjItem.appendChild(p);
        
            // pjDiv에 pjItem 추가
            pjDiv.appendChild(pjItem);
        }
        break;
    default: alert("프로젝트를 가져오지 못하였습니다.")
}
scrollContainer.appendChild(pjDiv);

}

// 최종적으로 scrollContainer에 pjDiv 추가
scrollContainer.appendChild(pjDiv);

