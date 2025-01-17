import { skillData, certificateData, editorData } from './data/skillData.js';
document.addEventListener('DOMContentLoaded', () => {
    menuOpen();
    scrollToHome();
    component();
    handleScroll()
});
function menuOpen() {
    const menuBtn = document.querySelector('#menu-btn');
    const menuBtns = document.querySelectorAll('.menu button');
    const homBtn = document.querySelector('#hom-btn');
    let saveBtn = null;
    let isFirstClick = true;
    menuBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.id !== 'menu-btn') {
                menuBtns.forEach((block) => block.classList.remove('action')); //전부 클릭컬러지움
                btn.classList.add('action'); //클릭된컬러만 색변경(menu-btn제외)
                saveBtn = btn.id;
            }
            const targetId = btn.id.replace('-btn', '');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        })
    });
    menuBtn.addEventListener('click', () => { //메뉴리스트들 보이게 또는 안보이게하는 코드
        if (menuBtn.innerText === "메뉴") {
            menuBtn.innerText = "메뉴닫기";
            menuBtns.forEach((element) => {
                element.removeAttribute('hidden');
                if (element.id === saveBtn) { //클릭햇던 버튼 다시 색넣기
                    element.classList.add('action');
                }
            });
            if (saveBtn === null || isFirstClick) {
                homBtn.classList.add('action'); // 홈페이지 버튼에 action 클래스 추가
                isFirstClick = false; // 첫 클릭 이후에는 이 코드가 실행되지 않도록 설정
            }
        } else if (menuBtn.innerText === "메뉴닫기") {
            menuBtn.innerText = "메뉴";
            menuBtns.forEach((element) => {
                if (element.id !== 'menu-btn') { //menu-btn만 제외하고 히든하는 코드
                    element.setAttribute('hidden', '');
                } else {
                    homBtn.classList.remove('action'); //menu-btn맞으면 지우래
                }
            });
        };
    });
}
function scrollToHome() {
    const homeSection = document.getElementById('hom');
    if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function component() {
    const skills = document.querySelector('#skills');
    const certificates = document.querySelector('#certificates');
    const editors = document.querySelector('#editors');
    const ImgContainer = document.querySelector('#skill-imgs');
    skillData.forEach((item) => {
        const li = document.createElement('li');
        const text = document.createElement('p');
        const span = document.createElement('span');
        const backBar = document.createElement('div');
        const bar = document.createElement('div');
        const level = document.createElement('p');

        text.innerText = item.name;
        level.innerText = item.level;
        bar.style.width = item.level;
        li.classList.add('box');
        backBar.classList.add('backBar');
        bar.classList.add('bar');
        span.classList.add('level');
        
        li.appendChild(text);
        backBar.appendChild(bar);
        span.appendChild(backBar);
        span.appendChild(level);
        li.appendChild(span);
        skills.appendChild(li);
    });
    certificateData.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item.name;
        li.classList.add('box');
        certificates.appendChild(li);
    });
    editorData.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item.name;
        li.classList.add('box');
        editors.appendChild(li);
    });
    
    /*skillData.forEach((item) => {
        const img = document.createElement('img');
        const li = document.createElement('li');
        img.src = item.img;
        img.alt = item.name;
        console.log(img.src);
        li.appendChild(img);
        ImgContainer.appendChild(li);
    });*/
}

function handleScroll() {
    window.addEventListener('scroll', updateActiveButton);
}

/*function updateActiveButton() {
    const sections = document.querySelectorAll('section');
    const menuBtns = document.querySelectorAll('.menu button');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    menuBtns.forEach(btn => {
        btn.classList.remove('action');
        if (btn.id === `${currentSection}-btn`) {
            btn.classList.add('action');
        }
    });
}*/

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const backgruond = document.querySelector('#hom');
    
    const size = Math.random() * 2 + 2 + 'px'; // 크기를 더 작게 조정
    snowflake.style.width = size;
    snowflake.style.height = size;
    
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // 속도를 더 느리게 조정
    
    backgruond.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, 10000); // 애니메이션 지속 시간에 맞춰 제거 시간도 조정
}
setInterval(createSnowflake, 200);