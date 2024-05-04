import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import { useState } from 'react'


export default function App() {
    const [feedbacks, setFeedbacks] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    })
    const totalFeedback = feedbacks.good + feedbacks.bad + feedbacks.neutral;
    const positive = Math.round((feedbacks.good / totalFeedback) * 100)

    const handelClick = (dataObj, property, value) => {
        setFeedbacks({
            ...dataObj,
            [property]: value + 1,
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
                    <Options feedbacks={feedbacks} total={totalFeedback} handelClick={handelClick} reset={handelReset} />
                    <Feedback feedbacks={feedbacks} total={totalFeedback} positive={positive} />
            </>
        )
}