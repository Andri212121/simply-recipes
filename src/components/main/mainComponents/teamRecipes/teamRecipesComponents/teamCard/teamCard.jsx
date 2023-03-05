import s from './teamCard.module.css'

let TeamCard = (props) => {
    return (
        <div className={s.teamCard}>
            <img src={props.image} alt=""/>
            <div className={s.name}>
                            <span>
                                {props.name}
                            </span>
            </div>
            <div className={s.role}>
                            <span>
                                {props.role}
                            </span>
            </div>
        </div>
    )
}

export default TeamCard