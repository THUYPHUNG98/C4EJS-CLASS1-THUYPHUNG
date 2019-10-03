let itemArr = ['Jeans', 'T-Shirt', 'Socks'];
while (true) {
    let choice = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?');
    if(choice == 'c'||choice == 'C') {
        let newItem = prompt('Enter the name of the new item');
        itemArr.push(newItem);
        alert('Done');
    }
    else if(choice == 'u'||choice == 'U') {
        let pos = Number(prompt('Enter the position you want to update'));
        while(pos > itemArr.length) {
            pos = prompt("Enter again! The position you've entered is not exist");
        }
        itemArr[pos-1] = prompt('Enter the new name');
        alert('Done');
    }
    else if(choice == 'd'||choice == 'D') {
        let pos = Number(prompt('Enter the position you want to delete'));
        while(pos > itemArr.length) {
            pos = prompt("Enter again! The position you've entered is not existed");
        }
        itemArr.splice(pos-1, 1);
        alert('Done');
    }
    else if(choice == 'r'||choice == 'R') {
        let text = 'The current items are:';
        for(let i = 0; i < itemArr.length; i++) {
            text += `\n${i + 1}. ${itemArr[i]}`;
        }
        alert(text);
    } else {
        alert('This command is not supported');
    }
}