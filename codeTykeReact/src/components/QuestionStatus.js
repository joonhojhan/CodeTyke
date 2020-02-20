import React from 'react';

const QuestionStatus = function(props) {
	const statusText = result => {
		if (result) return '✔ Correct';
		else if (result === undefined) return '';
		else {
			return 'X Try again';
		}
	};

	const statusStyles = status => {
		if (status === 'affirmative') return { color: '#68CE72' };
		else if (status === 'incorrect') return { color: '#EE8995' };
		return {};
	};

	return (
		<div className="questionStatus">
			{Object.keys(statusStyles(props.status)).length ? (
				<div className="questionStatusText" style={statusStyles(props.status)}>
					{statusText(props.result)}
				</div>
			) : null}
		</div>
	);
};

QuestionStatus.defaultProps = {
	status: '',
};

export default QuestionStatus;
