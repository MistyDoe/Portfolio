
import Banner from '../compStatic/Banner';
const TechStack = () => {

    return (
        <>
    
        <div className='Layout Layout__tech'>
            <div className='Content__Tech'>
            <div className='circle'>
                <h2>Languages</h2> 
                </div>
                <ul className='Content__Languages'>                  
                    <li><img src={require( "../Images/c-sharp.png")} title = 'C#' alt= "C#"></img></li>
                    <li><img src={require("../Images/javascript.png")} title = 'JavaScript' alt = "JS"></img></li>
                    <li><img src={require("../Images/python.png")} title= 'Python' alt= 'python'></img></li>
                    </ul>
                    </div>
                    <div className='Content__Tech'>
                    <div className='circle'>
                <h2>Frontend</h2>
                </div>
                <ul className='Content__Frontend'>
                    <li><img src= {require("../Images/react.png" )} title= 'React' alt = 'React'></img></li>
                    <li><img src= {require("../Images/css3.png" )} title= 'Css' alt = 'Css'></img></li>
                    <li> <img src = {require("../Images/html.png")} title= 'Html' alt = 'Html'></img></li>
                    </ul>
                </div>
                <div className='Content__Tech'>
                <div className='circle'>
                <h2 className='Title__Backend'>Backend</h2> 
                </div>
                <div></div>
                    <ul className='Content__Backend'>
                        <li><img src={require('../Images/asp.net.png')} title='Asp.Net' height = '50' width='50' alt= 'Asp.Net'></img></li>
                        <li><img src={require('../Images/ef.png')} title= 'Entity Core' width='60' height='40' alt= 'Entity Core'></img></li>
                        <li><img src={require('../Images/mysql.png')} title = 'MySql Server' alt= 'MySql Server'></img></li>
                        <li><img src={require('../Images/SkLearn.png')} title= 'SciKitLearn' height='50' width='50' alt= 'SkLearn'></img></li>
                        <li><img src={require('../Images/numpy.png')} title = 'NumPy' alt= 'NumPy'></img></li>
                        <li><img src={require('../Images/pandas.png')} title = 'Pandas' alt= 'Pandas'></img></li>
                        <li><img src={require('../Images/tensorflow.png')} title = 'TensorFlow' alt= 'Tensorflow'></img></li>
                        
                   
                    </ul>
                        
                    </div>

                    <div className='Content__Tech'>
                    <div className='circle'>
                <h2>Other</h2> 
                </div>
                    <ul className='Content__Other'>
                    <li><img src={require('../Images/github.png')} title= 'GitHub' height = '40' width='40' alt= 'GitHub'></img></li>
                    <li><img src={require('../Images/visualstudio.png')} title= 'Visual Studio' width='60' height='40' alt= 'Visual Studio'></img></li>
                    <li><img src={require('../Images/visualstudiocode.png')} title = 'Visual Studio Code' alt= 'Visual Studio Code'></img></li>
                    <li><img src={require('../Images/azure.png')} title = 'Azure' height = '40' width='40' alt= 'Azure'></img></li>
                    </ul>
                </div>
        
        </div>
        </>
    

    );
}

export default TechStack;