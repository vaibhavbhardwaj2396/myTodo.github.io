var ul = document.getElementById('list')
var li

var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem);

var clearButton = document.getElementById('clearall')
clearButton.addEventListener('click', clearItem);

function addItem() {
    var input = document.getElementById('input');
    var item = input.value
    var textnode = document.createTextNode(item)
    var start = document.getElementById('Start')
    var enter = document.getElementById('Enter')

    if (item === '') {
        start.remove()

        var p = document.createElement('p')
        p.setAttribute('id', 'Enter')
        var myText = document.createTextNode("Enter Some Do's")
        p.appendChild(myText)
        document.getElementById('allabove').appendChild(p);


        // let p = document.getElementById('p')
        // let val = 'please enter node'
        // let label = document.createTextNode(val)
        // p.appendChild(label)


    }
    else {
        //create li
        li = document.createElement('li')
        //create checkBox
        var checkBox = document.createElement('input')
        checkBox.type = 'checkbox';
        checkBox.setAttribute('id', 'check');
        //create label
        var label = document.createElement('label')
        // label.setAttribute('for','item')

        //ADD THESE ELEEMNT ON WEB PAGE 

        ul.appendChild(label)
        li.appendChild(checkBox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])

        setTimeout(() => {
            li.className = 'visual'
        }, 500);
        input.value = '';
        start.remove()
        enter.remove()
    }
}
function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        // const element = li[index];
        // console.log(element);
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}
function clearItem() {
    ul.remove();
}

