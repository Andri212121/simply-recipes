import s from './cardsBlock.module.css'

let CardsBlock = (props) => {
    return (
        <div className={s.section}>
            <div className={s.container}>
                <div className={s.sectionTitle}>
                <span>
                    {props.title}
                </span>
                    <svg width="33" height="19" viewBox="0 0 33 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5007 1.55415L31.4035 9.45697C31.8884 9.94192 31.8884 10.7282 31.4035 11.2131L23.5007 19.116C23.0157 19.6009 22.2294 19.6009 21.7445 19.116C21.2595 18.631 21.2595 17.8447 21.7445 17.3598L27.5274 11.5769H0.367188L0.367188 9.09325H27.5274L21.7445 3.31033C21.2595 2.82537 21.2595 2.03911 21.7445 1.55415C22.2294 1.06919 23.0157 1.06919 23.5007 1.55415Z"/>
                    </svg>
                </div>
                <div className={s.grid}>
                    {props.wideRecipeCards}
                </div>
            </div>
        </div>
    )
}

export default CardsBlock