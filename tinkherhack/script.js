function logMood(mood, color) {
    let today = new Date().toLocaleDateString();

    // Add mood history
    let moodHistory = document.createElement("span");
    moodHistory.className = "mood-box";
    moodHistory.style.backgroundColor = color;
    moodHistory.title = `${today} - ${mood}`;
    document.getElementById("mood-history").appendChild(moodHistory);

    // Update Mood Progress Tracker
    let moodChart = document.getElementById("mood-chart");
    let moodBar = document.getElementById(mood);
    
    if (!moodBar) {
        moodBar = document.createElement("div");
        moodBar.id = mood;
        moodBar.className = "mood-bar";
        moodBar.style.backgroundColor = color;
        moodBar.textContent = mood;
        moodBar.dataset.count = 1;
        moodChart.appendChild(moodBar);
    } else {
        moodBar.dataset.count = parseInt(moodBar.dataset.count) + 1;
    }

    moodBar.style.width = `${moodBar.dataset.count * 20}px`;
}
