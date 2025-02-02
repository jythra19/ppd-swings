function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Correct credentials
    if (username === "akshaya" && password === "jythra") {
        alert("Login successful!");
        displayPatientDataAndGuidelines();
        document.getElementById("loginForm").style.display = "none"; // Hide login form
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

function displayPatientDataAndGuidelines() {
    // Retrieve the patient's answers from localStorage
    var patientAnswers = JSON.parse(localStorage.getItem("patientAnswers"));
    if (patientAnswers) {
        // Display the patient's recent mood and answers
        document.getElementById("patientMood").innerText = "Patient's Recent Mood: " + patientAnswers.mood;
        document.getElementById("question1Answer").innerText = "How often do you feel overwhelmed by the responsibilities of motherhood?: " + patientAnswers.question1;
        document.getElementById("question2Answer").innerText = "Do you have trouble sleeping or feel fatigued most of the time?: " + patientAnswers.question2;
        document.getElementById("question3Answer").innerText = "How do you feel about your relationship with your partner right now?: " + patientAnswers.question3;

        // Provide support and guidelines based on the answers
        var guidelines = "";
        if (patientAnswers.mood === "Sad" || patientAnswers.mood === "Anxious") {
            guidelines += "<h3><strong>Emotional Support:</strong></h3><ul>";
            guidelines += "<li>Offer emotional reassurance. Be patient and understanding when your partner expresses feelings of sadness or anxiety.</li>";
            guidelines += "<li>Reassure your partner that it's okay to feel this way and that you're there for them every step of the way.</li>";
            guidelines += "<li>Encourage your partner to talk about their emotions, but don't push if they don't feel like opening up.</li>";
            guidelines += "<li>Help your partner find relaxation techniques (e.g., deep breathing, meditation) to cope with anxiety or sadness.</li></ul>";
        }

        if (patientAnswers.mood === "Irritable") {
            guidelines += "<h3><strong>Handling Irritability:</strong></h3><ul>";
            guidelines += "<li>Be patient with your partner's irritability. Avoid taking things personally and offer a listening ear.</li>";
            guidelines += "<li>Encourage them to take breaks and rest when they need it.</li>";
            guidelines += "<li>Respect their space and offer help with household tasks or baby care to reduce stress.</li></ul>";
        }

        if (patientAnswers.mood === "Tired") {
            guidelines += "<h3><strong>Physical Support:</strong></h3><ul>";
            guidelines += "<li>Offer to help with household chores or take over baby care so your partner can get some rest.</li>";
            guidelines += "<li>Encourage your partner to take naps or go to bed early to catch up on sleep.</li>";
            guidelines += "<li>Prepare healthy meals and ensure that your partner is eating well to maintain their energy levels.</li></ul>";
        }

        if (patientAnswers.question2.includes("trouble sleeping") || patientAnswers.question2.includes("fatigued")) {
            guidelines += "<h3><strong>Addressing Sleep and Fatigue:</strong></h3><ul>";
            guidelines += "<li>Help create a calming bedtime routine for your partner to help them unwind before sleep.</li>";
            guidelines += "<li>Assist with baby care during the night so your partner can get uninterrupted rest.</li>";
            guidelines += "<li>Ensure the environment is conducive to sleep (dark, quiet, and comfortable).</li></ul>";
        }

        if (patientAnswers.question1.includes("overwhelmed")) {
            guidelines += "<h3><strong>Managing Overwhelm:</strong></h3><ul>";
            guidelines += "<li>Break tasks into smaller, more manageable steps to avoid overwhelming your partner.</li>";
            guidelines += "<li>Offer help with household tasks, and don't hesitate to ask for outside support (friends, family, etc.).</li>";
            guidelines += "<li>Encourage your partner to take short breaks and focus on self-care activities.</li></ul>";
        }

        // Display all guidelines
        document.getElementById("guidelines").innerHTML = guidelines;
        document.getElementById("guidelines").style.display = "block";
    } else {
        alert("No patient data found. Please ensure the patient has completed the questionnaire.");
    }
}
