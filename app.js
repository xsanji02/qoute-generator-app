let btn = document.querySelector('.new-qoutes')
let qoute = document.querySelector('.qoute')
let person = document.querySelector('.person')

let qoutes = [
    {
    qoute:'Take a risk or Lose a chance',
    person: 'MIRANA'
}, {
    qoute:'The journey of a thousand miles begins with one STEP',
    person: 'Lao Tzu',
}, {
    qoute:'A journey awakens all our old fears of danger and risk. Your life is on the line. You are living by your own resources; you have to find your own way and solve every problem on the road',
    person: 'Paul Theroux',
}, {
    qoute:'I love you not because of who you are, but because of who I am when I am with you.',
    person: 'Roy Croft',
}, {
    qoute: 'Love is not only something you feel, it is something you do.',
    person: 'David Wilkerson',
}, {
    qoute: 'There is only one HAPINESS in this LIFE, To LOVE and be LOVED',
    person: 'george sand',
}, {
    qoute: 'Sometimes you wont know the value of a moment until it becomes a MEMORY',
    person: 'Dr. Seuss',
}, {
    qoute: 'Running away from your problems is a race you\'ll never win',
    person: '-Josh',
}, {
    qoute: 'The TWO most important days in your life are the day you are born and the day you FIND out WHY',
    person: 'mark twain',
}, {
    qoute: 'You will never reach your DESTINATION if you stop and throw STONES at every dog that barks',
    person: 'averstu',
}, {
    qoute: 'You will not be punished for your anger, you will be punished by your ANGER',
    person: 'budha',
}, {
    qoute: 'Every human walks around with a certain kind of sadness. They may not wear it on their sleeves, but its there if you look deep',
    person: 'taraji henson',
}, {
    qoute: 'Every saint has a past and every sinner has a future',
    person: 'Oscar Wilde',
}, {
    qoute: 'Many of life\'s failures are people who did not realize how close they were to success when they gave up',
    person: 'thomas a. edison',
}, {
    qoute: 'I didn\'t grow up having role models, I grew up having people I didn\'t want to be like and seeing situations I\'d never want to be in. Not all of us are dealt the right cards, but that doesn\'t mean you can\'t re-shuffle your deck for a better outcome.',
    person: 'Bang',
}

];


// btn.addEventListener('click', function(){
 
//     let random = Math.floor(Math.random() * qoutes.length);

//     qoute.innerText = qoutes[random].qoute;
//     person.innerText = qoutes[random].person;
// })

let letter = ""
for (qoute in qoutes){
    letter += qoute;
}
