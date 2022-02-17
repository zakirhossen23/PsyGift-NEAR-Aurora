import React, { useState, useEffect, useCallback } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { toast } from 'react-toastify';

import UseFormInput from '../UseFormInput';
import { createBid, ReduceCategory } from '@/pages/Events/token'
import { Icon } from '@/components/common/Icon'
import { getCategoriesbyeventid, eventgetbyid } from '../../../pages/Events/event'
import * as nearAPI from "near-api-js"
export default function BidNFTModal({
	show,
	onHide,
	ToAddress,
	tokenId,
	type,
	Highestbid,
	walletType,
	eventId,
}) {
	const [Alert, setAlert] = useState('');
	const [Amount, AmountInput] = UseFormInput({
		type: 'text',
		placeholder: 'Amount',
	});
	const [otherCategory, setOtherCategory] = useState(-1);

	function activateWarningModal() {
		var alertELM = document.getElementById("alert");
		alertELM.style = 'contents';
		setAlert(`Amount cannot be under ${Highestbid} NEAR`)
	}

	useEffect(async () => {
		const boolTrue = true;
		while (boolTrue) {
			try {
				const categories = await getCategoriesbyeventid(eventId);
				console.log("categories for event:");
				console.log(categories);
				let event = await eventgetbyid(eventId);
				var goal = event.Goal;
				console.log("goal:");
				console.log(goal);
				var sumofmain = 0;
				var categories_ = categories;
				for (var i = 0; i < categories_.length; i++) {
					sumofmain += categories_[i].price * categories_[i].amount;
				}

				setOtherCategory(goal - sumofmain);
				setCategories(categories_);
				break;
			} catch (error) {
				continue;
			}

		}

	}, [categories]);

	async function bidNFT() {
		
			await toast.promise(bidNFTbyNEAR, {
				pending: `Bidding...`,
				error: "Please try again later",
				success: `Success!!!`
			});
		
	}

	async function bidNFTbyNEAR() {
		if (Number(Amount) < Number(Highestbid)) {
			activateWarningModal();
			return;
		}
		var buttonProps = document.getElementsByClassName("btn btn-primary")[0];
		if (window.walletAccount.isSignedIn() == false) {
			buttonProps.innerText = "Connect to NEAR wallet"
			await toast.warn("Not connected with NEAR wallet! Connecting...");
			await window.walletAccount.requestSignIn(
				window.nearConfig.contractName,
				'DemeterGift');
			return ;
		}
		// We call say Hi and then update who said Hi last.
		// window.contract.sayHi().then(updateWhoSaidHi);
		const config = {
			networkId: "testnet",
			keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
			nodeUrl: "https://rpc.testnet.near.org",
			walletUrl: "https://wallet.testnet.near.org",
			helperUrl: "https://helper.testnet.near.org",
			explorerUrl: "https://explorer.testnet.near.org",
		};
		// sends NEAR tokens
		const near = await nearAPI.connect(config);
		const account = await near.account(walletAccount.getAccountId());
		const amountInYocto =(Number(Amount) * 1000000000000000000000000).toLocaleString('fullwide', {useGrouping:false});

		 await account.sendMoney(
			ToAddress, // receiver account
			amountInYocto // amount in yoctoNEAR
		).then(async () => {
			await createBid(tokenId, walletAccount.getAccountId().toString(), Amount);
			for (var i = 0; i < selectedCategory.length; i++) {
				await ReduceCategory(selectedCategory[i]);
			}

		}).then(() => {
			window.location.reload();
			window.document.getElementsByClassName("btn-close")[0].click();
		})
		.catch((error) => {
			console.error("error:",error);
			console.log(error);
			return;
		})
	}

	const [categories, setCategories] = useState([]);


	const [allSelected, setAllSelected] = useState(false);
	const [otherSelected, setOtherSelected] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState([]);

	const selectCategory = (category_id) => {
		console.log("category_id");
		console.log(category_id);
		var temp_arr = [];
		for (var i = 0; i < selectedCategory.length; i++) {
			temp_arr.push(selectedCategory[i]);
		}
		temp_arr.push(category_id);
		console.log(temp_arr);

		setSelectedCategory(temp_arr);
	}
	const unselectCategory = (category_id) => {
		var temp_arr = [];
		for (var i = 0; i < selectedCategory.length; i++) {
			if (selectedCategory[i] != category_id)
				temp_arr.push(selectedCategory[i]);
		}
		console.log(temp_arr);
		setSelectedCategory(temp_arr);
	}

	const selectAllCategory = () => {
		if (allSelected) {
			setAllSelected(false);
			setSelectedCategory([]);
		} else {

			setAllSelected(true);
			var temp_arr = [];
			for (var i = 0; i < categories.length; i++) {
				temp_arr.push(categories[i].id)
			}
			temp_arr.push(-1);
			setSelectedCategory(temp_arr);
		}

	}
	const otherSelect = () => {
		if (otherSelected) {
			setOtherSelected(false);
			var temp_arr = [];
			for (var i = 0; i < selectedCategory.length; i++) {
				if (selectedCategory[i] != -1)
					temp_arr.push(selectedCategory[i])
			}
			setSelectedCategory(temp_arr);
		} else {
			setOtherSelected(true);
			var temp_arr = [];
			for (var i = 0; i < selectedCategory.length; i++) {
				temp_arr.push(selectedCategory[i])
			}
			temp_arr.push(-1);
			setSelectedCategory(temp_arr);
		}
	}
	return (
		<>
			<Modal
				show={show}
				onHide={onHide}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					{(type == "Cryptopunk") ? (
						<Modal.Title id="contained-modal-title-vcenter">
							Bid Cryptopunk
						</Modal.Title>) : (
						<Modal.Title id="contained-modal-title-vcenter">
							Bid NFT
						</Modal.Title>
					)}
				</Modal.Header>
				<Modal.Body className="show-grid">
					<Form>
						<div id='alert' style={{ display: 'none' }} className="alert alert-danger" role="alert">
							{Alert}
						</div>
						<Form.Group className="mb-3" controlId="formGroupName">
							<Form.Label>Bid Amount in NEAR</Form.Label>
							{AmountInput}
						</Form.Group>
						<div className='selectCategoryAll'>
							<h4 style={{ marginBottom: "10px" }}>Choose where you want to give support</h4>
							<div style={{ width: "100%", padding: "5px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", background: "bisque", height: "40px", borderRadius: "5px", marginBottom: "10px" }} onClick={() => {

								selectAllCategory();
							}}>
								<h4 style={{ alignSelf: "center", color: "black" }}>Support in general </h4>
								{allSelected ?
									<div style={{ position: "absolute", right: "10px", top: "-7px" }} >
										<div style={{
											marginTop: "10px",
											display: "flex",
											width: "32px",
											height: "32px",
											justifyContent: "center",
											flexDirection: "column",
											alignItems: "center",
											borderRadius: "16px",
											background: "#EEF1F4"
										}}><Icon icon="heartSelected" /></div>
									</div> :
									<div style={{ position: "absolute", right: "10px", top: "-7px" }} >
										<div style={{
											marginTop: "10px",
											display: "flex",
											width: "32px",
											height: "32px",
											justifyContent: "center",
											flexDirection: "column",
											alignItems: "center",
											borderRadius: "16px",
											background: "#EEF1F4"
										}}><Icon icon="heartUnselected" /></div>
									</div>}
							</div>
						</div>
						<div className='selectCategory' style={{ marginLeft: "-10px", marginRight: "-10px", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
							{
								categories.map((category) => (
									(selectedCategory.indexOf(category.id) !== -1) ?
										(<div style={{ width: "33%", padding: "0 10px", marginBottom: "10px" }} key={category.id} onClick={() => unselectCategory(category.id)}>
											<div style={{ background: "white", padding: "8px 15px", border: "1px solid transparent", borderRadius: "5px", alignItems: "center", }}>
												<h4 style={{ marginBottom: "10px", color: "#151F28", textAlign: "center" }}>{category.title}</h4>
												<img src={category.image} style={{ width: "100%", borderRadius: "5px", height: "94px" }} />
												<h5 style={{ color: "#151F28", textAlign: "center", marginTop: "10px", lineHeight: "14px" }}>{category.amount * category.price} USD</h5>
												<h5 style={{ color: "#151F28", textAlign: "center", lineHeight: "14px" }}>({category.amount} pieces)</h5>



												<div style={{ display: "flex", justifyContent: "flex-end" }}  >
													<div style={{
														marginTop: "10px",
														display: "flex",
														width: "32px",
														height: "32px",
														justifyContent: "center",
														flexDirection: "column",
														alignItems: "center",
														borderRadius: "16px",
														background: "#EEF1F4"

													}}><Icon icon="heartSelected" /></div>
												</div>
											</div>
										</div>)
										:
										(<div style={{ width: "33%", padding: "0 10px", marginBottom: "10px" }} key={category.id} onClick={() => selectCategory(category.id)}>
											<div style={{ background: "white", padding: "8px 15px", border: "1px solid transparent", borderRadius: "5px", alignItems: "center", }}>
												<h4 style={{ marginBottom: "10px", color: "#151F28", textAlign: "center" }}>{category.title}</h4>
												<img src={category.image} style={{ width: "100%", borderRadius: "5px", height: "94px" }} />
												<h5 style={{ color: "#151F28", textAlign: "center", marginTop: "10px", lineHeight: "14px" }}>{category.amount * category.price} USD</h5>
												<h5 style={{ color: "#151F28", textAlign: "center", lineHeight: "14px" }}>({category.amount} pieces)</h5>


												<div style={{ display: "flex", justifyContent: "flex-end" }} >
													<div style={{
														marginTop: "10px",
														display: "flex",
														width: "32px",
														height: "32px",
														justifyContent: "center",
														flexDirection: "column",
														alignItems: "center",
														borderRadius: "16px",
														background: "#EEF1F4"
													}}><Icon icon="heartUnselected" /></div>
												</div>



											</div>
										</div>)

								))
							}
							<div style={{ width: "33%", padding: "0 10px", display: "flex", flexDirection: "column" }} onClick={() => otherSelect()}>
								{
									(categories.length > 0) ?
										(<div style={{ background: "white", padding: "10px", border: "1px solid transparent", borderRadius: "5px", alignItems: "center", marginBottom: "15px" }}>
											<h4 style={{ marginBottom: "10px", color: "#151F28", textAlign: "center" }}>Other support</h4>
											<h5 style={{ color: "#151F28", textAlign: "center", marginTop: "10px", lineHeight: "14px" }}>{
												otherCategory
											} USD</h5>
											{
												(selectedCategory.indexOf(-1) !== -1) ? (
													<div style={{ display: "flex", justifyContent: "flex-end" }} >
														<div style={{
															marginTop: "10px",
															display: "flex",
															width: "32px",
															height: "32px",
															justifyContent: "center",
															flexDirection: "column",
															alignItems: "center",
															borderRadius: "16px",
															background: "#EEF1F4"

														}}><Icon icon="heartSelected" /></div>
													</div>) : (
													<div style={{ display: "flex", justifyContent: "flex-end" }} >
														<div style={{
															marginTop: "10px",
															display: "flex",
															width: "32px",
															height: "32px",
															justifyContent: "center",
															flexDirection: "column",
															alignItems: "center",
															borderRadius: "16px",
															background: "#EEF1F4"

														}}><Icon icon="heartUnselected" /></div>
													</div>
												)
											}
										</div>) : null
								}

							</div>
						</div>
						<div className="d-grid">

							{(type == "Cryptopunk") ? (
								<Button variant="primary" onClick={bidNFT}>
									Bid Cryptopunk
								</Button>)
								: (
									<Button variant="primary" onClick={bidNFT}>
										Bid NFT
									</Button>
								)}
						</div>
					</Form>
				</Modal.Body>

			</Modal>
			
		</>
	);
}
