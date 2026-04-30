import "./ProgressBar.css";

const ProgressBar = ({ value, length = 400 }) => {

    return (
        <div className="progress-container" style={{ width: length }}>
            <div className="progress" style={{ width: (length * (value / 100) - 4) }} />
        </div>
    )
}

export default ProgressBar