const questions = [
    { 
        question: "What kind of working environment do you prefer?", 
        options: ["Working indoors", "Working outdoors"], 
        image:"img/trongnha-ngoaitroi.jpg"
    },
    { 
        question: "How many hours would you like to work in a day?", 
        options: ["Part-time job","Full-time job"], 
        image: "img/part-full.jpg"
    },
    { 
        question: "Do you prefer working alone or with others?", 
        options: ["Teamwork", "Alone"], 
        image: "img/alone-teamwork.jpg"
    },
    { 
        question: "What type of job would you prefer?", 
        options: ["Hard work", "Easy work"], 
        image: "img/viecnang-nhe.jpg"
    }
];

const careerMapping = [
    { answers: ["Working indoors","Part-time job","Teamwork","Hard work"], career: { name: "Moving Team", image: "img/movingteam.jpg" } },
    { answers: ["Working indoors","Part-time job","Teamwork", "Easy work"], career: { name: "Cafe service staff", image: "img/nhanvienphucvu.jpg" } },
    { answers: ["Working indoors","Part-time job","Alone", "Easy work"], career: { name: "Dream,there's no where", image: "img/modiem.jpg" } },
    { answers: ["Working indoors","Full-time job","Alone", "Easy work"], career: { name: "Cleaner", image: "img/laocong.jpg" } },
    { answers: ["Working outdoors","Full-time job","Alone", "Easy work"], career: { name: "Begging alone", image: "img/anxinalone.jpg" } },
    { answers: ["Working outdoors","Full-time job","Alone", "Hard work"], career: { name: "Farmer", image: "img/nongdan.jpg" } },
    { answers: ["Working outdoors","Full-time job","Teamwork", "Hard work"], career: { name: "Bricklayer", image: "img/thoho.jpg" } },
    { answers: ["Working outdoors","Part-time job","Teamwork", "Hard work"], career: { name: "Stevedore", image: "img/bocvac.jpg" } },
    { answers: ["Working indoors","Full-time job","Teamwork", "Easy work"], career: { name: "Office staff", image: "img/nhanvienvanphong.jpg" } },
    { answers: ["Working indoors","Full-time job","Teamwork", "Hard work"], career: { name: "Sanitation worker", image: "img/tongvesinh.jpg" } },
    { answers: ["Working indoors","Part-time job","Alone", "Hard work"], career: { name: "Lucky Plumbman", image: "img/plumbman.jpg" } },
    { answers: ["Working outdoors","Full-time job","Teamwork", "Easy work"], career: { name: "Begging together", image: "img/anxintogether.jpg" } },
    { answers: ["Working outdoors","Part-time job","Alone", "Easy work"], career: { name: "Mascot", image: "img/mascot.jpg" } },
    { answers: ["Working outdoors","Part-time job","Alone", "Hard work"], career: { name: "Waste Picker", image: "img/vechai.jpg" } },
    { answers: ["Working indoors","Full-time job","Alone", "Hard work"], career: { name: "Lucky Electrician", image: "img/thodien.jpg" } },
    { answers: ["Working outdoors","Part-time job","Teamwork", "Easy work"], career: { name: "Volunteer", image: "img/tinhnguyenvien.jpg" } }
];

let selectedAnswers = [];
let step = 0;

function showQuestion() {
    if (step < questions.length) {
        document.getElementById("question").innerText = questions[step].question;
        document.getElementById("question-image").src = questions[step].image;
        document.getElementById("question-image").classList.remove("hidden");

        const optionsContainer = document.getElementById("options");
        optionsContainer.innerHTML = "";

        questions[step].options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option;
            button.onclick = () => processAnswer(option);
            optionsContainer.appendChild(button);
        });
    } else {
        showLoading();
    }
}

function processAnswer(answer) {
    selectedAnswers.push(answer);
    step++;
    if (step < questions.length) {
        showQuestion();
    } else {
        showLoading();
    }
}

function showLoading() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("loading").classList.remove("hidden");
    setTimeout(showResult, 2000);
}

function showResult() {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    let bestCareer = careerMapping.find(mapping => 
        mapping.answers.every(answer => selectedAnswers.includes(answer))
    );

    if (!bestCareer) {
        bestCareer = { name: "General Career", image: "images/default.jpg" }; 
    } else {
        bestCareer = bestCareer.career;
    }

    document.getElementById("career").innerText = bestCareer.name;
    document.getElementById("career-image").src = bestCareer.image;
}
showQuestion();