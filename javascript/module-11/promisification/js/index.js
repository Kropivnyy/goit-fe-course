const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(ms), ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );
  return Promise.resolve(updatedUsers);
};

const newLogger = updatedUsers => console.table(updatedUsers);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
  return new Promise((resolve, reject) => {
    const delay = randomIntegerFromInterval(200, 500);
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      if (canProcess) {
        resolve([transaction.id, delay]);
      } else {
        reject(transaction.id);
      }
    }, delay);
  });
};

const logSuccess = ([id, time]) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

// Вызовы функции для проверки первого задания
console.log('Task 1');
delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);

// Вызовы функции для проверки второго задания
setTimeout(() => {
  console.log('Task 2');
  toggleUserState(users, 'Mango').then(newLogger);
  toggleUserState(users, 'Lux').then(newLogger);
}, 2500);

// Вызовы функции для проверки третьего задания
setTimeout(() => {
  console.log('Task 3');
  makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

  makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

  makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

  makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
}, 3000);
