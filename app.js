import timeZones from "./timeZone.js";

const selectTimezone = document.getElementById('selectTimezone');
const selectUTimezone = document.getElementById('selectUTimezone');
const inputTime = document.getElementById('time');
const inputDate = document.getElementById('date');
const result = document.getElementById('result');
const calBtn = document.getElementById('cal');

/** time zone loop */
for (const tz of timeZones) {
    let tzGMT = tz.name.split('');
    selectTimezone.innerHTML += `
        <option value="${tz.gmt}">${tz.name}</option>
    `
    selectUTimezone.innerHTML += `
        <option value="${tz.gmt}">${tz.name}</option>
    `
}

/** calculate */
calBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let time = inputTime.value;
    let selectedTimezone = selectTimezone.value;
    let selectedUTimezone = selectUTimezone.value;
    let date = inputDate.value;

    if( time.length <= 0 || date.length <= 0 ) {
        return alert( "Please, must fill input field.")
    }

    console.log(date, time, selectedTimezone)

    /** const exactDate = '2023-06-21 15:27:34'; */

    const exactDate = time.trim()+' '+ date.trim();
    const d = new Date(exactDate);

    /** 
     * current date-time to utc timestamp GMT+0
     * 
     * input miues ( - ) because of new Date().getTimezoneOffset(), that's is opposite singn.
     */
    let yourTimez = - ( selectedUTimezone.trim() * 60 );
    d.setMinutes(d.getMinutes() + yourTimez )
    console.log("UTC : "+d.toLocaleString())

    /** change to selected timezone */
    let timez = selectedTimezone.trim() * 60;
    d.setMinutes(d.getMinutes() + timez)
    console.log(timez, yourTimez)

    let timeGMT;
    for (const tz of timeZones) {
        if(tz.gmt == selectedTimezone ) {
            timeGMT = tz.name;
            console.log( timeGMT+" :" + d.toLocaleString())
            result.innerHTML += '<h3 class="border border-color-light rounded p-3"> The result is ' + `<i>${ timeGMT }</i>` + ' - ' + `<mark class="bg-warning">${d.toLocaleString()}</mark> </h3>`;
        }
    }

})