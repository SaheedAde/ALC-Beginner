const toggleList = document.querySelector('.toggleList');
const listItems = document.querySelector('.main-body');
const contactInfo = document.querySelector('.contact-info');
const allList = listItems.querySelector('ul');
const lists = allList.children;

function attachListButtons(li) {

    var remove = document.createElement('div');
    remove.className = 'remove buttons';
    remove.textContent = 'Delete Contact';
    li.appendChild(remove);
}

for (var i = 0; i < lists.length; i++) {
    attachListButtons(lists[i])
}

allList.addEventListener('click', function (event) {


    if (event.target.tagName == 'DIV') {
        if (event.target.className == 'remove buttons') {
            var li = event.target.parentNode;
            var ul = li.parentNode;
            ul.removeChild(li);
        }

    }
});

// this toggles between showing the list and hiding it
toggleList.addEventListener('click', function () {
    if (contactInfo.style.display == 'none') {
        toggleList.textContent = 'Show Less';
        contactInfo.style.display = 'block';
        console.log(1)
    } else {
        toggleList.textContent = 'Show More';
        contactInfo.style.display = 'none';
        console.log(2)

    }

});
