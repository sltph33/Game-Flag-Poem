// script.js

function updateTime() {
    const timezones = [
        'UTC',
        'America/New_York',
        'Europe/London',
        'Asia/Tokyo',
        'Australia/Sydney',
        'Europe/Berlin',
        'America/Los_Angeles',
        'Asia/Kolkata',
        'America/Sao_Paulo',
        'Africa/Johannesburg',
        'Europe/Paris',
        'America/Chicago'
    ];
    const output = document.getElementById('timezones-output');
    output.innerHTML = '';

    timezones.forEach(timezone => {
        const date = new Date();
        const utcTime = date.toUTCString();
        const localTime = new Date(date.toLocaleString('en-US', { timeZone: timezone }));
        const formattedTime = localTime.toISOString().slice(0, 19).replace('T', ' ');

        output.innerHTML += `<p>${timezone}: ${formattedTime} (UTC: ${utcTime})</p>`;
    });
}

setInterval(updateTime, 1000);
window.onload = updateTime;