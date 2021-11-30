pragma solidity ^0.7.0;

contract MyToken {
  uint8 mynumber = 5;
  address owner;
  mapping(address => uint256) public balances;

  constructor() public {
    owner = msg.sender;

    balances[owner] = 1000;
  }

  function transfer(uint256 amount, address recipient) public {
    // this require ensures there is enough in balances
    require(balances[msg.sender] >= amount);
    // these two requires prevent overflow if the amount is too big
    require(balances[msg.sender] - amount <= balances[msg.sender]);
    require(balances[msg.sender] + amount >= balances[recipient]);

    balances[msg.sender] -= amount; // always subtract first
    balances[recipient] += amount;
  }
}
