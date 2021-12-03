<!-- https://hackmd.io/@1LsqLgZ9SFyvmF1L1suBIw/dapp-dev -->
<!-- https://www.youtube.com/watch?v=UGiA709mQSg -->

### Intro:

- Blockchain is a database with lots of different people hosting the same sequential data
- Ethereum is a database for code that anyone can run
- Smart Contract acts just like a class in other programming language

| Primatives   | Description                                          | Example                                    |
| ------------ | ---------------------------------------------------- | ------------------------------------------ |
| bool         | boolean value                                        | true/false                                 |
| uint         | "unsigned" integer positive number. Has no decimal   | uint8, uint256                             |
| address      | Has methods tied to it for sending money             | 0xc2a1eB9Feb30F281c30AE4a799dd9D3F49Fc724f |
| String       | sequence of characters                               | "foo", "bar"                               |
| int          | integer, positive or negative. Has no decimal        | 0 -30000 59158                             |
| fixed/ufixed | "Fixed" point number. Number with a decimal after it | "foo", "bar"                               |

| Visibility (Function Types) | Description                                               |
| --------------------------- | --------------------------------------------------------- |
| external                    |                                                           |
| public                      | Anyone can call this function                             |
| internal                    |                                                           |
| pure                        | Function will not modify or even read the contract's data |
| payable                     |                                                           |
| view                        |                                                           |

| Data Stucture (Reference Types) | Description                                                                | Example                                 |
| ------------------------------- | -------------------------------------------------------------------------- | --------------------------------------- |
| fixed array                     | Array that contains a single type of element, has an unchanging length     |                                         |
| dynamic array                   | Array that contains a single type of element. Can change in size over time |                                         |
| mappings                        | Hash tables consisting of key value pairs                                  | mapping(addres => uint)                 |
| struct                          | collection of key value pairs that can have different types.               | struct Person {uint8 age; string name;} |

### Gotcha's

- Don't use loops on dynamic arrays, you will run out of gas

- These are always accessable in any contract:
  - msg.sender = address of person calling function. (owner in constructor)
  - msg.value = amount of ETH sent in the transaction
  - Block.number = number of block order in Ethereum
  - Block.timestamp = time block was mined. ~15 seconds per block.
    - Don't use Block.timestamp for randomness (Ethereum is a database available to everyone)
    - Do not use for making things happen after a certain period of time
