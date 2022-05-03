
type countdownProps = {
  days: string
}

export default function countdown<countdownProps>() {
  let now = new Date();
  // Altere a data do seu evento aqui
  let eventDate = new Date("Ma 06, 2022 00:00:00");
  let currentTiime = now.getTime();
  let eventTime = eventDate.getTime();
  let remTime = eventTime - currentTiime;
  // calculando o dia, hora, minuto e segundo
  let d = Math.floor(remTime / (1000 * 60 * 60 * 24));
  let h = Math.floor((remTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((remTime % (1000 * 60)) / 1000);

  let days = document.getElementById('days');


  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');

  setTimeout(countdown, 1000);

  
}

