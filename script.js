// Fortune Generator Script

const fortunes = [
    "Your coding future is bright, but first you need to stop googling 'how to center a div' every 5 minutes",
    "The deadline you're worried about? Yeah, it was yesterday. Start working on your time management",
    "The bugs in your code are like stars in the sky - numerous and mysterious. Learn to debug!",
    "You will soon face a great challenge: staying awake in your 8 AM class. Good luck!",
    "Your procrastination skills are legendary, but sadly they won't help you pass your exams",
    "Success is in your future... after you finally close those 47 social media tabs",
    "The coffee in your cup will get cold three times today while you're stuck in a coding loop",
    "That assignment you think will take 2 hours? Think 2 days. Plan accordingly!",
    "Your GitHub commits tell a story: 'Last minute panic before deadline'",
    "You will meet your soulmate in the library... just kidding, you never go to the library"
];

const fortuneBox = document.getElementById('fortuneBox');
fortuneBox.textContent=fortunes[Math.floor(Math.random() * fortunes.length)];

function btn1() {
    fortuneBox.style.borderColor='#2B3209';
    fortuneBox.style.fontFamily="arial";
    fortuneBox.style.fontSize="30px";
    fortuneBox.style.backgroundColor='#6A7438';
    fortuneBox.style.color = '#f2e3e3ff';

}

function btn2(){
    fortuneBox.style.borderColor='white';
    fortuneBox.style.fontFamily="times new roman";
    fortuneBox.style.fontSize="15px";
    fortuneBox.style.backgroundColor='#44FFFF';
    fortuneBox.style.color = 'Black';
}



function btn3(){
    fortuneBox.style.borderColor='GreenYellow';
    fortuneBox.style.fontFamily="Poppins";
    fortuneBox.style.fontSize="20px";
    fortuneBox.style.backgroundColor='LightCyan';
    fortuneBox.style.color = 'DarkBlue';
}

function btn4(){
    fortuneBox.style.borderColor='DarkOrange';
    fortuneBox.style.fontFamily="Georgia";
    fortuneBox.style.fontSize="25px";
    fortuneBox.style.backgroundColor='PeachPuff';
    fortuneBox.style.color = 'FireBrick';
}




