import Link1 from "../component/proskills"
export default function skills(){
    return<>
    <div className="skills_main">
        <div>
            <h1> Skills</h1>
            <h4> Skills that are most important for web developers: HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, MySQL, Apache, Linux, and GitHub.</h4>
        </div>
        <div className="mainfocus">
        <div className="focus">
            <h4> My Foucus</h4>
            <h4>-----------</h4>
            <h4>UI/UX Design</h4>
            <h4> Web design</h4>
            <h4> Mobile App Design</h4>
        </div>
        <div className="inputHoppy" >
            <Link1 name="Html" />
            <Link1 name="Css" />
            <Link1 name="Java scribt" />
            <Link1 name="Physon" />
            <Link1 name="Flutter" />
            <Link1 name="React" />
            <Link1 name="PHP" />
           
           
        </div>
        
     
     </div>

    </div>
    </>
}