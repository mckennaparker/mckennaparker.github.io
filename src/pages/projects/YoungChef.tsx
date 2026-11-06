import './CaseStudy.css'
import './ProjectPage.css'

function YoungChef() {
    return (
        <div className="project-page">
            <div className="project-content content">
                <section className="project-header">
                    <div className="project-header-text">
                        <h3>Cut through the clutter of recipe hunting with</h3>
                        <h1>Young Chef</h1>
                    </div>
                    <div className="project-header-image">
                        <img src="./projects/youngChef.gif" alt="A GIF of the Young Chef app on an iPhone" />
                    </div>
                </section>
                <section className="project-overview">
                    <div className="overview-item first-item">
                        <h3>Role</h3>
                        <p>Product Designer</p>
                    </div>
                    <div className="overview-item second-item">
                        <h3>Timeline</h3>
                        <p>March - May 2026</p>
                    </div>
                    <div className="overview-item">
                        <h3>Skills</h3>
                        <ul className="skill-list">
                            <li className="tag-chip">UI/UX Design</li>
                            <li className="tag-chip">Figma</li>
                            <li className="tag-chip">User Research</li>
                            <li className="tag-chip">Prototyping</li>
                        </ul>
                    </div>
                </section>
                <section className="project-problem">
                    <h2>The Problem</h2>
                    <ul className="project-ul">
                        <li><span>Overwhelming amount of recipe content online</span></li>
                        <li><span>Saved recipes in social media collections get lost</span></li>
                        <li><span>Grocery lists repeat many items every shopping trip</span></li>
                        <li><span>Planning meals is time-consuming</span></li>
                        <li><span>Macros are difficult to track over time</span></li>
                    </ul>
                    <h2>The Solution</h2>
                    <p>Young Chef is a mobile app that allows users to...</p>
                    <ul className="project-ul">
                        <li><span>Directly import recipes they want to try</span></li>
                        <li><span>Create reusable, editable grocery lists from recipes or from scratch</span></li>
                        <li><span>Plan their meals per day and see nutritional information</span></li>
                    </ul>
                </section>
                <section className="project-research">
                    <h2>Research & Insights</h2>
                    <div className="resarch-text">
                        <p>I conducted user interviews with three friends who are all college students just recently learning to cook after moving out of university dorms. I also conducted a survey with thirteen responses from college students at various points in their degree about their cooking habits and preferences. I synthesized the research into the following insights:</p>
                        <ul className="project-ul">
                            <li><span>Users want a way to organize and manage their saved recipes for easy access</span></li>
                            <li><span>Users want to create and customize grocery lists based on their staples and recipes</span></li>
                            <li><span>Users want to save time and money when planning their meals</span></li>
                        </ul>
                    </div>
                    <div className="research-image">
                        <img src="./projects/young-chef/researchSynthesis.png" alt="A diagram of the research synthesis" />
                    </div>
                </section>
                <section className="project-prototyping">
                    <h2>Prototyping</h2>
                    <p>Based on the research insights, I created low-fidelity wireframes to begin visualizing the user interface. The user flow consisted of a few key screens to complete the core functionality that I identified through my research:</p>
                    <ul className="project-ul">
                        <li><span>Home screen with recipe feed and search</span></li>
                        <li><span>Recipe detail screen with nutritional information and the ability to add ingredients to a grocery list</span></li>
                        <li><span>Grocery list creation and editing screen with cost estimation based on a user's chosen store</span></li>
                        <li><span>Meal planning screen with meals for each day of the week</span></li>
                        <li><span>Profile screen with user preferences for dietary restrictions and nutritional goals</span></li>
                    </ul>
                    <div className="prototyping-image">
                        <img src="./projects/young-chef/wireframes.png" alt="A diagram of the wireframes" />
                    </div>
                </section>
                <section className="project-testing">
                    <h2>User Testing & Iteration</h2>
                    <p>In user testing, I observed users interacting with the wireframes and gathering feedback to inform further iterations. There were several key insights that emerged from the testing process:</p>
                    <div className="testing-footer">
                        <div className="testing-footer-text">
                            <h3>Navigation</h3>
                            <ul className="project-ul">
                                <li>
                                    <span className="problem"><span className="problem-label">Problem:</span> The ordering of the buttons in the footer was confusing because the bottom left is usually the home button, not the add button
                                        <ul className="project-ul">
                                            <li><span className="solution"><span className="solution-label">Solution:</span> Reorder the buttons in the footer so that the home page is in the bottom left corner and the add button is in the center</span></li>
                                        </ul>
                                    </span>
                                </li>
                                <li>
                                    <span className="problem"><span className="problem-label">Problem:</span> The pop up screen for creating new recipes, lists, and plans was not intuitive and felt cluttered.
                                        <ul className="project-ul">
                                            <li><span className="solution"><span className="solution-label">Solution:</span> Change the pop up screen to an animated overlay with circular buttons that match the icons of the respective features.</span></li>
                                        </ul>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <img src="./projects/young-chef/plusButton.png" alt="An image of the prototype with the new pop up screen" />
                    </div>
                    <div className="testing-meal-planning">
                        <div className="meal-planning-text">
                            <h3>Meal Planning</h3>
                            <ul className="project-ul">
                                <li>
                                    <span className="problem"><span className="problem-label">Problem:</span> There was no way to see what exact day a user was planning meals for, which made it difficult to tell when a certain meal was planned for.
                                        <ul className="project-ul">
                                            <li><span className="solution"><span className="solution-label">Solution:</span> Added a calendar to the top of the meal planning screen that allows users to navigate between days and view their planned meals.</span></li>
                                        </ul>
                                    </span>
                                </li>
                                <li>
                                    <span className="problem"><span className="problem-label">Problem:</span> No information was given in the meal planning screen about the nutritional information of the planned meals, which was a key feature that users wanted to be able to track.
                                        <ul className="project-ul">
                                            <li><span className="solution"><span className="solution-label">Solution:</span> Added a nutritional information panel similar to that in the recipe view so that users can easily see whether they are hitting their goals.</span></li>
                                        </ul>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <img src="./projects/young-chef/calendar.png" alt="An image of the meal planning screen" />
                    </div>
                    <div className="testing-grocery-lists">
                        <div className="grocery-lists-text">
                            <h3>Grocery Lists</h3>
                            <ul className="project-ul">
                                <li>
                                    <span className="problem"><span className="problem-label">Problem:</span> Users want a way to store and reuse their grocery lists, but there was no way to view previously created lists.
                                        <ul className="project-ul">
                                            <li><span className="solution"><span className="solution-label">Solution:</span> Added a screen with a list of all previously created grocery lists, which shows up when the user navigates to the grocery lists section.</span></li>
                                        </ul>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <img src="./projects/young-chef/groceryLists.png" alt="An image of the grocery lists screen" />
                    </div>
                </section>
                <section className="project-solution">
                    <h2>Designs</h2>
                    <p className="solution-text">In addition to the images shown above of the iterations from wireframes to high-fidelity designs, a usable prototype of the app is available for testing by clicking on the gif below..</p>
                    <div className="solution-image">
                        <a href="https://www.figma.com/proto/bk2IySilY9b9LqIGj3CTNI/McKenna-Parker---Design?node-id=18-330&t=1HT23bCXaDwYgYAk-1" target="_blank" rel="noopener noreferrer">
                            <img src="./projects/young-chef/prototype.gif" alt="A prototype of the final designs" />
                        </a>
                    </div>
                    <h3>Desktop Solutions</h3>
                    <ol className="project-ol">
                        <li>
                            <span><span className="solution-label">Recipe Details Page:</span> I chose to create a desktop version for the recipe details page in a desktop version because it provided one of the more interesting changes in organizing information as opposed to one of the list views like the grocery lists or the recipe listings.</span>
                            <div className="desktop-solution-image">
                                <img src="./projects/young-chef/recipeDesktop.png" alt="An image of the recipe details page in the desktop version of the app" />
                            </div>
                        </li>
                        <li>
                            <span><span className="solution-label">Meal Planning Page:</span> I also chose to create a desktop version for the meal planning page because it provided a challenge in how to organize the information for a more comprehensive view of the user's meal planning needs.</span>
                            <div className="desktop-solution-image">
                                <img src="./projects/young-chef/mealPlanDesktop.png" alt="An image of the meal planning page in the desktop version of the app" />
                            </div>
                        </li>
                    </ol>
                </section>
                <section className="project-retrospective">
                    <h2>Retrospective</h2>
                    <p>While I feel that I executed the project well and included all the key features of the user flow that I wanted to, there are a few areas where I would want to improve in future iterations.</p>
                    <ul className="project-ul">
                        <li><span>Allowing for user customization of recipe ingredients and instructions for different dietary needs</span></li>
                        <li><span>Adding a social aspect to the app where users can share recipes, grocery lists, and meal plans with friends</span></li>
                        <li><span>Improving on the visual appeal of the desktop versions, as well as adding more desktop version pages</span></li>
                        <li><span>Nailing the small details like the animated pop up screen, filtering, searching, etc. in the prototype</span></li>
                        <li><span>As a programmer, I'd love to implement the app with code to see the project through to completion</span></li>
                    </ul>
                </section>
            </div>
        </div >
    );
};

export default YoungChef;