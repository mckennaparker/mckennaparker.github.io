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
                <div className="blog-video">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        width="100%"
                        height="auto">
                        <source src="../blogs/gumballs.mp4" type="video/mp4" />
                    </video>
                </div>
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
                                <li>Select the right two rows of vertices and use soft transform with a radius of 0.75 to create the base mug shape.</li>
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
                                        <td className="right-column">Show/hide display options</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">C</td>
                                        <td className="right-column">Open the main radial menu</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">V</td>
                                        <td className="right-column">Open the radial menu with view controls</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Enter</td>
                                        <td className="right-column">Place geometry at origin</td>
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
                                        <td className="right-column">Return to the home view showing all objects</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Spacebar + G</td>
                                        <td className="right-column">Return to the home view showing selected objects</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Spacebar + H</td>
                                        <td className="right-column">Return to the home view showing the grid</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Spacebar + B</td>
                                        <td className="right-column">Display perspective, top, side, and bottom views</td>
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
                                        <td className="left-column">S + 5</td>
                                        <td className="right-column">Vertex Selection Tool</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Tab</td>
                                        <td className="right-column">Insert a node</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">E</td>
                                        <td className="right-column">Scale Tool</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">LMB Double Click</td>
                                        <td className="right-column">Select all geometry</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column no-border">RMB Click</td>
                                        <td className="right-column no-border">Insert a node at this connection</td>
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
                            <p>I didn't include the notes column in this table because all of these shortcuts require you to be in the Network View.</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="left-column table-header">Key(s)</th>
                                        <th className="right-column table-header">Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="left-column">I</td>
                                        <td className="right-column">Move up one level</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">RMB</td>
                                        <td className="right-column">Zoom</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">MMB</td>
                                        <td className="right-column">Pan</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">A + Click-Drag</td>
                                        <td className="right-column">Straighten out selected nodes</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column ">Alt + Drag</td>
                                        <td className="right-column">Copy selected node</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">P</td>
                                        <td className="right-column">Turn Parameter Pane on/off</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Z</td>
                                        <td className="right-column">Bring up Shape Palette</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">C</td>
                                        <td className="right-column">Bring up Color Palette</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Shift + P</td>
                                        <td className="right-column">Create a sticky note</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Y + LMB Click-Drag</td>
                                        <td className="right-column">Disconnect any line touched</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">J + LMB Click-Drag</td>
                                        <td className="right-column">Connect all the nodes touched</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column no-border">Alt + LMB Click</td>
                                        <td className="right-column no-border">Add an anchor point to the line</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="blog-section">
                        <h3>Create a Gumball Simulation</h3>
                        <img className="section-image" src="../blogs/gumballSim.png" alt="" />
                        <div className="blog-subsection">
                            <h4>Process</h4>
                            <p>The gumballs are created using just one sphere model that is scattered many times across the dimensions of a box with variation in color and scale applied to make it more interesting. The animation aspect of the scene is then done with an RBD Bullet Solver node.</p>
                            <ol>
                                <li>Create a sphere with a uniform scale of 0.4 units.</li>
                                <li>Create a box with dimensions 0.75 x 10 x 0.75 and offset it 3 units along the Y-axis using the Match Size node.</li>
                                <li>Use a Copy to Points node to copy the sphere to the vertices of the box.</li>
                                <li>Use a Scatter node to scatter as many gumballs as you want across the surface of the box.</li>
                                <li>Use the RBD Bullet Solver node to simulate the physics of the gumballs, setting the Ground Type parameter to Ground Plane.</li>
                                <li>Extract the cup geometry and route it to the RBD Bullet Solver node Collision Geometry input and update the Collision Shape parameter to Concave.</li>
                                <li>Update the Global Animation Options so that the End Frame is set to 72, then play the animation to cache it.</li>
                                <li>To save the animation, connect a File Cache node from the first output of the RBD Bullet Solver node and select Save to Disk.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="blog-section">
                        <h3>Layout, Lookdev, and Lighting</h3>
                        <img className="section-image" src="../blogs/cupRender.png" alt="" />
                        <div className="blog-subsection">
                            <h4>Process</h4>
                            <p>The rendering setup is done within the Solaris environment by importing and creating the necessary geometry, adding materials, and setting up the lighting.</p>
                            <ol>
                                <li>Switch the Houdini Desktop to Solaris from Build.</li>
                                <li>Import the cup geometry using a Scene Import node.</li>
                                <li>Create a ground plane using a Grid node, sizing it to fit the scene, and setting the V range to 0, -1.</li>
                                <li>Use a merge node to combine the geometries.</li>
                                <li>Apply materials to the ground and cup by adding a Quick Surface Material node for each.</li>
                                <li>Route these materials into each other and then into a Merge node with the geometry.</li>
                                <li>Connect the Merge output to a Material Linker node and use the Material Linker to assign the materials to their respective geometry.</li>
                                <li>Add a camera and adjust the view by locking the user view to the camera and moving around the scene.</li>
                                <li>Add two point lights and adjust their positions and intensities using the Shadow Placement Mode.</li>
                                <li>Preview the render by switching from Houdini VK to the Karma CPU or XPU render view.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="blog-section">
                        <h3>Texture the Ground</h3>
                        <img className="section-image" src="../blogs/groundTexture.png" alt="" />
                        <div className="blog-subsection">
                            <h4>Process</h4>
                            <p>The ground texturing is also done in the Solaris environment by adding a COP network to the ground material and adjusting the color, specular, and nprmal maps.</p>
                            <ol>
                                <li>Change the color of the ground Material node back to white.</li>
                                <li>Create a Color Map and then create a COP network.</li>
                                <li>Pin the scene view and then double click into the COP network.</li>
                                <li>Split the view left and right and add a Composite View in the right pane to see a 2D view of the texture.</li>
                                <li>Delete the UV Grid node and then add a Tile Pattern node, make it a French pattern, and route it into the first input of the base color.</li>
                                <li>Change the color by adding a Constant node, routing the constant output and the tiles output from the Tile Pattern node into a Multiply node, and then routing the blend output into the Base Color node input.</li>
                                <li>Change the UV scale under the Ground Material node to a higher resolution like ten by ten.</li>
                                <li>Create a Specular Color Map and Bump Normal Map and then delete the default pattern nodes that appear.</li>
                                <li>Route the tiles output of the Pattern node into the first input of the Specular Color node and Blur node.</li>
                                <li>Adjust thickness using the Divisions parameter under the Tile Pattern node.</li>
                                <li>If the ground texture does not update right away, click the Karma XPU Persp dropdown and select "Restart Render" to update it.</li>
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
                                        <td className="left-column">I</td>
                                        <td className="right-column">Move up one level</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">RMB</td>
                                        <td className="right-column">Zoom</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column no-border">Alt + LMB Click</td>
                                        <td className="right-column no-border">Add an anchor point to the line</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="blog-section">
                        <h3>Render the Gumballs</h3>
                        <img className="section-image" src="../blogs/gumballRender.png" alt="" />
                        <div className="blog-subsection">
                            <h4>Process</h4>
                            <p></p>
                            <ol>
                                <li></li>
                            </ol>
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