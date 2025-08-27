// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract InfinityVault {
    // Fixed owner (your wallet)
    address public constant owner = 0xE38FB59ba3AEAbE2AD0f6FB7Fb84453F6d145D23;

    event Deposit(address indexed from, uint256 amount);
    event Withdraw(address indexed to, uint256 amount);

    // Accept SFUEL deposits
    receive() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    // Withdraw all funds (only owner)
    function withdrawAll() external {
        require(msg.sender == owner, "Not authorized");
        uint256 balance = address(this).balance;
        (bool success, ) = payable(owner).call{value: balance}("");
        require(success, "Withdraw failed");
        emit Withdraw(owner, balance);
    }

    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
