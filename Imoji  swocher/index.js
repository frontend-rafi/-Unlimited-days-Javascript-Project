const Emojis=[
    '🎃','😒','😊','👌','😁','🦜','🐧','🐃','🦐','👁️','🧑‍🦱','👩‍🏫','🙇‍♂️','🤾‍♀️','🤾‍♂️','🤾','⛹️‍♀️','⛹️‍♂️','🏋️','🚴‍♀️','🚴‍♂️','🏋️‍♂️','🏋️‍♀️','⛹️','🚴','🚵‍♂️','🤸‍♂️','👊','👊','🤛','👔','🧦','✨','🎱','🪆','🪓','🎻','🎹','🪵','🛖','🧱','🧲','🧰','🔭','🔋','🖥️','💻','🚲','🛼','🛹','🚑','🚲','🌏','🚦','🪑','🌦️','🍕','🌯'
];
const btn=document.getElementById("emoji");
btn.addEventListener('mouseover', function(){
btn.innerHTML=Emojis[Math.floor(Math.random() * Emojis.length)]
});

btn.addEventListener('hover', function(){
    btn.innerHTML=Emojis[Math.floor(Math.random() * Emojis.length)]
    });
