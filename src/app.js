const suspects = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const actions = ['ate', 'peed', 'crushed', 'broke'];
const items = ['my homework', 'my phone', 'the car'];
const timings = ['before the class', 'while I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

const getRandomItem = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
};

const getRandomExcuse = () => {
  const culprit = getRandomItem(suspects);
  const action = getRandomItem(actions);
  const item = getRandomItem(items);
  const timing = getRandomItem(timings);

  return `${culprit} ${action} ${item} ${timing}`;
};

const excuseParagraph = document.getElementById('excuse');

excuseParagraph.textContent = getRandomExcuse();


