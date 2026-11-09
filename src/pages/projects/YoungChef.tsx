import './CaseStudy.css'
import './ProjectPage.css'

function YoungChef() {
    return (
        <div className="project-page">
            <div className="project-content content">
                <section className="project-header">
                    <div className="project-header-text">
                        <h3 className="young-chef-h3">Cut through the clutter of recipe hunting with</h3>
                        <h1 className="young-chef-h1">Young Chef</h1>
                    </div>
                    <div className="project-header-image">
                        <img src="./projects/youngChef.gif" alt="A GIF of the Young Chef app on an iPhone" />
                    </div>
                </section>
                <section className="project-overview">
                    <div className="overview-item">
                        <h3 className="young-chef-h3">Role</h3>
                        <p>Product Designer</p>
                    </div>
                    <div className="overview-item">
                        <h3 className="young-chef-h3">Timeline</h3>
                        <p>March - May 2026</p>
                    </div>
                    <div className="overview-item">
                        <h3 className="young-chef-h3">Team</h3>
                        <p>Just me</p>
                    </div>
                    <div className="overview-item">
                        <h3 className="young-chef-h3">Skills</h3>
                        <ul className="skill-list">
                            <li className="tag-chip">Figma</li>
                            <li className="tag-chip">User Research</li>
                            <li className="tag-chip">Usability Testing</li>
                            <li className="tag-chip">Prototyping</li>
                        </ul>
                    </div>
                </section>
                <section className="project-problem">
                    <h2 className="young-chef-h2">Problem</h2>
                    <p>As a college student without a meal plan for the first time, figuring out what to eat while balancing cost became overwhelming. I turned to social media to find cheap, simple recipes but my feed quickly became saturated with dozens of meal prep influencers. It was hard to sift through the clutter to find viable recipes.</p>
                </section>
                <section className="project-research">
                    <h2 className="young-chef-h2">Research & Insights</h2>
                    <div className="resarch-text">
                        <p>I interviewed three college students who recently moved out of university dorms. I also conducted a survey with thirteen responses from college students at various points in their degree about cooking habits and preferences. I synthesized the research into the following user stories:</p>
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
                    <h2 className="young-chef-h2">Prototyping</h2>
                    <p>Based on my research, I created wireframes representing a user flow that includes a user's saved recipes, grocery lists, and meal plans. Users have the ability to easily add recipe ingredients to a grocery list as well as create a meal plan from their saved recipes with insights into daily and weekly macronutrient counts.</p>
                    <div className="prototyping-image">
                        <img src="./projects/young-chef/wireframes.png" alt="A diagram of the wireframes" />
                    </div>
                </section>
                <section className="project-testing">
                    <h2 className="young-chef-h2">User Testing & Iteration</h2>
                    <div className="testing-section">
                        <div className="testing-section-text">
                            <h3 className="young-chef-h3">Navigation</h3>
                            <div className="problem-solution-pair">
                                <p className="problem"><b>Problem:</b> Navigation layout was confusing because the bottom left button is usually to return to home, not to add something.</p>
                                <p className="arrow">↓</p>
                                <p className="solution"><b>Solution:</b> Reordered the buttons in the footer so that the home page is in the bottom left corner and the add button is in the center.</p>
                            </div>
                            <div className="problem-solution-pair">
                                <p className="problem"><b>Problem:</b> The pop up screen for creating new recipes, lists, and plans was not intuitive and felt cluttered.</p>
                                <p className="arrow">↓</p>
                                <p className="solution"><b>Solution:</b> Changed the pop up screen to an animated overlay with circular buttons that match the icons of their respective features.</p>
                            </div>
                        </div>
                        <img src="./projects/young-chef/plusButton.png" alt="An image of the prototype with the new pop up screen" />
                    </div>
                    <div className="testing-section">
                        <div className="testing-section-text">
                            <h3 className="young-chef-h3">Meal Planning</h3>
                            <div className="problem-solution-pair">
                                <p className="problem"><b>Problem:</b> There was no way to see what exact day a user was planning meals for, which made it difficult to tell when a certain meal was planned for.</p>
                                <p className="arrow">↓</p>
                                <p className="solution"><b>Solution:</b> Added a calendar to the top of the meal planning screen that allows users to navigate between days and view their planned meals.</p>
                            </div>
                            <div className="problem-solution-pair">
                                <p className="problem"><b>Problem:</b> No information was given in the meal planning screen about the nutritional information of the meals, which was a key feature that users wanted to be able to track.</p>
                                <p className="arrow">↓</p>
                                <p className="solution"><b>Solution:</b> Added a nutritional information panel similar to that in the recipe view so that users can easily see whether they are hitting their goals.</p>
                            </div>
                        </div>
                        <img src="./projects/young-chef/calendar.png" alt="An image of the meal planning screen" />
                    </div>
                    <div className="testing-section">
                        <div className="testing-section-text">
                            <h3 className="young-chef-h3">Grocery Lists</h3>
                            <div className="problem-solution-pair">
                                <p className="problem"><b>Problem:</b> Users want a way to store and reuse their grocery lists, but there was no way to view previously created lists.</p>
                                <p className="arrow">↓</p>
                                <p className="solution"><b>Solution:</b> Added a screen with a list of all previously created grocery lists, which shows up when the user navigates to the grocery lists section.</p>
                            </div>
                        </div>
                        <img src="./projects/young-chef/groceryLists.png" alt="An image of the grocery lists screen" />
                    </div>
                </section>
                <section className="project-solution">
                    <h2 className="young-chef-h2">Solution</h2>
                    <p className="solution-text">In addition to the images shown above of the iterative process from wireframing to high-fidelity designs, a usable Figma prototype of the app is available by clicking on the gif below.</p>
                    <div className="solution-image">
                        <a href="https://www.figma.com/proto/bk2IySilY9b9LqIGj3CTNI/McKenna-Parker---Design?node-id=18-330&t=1HT23bCXaDwYgYAk-1" target="_blank" rel="noopener noreferrer">
                            <img src="./projects/young-chef/prototype.gif" alt="A prototype of the final designs" />
                        </a>
                    </div>
                    <h3 className="young-chef-h3">Desktop and Tablet Solutions</h3>
                    <p>Although the app is designed for mobile devices first, I also wanted users to be able to access their account via tablets and desktops as well. I picked these pages specifically to show off how the interfaces would differ when viewing the app on a landscape aspect ratio as opposed to the portrait aspect ratio of a mobile phone.</p>
                    <div className="desktop-solution-images">
                        <div className="desktop-solution-image">
                            <img src="./projects/young-chef/recipeDesktop.png" alt="An image of the recipe details page in the desktop version of the app" />
                        </div>
                        <div className="desktop-solution-image">
                            <img src="./projects/young-chef/mealPlanDesktop.png" alt="An image of the meal planning page in the desktop version of the app" />
                        </div>
                    </div>
                </section>
                <section className="project-retrospective">
                    <h2 className="young-chef-h2">Retrospective</h2>
                    <p>While I feel that I executed the project well and included all the key features of the user flow that I wanted to, there are a few areas where I would want to improve in future iterations.</p>
                    <ul className="project-ul">
                        <li><span>Allowing for user customization of recipe ingredients and instructions for different dietary needs</span></li>
                        <li><span>Adding a social aspect to the app where users can share recipes, grocery lists, and meal plans with friends</span></li>
                        <li><span>Improving on the visual appeal of the desktop versions, as well as adding more desktop version pages</span></li>
                        <li><span>Nailing the small details like the animated pop up screen, filtering, searching, etc. in the prototype</span></li>
                        <li><span>As a programmer, I'd love to implement the app with code to see the project through to completion</span></li>
                    </ul>
                </section>
            </div >
        </div >
    );
};

export default YoungChef;