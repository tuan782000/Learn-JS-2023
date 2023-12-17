const updateClock = () => {
    const now = new Date()
    let getHours = now.getHours().toString().padStart(2, '0')
    const meridiem = getHours >= 12 ? 'PM' : 'AM';
    // 13:00:00 biến thành 01:00:00 PM
    // getHours = getHours % 12 || 12;
    // getHours = getHours().toString().padStart(2, '0')
    const getMinutes = now.getMinutes().toString().padStart(2, '0')
    const getSeconds = now.getSeconds().toString().padStart(2, '0')

    const timeString = `${getHours}:${getMinutes}:${getSeconds} ${meridiem}`
    document.getElementById('clock').innerHTML = timeString

}

export { updateClock }
