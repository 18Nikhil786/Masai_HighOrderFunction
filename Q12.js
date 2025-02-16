function createBankAccount(value) {
    let money = value;
    return {

      deposit: function (value) {
        money =money+ value
        return money
      },
      withdraw: function (value) {
        money =money- value
        return money
      },
      getBalance: function () {
        return money
      },
    };
  }
  
  const account = createBankAccount(100);
  
  console.log(account.deposit(50));

  console.log(account.withdraw(30));
  console.log(account.getBalance());