import React, {useState}from 'react'

const Scoreboard = () => {
    const [Scores, setScore] = useState(null)
    const [loading, setLoading] = useState(false)

    const SetscoreFunction = () => {
        setLoading(true)
        let Random = Math.floor(Math.random()*101)
        setTimeout(() => {
            setLoading(false)
            setScore(Random)
        }, 2000)
    }

    const Refresh = () => {
        setScore(null)
    }

    return (
        <>
            <div className='love'>
                <h2>💖Love Score-Board💖 </h2>
                <div className='inputs'>
                    <input type='text' placeholder='❤' />
                    <input type='text' placeholder='❤' />
                </div>
                <div className='btn'>
                    <button onClick={SetscoreFunction}>Generate-Score</button>
                </div>
                <i onClick={Refresh} className="fa-solid fa-arrows-rotate"></i>
                <p>{loading ? "Generate wait..." : null}</p>
                <h3 >{Scores !== null ? `Love-Score:${Scores}` : null}</h3>
            </div>
        </>
    )
}

export default Scoreboard