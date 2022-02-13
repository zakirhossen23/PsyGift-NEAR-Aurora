// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract AuroraERC721 is ERC721  {

uint256 private _tokenIds;
	uint256 private _bidIds;
	uint256 private _eventIds;
	uint256 private _EventTokenIds;
	uint256 private _TokenBidIds;
	string[2] data1;
	uint256 public _EventTokenSearchIds;
	mapping(uint256 => string[2]) private AllEventTokens;
	mapping(uint256 => string[2]) private AllTokensBids;
	mapping(uint256 => string[2]) public _SearchedStore;
	mapping(uint256 => string) private _bidURIs;
	mapping(uint256 => string) private _tokenURIs;
	mapping(uint256 => string) private _eventURIs;
	mapping(string => string) private _eventTokens;

constructor(string memory name, string memory symbol)
		ERC721(name, symbol)
	{}

   
	function claimToken(address _claimer) public returns (uint256) {
		_mint(_claimer, _tokenIds);
		
		_tokenIds++;
		_EventTokenIds++;
		return _tokenIds;
	}

	function createEvent( string memory _eventURI) public returns (uint256) {
		_setEventURI(_eventIds, _eventURI);
		_eventIds++;
		return _eventIds;
	}
	function _setEventURI(uint256 eventId, string memory _eventURI) public virtual {
		_eventURIs[eventId] = _eventURI;
	}

	function eventURI(uint256 eventId) public view returns (string memory) {
		return _eventURIs[eventId];
	}



}


