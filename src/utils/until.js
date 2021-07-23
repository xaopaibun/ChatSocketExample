export const Url_Sever = 'https://servercoffeehouse.herokuapp.com'
export const Url_Image = 'https://servercoffeehouse.herokuapp.com/images/'
export const accessToken =  sessionStorage.getItem('accessToken')
export const SetToken = (accessToken) => {
    sessionStorage.setItem('accessToken', accessToken)
}