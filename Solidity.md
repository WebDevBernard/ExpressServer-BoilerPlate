<!-- https://hackmd.io/@1LsqLgZ9SFyvmF1L1suBIw/dapp-dev -->
<!-- https://www.youtube.com/watch?v=UGiA709mQSg -->

### Intro:

- Blockchain is a database with lots of different people hosting the same sequential data
- Ethereum is a database for code that anyone can run
- Smart Contract

### Visibility:

- external, public, internal, private

### Primatives:

- boolean: true/false,
- uint( integer, unsigned integer): uint8, uint256,
- address: 20byte Ethereum address,
- String: "foo", "bar"

### Data Structures:

- Arrays: arrays can be dynamic or fixed size
- Structs (used to define new types): struct Person {uint8 age; string name;}
- Mappings (Hash tables): mapping(addres => uint) public balances;
- Enum make your own types: enum Status{open, closed}

### Gotcha's

- Don't use loops on dynamic arrays, you will run out of gas

- These are always accessable in any contract:
  -- msg.sender = address of person calling function. (owner in constructor)
  -- msg.value = amount of ETH sent in the transaction
  -- Block.number = number of block order in Ethereum
  -- Block.timestamp = time block was mined. ~15 seconds per block.
  --- Don't use Block.timestamp for randomness (Ethereum is a database available to everyone)
  --- Do not use for making things happen after a certain period of time

### Functions:

- (<parameter types>)
- {internal|external|public|private}
- [pure|constant|view|payable]
- [returns (<return types>)]
