const baseUrl = 'http://116.203.200.150:10200/api';
const authUrl = `${baseUrl}/auth`;
const gameUrl = `${baseUrl}/game`;


const endpoints = {
    registration: `${authUrl}/registration/`,
    login: `${authUrl}/login`,
    cities: `${authUrl}/city_suggester`,

    startGame: `${gameUrl}/start_game`,
    getSlide: `${gameUrl}/slide`,
};

export default endpoints;
// const getEndPoint = type => `${baseUrl}${endpoints[type]}`;