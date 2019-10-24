const baseUrl = 'http://78.46.183.3:8080/api';
const authUrl = `${baseUrl}/auth`;
const gameUrl = `${baseUrl}/game`;
const adminUrl = `${baseUrl}/admin`;


const endpoints = {
    registration: `${authUrl}/registration/`,
    login: `${authUrl}/login`,
    cities: `${authUrl}/city_suggester`,
    getUser: `${authUrl}/user`,

    startGame: `${gameUrl}/start_game`,
    finishGame: `${gameUrl}/finish_game`,
    getSlide: `${gameUrl}/slide`,
    responseInteraction: `${gameUrl}/response_interaction`,

    adminLogin: `${adminUrl}/admin_login`,
};

export default endpoints;
// const getEndPoint = type => `${baseUrl}${endpoints[type]}`;