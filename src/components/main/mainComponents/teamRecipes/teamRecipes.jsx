import s from './teamRecipes.module.css'
import whisk from './../../../../assets/img/whisk.svg'
import arrowHor from './../../../../assets/img/svg/arrowHor.svg'


let TeamRecipes = (props) => {
    return (
        <section className={s.section}>
            <div className={s.content}>
                <div className={s.information}>
                    <div>
                        <img src={whisk} alt=""/>
                    </div>
                    <div className={s.title}>
                        {props.title}
                    </div>
                    <div className={s.text}>
                        {props.text}
                    </div>
                    <div className={s.readMore}>
                        <button>
                            <span>
                                READ MORE
                            </span>
                            <img src={arrowHor} alt=""/>
                        </button>
                    </div>
                </div>
                <div className={s.team}>
                    {props.team}
                </div>
            </div>
        </section>
    )
}

export default TeamRecipes