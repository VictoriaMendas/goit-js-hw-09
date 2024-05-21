import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

const updateLocalStorage = throttle(function (seconds) {
  localStorage.setItem(STORAGE_KEY, seconds);
}, 1000);

player.on('timeupdate', function ({ seconds }) {
  // localStorage.setItem(STORAGE_KEY, seconds);
  updateLocalStorage(seconds);
});

// прочитати з локал сторєдж і вивести в консоль
// if (storageData !== "null") {
//     player.setCurrentTime(storageData);
// }

const storageData = localStorage.getItem(STORAGE_KEY) || 0;
player.setCurrentTime(storageData);
