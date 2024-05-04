import css from './Options.module.css'

const Button = ({ children, onClick,}) => {
    return (
        <button className={css.button} onClick={onClick}>{children}</button>
    )
}
export default function Options({feedbacks, handelClick, reset, total}) {

    return (
        <div className={css.options}>
            <Button onClick={() => handelClick(feedbacks, "good", feedbacks.good)}>Good</Button>
            <Button onClick={() => handelClick(feedbacks, "neutral", feedbacks.neutral)}>Neutral</Button>
            <Button onClick={() => handelClick(feedbacks, "bad", feedbacks.bad)}>Bad</Button>
            {total >=1 && <Button onClick ={reset}>Reset</Button>}
            
        </div>
    )
}

