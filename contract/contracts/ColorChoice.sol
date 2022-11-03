//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Colors {
    string name;
    string colorChoice;

    struct ColorChoices {
        string name;
        string choice;
    }

    ColorChoices[] public choices;

    mapping(string => string) public nameToChoice;

    function setColor(string memory _favoriteColor) public {
        colorChoice = _favoriteColor;
    }

    function setName(string memory _name) public {
        name = _name;
    }

    function addChoice(string memory _name, string memory _favoriteColor)
        public
    {
        name = _name;
        colorChoice = _favoriteColor;

        choices.push(ColorChoices(_name, _favoriteColor));
        nameToChoice[_name] = _favoriteColor;
    }

    function getChoices(uint256 _choice)
        public
        view
        returns (string memory, string memory)
    {
        return (choices[_choice].name, choices[_choice].choice);
    }

    function updateChoices(
        string memory _name,
        string memory _favoriteColor,
        uint256 _selection
    ) public {
        choices[_selection].name = _name;
        choices[_selection].choice = _favoriteColor;
    }
}
