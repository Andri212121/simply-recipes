import s from './header.module.css'
import logo from './../../assets/img/logo.svg'
import arrow from './../../assets/img/arrow.svg'
import {NavLink} from "react-router-dom";

let Header = () => {
    return (
        <header className={s.header}>
            <div className={s.nav}>
                <div className={s.logo}>
                    <NavLink to="/"><img src={logo} alt=""/></NavLink>
                </div>
                <div className={s.navBar}>
                    <div className={s.navButton}>
                        <div className={s.navButtonContent}>
                            <li>RECIPES</li>
                            <img src={arrow} alt=""/>
                        </div>
                        <div className={s.dropdownContent}>
                            <NavLink to="#">Breakfast</NavLink>
                            <NavLink to="#">Lunch</NavLink>
                            <NavLink to="#">Dinner</NavLink>
                            <NavLink to="#">Dessert</NavLink>
                            <NavLink to="#">Drinks</NavLink>
                            <NavLink to="#">Snacks & Appetizers</NavLink>
                            <NavLink to="#">Holidays & Seasonal Recipes</NavLink>
                            <NavLink to="#">Recipes by Diet</NavLink>
                            <NavLink to="#">Recipes by Method</NavLink>
                            <NavLink to="#">Recipes by Ingredients</NavLink>
                            <NavLink to="#">Recipes by Time & Ease</NavLink>
                            <NavLink to="#">Recipes by Cuisine</NavLink>
                            <NavLink to="#" className={s.bold}> VIEW ALL</NavLink>
                        </div>
                    </div>
                    <div className={s.navButton}>
                        <div className={s.navButtonContent}>
                            <li>QUICK & EASY</li>
                            <img src={arrow} alt=""/>
                        </div>
                        <div className={s.dropdownContent}>
                            <NavLink to="#">Quick Dinners</NavLink>
                            <NavLink to="#">Easy & Healthy</NavLink>
                            <NavLink to="#">Quick Vegetarian</NavLink>
                            <NavLink to="#">Easy Pastas</NavLink>
                            <NavLink to="#">Easy Chicken</NavLink>
                            <NavLink to="#" className={s.bold}> VIEW ALL</NavLink>
                        </div>
                    </div>

                    <div className={s.navButton}>
                        <div className={s.navButtonContent}>
                            <li>IN THE KITCHEN</li>
                            <img src={arrow} alt=""/>
                        </div>
                        <div className={s.dropdownContent}>
                            <NavLink to="#">An A-Z Guide to Cooking Terms and Definitions</NavLink>
                            <NavLink to="#">Meal Plans</NavLink>
                            <NavLink to="#">Recipe Collections</NavLink>
                            <NavLink to="#">Tips & Techniques</NavLink>
                            <NavLink to="#">Ingredient Guides</NavLink>
                            <NavLink to="#">Cuisine Guides</NavLink>
                            <NavLink to="#" className={s.bold}> VIEW ALL</NavLink>
                        </div>
                    </div>

                    <div className={s.navButton}>
                        <div className={s.navButtonContent}>
                            <li>TABLE TALK</li>
                            <img src={arrow} alt=""/>
                        </div>
                        <div className={s.dropdownContent}>
                            <NavLink to="#">Most Recent</NavLink>
                            <NavLink to="#">News & Trends</NavLink>
                            <NavLink to="#">Voices</NavLink>
                            <NavLink to="#" className={s.bold}> VIEW ALL</NavLink>
                        </div>
                    </div>

                    <div className={s.navButton}>
                        <div className={s.navButtonContent}>
                            <li>HOLIDAYS & SEASONS</li>
                            <img src={arrow} alt=""/>
                        </div>
                        <div className={s.dropdownContent}>
                            <NavLink to="#">The Microwave Power-Up</NavLink>
                            <NavLink to="#">Celebrating Jollof Rice and Its Journey Across the Atlantic </NavLink>
                            <NavLink to="#">Vegan for Everyone</NavLink>
                            <NavLink to="#">Soup Recipes</NavLink>
                            <NavLink to="#" className={s.bold}> VIEW ALL</NavLink>
                        </div>
                    </div>

                    <div className={s.navButton}>
                        <div className={s.navButtonContent}>
                            <li>ABOUT US</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.saveAndSearch}>
                <div className={s.saveButton}>
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.9855 3.02938L11.6979 3.6973L12.4104 3.02938C13.2019 2.28726 13.8799 1.80376 14.5789 1.49791C15.269 1.19592 16.0384 1.04167 17.0452 1.04167C18.682 1.04167 19.9709 1.69531 20.8666 2.75298C21.7757 3.82635 22.3229 5.37159 22.3229 7.18595C22.3229 9.39625 21.2061 11.6498 19.2584 13.6933C17.3238 15.723 14.6403 17.4652 11.6979 18.6397C8.7556 17.4652 6.0721 15.723 4.1375 13.6933C2.18978 11.6498 1.07294 9.39625 1.07294 7.18595C1.07294 5.37159 1.62016 3.82635 2.52924 2.75298C3.42501 1.69531 4.71381 1.04167 6.35071 1.04167C7.35745 1.04167 8.12684 1.19592 8.81702 1.49791C9.51602 1.80376 10.1939 2.28726 10.9855 3.02938Z"
                            stroke="#D86D38"/>
                    </svg>
                </div>
                <div className={s.searchButton}>
                    <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.2195 16.5C5.85085 16.5 2.30933 13.0178 2.30933 8.72222C2.30933 4.42667 5.85085 0.944443 10.2195 0.944443C14.5882 0.944443 18.1297 4.42667 18.1297 8.72222C18.1297 10.5847 17.464 12.2942 16.3537 13.6333L22.0848 19.2676L20.9454 20.3889L15.2137 14.7541C13.8519 15.8456 12.1134 16.5 10.2195 16.5ZM10.2195 14.9127C13.6967 14.9127 16.5154 12.1411 16.5154 8.72222C16.5154 5.30332 13.6967 2.53174 10.2195 2.53174C6.74247 2.53174 3.9237 5.30332 3.9237 8.72222C3.9237 12.1411 6.74247 14.9127 10.2195 14.9127Z"
                            fill="#616161"/>
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Header