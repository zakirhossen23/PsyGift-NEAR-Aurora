import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UseFormInput from '../UseFormInput';
import { createTokenAPI} from '@/pages/Events/token';

import { toast } from 'react-toastify';

import useContract from '../../../../services/useContract';

export default function DonateNFTModal({
	show,
	onHide,
	senderAddress,
	type,
	EventID,
	SelectedTitle,
	enddate,
	selectedWallet
}) {

	const { contract, signerAddress } = useContract('ERC721');


	const [name, nameInput] = UseFormInput({
		type: 'text',
		placeholder: 'Enter name',
	});
	const [description, descriptionInput] = UseFormInput({
		as: 'textarea',
		placeholder: 'Enter description',
	});
	const [url, urlInput] = UseFormInput({
		type: 'text',
		placeholder: 'Enter image url',
	});

	const [price, priceInput] = UseFormInput({
		type: 'text',
		placeholder: 'Enter Price',
	});
	const [NFTaddress, NFTaddressInput] = UseFormInput({
		type: 'text',
		placeholder: 'Enter NFT address',
	});
	const [Cryptopunkaddress, CryptopunkaddressInput] = UseFormInput({
		type: 'text',
		placeholder: 'Enter Cryptopunk address',
	});

async function createNFT() {
  	await toast.promise(creatingNFT, {
            pending: `${type} is creating...`,
            error: "Please try again later",
            success: `${type} has created!`
        },{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: "Toastify__toast-theme--dark"
            })
	window.location.href = `/donation/auction?${EventID}`;
	window.document.getElementsByClassName("btn-close")[0].click();
}

	async function creatingNFT() {
		let Logourl = url;
		var tokenAddress = NFTaddress;
		if ("Cryptopunk" == type) {
			tokenAddress = Cryptopunkaddress;
		}

		try {

			const tokenID = await createTokenAPI(EventID,name, description, price, type, Logourl);
			const createdObject = {
				eventid: EventID,        
				name:  name,
				description: description,
				Bidprice:price,
				price: price,
				type:  type,
				image: Logourl
			};
			const result = await contract.claimToken(
                signerAddress,
                EventID,
				tokenID,
				createdObject
            );

            console.log(result);

		} catch (error) {
			return(error);
		}
		

	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			aria-labelledby="contained-modal-title-vcenter"
			size="lg"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Donate {type} - {SelectedTitle}
				</Modal.Title>

			</Modal.Header>
			<Modal.Body className="show-grid">
				<Form>
					<Form.Group className="mb-3" controlId="formGroupName">
						<Form.Label>Name</Form.Label>
						{nameInput}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formGroupDescription">
						<Form.Label>Description</Form.Label>
						{descriptionInput}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formGroupName">
						<Form.Label>Opening price in {selectedWallet}</Form.Label>
						{priceInput}
					</Form.Group>

					<Form.Group className="mb-3" controlId="formGroupImageUrl">
						<Form.Label>Enter image URL</Form.Label>
						{urlInput}
					</Form.Group>
					{(type == "Cryptopunk") ? (
						<Form.Group className="mb-3" controlId="formGroupImageUrl">
							<Form.Label>Cryptopunk address</Form.Label>
							{CryptopunkaddressInput}
						</Form.Group>
					) : (
						<Form.Group className="mb-3" controlId="formGroupImageUrl">
							<Form.Label>NFT address</Form.Label>
							{NFTaddressInput}
						</Form.Group>
					)

					}

					<div className="d-grid" style={{marginTop:"20px"}}>
						<Button variant="primary" onClick={createNFT}>
							Donate {type}
						</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
		
	);
}
