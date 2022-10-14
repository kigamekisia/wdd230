const button = document.getElementById('submit');
const input = document.getElementById('favchap');
const list = document.querySelector('ul');

button.onclick = function () {
    let inpt = input.value;
    if (inpt == "") return;

    input.value = '';

    const element = document.createElement('li');

    const content = document.createElement('p');
    content.textContent = inpt;

    const btn = document.createElement('button');
    btn.textContent = '❌';

    btn.onclick = function () {
        element.remove();
    }

    element.appendChild(content);
    element.appendChild(btn);

    list.appendChild(element);
    input.focus();
}