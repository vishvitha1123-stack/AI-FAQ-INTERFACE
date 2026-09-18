function toggleFAQ(element) {
const card = element.parentElement;


card.classList.toggle("open");


}

function searchFAQ() {


const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase()
    .trim();

const cards = document.querySelectorAll(".faq-card");

const aiResult = document.getElementById("aiResult");
const aiAnswer = document.getElementById("aiAnswer");

let found = false;


cards.forEach(card => {

    const question = card
        .querySelector(".question")
        .innerText
        .toLowerCase();

    const answer = card
        .querySelector(".answer")
        .innerText
        .toLowerCase();

    if (
        question.includes(input) ||
        answer.includes(input)
    ) {

        card.style.display = "block";
        found = true;

    } else {

        card.style.display = "none";

    }

});


if (input === "") {

    cards.forEach(card => {
        card.style.display = "block";
    });

    aiResult.style.display = "none";

    return;
}


if (!found) {

    let response = "";


    if (
        input.includes("artificial intelligence") ||
        input === "ai"
    ) {

        response =
            "Artificial Intelligence (AI) is the simulation of human intelligence in machines. It allows computers to learn, reason, solve problems and make decisions.";

    }

    else if (
        input.includes("machine learning") ||
        input === "ml"
    ) {

        response =
            "Machine Learning (ML) is a branch of Artificial Intelligence that allows computers to learn from data and improve their performance without being explicitly programmed.";

    }

    else if (input.includes("html")) {

        response =
            "HTML stands for HyperText Markup Language. It is used to create and structure the content of web pages.";

    }

    else if (input.includes("css")) {

        response =
            "CSS stands for Cascading Style Sheets. It is used to design and style HTML elements, including colors, layouts, fonts and responsive designs.";

    }

    else if (
        input.includes("javascript") ||
        input === "js"
    ) {

        response =
            "JavaScript is a programming language used to make web pages interactive and dynamic. It can handle events, user input, animations and much more.";

    }

    else {

        response =
            "Sorry, I couldn't find an exact answer in the FAQ. Try searching with keywords like AI, Machine Learning, HTML, CSS or JavaScript.";

    }


    aiAnswer.innerText = response;
    aiResult.style.display = "block";

}

else {

    aiResult.style.display = "none";

}


}

function filterFAQ(category, button) {


const cards = document.querySelectorAll(".faq-card");

const buttons = document.querySelectorAll(".category");

const searchInput = document.getElementById("searchInput");

const aiResult = document.getElementById("aiResult");


buttons.forEach(btn => {
    btn.classList.remove("active");
});


button.classList.add("active");


searchInput.value = "";

aiResult.style.display = "none";


cards.forEach(card => {

    if (category === "all") {

        card.style.display = "block";

    }

    else {

        const cardCategory = card.getAttribute("data-category");

        if (cardCategory === category) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    }

});


}
