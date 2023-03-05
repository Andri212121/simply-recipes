import s from './showcase.module.css'
import arrowHor from "../../../../assets/img/svg/arrowHor.svg";
import riverIcon from "../../../../assets/img/riverIcon.svg";

let Showcase = (props) => {
    return (
        <section className={s.section}>
            <div className={s.showcase} style={{backgroundImage: "url('"+props.image+"')"}}>
                <div className={s.card}>
                    <div className={s.cardContent}>
                        <fieldset>
                            <legend>
                                {props.cardLegend}
                            </legend>
                            <span className={s.cardTitle}>
                                {props.cardTitle}
                            </span>
                            <p>
                                {props.cardText}
                           </p>
                            <div className={s.showcaseLink}>
                                <span>
                                    GET THE RECIPE
                                </span>
                                <img src={arrowHor} alt=""/>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div className={s.river}>
                <div className={s.riverContent}>
                    <div className={s.riverIcon}>
                        <img src={riverIcon} alt="riverIcon"/>
                    </div>
                    <div className={s.riverTitle}>
                        <span>
                            The Microwave Power-Up
                        </span>
                        <svg width="33" height="19" viewBox="0 0 33 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M23.5007 1.55415L31.4035 9.45697C31.8884 9.94192 31.8884 10.7282 31.4035 11.2131L23.5007 19.116C23.0157 19.6009 22.2294 19.6009 21.7445 19.116C21.2595 18.631 21.2595 17.8447 21.7445 17.3598L27.5274 11.5769H0.367188L0.367188 9.09325H27.5274L21.7445 3.31033C21.2595 2.82537 21.2595 2.03911 21.7445 1.55415C22.2294 1.06919 23.0157 1.06919 23.5007 1.55415Z"
                                fill=""/>
                        </svg>
                    </div>
                    <div className={s.riverRecipesList}>
                        {props.recipesComponentList}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase