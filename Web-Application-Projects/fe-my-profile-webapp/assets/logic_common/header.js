const tabHome = document.getElementById('home-tab');
const tabCareer = document.getElementById('career-tab');
const tabEducation = document.getElementById('education-tab');
const tabTravelling = document.getElementById('travel-tab');
const tabMore = document.getElementById('more-tab');
const buttonLogOut = document.getElementById('logout-btn');

function onClickHomeTab() {
    window.location.href = '../home_page/home_index.html';
}

function onClickCareerTab() {
    window.location.href = '../career_page/career_index.html';
}

function onClickEducationTab() {
    window.location.href = '../education_page/education_index.html';
}

function onClickTravellingTab() {
    window.location.href = '../travelling_page/travelling_index.html';
}

function onClickLogOutButton() {
    window.location.href = '../login_page/login_index.html';
}

function main() {
    tabHome.addEventListener('click', onClickHomeTab);
    tabCareer.addEventListener('click', onClickCareerTab);
    tabEducation.addEventListener('click', onClickEducationTab);
    tabTravelling.addEventListener('click', onClickTravellingTab);
    buttonLogOut.addEventListener('click', onClickLogOutButton);
}

main()