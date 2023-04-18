import styled from 'styled-components';
import Modal from './Modal';
import { useState } from 'react';
const Card = styled.div`
	margin-left: 8px;
	margin-bottom: 8px;
	flex-grow: 1;
	flex-shrink: 1;
	flex-basis: 300px;
	padding: 8px;
	cursor: pointer;
`;

const Img = styled.img`
	width: 100%;
	border-radius: 4px;
`;

const ImageCard = ({ imgData }) => {
	const { webformatURL, id , tags, largeImageURL } = imgData;
	console.log(imgData)
	const [modal, setModal] = useState(false);
	return (
		<>
		<Card >
			<Img key={id} src={webformatURL} onClick={() => {
				setModal(true);
			}}></Img>
		</Card>
		{ modal ? (
		<Modal setModal={setModal} tags={tags} webformatURL={webformatURL} largeImageURL={largeImageURL}></Modal>
		): (<></>
		
		)}

		</>
	);
};

export default ImageCard;
