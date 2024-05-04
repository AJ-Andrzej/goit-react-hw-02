import css from './Feedback.module.css'

export default function Feedback({ feedbacks, total, positive }) { 
    
if (total >=1) {
    return( <div className={css.feedback}>
            <p>
                Good: {feedbacks.good}
            </p>
             <p>
                Neutral: {feedbacks.neutral}
            </p>
             <p>
                Bad: {feedbacks.bad}
            </p>
             <p>
                Total: {total}
            </p>
             <p>
                Positive: {positive}%
            </p>
        </div>)
   
} else {
    return(<p className={css.feedback}> No feedback yet</p>)
    
}
        
}