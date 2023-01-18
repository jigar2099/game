var buttons =
[
    {'name': 'Rock', 'icon': '✊🏻', 'beats': {'Scissors': 'crushes', 'Lizard': 'crushes'}},
    {'name': 'Paper', 'icon': '✋🏻', 'beats': {'Rock': 'covers', 'Spock': 'disproves'}},
    {'name': 'Scissors', 'icon': '✌🏻', 'beats': {'Paper': 'cuts', 'Lizard': 'decapitates'}},
    {'name': 'Lizard', 'icon': '🤏🏻', 'beats': {'Spock': 'poisons', 'Paper': 'eats'}},
    {'name': 'Spock', 'icon': '🖖🏻', 'beats': {'Scissors': 'smashes', 'Rock': 'vaporizes'}}
];

for(let i = 0; i < buttons.length; i++)
{
    let button = document.createElement('button');
    button.appendChild(document.createTextNode(buttons[i].icon));
    document.getElementById('gme').appendChild(button);
    button.addEventListener('click', function() { choice(i); });
}

function choice(index)
{
    let user = buttons[index];
    let pc = buttons[Math.floor(Math.random() * buttons.length)];
    let result = document.getElementById('outCome');
    
    if(user.beats.hasOwnProperty(pc.name))
    {
        increase('won');
        result.innerHTML = 'You Won!<br>';
        result.innerHTML += [user.icon, user.name, user.beats[pc.name], pc.name, pc.icon].join(' ');

    }
    else if(pc.beats.hasOwnProperty(user.name))
    {
        increase('lost');
        result.innerHTML = 'You Lose!<br>';
        result.innerHTML += [pc.icon, pc.name, pc.beats[user.name], user.name, user.icon].join(' ');
    }
    else
    {
        increase('draw');
        result.innerHTML = 'Draw!<br>';
        result.innerHTML += [pc.icon, 'Nobody Wins', you.icon].join(' ');
    }
}

function increase(id)
{
    let element = document.getElementById(id);
    element.innerHTML = Number(element.innerHTML) + 1;
}