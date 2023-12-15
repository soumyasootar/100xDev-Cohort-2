function updateClock() {
    let now = new Date();

    let hours24 = now.getHours();
    let hours12 = hours24 % 12 || 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours24 < 12 ? 'AM' : 'PM';

    // Pad with zero if needed
    hours12 = hours12 < 10 ? '0' + hours12 : hours12;
    hours24 = hours24 < 10 ? '0' + hours24 : hours24;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    console.log(`24-hour format: ${hours24}:${minutes}:${seconds}`);
    console.log(`12-hour format: ${hours12}:${minutes}:${seconds} ${ampm}`);

    // Update the clock every second
    setTimeout(updateClock, 1000);
}

// Start the clock
updateClock();
