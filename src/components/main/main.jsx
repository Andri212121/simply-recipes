import s from './main.module.css'
import RecipeCard from "./mainComponents/recipeCard/recipeCard";
import WideCard from "./mainComponents/cardBlock/cardsBlockComponents/wideRecipeCard/wideCard";
import CardsBlock from "./mainComponents/cardBlock/cardsBlock";
import TeamRecipes from "./mainComponents/teamRecipes/teamRecipes";
import Header from "../header/header";
import Showcase from "./mainComponents/showcase/showcase";
import TeamCard from "./mainComponents/teamRecipes/teamRecipesComponents/teamCard/teamCard";
import Footer from "../footer/footer";

let Main = () => {

    let recipesComponentList = [
        {
            image: 'https://www.simplyrecipes.com/thmb/Hk7b_hVpPkJiVDUzAMln747PqV8=/300x200/filters:max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__03__Lemon-Chicken-Pasta-LEAD-3-f4c917664c5044f19d69cae875fddbdc.jpg',
            tag: 'TABLE TALK',
            underline: 'The Microwave Power-Up',
            timer: null,
            rate: null
        },
        {
            image: 'https://www.simplyrecipes.com/thmb/PMRDXmT6APRlT7tAWUKidWOfJvY=/300x200/filters:max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Caprese-Stuffed-Shells-LEAD-2-99a06fe7efdb49639c64d3b33145854f.jpg',
            tag: 'VOICES',
            underline: 'Microwave BBQ Chicken Wings',
            timer: '23 mins',
            rate: 2.5
        },
        {
            image: 'https://www.simplyrecipes.com/thmb/MNkCsaeRVy1mXJKiO5IT_iHOz8c=/300x200/filters:max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Penne-alla-Vodka-LEAD-3b-0348c75992fe44e9ac7903b2349043af.jpg',
            tag: 'VOICES',
            underline: 'Microwave Shakshuka',
            timer: '30 mins',
            rate: 4
        },
        {
            image: 'https://www.simplyrecipes.com/thmb/hHNzrlKdq0MclDLAlcqJFl6Fk_A=/300x200/filters:max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__09__Pizza-Penne-Pasta-LEAD-HORIZONTAL-f358b359e83242159877f208d1d15be6.jpg',
            tag: 'VOICES',
            underline: 'Banana Bread Chocolate Chunk Mug Cake',
            timer: '5 mins',
            rate: 3.5
        },
        {
            image: 'https://www.simplyrecipes.com/thmb/rzEGViLpSX3wZgzLGgOZpq9yW9k=/300x200/filters:max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Spaghetti-Aglio-e-Olio-LEAD-4a-4d3531e19e61464a85f2dd4c6b387dc9.jpg',
            tag: 'VOICES',
            underline: 'Microwave Oyakodon (Japanese Chicken and Egg Rice Bowl)',
            timer: '19 mins',
            rate: 5
        },
        {
            image: 'https://www.simplyrecipes.com/thmb/1obVYpjIiuZLy2OopjjBKfFfvEw=/300x200/filters:max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Vegan-Cacio-Pepe-LEAD-01-3f2115f87f694d3fa455e33f3cb7d73f.jpg',
            tag: 'VOICES',
            underline: 'Microwave Arroz Verde',
            timer: '23 mins',
            rate: 5
        },
        {
            image: 'https://www.simplyrecipes.com/thmb/9mkpLQJ5Vw7YWdeOgZ2yy9tyUs0=/300x200/filters:max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__04__Pasta-Artichokes-Lemon-LEAD-HORIZONTAL-c88e40f29c6e446a8131963b00d41dea.jpg',
            tag: 'VOICES',
            underline: 'This 2-Minute Salad Dressing Will Make You Feel Like You’re in a French Bistro',
            timer: null,
            rate: 4.5
        },
        {
            image: 'https://www.simplyrecipes.com/thmb/4WETo_DlwQ1GLhtfJgHFfSrFuw8=/300x200/filters:max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__10__broccoli-rabe-pasta-sundried-horiz-a-1200-b28763f105164fadbfb8fefa2b693bf1.jpg',
            tag: 'VOICES',
            underline: '3-Layer Cake In the Microwave',
            timer: '40 mins',
            rate: 5
        }
    ].map(item =>
        <RecipeCard
            image={item.image}
            tag={item.tag}
            underline={item.underline}
            timer={item.timer}
            rate={item.rate}
        />)

    let history = [
        {
            tag: 'MICROWAVE',
            title: 'Microwave Strawberry Jam',
            timer: '20 mins',
            rate: '5',
            image: 'https://www.simplyrecipes.com/thmb/BR3FXYetFuE0xaTXWDKyqa0yqUc=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2015__07__microwave-strawberry-jam-horiz-a-2000-d359cfa1306a488aa0d4f23b512720db.jpg'
        },
        {
            tag: 'VOICES',
            title: 'Microwave shakshuka',
            timer: '30 mins',
            rate: null,
            image: 'https://www.simplyrecipes.com/thmb/-3hR8drGJ8a6oXdPBPVfYS4FK4A=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/Simply-Recipe-Microwave-Shakshuka-LEAD-4-ad7332bf30c04bbbb9a9c75f8d0a2153.jpg'
        },
        {
            tag: 'NEWS & TRENDS',
            title: 'The Best Indian Foods at Trader Joe\'s, According to My Indian Mother-in-Law',
            timer: null,
            rate: null,
            image: 'https://www.simplyrecipes.com/thmb/07dA6kZWQsp2Z5L_0Oz96yNiudU=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/SRE-MicrowavePowerup_FaveFrozenIndianMeals_Storefront_Opt1_Final-f00ba46cedd5430b857d72c9de02826b.jpg'
        }
    ].map(item =>
        <WideCard
            tag={item.tag}
            title={item.title}
            timer={item.timer}
            rate={item.rate}
            image={item.image}
        />)

    let team = [
        {
            image: require('./../../assets/img/team/HannahZimmerman.webp'),
            name: 'ARIEL KNUTSON',
            role: 'EDITORIAL DIRECTOR'
        },
        {
            image: require('../../assets/img/team/HeadShot.webp'),
            name: 'Devan Grimsrud',
            role: 'Contributing Writer'
        },
        {
            image: require('../../assets/img/team/JoeySkladanyHeadshotFINAL.webp'),
            name: 'Wanda Abraham',
            role: 'Visual Editor'
        },
        {
            image: require('../../assets/img/team/LauraManzanoHeadshot.webp'),
            name: 'Uyen Luu',
            role: 'Contributing Writer'
        },
        {
            image: require('../../assets/img/team/MarkBeahm.webp'),
            name: 'Marta Rivera',
            role: 'Contributing Writer'
        },
        {
            image: require('../../assets/img/team/MeredithSchwartz.webp'),
            name: 'Frank Tiu',
            role: 'Contributing Writer'
        },
        {
            image: require('../../assets/img/team/pinkhair-ArianeResnick.webp'),
            name: 'Sara Bir',
            role: 'Senior Editor, Content Library'
        },
        {
            image: require('../../assets/img/team/Sheela-23-SheelaPrakash.webp'),
            name: 'Annelies Zijderveld',
            role: 'Contributing Writer'
        },
        {
            image: require('../../assets/img/team/SRHeadshots-MollyFergus1.webp'),
            name: 'Georgia Freedman',
            role: 'Contributing Writer'
        },
        {
            image: require('../../assets/img/team/Thao_Thai.webp'),
            name: 'Emma Christensen',
            role: 'Editor-in-Chief'
        }
    ].map(item =>
        <TeamCard
            image={item.image}
            name={item.name}
            role={item.role}
        />
    )

    let news = [
        {
            tag: 'News & Trends',
            title: 'Is It Safe To Eat Sprouted Potatoes? Here’s What the Experts Say',
            timer: null,
            rate: null,
            image: 'https://www.simplyrecipes.com/thmb/TL18jwdklpEiTcYaqa_RQ8sZO7c=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/SR-Grocery-Story-LEAD-OPTION3-74470d3bdcbd416cb2b1333c8487b5aa.jpg'
        },
        {
            tag: 'News & Trends',
            title: 'The 5 Best Trader Joe’s Snacks Ever, According to a Food Editor',
            timer: null,
            rate: null,
            image: 'https://www.simplyrecipes.com/thmb/XS43lyWLlqIjImvikkZGE6pk_VE=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/SR-Grocery-Story-LEAD-01-2-f03f161724b9411bb99bc81fcd653446.jpg'
        },
        {
            tag: 'VOICES',
            title: 'Abi Balingit on Cheetos, Filipino Spaghetti, and the One Cookie You Need To Make From Her New Cookbook',
            timer: null,
            rate: null,
            image: 'https://www.simplyrecipes.com/thmb/XE_e9aIU7SXWJtoWK9yG4JrH9HM=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/SR-Cookbook-Feature-LEAD-OPTION2-f030529ba4fb408a941c6bb1590f4f3d.jpg'
        }
    ].map(item =>
        <WideCard
            tag={item.tag}
            title={item.title}
            timer={item.timer}
            rate={item.rate}
            image={item.image}
        />)

    let avocado = [
        {
            tag: 'Easy Lunches',
            title: 'Avocado Toasts with Pan-Seared Corn, Olives, and Queso Fresco',
            timer: '20 mins',
            rate: null,
            image: 'https://www.simplyrecipes.com/thmb/6f4OmklfVVbAfTFcRw4gwynJLrk=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__03__Mexican-Avocado-Toast-2-04f69c97adfa4aa7aa9a0742d0076a30.jpg'
        },
        {
            tag: 'Winter Salads',
            title: 'Grapefruit Avocado Salad',
            timer: '20 mins',
            rate: 5,
            image: 'https://www.simplyrecipes.com/thmb/A7nirz1vjg5bueSJvVXCAgEnAaU=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2015__02__grapefruit-avocado-salad-horiz-a-1600-eecae1f6c8d74d4ead940f360e21dec4.jpg'
        },
        {
            tag: 'Quick Dinners',
            title: 'Seared Tuna with Avocado',
            timer: '16 mins',
            rate: 5,
            image: 'https://www.simplyrecipes.com/thmb/E41CjZuXH1GhARoNpE71NFozVBg=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__03__seared-tuna-avocado-horiz-c2-1800-9d386a7e92bf40a0901f70ab63f3dd0a.jpg'
        }
    ].map(item =>
        <WideCard
            tag={item.tag}
            title={item.title}
            timer={item.timer}
            rate={item.rate}
            image={item.image}
        />)

    let all_staffed = [
        {
            tag: 'Snacks and Appetizers',
            title: 'Pupusas',
            timer: '50 mins',
            rate: 5,
            image: 'https://www.simplyrecipes.com/thmb/CVgdRnmxfg-mTEdHYH6v5RedcKc=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Pupusas-LEAD-4-d5aa9223ec4141cb8e853f6fe9339e1b.jpg'
        },
        {
            tag: 'Snacks and Appetizers',
            title: 'Guyanese Gojas',
            timer: '100 mins',
            rate: null,
            image: 'https://www.simplyrecipes.com/thmb/eUZ2LALoZDM-VJy7x9Wlb-mUgDE=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Guyanese-Gojas-LEAD-08-fbd00c02a30d46c2abad99435c228423.jpg'
        },
        {
            tag: 'Snacks and Appetizers',
            title: 'Crispy Shrimp and Chive Dumplings',
            timer: '65 mins',
            rate: null,
            image: 'https://www.simplyrecipes.com/thmb/cwYnZnLUpu3yBH1cgQSi3vC3QLw=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/Crispy-Shrimp-and-Chive-Dumplings-LEAD-02-96cece80fdb64bb894a1a19dda8c9e0a.jpg'
        }
    ].map(item =>
        <WideCard
            tag={item.tag}
            title={item.title}
            timer={item.timer}
            rate={item.rate}
            image={item.image}
        />)

    let pastry_party = [
        {
            tag: 'Snacks and Appetizers',
            title: 'Pupusas',
            timer: '50 mins',
            rate: 5,
            image: 'https://www.simplyrecipes.com/thmb/-XUeg4ENA--zXh316tX1-6NQqsM=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2009__06__apple-walnut-gorgonzola-turnover-horiz-a-1800-ab154a39603740a5926e56cdc951495f.jpg'
        },
        {
            tag: 'Pastries',
            title: 'Guyanese Gojas',
            timer: '55 mins',
            rate: 4.5,
            image: 'https://www.simplyrecipes.com/thmb/aLdrLg7Ir0q0AbXEoVjwT6d9v8A=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__12__swedish-tea-ring-horiz-a-1800-48eaeeaf40b4485dbfaedbb028b90a36.jpg'
        },
        {
            tag: 'Desserts',
            title: 'Crispy Shrimp and Chive Dumplings',
            timer: '60 mins',
            rate: 5,
            image: 'https://www.simplyrecipes.com/thmb/Sl_i2nO7elzNlvwZWiG9Yt1UN08=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/Simply-Recipes_Donuts_LEAD_3-051c0a53230b42678386029c72717a33.jpg'
        }
    ].map(item =>
        <WideCard
            tag={item.tag}
            title={item.title}
            timer={item.timer}
            rate={item.rate}
            image={item.image}
        />)

    let radiant_Radicchio = [
        {
            tag: 'Quick Vegetarian',
            title: 'Grilled Radicchio Salad',
            timer: '25 mins',
            rate: null,
            image: 'https://www.simplyrecipes.com/thmb/WGRJPQxwCoy6SPg4mFgyYACQemU=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__09__grilled-radicchio-salad-horiz-a-1600-2efe9ac069a0483692043e0b18cfb3b8.jpg'
        },
        {
            tag: 'Winter Salads',
            title: 'Guyanese Gojas',
            timer: '30 mins',
            rate: null,
            image: 'https://www.simplyrecipes.com/thmb/Ii-iHu7O_xo5JP3TglBtsuVgoYY=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__03__Radicchio-Citrus-Salad-LEAD-8-aee99566003941c7a8d7b43f592afb00.jpg'
        },
        {
            tag: 'Mixed Green Salads',
            title: 'Radicchio Salad with Citrus',
            timer: '18 mins',
            rate: 5,
            image: 'https://www.simplyrecipes.com/thmb/Mf7CeHNe8FqgoZwBS3LnI2_7oJ4=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__05__Salad-Greens-Jammy-Eggs-LEAD-1-d4b714542f8e400f80bb7f97ea7210a5.jpg'
        }
    ].map(item =>
        <WideCard
            tag={item.tag}
            title={item.title}
            timer={item.timer}
            rate={item.rate}
            image={item.image}
        />)

    return (<>
        <Header/>
        <Showcase
            image={'https://www.simplyrecipes.com/thmb/u1qVu694d_ztN6bD9qNtZfOCIqk=/1200x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Spicy-Cucumber-Noodles-LEAD-02-aa9993fc91f54ac88e1bf6675b4fb10a.jpg'}
            cardLegend={'VOICES'}
            cardTitle={'As a Latchkey Kid, the Microwave Gave Me a Taste of Independence'}
            cardText={'The summer that writer Thao Thai turned nine, she stayed home alone, watching television, reading "Sweet Valley High," and sliding frozen TV dinners into the microwave. It was the closest she\'d ever gotten to experience the American way of life.'}
            recipesComponentList={recipesComponentList}
        />
        <section className={s.history}>
            <CardsBlock wideRecipeCards={history}
                        title='Black History Month Features'
            />
            <TeamRecipes
                title={'The Simply Recipes Team'}
                text={'Simply Recipes is a trusted resource for home cooks with more than 3,000 tested recipes, guides, and meal plans, drawing over 15 million readers each month from around the world. We’re supported by a group of recipe developers, food writers, recipe and product testers, photographers, and other creative professionals.'}
                team={team}
            />
            <CardsBlock wideRecipeCards={news}
                        title='News & Trends'
            />
            <CardsBlock wideRecipeCards={avocado}
                        title='Avocado Aficionado'
            />
            <CardsBlock wideRecipeCards={all_staffed}
                        title='All Stuffed!'
            />
            <CardsBlock wideRecipeCards={pastry_party}
                        title='Pastry Party'
            />
            <CardsBlock wideRecipeCards={radiant_Radicchio}
                        title='Radiant Radicchio'
            />
        </section>
        <Footer/>
    </>)
}
export default Main