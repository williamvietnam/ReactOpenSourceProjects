//career
const btnCareer2022 = document.getElementById('career-2022-btn');
const btnCareer2021 = document.getElementById('career-2021-btn');
const btnCareer2019 = document.getElementById('career-2019-btn');
const btnCareer2018 = document.getElementById('career-2018-btn');
const imgCareer = document.getElementById('career-image');
const headingCareer = document.getElementById('career-heading');

//education
const btnEducation2023 = document.getElementById('education-2023-btn');
const btnEducation2022 = document.getElementById('education-2022-btn');
const btnEducation2017 = document.getElementById('education-2017-btn');
const imgEducation = document.getElementById('education-image');
const headingEducation = document.getElementById('education-heading');

//traveling
const btnTravelling2022 = document.getElementById('travel-2022-btn');
const btnTravelling2021 = document.getElementById('travel-2021-btn');
const btnTravelling2019 = document.getElementById('travel-2019-btn');
const btnTravelling2018 = document.getElementById('travel-2018-btn');
const imgTravel = document.getElementById('travel-image');
const headingTravel = document.getElementById('travel-heading');

//footer
const btnGithub = document.getElementById('github-navigate');
const btnFacebook = document.getElementById('facebook-navigate');
const btnYoutube = document.getElementById('youtube-navigate');
const btnLinkedin = document.getElementById('linkedin-navigate');

function start() {
    btnCareer2022.addEventListener('click', () => (
        imgCareer.src = '../assets/image/home/career-default-image.png',
        headingCareer.innerText = "Career highligt 2022"
    ));
    btnCareer2021.addEventListener('click', () => (
        imgCareer.src = '../assets/image/home/career-default-2022.jpeg',
        headingCareer.innerText = "Career highligt 2021"
    ));
    btnCareer2019.addEventListener('click', () => (
        imgCareer.src = '../assets/image/home/career-default-2021.png',
        headingCareer.innerText = "Career highligt 2019"
    ));
    btnCareer2018.addEventListener('click', () => (
        imgCareer.src = '../assets/image/home/career-2018.png',
        headingCareer.innerText = "Career highligt 2018"
    ));

    btnEducation2023.addEventListener('click', () => (
        imgEducation.src = 'https://i.pinimg.com/736x/c3/eb/31/c3eb31b2c99bb0d231cf2b623efc1dad.jpg',
        headingEducation.innerText = "Education highligt 2023"
    ));
    btnEducation2022.addEventListener('click', () => (
        imgEducation.src = 'https://i.ytimg.com/vi/2BKdmh06BUE/maxresdefault.jpg',
        headingEducation.innerText = "Education highligt 2022"
    ));
    btnEducation2017.addEventListener('click', () => (
        imgEducation.src = 'https://w7.pngwing.com/pngs/364/410/png-transparent-blackboard-books-pencil-back-to-school-education-background-thumbnail.png',
        headingEducation.innerText = "Education highligt 2017"
    ));

    btnTravelling2022.addEventListener('click', () => (
        imgTravel.src = 'https://w7.pngwing.com/pngs/102/609/png-transparent-package-tour-flight-travel-website-vacation-travel-mode-of-transport-transport-business-thumbnail.png',
        headingTravel.innerText = "Traveling highligt 2022"
    ));
    btnTravelling2021.addEventListener('click', () => (
        imgTravel.src = 'https://content.wepik.com/statics/2756515/travel-youtube-thumbnail-8848260page1.jpg',
        headingTravel.innerText = "Traveling highligt 2021"
    ));
    btnTravelling2019.addEventListener('click', () => (
        imgTravel.src = 'https://i.pinimg.com/236x/72/b0/b3/72b0b3b0185cefbda943ac0a5f16fc5c.jpg',
        headingTravel.innerText = "Traveling highligt 2019"
    ));
    btnTravelling2018.addEventListener('click', () => (
        imgTravel.src = 'https://edit.org/photos/img/blog/rdf-templates-travel-blog-youtube-free.jpg-840.jpg',
        headingTravel.innerText = "Traveling highligt 2018"
    ));

    btnGithub.addEventListener('click', () => (
        window.location.assign("https://github.com/facebook/react")
    ));

    btnFacebook.addEventListener('click', () => (
        window.location.assign("https://www.facebook.com/nbg2307")
    ))

    btnLinkedin.addEventListener('click', () => (
        window.location.assign("https://www.linkedin.com/in/nguyenbanggiang/")
    ))
}

start();