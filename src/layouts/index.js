import React from "react";
import Navigation from '../components/Navigation/Navigation'
import GlobalStyle from '../assets/style/globalStyle'


const MainLayout = ({children}) => (
<>
<GlobalStyle />
 <Navigation />
 {children}
</>
  
)

export default MainLayout