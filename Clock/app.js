function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    const clock = document.getElementById("myClock");
    clock.innerText = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;

    setTimeout(showTime, 1000);
}

function getUserName() {
    const name = prompt("Lütfen adınızı girin:");
    if (name) {
        document.getElementById("myName").innerText = name;
    }
}

window.onload = function() {
    getUserName();
    showTime();
};
