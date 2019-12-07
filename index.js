var screen = document.getElementById('console');
var monitor = document.getElementById('screen');
var power = document.getElementById('power-icon');

var username;
var password;
var diaryEntries = [];

function switchScreen() {
        var windUp = document.getElementById('wind-up');
        var windDown = document.getElementById('wind-down');
        var monitorOff = document.getElementById('monitor-off');
        if(screen.className === 'off') {
                windUp.play();
                setTimeout(function() {
                        windDown.play();
                }, 12000);
        }
        else {
                windUp.pause();
                windDown.pause();
                windUp.currentTime = 0;
                windDown.currentTime = 0;
                monitorOff.play();
        }
        screen.classList.toggle('off');
        screen.classList.toggle('on');
        monitor.classList.toggle('active');
        power.classList.toggle('powered');
        document.getElementById('username').focus();
}

function saveUser(event) {
        if (event.keyCode === 13) {
                username = document.getElementById('username').value;
                var command = document.createElement('p');
                command.innerHTML = '<span class="command-prefix">Enter password:~$</span><input type="password" onkeypress="savePassword(event)" />';
                screen.appendChild(command);
                command.lastChild.focus();
        }
}

function savePassword(event) {
        if (event.keyCode === 13) {
                var welcome = document.createElement('p');
                welcome.innerHTML = 'Welcome to the Wired! <br /> Press !help for commands';
                screen.appendChild(welcome);
                var command = document.createElement('p');
                command.innerHTML = '<span class="command-prefix">' + username + '@wired:~$</span><input type="text" onkeypress="execute(event)" />';
                screen.appendChild(command);
                command.lastChild.focus();
        }
}

function execute(event) {
        var command = document.createElement('p');
        command.innerHTML = '<span class="command-prefix">' + username +'@wired:~$</span><input type="text" onkeypress="execute(event)" />';
        if(event.keyCode === 13) {
                var commandText = event.target.value
                var result = document.createElement('p');
                switch(commandText) {
                        case '!help':
                                result.innerHTML = 'ls - get sitemap/menu<br/>game - start game</br>diary - write diary entries<br/>who - get details'
                                break;
                        case 'ls':
                                result.innerHTML = 'home<br/>entries<br/>goals<br/>about'
                                break;
                        case 'game':
                                result.innerHTML = 'work in progress...'
                                break;
                        case 'diary':
                                diary();
                                break;
                        case 'who':
                                result.innerHTML = 'Consciousness floating through the net, AKA The Wired.<br/>Watch Serial Experiments Lain'
                                break;
                        case 'entries':
                                diaryEntries.forEach(entry => {
                                        entryDOM = document.createElement('span');
                                        entryDOM.innerHTML = '> '+entry.name+': '+ entry.text+'<br/>';
                                        result.appendChild(entryDOM);
                                })
                                break;
                        default:
                                result.innerHTML = 'The command is wrong, check !help';
                }
                screen.appendChild(result);
                screen.appendChild(command);
                command.lastChild.focus();
        }
}

function diary() {
        var entryName = document.createElement('p');
        entryName.innerHTML = '> Enter entry name: <input type="text"/>'
        screen.appendChild(entryName);
        entryName.lastChild.focus();

        var entryText = document.createElement('p');
        entryText.innerHTML = '> Enter entry text: <input type="text"/>'
        screen.appendChild(entryText);
        entryName.lastChild.focus();

/*var diaryObject = {
        name: entryName.lastChild.value,
        text: entryText.lastChild.value
}*/
}