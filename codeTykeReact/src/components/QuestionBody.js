import React from 'react';
import SelectionBox from './SelectionBox';
import Button from './Button';
import Modal from './Modal';

const QuestionBody = props => {
	const [showModal, setShowModal] = React.useState(false);
	const [answerSubmitResult, setAnswerSubmitResult] = React.useState({});
	const [checkboxStatus, setCheckboxStatus] = React.useState([
		false,
		false,
		false,
		false,
	]);
	const [buttonStatus, setButtonStatus] = React.useState('disabled');

	const checkAnswer = (id, answers) => {
		answers = answers.join(',');

		fetch('http://localhost:8080/checkanswer/' + id + '?answers=' + answers)
			.then(res => {
				return res.json();
			})
			.then(data => {
				props.setLoading(false);
				setAnswerSubmitResult(data);
			})
			.catch(err => {
				props.setLoading(false);
				console.log(err);
			});
	};

	const handleSubmit = event => {
		if (buttonStatus === 'disabled') console.log('nothing');
		else if (buttonStatus === 'affirmative') {
			setCheckboxStatus([false, false, false, false]);
			setAnswerSubmitResult({});
			props.getQuestion(props.currentQuestion.nextQuestionId);
		} else if (buttonStatus === '')
			checkAnswer(props.currentQuestion.id, checkboxStatus);
	};

	const showAdditionalInfo = () => {
		setShowModal(!showModal);
	};

	const selectAnswer = id => {
		let checkboxArray = [...checkboxStatus];
		checkboxArray[id] = !checkboxStatus[id];
		setCheckboxStatus(checkboxArray);
	};

	React.useEffect(() => {
		if (checkboxStatus.some(i => i === true)) setButtonStatus('');
		else setButtonStatus('disabled');
	}, [checkboxStatus]);

	React.useEffect(() => {
		let result = answerSubmitResult.result;
		if (result) setButtonStatus('affirmative');
		else if (result !== undefined) {
			setButtonStatus('incorrect');
			setTimeout(() => {
				setButtonStatus('disabled');
				setCheckboxStatus([false, false, false, false]);
				setAnswerSubmitResult({});
			}, 1000);
		}
	}, [answerSubmitResult]);

	let possibleAnswers = props.currentQuestion.possibleAnswers.map(
		(answer, index) => {
			let boxStatus = '';

			if (answerSubmitResult.result && checkboxStatus[index])
				boxStatus = 'affirmative';
			else if (answerSubmitResult.result === false && checkboxStatus[index])
				boxStatus = 'incorrect';
			else if (checkboxStatus[index]) boxStatus = 'selected';

			return (
				<SelectionBox
					boxStatus={boxStatus}
					id={index}
					key={index}
					answer={answer}
					onSelected={selectAnswer}
				/>
			);
		}
	);

	return (
		<>
			<div id="questionHeaderContainer">
				<div
					className="overlay"
					onClick={showAdditionalInfo}
					style={{ display: showModal ? 'block' : 'none' }}
				></div>
				<Modal
					showModal={showModal}
					setShowModal={setShowModal}
					content={props.currentQuestion.additionalInfo}
				/>
				<div id="questionHeader">
					<div className="title">{props.currentQuestion.title}</div>
					<span className="icon icon-info" onClick={showAdditionalInfo}></span>
				</div>

				<div id="questionSubHeader">{props.currentQuestion.additionalInfo}</div>
			</div>
			<div id="outerBox">
				<div className="flex-space-evenly">{possibleAnswers}</div>
				<div id="submitButtonContainer">
					<Button
						label={answerSubmitResult.result ? 'Next' : 'Submit'}
						status={buttonStatus}
						handleSubmit={handleSubmit}
						loading={props.loading}
					/>
				</div>
			</div>
		</>
	);
};

export default QuestionBody;
