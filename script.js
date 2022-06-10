function sumb() {
    email = document.querySelector("#emailI").value
    name1 = document.querySelector("#name1").value

    var date1 = document.getElementById("startDate").value;

    //SERVICE
    var e = document.getElementById("inputS");
    var value = e.options[e.selectedIndex].value;
    var textService = e.options[e.selectedIndex].text;

    var e = document.getElementById("inputEng");
    var value = e.options[e.selectedIndex].value;
    var textEng = e.options[e.selectedIndex].text;

    var e = document.getElementById("inputTime");
    var value = e.options[e.selectedIndex].value;
    var textTime = e.options[e.selectedIndex].text;

    var e = document.getElementById("inputHrs");
    var value = e.options[e.selectedIndex].value;
    var textHrs = e.options[e.selectedIndex].text;


    alert(`Booking Confirmation! \n Email: ${email} \n Name: ${name1}\n Date: ${date1}\n Service: ${textService}\n Engineer: ${textEng}\n Time: ${textTime}\n # of hours: ${textHrs}`)
}

