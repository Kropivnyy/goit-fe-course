/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transactionObject = {
      Id: this.transactions.length + 1,
      Type: type,
      Amount: amount,
    };
    return transactionObject;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW),
      );
    } else {
      console.log(`Снятие такой суммы невозможно! Недостаточно средств.`);
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.Id === id) {
        return transaction;
      }
    }
    return `Такая транзакция не найдена`;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let transactionTotal = 0;
    for (const transaction of this.transactions) {
      if (transaction.Type === type) {
        transactionTotal += transaction.Amount;
      }
    }
    if (type === 'deposit') {
      return `Всего на счет зачислено ${transactionTotal} кредитов.`;
    } else if (type === 'withdraw') {
      return `Всего со счета списано ${transactionTotal} кредитов.`;
    } else {
      return `Такие операции не проводились`;
    }
  },
};

account.deposit(1000);
account.withdraw(300);
account.deposit(45.5);
account.deposit(1000);
account.withdraw(45000);
account.deposit(1234);
account.deposit(100000);
account.withdraw(45000);
account.deposit(1313);
console.log(account.getBalance());
console.log(account.getTransactionDetails(5));
console.log(account.getTransactionDetails(13));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
