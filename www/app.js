const TeacherList = document.getElementById('TeacherList');
const searchBar = document.getElementById('searchBar');
let hpTeachers = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredTeachers = hpTeachers.filter((teacher) => {
        return (
            teacher.name.toLowerCase().includes(searchString) ||
            teacher.email.toLowerCase().includes(searchString)
        );
    });
    displayteachers(filteredTeachers);
});
f
const loadteachers = async () => {
    try {
        const res = await fetch('http://localhost:5000/teacher');
        hpTeachers = await res.json();
        displayteachers(hpTeachers);

        displayteachers();
    } catch (err) {
        console.error(err);
    }
};

const displayteachers = (teachers) => {
    const htmlString = teachers
        .map((teacher) => {
            return `
            <li onclick="onPopup(this)" class="teacher">
                <h2 class="name">${teacher.name}</h2> 
                <p class="email">email: ${teacher.email}</p>
                <img class="img" src="${teacher.image}"></img>
            </li>
        `;
        })
        .join('');
    TeacherList.innerHTML = htmlString;
};

loadteachers();

var popupContainer = document.getElementsByClassName('pop-cont')[0],
    popupBox = document.getElementsByClassName('pop-up')[0];


function onPopup(teacher) {
    let name = teacher.querySelector('.name').innerHTML;
    let email = teacher.querySelector('.email').innerHTML;
    let img = teacher.querySelector('.img').src;

    document.querySelector('.pop-name').innerHTML = name;
    document.querySelector('.pop-email').innerHTML = email;
    document.querySelector('.pop-img').src = img;

    if (popupBox.style.display === 'block') {
        popupBox.style.display = 'none';

    } else {
        popupBox.style.display = 'block';
    }
}