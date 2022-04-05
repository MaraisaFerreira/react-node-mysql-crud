import './styles/Modal.css';

import { FaPen, FaTrash } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

import uncheckedURL from '../assets/star-unchecked.svg';
import checkedURL from '../assets/star-checked.svg';

import axios from 'axios';
import { useState } from 'react';

export default function ({
	id,
	title,
	year,
	trademark,
	category,
	rating,
	alterVisibility,
}) {
	const [dialogVisibility, setDialogVisibility] = useState(false);

	const originalValues = {
		id,
		editTitle: title,
		editYear: year,
		editTrademark: trademark,
		editCategory: category,
		editRating: rating,
	};

	const [edt, setEdt] = useState(originalValues);

	const handleEdit = () => {
		setDialogVisibility(true);
		console.log('Edit');
	};

	const handleDelete = (id) => {
		alterVisibility(false);
		console.log(`http://localhost:3001/remove-game/${id}`);
		axios.delete(`http://localhost:3001/remove-game/${id}`);
	};

	const handleClose = () => {
		alterVisibility(false);
	};

	const handleChangeGame = (ev) => {
		setEdt((prevState) => ({
			...prevState,
			[ev.target.name]: ev.target.value,
		}));
		console.log(edt);
	};

	const handleRating = (value) => {
		setEdt((prevState) => ({ ...prevState, editRating: value }));
	};

	const handleCancel = () => {
		setDialogVisibility(false);
		setEdt(originalValues);
	};

	const handleSave = () => {
		if (!edt.editTitle || !edt.editYear || !edt.editTrademark) {
			alert('Name, Year and Trademark must be filled!');
			return;
		}

		const url = 'http://localhost:3001/update';
		axios.post(url, {
			id: edt.id,
			title: edt.editTitle,
			year: edt.editYear,
			trademark: edt.editTrademark,
			category: edt.editCategory || 'Undefined',
			rating: edt.editRating,
		});
	};

	return (
		<>
			{!dialogVisibility && (
				<div className='modal-container'>
					<div className='modal-content'>
						<h3>{edt.editTitle}</h3>
						<p>
							<span>Release Year:</span> {edt.editYear}
						</p>
						<p>
							<span>Trademark:</span> {edt.editTrademark}
						</p>
						<p>
							<span>Category</span>: {edt.editCategory}
						</p>
						<p>
							<span>Rating:</span> {edt.editRating} stars
						</p>
						<div className='opt-container'>
							<FaPen className='opt pen' onClick={handleEdit} />
							<FaTrash
								className='opt trash'
								onClick={(e) => handleDelete(id)}
							/>
							<GrClose className='opt close' onClick={handleClose} />
						</div>
					</div>
				</div>
			)}
			{dialogVisibility && (
				<div className='edit-page'>
					<div className='edit-container'>
						<h3>Edit Game</h3>
						<div className='edit-content'>
							<input
								type='text'
								name='editTitle'
								value={edt.editTitle}
								placeholder='Game Title'
								onChange={handleChangeGame}
							/>
							<input
								type='number'
								name='editYear'
								placeholder='Release Year'
								value={edt.editYear}
								onChange={handleChangeGame}
							/>
							<input
								type='text'
								name='editTrademark'
								placeholder='Trademark'
								value={edt.editTrademark}
								onChange={handleChangeGame}
							/>
							<input
								type='text'
								name='editCategory'
								placeholder='Category'
								value={edt.editCategory}
								onChange={handleChangeGame}
							/>

							<fieldset className='radio-container'>
								<legend> &nbsp; Rating: &nbsp; </legend>

								<input
									type='radio'
									name='editRating'
									id='e1'
									title='1'
									onChange={(e) => handleRating(1)}
								/>
								<label htmlFor='e1'>
									<img src={checkedURL} alt='1' />
								</label>

								<input
									type='radio'
									name='editRating'
									id='e2'
									title='2'
									onChange={(e) => handleRating(2)}
								/>
								<label htmlFor='e2'>
									{edt.editRating === 2 ||
									edt.editRating === 3 ||
									edt.editRating === 4 ||
									edt.editRating === 5 ? (
										<img src={checkedURL} alt='2' />
									) : (
										<img src={uncheckedURL} alt='2' />
									)}
								</label>

								<input
									type='radio'
									name='editRating'
									id='e3'
									title='3'
									onChange={(e) => handleRating(3)}
								/>
								<label htmlFor='e3'>
									{edt.editRating === 3 ||
									edt.editRating === 4 ||
									edt.editRating === 5 ? (
										<img src={checkedURL} alt='3' />
									) : (
										<img src={uncheckedURL} alt='3' />
									)}
								</label>

								<input
									type='radio'
									name='editRating'
									id='e4'
									title='4'
									onChange={(e) => handleRating(4)}
								/>
								<label htmlFor='e4'>
									{edt.editRating === 4 || edt.editRating === 5 ? (
										<img src={checkedURL} alt='4' />
									) : (
										<img src={uncheckedURL} alt='4' />
									)}
								</label>

								<input
									type='radio'
									name='editRating'
									id='e5'
									title='5'
									onChange={(e) => handleRating(5)}
								/>
								<label htmlFor='e5'>
									{edt.editRating === 5 ? (
										<img src={checkedURL} alt='5' />
									) : (
										<img src={uncheckedURL} alt='5' />
									)}
								</label>
							</fieldset>

							<div className='btn-edit'>
								<button onClick={(e) => handleCancel()}>Cancel</button>
								<button onClick={(e) => handleSave()}>Salvar</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
