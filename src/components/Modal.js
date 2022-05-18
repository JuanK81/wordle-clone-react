

const Modal = ({ isCorrect, turn, solution }) => {
    return (
        <div className="modal">
            {isCorrect && (
                <div className="modal_container">
                    <h2 className="modal_title win">You Win!</h2>
                    <p className="solution">{solution}</p>
                    <p>You found the solution in {turn} guesses.</p>
                </div>
            )}
            {!isCorrect && (
                <div className="modal_container fail">
                    <h2 className="modal_title">You Loose!</h2>
                    <p className="solution">{solution}</p>
                    <p>Better luck next time.</p>
                </div>
            )}
        </div>
    )
};

export default Modal;