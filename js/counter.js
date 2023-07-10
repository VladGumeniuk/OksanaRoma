const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')


function updateCounter() {
    const nextData = new Date('July 18 2023 00:00:00')
    const currentTime = new Date()

    const diff = nextData - currentTime

    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24)
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60
    const secondsLeft = Math.floor(diff / 1000) % 60

    days.innerHTML = daysLeft < 10 ? '0' + daysLeft : daysLeft
    hours.innerHTML = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft
    minutes.innerHTML = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft
    seconds.innerHTML = secondsLeft < 10 ? '0' + daysLeft : secondsLeft
}

updateCounter()

setInterval(updateCounter, 1000)