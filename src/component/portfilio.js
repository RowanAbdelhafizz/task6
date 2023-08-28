import Link1 from "../component/portofiloskills"
import Link2 from "../component/portfilospecialcolor"

export default function portfilio(){
    return<>
    <div>
        <h1>
            
            <div className="portmain">
            <h2> Portfolio</h2>
            <div className="portofilocategories">
                <Link1 name="WEB DESIGN" />
                <Link2 name="MOBILE APPLICATION"  />
                <Link1 name="LOGO DESIGN" />
                </div>
                <div className="portofilocategories">
                <Link2 name="WEB APPLICATION DEVELPOING" />
                <Link1 name="MOBILE APPLIACTION DEVELPOING" />
                 <Link2 name="PWA DEVELPOING" />
                 </div>
            

            </div>
        </h1>
    </div>

    </>
}