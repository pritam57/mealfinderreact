import React from "react"


const Recipe = ({title, category,img}) => {
<div>
<p>{title}</p>
<p>{category}</p>
<img src={img} alt= "recipe"/>
</div>
}

export default Recipe;