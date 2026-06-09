import './BlogPost.css'
import Footer from '../../components/Footer'

function HoudiniLearningLogFoundationsWelcome() {
    return (
        <div className="blog-post">
            <div className="blog-content content">
                <div className="blog-header">
                    <div className="meta-info">
                        <p>June 6, 2026 · 5 min read</p>
                    </div>
                    <h1>Houdini Learning Log: Foundations Welcome Course</h1>
                    <div className="author-info">
                        <img className="profile-image" src="../me.JPG" alt="A picture of McKenna Parker" />
                        <p>By McKenna Parker</p>
                    </div>
                </div>
                <img className="hero-image" src="../blogs/foundationsWelcome.png" alt="An image of a Houdini render with a red cup and metallic multicolor balls on a red tiled surface" />
                <div className="blog-sections">
                    <div className="blog-section">
                        <h3>Introduction</h3>
                        <p>The Houdini 21 Foundations Welcome course was created by Robert Magee as an onramp for beginner Houdini users. The course touches on many fundamentals of the software, including modeling, physics, texturing, lighting, and rendering. The course ends with a short tutorial on how users can take feedback and implement it easily by having a clean and organized project.</p>
                    </div>
                    <div className="blog-section">
                        <h3>Model a Cup</h3>
                        <img className="section-image" src="../blogs/cupModel.png" alt="" />
                        <div className="blog-subsection">
                            <h4>Process</h4>
                            <p>The main cup model is created using the basic geometry and polygon modeling tools within Houdini:</p>
                            <ol>
                                <li>Create a tube that has a larger radius at the top end and has six rows and fourteen columns.</li>
                                <li>Use polyfill tool with a quadrilateral grid to fill in the bottom of the cup.</li>
                                <li>Bring the cup up to floor level using a matchsize node with Y set to min and X and Z set to none.</li>
                                <li>Select the middle two rows of vertices and use soft transform with a radius of 0.75 to create the base mug shape.</li>
                                <li>Extrude the tube -0.1 and then select "Output Back", which may cause normals to be reversed. If it does reverse, the normals just use a reverse node to reset them to the correct direction.</li>
                                <li>Create a handle for the cup by selecting two faces on the side facing the negative Z axis and adding a polybridge with ten segments and both the source and destination depart along an explicit direction. Change handle thickness under the "Bridge" tab in parameters.</li>
                                <li>Subdivide the model to get more polygons to work with. Then output to a Null node and name it CUP_OUT.</li>
                            </ol>
                        </div>
                        <div className="blog-subsection">
                            <h4>Hotkeys & Shortcuts</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="left-column table-header">Key(s)</th>
                                        <th className="right-column table-header">Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="left-column">D</td>
                                        <td className="right-column">Display Options</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">C</td>
                                        <td className="right-column">Main (Custom) Radial Menu</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">V</td>
                                        <td className="right-column">View Radial Menu</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Enter</td>
                                        <td className="right-column">Place at Origin</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Space or Alt + LMB Click-Drag</td>
                                        <td className="right-column">Tumble</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Space or Alt + MMB Click-Drag</td>
                                        <td className="right-column">Pan</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Space or Alt + RMB Click-Drag</td>
                                        <td className="right-column">Dolly</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Space or Alt + MMB Scroll</td>
                                        <td className="right-column">Zoom</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Spacebar + A</td>
                                        <td className="right-column">Home All</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Spacebar + G</td>
                                        <td className="right-column">Home Selected</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Spacebar + H</td>
                                        <td className="right-column">Home Grid (if Construction Plane is on)</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Spacebar + B</td>
                                        <td className="right-column">Four View Layout</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">S</td>
                                        <td className="right-column">Selection Tool</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">S + 1</td>
                                        <td className="right-column">Object Selection Tool</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">S + 2</td>
                                        <td className="right-column">Point Selection Tool</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">S + 3</td>
                                        <td className="right-column">Edge Selection Tool</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">S + 4</td>
                                        <td className="right-column">Primitive Selection Tool</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column no-border">S + 5</td>
                                        <td className="right-column no-border">Vertex Selection Tool</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="blog-section">
                        <h3>Work with Nodes</h3>
                        <div className="blog-subsection">
                            <h4>Process</h4>
                            <p>This section of the course was really meant to get users comfortable working with Houdini's node-based system, so there wasn't much done to change the cup itself. One thing that was added is a switch node with two tubes of different sizes and colors so that users can change the end result quickly by switching the starting nodes. Another change was the matchsize node and color nodes were switched to show that order does not effect some nodes. Other than these changes to the node structure itself, there were just tips and tricks about how to stay organized when working with nodes.</p>
                        </div>
                        <div className="blog-subsection">
                            <h4>Hotkeys & Shortcuts</h4>
                        </div>
                    </div>
                    <div className="blog-section">
                        <h3>Create a Gumball Simulation</h3>
                        <div className="blog-subsection">
                            <h4>Process</h4>
                        </div>
                        <div className="blog-subsection">
                            <h4>Hotkeys & Shortcuts</h4>
                        </div>
                    </div>
                    <div className="blog-section">
                        <h3>Layout, Lookdev, and Lighting</h3>
                        <div className="blog-subsection">
                            <h4>Process</h4>
                        </div>
                        <div className="blog-subsection">
                            <h4>Hotkeys & Shortcuts</h4>
                        </div>
                    </div>
                    <div className="blog-section">
                        <h3>Texture the Ground</h3>
                        <div className="blog-subsection">
                            <h4>Process</h4>
                        </div>
                        <div className="blog-subsection">
                            <h4>Hotkeys & Shortcuts</h4>
                        </div>
                    </div>
                    <div className="blog-section">
                        <h3>Render the Gumballs</h3>
                        <div className="blog-subsection">
                            <h4>Process</h4>
                        </div>
                        <div className="blog-subsection">
                            <h4>Hotkeys & Shortcuts</h4>
                        </div>
                    </div>
                    <div className="blog-section">
                        <h3>Last Minute Changes</h3>
                        <div className="blog-subsection">
                            <h4>Process</h4>
                        </div>
                        <div className="blog-subsection">
                            <h4>Hotkeys & Shortcuts</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HoudiniLearningLogFoundationsWelcome;