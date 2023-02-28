import s from './main.module.css'
import arrowHor from './../../assets/img/arrowHor.svg'
import riverIcon from './../../assets/img/riverIcon.svg'
import RecipeCard from "./mainComponents/recipeCard/recipeCard";
import microwave from './../../assets/img/recipes/SRE_MicrowavePowerup_LeadHorizontalBanner.png'
import wings from './../../assets/img/recipes/Simply-Recipes-Microwave-Wings.png'
import cake from './../../assets/img/recipes/Simply-Recipes_Microwave-Cake.png'
import serp_overhead from './../../assets/img/recipes/Simply-Recipes-Oyakodon-Serp-Overhead.png'
import arroz_verde from './../../assets/img/recipes/Simply-Recipes-Microwave-Arroz-Verde.png'
import banana_bread_chocolate from './../../assets/img/recipes/Simply-Recipes-Banana-Bread-Chocolate.png'
import shakshuka from './../../assets/img/recipes/Simply-Recipe-Microwave-Shakshuka.png'
import salad_dressing from './../../assets/img/recipes/Simply-Recipe-Microwave-Salad-Dressing.png'

let Main = () => {

    let recipes =
        [
            [microwave, wings, shakshuka, banana_bread_chocolate, serp_overhead, arroz_verde, salad_dressing, cake],
            ['TABLE TALK', 'VOICES', 'VOICES', 'VOICES', 'VOICES', 'VOICES', 'VOICES', 'VOICES'],
            ['The Microwave Power-Up', 'Microwave BBQ Chicken Wings', 'Microwave Shakshuka', 'Banana Bread Chocolate Chunk Mug Cake', 'Microwave Oyakodon (Japanese Chicken and Egg Rice Bowl)', 'Microwave Arroz Verde', 'This 2-Minute Salad Dressing Will Make You Feel Like You’re in a French Bistro', '3-Layer Cake In the Microwave'],
            [null, '23 mins', '30 mins', '5 mins', '19 mins', '23 mins', null, '40 mins']
        ]
    let recipesComponentList = []

    for(let i = 0; i < recipes[0].length; i++){
        recipesComponentList.push(
            <RecipeCard image={recipes[0][i]}
                        tag={recipes[1][i]}
                        underline={recipes[2][i]}
                        timer={recipes[3][i]}/>
        )
    }

    console.log(recipesComponentList)

    return (
        <section className={s.main}>
            <div className={s.showcase}>
                <div className={s.card}>
                    <div className={s.cardContent}>
                        <fieldset>
                            <legend>
                                VOICES
                            </legend>
                            <span className={s.cardTitle}>
                                As a Latchkey Kid, the Microwave Gave Me a Taste of Independence
                            </span>
                            <p>
                                The summer that writer Thao Thai turned nine, she stayed home alone, watching
                                television, reading "Sweet Valley High," and sliding frozen TV dinners into the
                                microwave. It was the closest she'd ever gotten to experience the American way of life.
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
                        {recipesComponentList}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Main