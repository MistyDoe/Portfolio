const TechStack = () => {

    return (
        <>
        <section className="ContentBox TechStack">
        <header className="Title">
					<div className="Bubble">
						 Languages 
					</div>
				</header>
                        <ul className='ContentList'>                  
                            <li><img className="Icon" src={require( "../Images/c-sharp.png")} title = 'C#' alt= "C#"></img></li>
                            <li><img className="Icon" src={require("../Images/javascript.png")} title = 'JavaScript' alt = "JS"></img></li>
                            <li><img className="Icon" src={require("../Images/python.png")} title= 'Python' alt= 'python'></img></li>
                            </ul>
         </section>
         <sectio className="ContentBox TechStack">
         <header className="Title">
					<div className="Bubble">
						 Frontend 
					</div>
				</header>
                
                <ul className='ContentList'>
                    <li><img className="Icon" src= {require("../Images/react.png" )} title= 'React' alt = 'React'></img></li>
                    <li><img className="Icon" src= {require("../Images/css3.png" )} title= 'Css' alt = 'Css'></img></li>
                    <li> <img className="Icon" src = {require("../Images/html.png")} title= 'Html' alt = 'Html'></img></li>
                    </ul>
         </sectio>
          <section className="ContentBox TechStack">
                
          <header className="Title">
					<div className="Bubble">
						 Backend 
                         </div>
				</header>
               
                    <ul className='ContentList'>
                        <li><img className="Icon" src={require('../Images/asp.net.png')} title='Asp.Net' height = '50' width='50' alt= 'Asp.Net'></img></li>
                        <li><img className="Icon_W" src={require('../Images/ef.png')} title= 'Entity Core' width='60' height='40' alt= 'Entity Core'></img></li>
                        <li><img className="Icon_W" src={require('../Images/mysql.png')} title = 'MySql Server' alt= 'MySql Server'></img></li>
                        <li><img className="Icon_W" src={require('../Images/SkLearn.png')} title= 'SciKitLearn' height='50' width='50' alt= 'SkLearn'></img></li>
                        <li><img className="Icon" src={require('../Images/numpy.png')} title = 'NumPy' alt= 'NumPy'></img></li>
                        <li><img className="Icon" src={require('../Images/pandas.png')} title = 'Pandas' alt= 'Pandas'></img></li>
                        <li><img className="Icon" src={require('../Images/tensorflow.png')} title = 'TensorFlow' alt= 'Tensorflow'></img></li>                  
                    </ul>                      
                    
            </section>
            <section className="ContentBox TechStack">
            <header className="Title">
					<div className="Bubble">
						 Other 
					</div>
				</header>
                    <ul className='ContentList'>
                    <li><img className="Icon" src={require('../Images/github.png')} title= 'GitHub' height = '40' width='40' alt= 'GitHub'></img></li>
                    <li><img className="Icon" src={require('../Images/visualstudio.png')} title= 'Visual Studio' width='60' height='40' alt= 'Visual Studio'></img></li>
                    <li><img className="Icon" src={require('../Images/visualstudiocode.png')} title = 'Visual Studio Code' alt= 'Visual Studio Code'></img></li>
                    <li><img className="Icon" src={require('../Images/azure.png')} title = 'Azure' height = '40' width='40' alt= 'Azure'></img></li>
                    </ul>
              
                </section>      
        
        
        </>
    

    );
}

export default TechStack;