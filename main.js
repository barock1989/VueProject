var quiz = {
    title: 'General Knowledge Quiz',
    questions:[
        {
            text:"I. The name of which spice comes from the French word for 'nail'?",
        responses: [
            {text: 'Cinnamon'},
            {text: 'Clove', correct: true},
            {text: 'Cardamom'},
            {text: 'Oreganum'},
        ]        
    }, {
            text:"II. In India, the train Lifeline Express is a...",
        responses: [
            {text: 'Hospital', correct: true},
            {text: 'Bank'},
            {text: 'Primary School'},
            {text: 'Restuarant'},
        ]
    }, {
            text:"III. Which Asian mountain is also known as the Savage Mountain due to the extreme difficulty of ascent?",
        responses: [
            {text: 'Kanchenjunga'},
            {text: 'K2', correct: true},
            {text: 'Lhoste'},
            {text: 'Mount Everest'},
    ]       
    }, {
            text:"IV. In 1964, which portfolio was given to Indira Gandhi in the government of Lal Bahadur Shastri?",
        responses: [
            {text: 'Defence'},
            {text: 'Home'},
            {text: 'Information and Broadcasting', correct: true},
            {text: 'Energy'},
    ]
    }, {
            text:"V. In Alice's Adventures in Wonderland, which game was played by the Queen of Hearts using hedgehogs as balls?",
        responses: [
            {text: 'Squash'},
            {text: 'Quintet'},
            {text: 'Quidditch'},
            {text: 'Croquet', correct: true}, 
    ]       
    }, {
            text:"VI. With which unfortunate incident would you associate the warplane Enola Gay?",
        responses: [
            {text: 'Sinking of the ship Bismark'},
            {text: 'Hiroshima bombing', correct: true},
            {text: 'Storming of Bastille'},
            {text: 'Twin Towers'},
    ]       
    }, {
            text:"VII. Odhra Magadha is the precursor to which Indian dance form?",
        responses: [
            {text: 'Kuchipudi'},
            {text: 'Kathak'},
            {text: 'Odissi', correct: true},
            {text: 'belly dancing'},
    ]       
    }, {
            text:"VIII. Who composed music for the 1969 film Goopy Gyne Bagha Byne?",
        responses: [
            {text: 'Satyajit', correct: true},
            {text: 'Ravi Shankar'},
            {text: 'Shiv-Hari'},
            {text: 'Ayinki Rahane'},
    ]       
    }, {
            text:"IX. Where in the human body is the stapedius muscle situated?",
        responses: [
            {text: 'Nose'},
            {text: 'Ears', correct: true},
            {text: 'Leg'},
            {text: 'Arm'},
    ]       
    }, {
            text:"X. Apart from Venus, which planet rotates from east to west?",
        responses: [
            {text: 'Jupiter'},
            {text: 'Mars', correct: true},
            {text: 'Uranus'},
            {text: 'Pluto'},
    ]       
    }, {
            text:"XI. Which country was Cleopatra Queen of?",
        responses: [
            {text: 'China'},
            {text: 'Germany'},
            {text: 'Egypt', correct: true},
            {text: 'South Africa'},
    
    ]       
    }, {
            text:"XII. Which famous world leader was accused at the Rivonia Trial?",
        responses: [
            {text: 'Martin Luther King'},
            {text: 'Subhas Chandra', },
            {text: 'Stephan Bantu Biko'},
            {text: 'Nelson Mandela', correct: true},
    ] 
    }, {
            text:"XIII. In Hindu mythology, who has a mansion named Vaijayanta and a sword named Paranjaya?",
        responses: [
            {text: 'Vishnu'},
            {text: 'Shiva'},
            {text: 'Mahela'},
            {text: 'Indra', correct: true},
    ]       
    }, {
            text:"XIV. What is the parasol a kind of?",
        responses: [
            {text: 'Umbrella', correct: true},
            {text: 'Footwear'},
            {text: 'Bracelet'},
            {text: 'Weapon'},
    ]       
    }, {
            text:"XV. What was the pen name of William Sydney Porter?",
        responses: [
            {text: 'Mark Twain'},
            {text: 'Oscar Wilde'},
            {text: "O'Henry", correct: true},
            {text: 'Russel'},
    ]       
    }, {
            text:"XVI. Which spice consist of the seed of the Myristica fragrans, a tropical evergreen tree?",
        responses: [
            {text: 'Cardamom'},
            {text: 'Nutmeg', correct: true},
            {text: 'Clove'},
            {text: 'Cinnamon'},
    ]       
    }, {
            text:"XVII. Which leader wrote the Srimad Bhagavad Gita Rahasya while he was jailed in Myanmar?",
        responses: [
            {text: 'Bal Gangadhar Tilak', correct: true},
            {text: 'Motilal Nehru'},
            {text: 'Gopal Krishna Gokhale'},
            {text: 'Sachin Bilal'},
    ]       
    }, {
            text:"XVIII. Who was born in Gwalior in 1945 to Haafiz Ali Khan?",
        responses: [
            {text: 'Aaliyah Ali Khan'},
            {text: 'Amjad Ali Khan', correct: true},
            {text: 'Bimillah Khan'},
            {text: 'Ali Akbar Khan'},
    ]       
    }, {
            text:"XIX. Which is the largest internal organ in the human body?",
        responses: [
            {text: 'Liver', correct: true},
            {text: 'Heart'},
            {text: 'Lung'},
            {text: 'Kidney'},
    ] 
    }, {
            text:"XX. After whom is the chemical element with atomic number 102 named?",
        responses: [
            {text: 'Albert Einstein'},
            {text: 'Alfred Bernhard Nobel', correct: true},
            {text: 'Isaac Newton'},
            {text: 'Vincent van Gogh'},
    ]       
}
    ]
};

new Vue({
    el: '#app',
    data: {
        quiz: quiz,
        questionIndex: 0,
        userResponses: Array(quiz.questions.length).fill(false)
    },
    methods: {
        next: function() {
            this.questionIndex++;
        },
        prev: function() {
            this.questionIndex--;
        },
        score: function() {
            return this.userResponses.filter(function(val) { return val }).length;
        }
    }
});