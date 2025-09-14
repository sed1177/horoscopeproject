


const horoscopesForMonthsOfYear = {
  Aries: "Energy surrounds you today—seize new opportunities!",
  Taurus: "Patience brings rewards; stay grounded and steady.",
  Gemini: "Curiosity will open doors; don’t be afraid to explore.",
  Cancer: "Your intuition is strong—trust your inner voice.",
  Leo: "Confidence makes you shine; let your light guide others.",
  Virgo: "Focus on details; small steps lead to big progress.",
  Libra: "Seek balance today—harmony will ease your path.",
  Scorpio: "Your passion inspires others—channel it wisely.",
  Sagittarius: "Adventure calls; step outside your comfort zone.",
  Capricorn: "Hard work pays off—your persistence shines through.",
  Aquarius: "Innovative ideas flow easily—share them freely.",
  Pisces: "Your creativity thrives—express yourself boldly."
};


function getZodiacSign(month, day) {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
}

const btn = document.getElementById('submit');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
  let dateValue = document.getElementById('date').value;
  if (!dateValue) {
    result.textContent = "Please select a date!";
    return;
  }

  let dateEntered = new Date(dateValue);
  let month = dateEntered.getMonth() + 1;
  let day = dateEntered.getDate();

  let sign = getZodiacSign(month, day);
  result.textContent = `You are a ${sign}! ${horoscopesForMonthsOfYear[sign]}`;
});