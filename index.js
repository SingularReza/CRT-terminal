var screen = document.getElementById('console');
var monitor = document.getElementById('screen');

var username;
var password;

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
                                result.innerHTML='ls - get sitemap/menu<br/>game - start game</br>who - get details'
                                break;
                        case 'ls':
                        case 'start-game':

                        default:
                                result.innerHTML = 'The command is wrong, check !help';
                }
                screen.appendChild(result);
                screen.appendChild(command);
                command.lastChild.focus();
        }
}