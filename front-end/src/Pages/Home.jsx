import { useContext, useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Autenticação/validacao";
import { slide as Menu } from 'react-burger-menu'




const HomePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { logout, nomeUser } = useContext(AuthContext);

  const showSettings = (e)=> {
    e.preventDefault();
    
  }

  
  return (
    <div style={{ display: nomeUser() ? "" : "none" }} >

.
    .
    .
  }





    </div>
   
         

        

  )

}

export default HomePage;


/*


                <div className="dropdown"style={{  marginBottom: "5px" }} >
                  <button  className="btn btn-secondary dropdown-toggle btnMenu" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    CADASTROS GERAIS
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                     <li>
                                     
                                     </li>
                  </ul>
                </div>

                <div className="dropdown" style={{  marginBottom: "5px" }} >
                  <button className="btn btn-secondary dropdown-toggle btnMenu" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    PEÇAS
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  </ul>
                </div>

                <div className="dropdown" style={{  marginBottom: "5px" }} >
                  <button className="btn btn-secondary dropdown-toggle btnMenu" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    RADAR HDI
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  </ul>
                </div>

                <div className="dropdown" style={{  marginBottom: "5px" }} >
                  <button className="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    RANKING
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  </ul>
                </div>


          <li className="list-group-item">DOCUMENTOS</li>
          <li className="list-group-item">APLICATIVO</li>
          <li className="list-group-item">CONTATOS</li>
          <li className="list-group-item">SOBRE</li>


            <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>









    
            <DropdownButton id="" variant="secondary"title="PEÇAS   "  className="btnMenu">
              <Dropdown.Item >
                        </Dropdown.Item>              
              </DropdownButton>
          
             
              <DropdownButton id="dropdown-basic-button" variant="secondary"title="RADAR HDI"  className="btnMenu">
              <Dropdown.Item >
                        </Dropdown.Item>              
              </DropdownButton>

              <DropdownButton id="dropdown-basic-button" variant="secondary"title="RANKING"  className="btnMenu">
              <Dropdown.Item >
                        </Dropdown.Item>              
              </DropdownButton>

              <DropdownButton id="dropdown-basic-button" variant="secondary"title=""  className="btnMenu">
              <Dropdown.Item >
                        </Dropdown.Item>              
              </DropdownButton>

              <DropdownButton id="dropdown-basic-button" variant="secondary"title=""  className="btnMenu">
              <Dropdown.Item >
                        </Dropdown.Item>              
              </DropdownButton>
          
*/