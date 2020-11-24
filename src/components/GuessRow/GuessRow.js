import GuessPegs from "../GuessPegs/GuessPegs";
import GuessScore from "../GuessScore/GuessScore" 

const GuessRow = (props) => {
    return (
        <div className="component" id='guessrow'>
            GuessRow
            <GuessPegs />
            <GuessScore />
        </div>
    )
}

export default GuessRow;