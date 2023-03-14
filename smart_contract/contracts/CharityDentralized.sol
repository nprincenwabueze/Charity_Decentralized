// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title This is a contract that can be able to process donations or funds
/// from a sender (helper) to a receiver (needy) on the blockchain network.

contract CharityDecentralized {
    
    address payable public owner;
    uint public totalDonations;
    mapping(address => uint) public donations;
    
    constructor() {
        owner = payable(msg.sender);
    }

/// Owner: Nnamdi Prince Nwabueze
    
    modifier onlyOwner {
        require(msg.sender == owner, "It is Only the contract owner can perform this action.");
        _;
    }
    
    event DonationReceived(address indexed donor, uint amount);
    event DonationWithdrawn(address indexed donor, uint amount);
    
/// Users or Senders can make donations to the charity or receivers
/// by calling the donate function and passing a value in Ether
///
/// The totalDonations variable keeps track of the total amount donated to the charity
/// The donations mapping keeps track of how much each user has donated.

    function donate() public payable {
        require(msg.value > 0, "Donation amount must be greater than zero.");
        
        totalDonations += msg.value;
        donations[msg.sender] += msg.value;
        
        emit DonationReceived(msg.sender, msg.value);
    }

/// Receivers can also withdraw their donations by calling the withdraw function.
/// The withdrawal function checks that the user or sender has donated some amount 
/// Before allowing the receivers to withdraw.
    
    function withdraw() public {
        uint amount = donations[msg.sender];
        require(amount > 0, "No donations to withdraw.");
        
        donations[msg.sender] = 0;
        totalDonations -= amount;
        payable(msg.sender).transfer(amount);
        
        emit DonationWithdrawn(msg.sender, amount);
    }

/// If the user is the contract owner, they can withdraw all donations using the withdrawAll function
/// Owner: Nnamdi Prince Nwabueze

    function withdrawAll() public onlyOwner {
        uint amount = address(this).balance;
        require(amount > 0, "No donations to withdraw.");
        
        totalDonations = 0;
        owner.transfer(amount);
        
        emit DonationWithdrawn(owner, amount);
    }
    
/// The getBalance function returns the current balance of the contract
/// The getDonation function allows users to check how much they have donated
/// Owner: Nnamdi Prince Nwabueze
    
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
    
    function getDonation(address donor) public view returns (uint) {
        return donations[donor];
    }
    
}
