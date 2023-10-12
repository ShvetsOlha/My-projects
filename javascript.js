
  
var quotes = [
    '"Inspiration comes from within yourself. One has to be positive. When you\'re positive, good things happen." - Deep Roy',
    '"There are no limits to what you can accomplish, except the limits you place on your own thinking." - Brian Tracy',
    '"We become what we think about."- Earl Nightingale',
    '"Leaders never use the word failure. They look upon setbacks as learning experiences."- Brian Tracy',
    '"Don\'t Let Yesterday Take Up Too Much Of Today." - Will Rogers',
    '"I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination." - Jimmy Dean',
    '"The best way to get started is to quit talking and begin doing." ― Walt Disney',
    '"Never bend your head. Always hold it high. Look the world straight in the eye."- Helen Keller',
      '"People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you\'re lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life." - Carrie Ann Moss', 
      '"Some women choose to follow men, and some choose to follow their dreams. If you\'re wondering which way to go, remember that your career will never wake up and tell you that it doesn\'t love you anymore." - Lady Gaga', 
      '"Life is what happens to us while we are making other plans." - Allen Saunders',
      '"Life isn\'t about finding yourself. Life is about creating yourself." - George Bernard Shaw',
      '"Doubt kills more dreams than failure ever will."- Suzy Kassem',
      '"Keep your face always toward the sunshine, and shadows will fall behind you."- Walt Whitman',
      '"The happiness of your life depends on the quality of your thoughts."- Marcus Aurelius',
      '"You do not find the happy life. You make it."— Camilla Eyring Kimball',
      '"It is during our darkest moments that we must focus to see the light." — Aristotle',
      '"Learn as if you will live forever, live like you will die tomorrow." — Mahatma Gandhi']

    function newQuote(){
        var randomNumber = Math.floor(Math.random()*(quotes.length));
document.getElementById('text').innerHTML = quotes[randomNumber];
    }
       
    const button = document.getElementById('new-quote');
    const body = document.body;
const tweet = document.getElementById('tweet-quote');
const tumblr = document.getElementById('tumblr-quote');
    
    button.addEventListener('click', () => {
        // Генеруємо випадковий колір для кнопки та body
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        // Змінюємо колір кнопки
        button.style.backgroundColor = randomColor;
        
        // Змінюємо колір фону body
        body.style.backgroundColor = randomColor;
      tweet.style.backgroundColor = randomColor;
      tumblr.style.backgroundColor = randomColor;
    });
    

