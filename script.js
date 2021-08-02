function Box(height, width, length){
    [this.height, this.width, this.length] = arguments
    Object.defineProperty(this, 'size', {
        get(){
            return [this.height, this.width, this.length]
        },
        set(size){
            [this.height, this.width, this.length] = size
        }
    })
}

//////////////////////////////////////////////////////////////


function getTime(){
    let curDate = new Date
    let timeZone = document.querySelector('select').value - 3
    let city = document.querySelector('select').selectedOptions[0].text
    document.querySelector('.clock').innerHTML = `${city}` + `, ${curDate.getDate()}.${curDate.getMonth() + 1}` +
    ` - ` + `${curDate.getHours() + timeZone}:${curDate.getMinutes()}:${curDate.getSeconds()}`
}

setInterval(getTime, '1000')



