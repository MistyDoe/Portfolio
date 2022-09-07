
import Banner from '../compStatic/Banner';
const TechStack = () => {

    return (
        <>
        <Banner/>
        <div className='Layout'>

            <div className='Content ContentTech'>
            <div className='circle'>
                <h2>Languages</h2> 
                </div>
                <ul className='Content__Languages'>                  
                    <li><img src={require( "../Images/c-sharp.png")} alt= "C#"></img></li>
                    <li><img src={require("../Images/javascript.png")} alt = "JS"></img></li>
                    <li><img src={require("../Images/python.png")}></img></li>
                    </ul>
                    </div>
                    <div className='Content'>
                    <div className='circle'>
                <h2>Frontend</h2> 
                </div>
                <ul className='Content__Frontend'></ul>
                    
                </div>
                <div className='Content'>
                <div className='circle'>
                <h2>Backend</h2> 
                </div>
                    <ul className='Content__Backend'></ul>
                        <li><image source= ""></image></li>
                        
                    </div>

                    <div className='Content'>
                    <div className='circle'>
                <h2>Other</h2> 
                </div>
                    <ul className='Content__Other'></ul>
                </div>
        
        </div>
        </>
    

    );
}

export default TechStack;