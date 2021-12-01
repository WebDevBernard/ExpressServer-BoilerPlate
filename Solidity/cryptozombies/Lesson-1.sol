// Chapter 2
pragma solidity >=0.5.0 <0.6.0;

contract ZombieFactory {}
// Chapter 3

pragma solidity >=0.5.0 <0.6.0;

contract ZombieFactory {
  uint256 dnaDigits = 16;
  //start here
}

// Chapter 4

pragma solidity >=0.5.0 <0.6.0;

contract ZombieFactory {
  uint256 dnaDigits = 16;
  //start here
  uint256 dnaModulus = 10**dnaDigits;
}

// Chapter 5

pragma solidity >=0.5.0 <0.6.0;

contract ZombieFactory {
  uint256 dnaDigits = 16;
  uint256 dnaModulus = 10**dnaDigits;

  // start here
  struct Zombie {
    string name;
    uint256 dna;
  }
}

// Chapter 6

pragma solidity >=0.5.0 <0.6.0;

contract ZombieFactory {
  uint256 dnaDigits = 16;
  uint256 dnaModulus = 10**dnaDigits;

  struct Zombie {
    string name;
    uint256 dna;
  }

  // start here
  Zombie[] public zombies;
}

// Chapter 7
pragma solidity >=0.5.0 <0.6.0;

contract ZombieFactory {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    // start here
    function createZombie(string memory _name, uint _dna) public {}
}

