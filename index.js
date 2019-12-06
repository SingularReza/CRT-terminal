var screen = document.getElementById('console')
var username;
var password;

function switchScreen() {
        screen.classList.toggle('off');
        screen.classList.toggle('on');
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