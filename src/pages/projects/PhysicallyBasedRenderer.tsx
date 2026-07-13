import './ProjectPage.css'
import Footer from '../../components/Footer'

function PhysicallyBasedRenderer() {
    return (
        <div className="project-page">
            <div className="project-content content">
                <div className="project-header">
                    <div className="project-info">
                        <h1>Physically Based Real-time Renderer</h1>
                        <p>A physically based real-time render engine that runs in real-time, created using C++ and OpenGL with custom GLSL shaders. The engine approximates the light transport integral, implements point lights as well as image-based lighting, and supports both normal and displacement mapping.</p>
                    </div>
                    <div className="project-img">
                        <img className="project-hero-img" src="../projects/pbr.png" />
                    </div>
                </div>
                <div className="">
                    <h3>Process</h3>
                    <ol>
                        <li>Cook-Torrance BSDF and Lambertian BSDF</li>
                        <li>Diffuse and Glossy Irradiance, Normal and Displacement Mapping</li>
                        <li>Deferred Rendering, Screen-Space Reflections, and Gaussian Blur</li>
                        <li>Ray Marching, Signed Distance Functions, andS Subsurface Scattering</li>
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PhysicallyBasedRenderer;