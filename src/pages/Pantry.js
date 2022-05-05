import React from "react";
import Layout from "../layout";
import StoredFoods from "../components/StoredFoods";

function Pantry() {
    return(
        <div id="PantryList">
            <Layout/>
            <StoredFoods/>
        </div>
    )
}

export default Pantry;