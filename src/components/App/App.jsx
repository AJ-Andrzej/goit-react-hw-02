import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'
import { useState } from 'react'


export default function App() {
    const [feedbacks, setFeedbacks] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    })
    const totalFeedback = feedbacks.good + feedbacks.bad + feedbacks.neutral;
    const positive = Math.round((feedbacks.good / totalFeedback) * 100)

    const handleClick = (property) => {
        setFeedbacks({
            ...feedbacks,
            [property]: feedbacks[property] + 1,
        }
        )
   
    }
    const handelReset = () => {
        setFeedbacks(
            {
        good: 0,
        neutral: 0,
        bad: 0,
    }
        )

    }
    

            return (
            <>
                <Description />
                    <Options
                        total={totalFeedback}
                        handleClick={handleClick}
                        reset={handelReset} />
                    {totalFeedback >= 1 && <Feedback
                        feedbacks={feedbacks}
                        total={totalFeedback}
                        positive={positive} />}
                     {totalFeedback < 1 && <Notification/>}
            </>
        )
}