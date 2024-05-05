import css from './Options.module.css'

const Button = ({ children, onClick,}) => {
    return (
        <button className={css.button} onClick={onClick}>{children}</button>
    )
}
export default function Options({handleClick, reset, total}) {

    return (
        <div className={css.options}>
            <Button onClick={() => handleClick("good")}>Good</Button>
            <Button onClick={() => handleClick("neutral")}>Neutral</Button>
            <Button onClick={() => handleClick("bad")}>Bad</Button>
            {total >=1 && <Button onClick ={reset}>Reset</Button>}
            
        </div>
    )
}

