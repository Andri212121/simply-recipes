import s from './wideCard.module.css'
import timer from "../../../../../../assets/img/svg/timer.svg";
import star from "../../../../../../assets/img/star/star.svg";
import halfStar from "../../../../../../assets/img/star/halfStar.svg";
import inactiveStart from "../../../../../../assets/img/star/inactiveStar.svg";

let WideCard = (props) => {

    let stars = []
    let rate = props.rate
    for (let i = 0; i < 5; i++) {
        if (rate !== null) {
            if (rate >= 1) {
                stars.push(<img src={star} alt=""/>)
                rate = rate - 1
            } else if (rate >= 0.5) {
                stars.push(<img src={halfStar} alt=""/>)
                rate = rate - 0.5
            } else if (rate === 0) {
                stars.push(<img src={inactiveStart} alt=""/>)
            }
        }
    }

    return (
        <div className={s.card}>
            <div className={s.cardImg}>
                <img src={props.image} alt=""/>
            </div>
            <div className={s.content}>
                <div>
                    <div className={s.cardTag}>
                        {props.tag}
                    </div>
                    <div className={s.cardTitle}>
                        {props.title}
                    </div>
                </div>
                <div className={s.timeAndStar}>
                    <div className={s.timer}>
                        <img src={props.timer === null ? null : timer} alt=""/>
                        <span>
                                {props.timer}
                            </span>
                    </div>
                    <span>
                            {stars}
                        </span>
                </div>
            </div>
        </div>
    )
}

export default WideCard