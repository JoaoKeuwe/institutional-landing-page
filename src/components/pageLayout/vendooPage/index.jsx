import GenericLayout from "../genericLayout";
import vendoo from '../../../assets/images/vendoo.svg';
import mockup from '../../../assets/images/mockup.png';


const VendooPage = () => {
    return (
        <GenericLayout
            imageCompany={mockup}
            background="rgba(104, 86, 201, 1)"
            image={vendoo}
            technologies1="React/Redux"
            technologies2="Firebase" 
            technologies3="Node.js/Ecpress" 
            technologies4="AWS" 
            content="Vendoo  is an e-commerce platform envisioned by a D.C.- based startup. We’ve built a Node.js application where users can cross-post their inventory onto multiple marketplaces such as eBay, Etsy, Poshmark, Mercari, Grailed, and Depop. Vendoo is an e-commerce platform envisioned by a D.C.- based startup. We’ve built a Node.js application where users can cross-post their inventory onto multiple marketplaces such as eBay, Etsy, Poshmark, Mercari, Grailed, and Depop." />
    )
}

export default VendooPage
