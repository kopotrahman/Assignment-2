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

function changeFontColor() {
  const colors = ['red', 'blue', 'green', 'purple', 'orange', 'teal', 'brown', 'pink'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  fortuneBox.style.color = randomColor;
}

function changeBgColor(){
    const colors= ['lightyellow', 'lightblue', 'lightgreen', 'lavender', 'lightgrey', 'beige', 'lightpink', 'lightcoral'];
    fortuneBox.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
}



function changeBorderColor(){
    const colors= ['red', 'blue', 'green', 'purple', 'orange', 'teal', 'brown', 'pink'];
    fortuneBox.style.borderColor=colors[Math.floor(Math.random() * colors.length)];
}

function changeFontStyle(){
    const fonts= ['Arial, sans-serif', 'Georgia, serif', 'Courier New, monospace', 'Tahoma, sans-serif', 'Verdana, sans-serif', 'Times New Roman, serif', 'Lucida Console, monospace', 'Impact, sans-serif'];
    fortuneBox.style.fontFamily=fonts[Math.floor(Math.random() * fonts.length)];
}

function changeFontSize(){
    const sizes= ['12px', '14px', '16px', '18px', '20px', '22px', '24px', '26px'];
    fortuneBox.style.fontSize=sizes[Math.floor(Math.random() * sizes.length)];
}

function btn1(){
    changeFontColor();
    changeBgColor();
    changeBorderColor();
    changeFontStyle();
    changeFontSize();
}



