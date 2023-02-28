import s from './recipeCard.module.css'
import timer from '../../../../assets/img/timer.svg'

let RecipeCard = (props) => {
    return (
        <>
            <div className={s.recipeCard}>
                <div className={s.cardImg}>
                    <img src={props.image} alt=""/>
                </div>
                <div className={s.recipeCardContent}>
                    <div>
                        <div className={s.cardTag}>
                        <span>
                            {props.tag}
                        </span>
                        </div>
                        <div className={s.underline}>
                        <span>
                            {props.underline}
                        </span>
                        </div>
                    </div>
                    <div className={s.meta}>
                        <img src={props.timer === null ? null : timer} alt=""/>
                        <span>
                            {props.timer}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RecipeCard