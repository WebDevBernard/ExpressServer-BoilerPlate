// set the compiler version range
pragma solidity >=0.5.0 <0.6.0;
contract ZombieFactory {
    // declare our event here
    event NewZombie(uint zombieId, string name, uint dna);
    // state variables are permanently written in the blockchain 
    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;
    // declares a struct (a data type) with 2 properties name and dna 
    struct Zombie {
        string name;
        uint dna;
    }
    // this declares an array of stucts
    Zombie[] public zombies;
    // convention to declare private function with _ and function parameter (public or private) with _
    // stored in memory is required for any arrays, structs, mappings and strings
    function _createZombie(string memory _name, uint _dna) private {
        // and fire the event here so ABI can read it
        uint id = zombies.push(Zombie(_name, _dna)) - 1;
        emit NewZombie(id, _name, _dna);
    }
    // view function means data is for viewing and not modified.  "pure" functions means you're not accessing any data in the app
    function _generateRandomDna(string memory _str) private view returns (uint) {
      // outputs a random number but this method is insecure
      // uint(keccak(..)) uint is to typecast as a unit
        uint rand = uint(keccak256(abi.encodePacked(_str)));
        return rand % dnaModulus;
    }
    function createRandomZombie(string memory _name) public {
        uint randDna = _generateRandomDna(_name);
        _createZombie(_name, randDna);
    }

}
