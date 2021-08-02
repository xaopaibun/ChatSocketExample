export const Url_Sever = 'https://servercoffeehouse.herokuapp.com'
export const Url_SeverLocal = 'http://localhost:8000'
export const Url_Image = 'https://servercoffeehouse.herokuapp.com/images/'
export const accessToken =  sessionStorage.getItem('accessToken')
export const SetToken = (accessToken) => {
    sessionStorage.setItem('accessToken', accessToken)
}

export const HandleNumTime = (num) => {
    let result = "";
    if (num > 0 && num < 10) {
        result = "0" + num.toString();
    }
    else {
        result = num.toString();
    }
    return result;
}

export const HandleTime = (epoch) => {
    let d = new Date(parseInt(epoch));
    let doneTime = d.getFullYear() + "-" + HandleNumTime(d.getMonth() + 1) + "-" + HandleNumTime(d.getDate()) + " " + HandleNumTime(d.getHours()) + ":" + HandleNumTime(d.getMinutes());
    return doneTime;
}

